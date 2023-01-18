//Need A11y to work - look into this properly

const path = require("path");
module.exports = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		// For NextAuth
		"@tomfreudenberg/next-auth-mock/storybook",
		// "@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	core: {
		builder: "webpack5",
	},
	//This was what I needed to get storybook running again ...
	//https://stackoverflow.com/questions/71158775/storybook-couldnt-resolve-fs
	webpackFinal: async (config, { configType }) => {
		config.resolve = {
			...config.resolve,
			fallback: {
				...(config.resolve || {}).fallback,
				fs: false,
				stream: false,
				os: false,
			},
		};

		// Return the altered config
		return config;
	},
};
