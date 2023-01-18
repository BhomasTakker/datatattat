// import { withA11y } from "@storybook/addon-a11y";

import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/lib/i18n/i18n";

i18n;
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withI18next = (Story) => {
	return (
		// This catches the suspense from components not yet ready (still loading translations)
		// Alternative: set useSuspense to false on i18next.options.react when initializing i18next
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};

export const decorators = [withI18next];
