import jsdom from "jsdom";
import puppeteer from "puppeteer";

const getOGMetaDataFromHTML = (document: Document) => {
	return {
		// or use description
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
		// or use title
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
/** Fetch Open Graph meta data from src via html query */
export const fetchMetaFromHTML = async (
	endpoint: string,
	options: RequestInit
) => {
	const { JSDOM } = jsdom;
	const response = await fetch(endpoint, options);
	//Probably not here unless? / keep as is - we can specify return type or none
	const result = await response.text();
	const dom = new JSDOM(result);
	return getOGMetaDataFromHTML(dom.window.document);
};

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

/** Fetch Open Graph meta data from src via puppeteer <- don't do this! */
export const fetchMetaFromPuppeteer = async (
	endpoint: string,
	options: RequestInit
) => {
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();
	await page.goto(endpoint);

	await browser.close();
	return await page.evaluate(getOGMetaData);
};
