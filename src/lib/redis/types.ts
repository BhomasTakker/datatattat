// Okay I dunno what would make good times but if we stick to a day
// We would really need the ability to change it
export enum RedisCacheTime {
	NO_CACHE = "NO:CACHE",
	SECONDS_10 = 10,
	SECONDS_30 = 30,
	MINUTE = 60,
	MINUTE_5 = 60 * 5,
	MINUTE_10 = 60 * 10,
	MINUTE_30 = 60 * 10,
	HOUR = 60 * 60,
	HOUR_2 = 60 * 60 * 2,
	HOUR_6 = 60 * 60 * 6,
	HOUR_12 = 60 * 60 * 12,
	DAY = 60 * 60 * 24,
	DAY_2 = 60 * 60 * 24 * 2,
	DAY_5 = 60 * 60 * 24 * 5,
	WEEK = 60 * 60 * 24 * 7,
	NO_DELETE = "NO:DELETE",
}

export const RedisCacheTimeMap = new Map([
	["no cache", RedisCacheTime.NO_CACHE],
	["10 seconds", RedisCacheTime.SECONDS_10],
	["30 seconds", RedisCacheTime.SECONDS_30],
	["1 minute", RedisCacheTime.MINUTE],
	["5 minutes", RedisCacheTime.MINUTE_5],
	["10 minutes", RedisCacheTime.MINUTE_10],
	["30 minutes", RedisCacheTime.MINUTE_30],
	["1 hour", RedisCacheTime.HOUR],
	["2 hours", RedisCacheTime.HOUR_2],
	["6 hours", RedisCacheTime.HOUR_6],
	["12 hours", RedisCacheTime.HOUR_12],
	["1 day", RedisCacheTime.DAY],
	["2 days", RedisCacheTime.DAY_2],
	["5 days", RedisCacheTime.DAY_5],
	["1 week", RedisCacheTime.WEEK],
	["no delete", RedisCacheTime.NO_DELETE],
]);

// You wouldn't just give access to these
export const RedisCacheTimeOptions = [
	"no cache",
	"10 seconds",
	"30 seconds",
	"1 minute",
	"5 minutes",
	"10 minutes",
	"30 minutes",
	"1 hour",
	"2 hours",
	"6 hours",
	"12 hours",
	"1 day",
	"2 days",
	"5 days",
	"1 week",
	"no delete",
];
