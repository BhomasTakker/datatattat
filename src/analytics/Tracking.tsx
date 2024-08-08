// For next version < 13.3
// versions > 13.3 import { SpeedInsights } from '@vercel/speed-insights/next';
// https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export const Tracking = () => {
	return (
		<>
			<Analytics />
			<SpeedInsights />
		</>
	);
};
