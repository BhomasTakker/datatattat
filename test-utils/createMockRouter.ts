import { NextRouter } from "next/router";

//https://www.youtube.com/watch?v=uF2lqBluQV8
export function createMockRouter(router: Partial<NextRouter>) {
	return {
		basePath: "",
		pathName: "",
		route: "/",
		query: {},
		asPath: "/",
		back: jest.fn(),
		beforePopState: jest.fn(),
		prefetch: jest.fn(),
		push: jest.fn(),
		reload: jest.fn(),
		replace: jest.fn(),
		events: {
			on: jest.fn(),
			off: jest.fn(),
			emit: jest.fn(),
		},

		isFallback: false,
		isLocaleDomain: false,
		isReady: true,
		defaultLocale: "en",
		domainLocales: [],
		isPreview: false,

		...router,
	};
}
