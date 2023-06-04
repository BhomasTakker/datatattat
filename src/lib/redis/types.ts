// Okay I dunno what would make good times but if we stick to a day
// We would really need the ability to change it
export enum RedisCacheTime {
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
}
