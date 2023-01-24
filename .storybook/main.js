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
			alias: {
				...config.resolve.alias,
				"@/styles": path.resolve(__dirname, "../styles"),
				"@/models": path.resolve(__dirname, "../models"),
				"@/src": path.resolve(__dirname, "../src"),

				"@/components": path.resolve(__dirname, "../src/components"),
				"@/lib": path.resolve(__dirname, "../lib"),
				"@/store": path.resolve(__dirname, "../store"),
				"@/queries": path.resolve(__dirname, "../queries"),
				"@/hoc": path.resolve(__dirname, "../hoc"),
				"@/hooks": path.resolve(__dirname, "../hooks"),
				"@/head": path.resolve(__dirname, "../head"),
				"@/types": path.resolve(__dirname, "../types"),
				"@/pages": path.resolve(__dirname, "../pages"),
			},
		};

		// Return the altered config
		return config;
	},
};
