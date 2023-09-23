import { returnBasicCreator } from "../../utils/creators";

const PREFIX = "https://rss.nytimes.com/services/xml/rss/nyt/";
const POSTFIX = ".xml";

const HOMEPAGE = `${PREFIX}HomePage${POSTFIX}`;
const WORLD = `${PREFIX}World${POSTFIX}`;
const US = `${PREFIX}US${POSTFIX}`;
const NEWYORK = `${PREFIX}NYRegion${POSTFIX}`;
const BUSINESS = `${PREFIX}Business${POSTFIX}`;
const TECH = `${PREFIX}Technology${POSTFIX}`;
const SPORTS = `${PREFIX}Sports${POSTFIX}`;
const SCIENCE = `${PREFIX}Science${POSTFIX}`;
const HEALTH = `${PREFIX}Health${POSTFIX}`;

export const NYTIMES_CREATORS = [
	["nytimes_homepage", returnBasicCreator(HOMEPAGE, {})],
	["nytimes_world", returnBasicCreator(WORLD, {})], // not required <- not an endpoint a selection
	["nytimes_world_headlines", returnBasicCreator(WORLD, {})],
	["nytimes_us", returnBasicCreator(US, {})],
	["nytimes_newyork", returnBasicCreator(NEWYORK, {})],
	["nytimes_business", returnBasicCreator(BUSINESS, {})],
	["nytimes_technology", returnBasicCreator(TECH, {})],
	["nytimes_sports", returnBasicCreator(SPORTS, {})],
	["nytimes_science", returnBasicCreator(SCIENCE, {})],
	["nytimes_health", returnBasicCreator(HEALTH, {})],
];
