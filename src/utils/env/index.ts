// env types?
enum NODE_ENV {
	PRODUCTION = "production",
	DEVELOPMENT = "development",
}
//Could add logger
//error on unfind
//get dev if dev - etc
export const getEnvVar = (id: string) => process.env[id];

// These look like they don't work at all...
export const isProduction = () => {
	const env = getEnvVar("NODE_ENV");
	return env === NODE_ENV.PRODUCTION;
};

export const isDevelopment = () => {
	const env = getEnvVar("NODE_ENV");
	return env === NODE_ENV.DEVELOPMENT;
};
