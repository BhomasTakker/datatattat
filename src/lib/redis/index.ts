import Parser from "rss-parser";
import puppeteer from "puppeteer";
//https://www.youtube.com/watch?v=-5RTyEim384

import { getEnvVar } from "@/src/utils/env";
import { Redis } from "ioredis";
import { RedisCacheTime } from "./types";

export const redis = new Redis({
	host: getEnvVar("REDIS_HOST"),
	port: Number(getEnvVar("REDIS_PORT")),
	password: getEnvVar("REDIS_PASSWORD"),
});

//should be using generics to provide type
//redisApiFetch ?
//should be potentially in a seperate file
export const redisApiFetch = async (
	endpoint: URL,
	options: RequestInit,
	cacheExpire: RedisCacheTime = RedisCacheTime.DAY
) => {
	const cachedValue = await redis.get(endpoint.toString());

	//not sure we should be parsing?
	if (cachedValue) {
		console.log("RETURN CACHE");
		return JSON.parse(cachedValue);
	}

	const response = await fetch(endpoint, options);
	//Probably not here unless? / keep as is - we can specify return type or none
	const result = await response.json();

	console.log("SAVE CACHE");
	console.log({ result });

	/////////////////////////////////////////////////////////////////////////
	//redis.set('key', 100, 'ex', 10) // where ex is seconds / px for milliseconds
	// We need pass in a default for that api / fetch
	// We need pass in a value for important searches i.e. news - and user specification -> if paying or cookies on allow x amount refetch otherwise ...
	// we need a fallback default of say a day as forever doesn't cut it
	// We need to have user data / page data loaded via redis with a fast(er) update time
	//we need take or use default
	//some way of managing how long this will be cached for
	await redis.set(endpoint.toString(), JSON.stringify(result));
	//need to set cache expire to a provided value or use a default / not integrated into edit yet
	await redis.expire(endpoint.toString(), cacheExpire);

	return result;
	//new Response(result);
};

export const redisRssFetch = async (
	endpoint: URL,
	options: RequestInit,
	cacheExpire: RedisCacheTime = RedisCacheTime.DAY
) => {
	const parser = new Parser();
	const cachedValue = await redis.get(endpoint.toString());

	if (cachedValue) {
		console.log("RETURN CACHE");
		return JSON.parse(cachedValue);
	}

	console.log({ STRING: endpoint.toString() });
	// const response = await fetch(endpoint, options);
	const result = await parser.parseURL(endpoint.toString());
	//Probably not here unless? / keep as is - we can specify return type or none
	// const result = await response.json();

	await redis.set(endpoint.toString(), JSON.stringify(result));
	//need to set cache expire to a provided value or use a default / not integrated into edit yet
	await redis.expire(endpoint.toString(), cacheExpire);

	return result;
};

// We need a pupeteer 'queries' folder
// get from somewhere
// pass in id of get / what we getting
const getOGMetaData = () => {
	return {
		description: document.head
			?.querySelector('meta[property="og:description"]')
			?.getAttribute("content"),
		image: document.head
			?.querySelector('meta[property="og:image"]')
			?.getAttribute("content"),
		imageAlt: document.head
			?.querySelector('meta[property="og:imageAlt"]')
			?.getAttribute("content"),
		locale: document.head
			?.querySelector('meta[property="og:locale"]')
			?.getAttribute("content"),
		site_name: document.head
			?.querySelector('meta[property="og:site_name"]')
			?.getAttribute("content"),
		title: document.head
			?.querySelector('meta[property="og:title"]')
			?.getAttribute("content"),
		type: document.head
			?.querySelector('meta[property="og:type"]')
			?.getAttribute("content"),
		url: document.head
			?.querySelector('meta[property="og:url"]')
			?.getAttribute("content"),
	};
};

// Hosting on Vercel might be a problem
// Sollutions - jump through hoops
// Hosted micro service
export const redisMetaDataFetch = async (
	endpoint: string,
	options: RequestInit,
	cacheExpire: RedisCacheTime = RedisCacheTime.WEEK
) => {
	const cachedValue = await redis.get(endpoint);

	if (cachedValue) {
		console.log("RETURN META CACHE", { cachedValue });
		return JSON.parse(cachedValue);
	}

	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();

	await page.goto(endpoint);

	const metaOG = await page.evaluate(getOGMetaData);

	await browser.close();

	await redis.set(endpoint.toString(), JSON.stringify(metaOG));
	//need to set cache expire to a provided value or use a default / not integrated into edit yet
	await redis.expire(endpoint.toString(), cacheExpire);

	return metaOG;
};
