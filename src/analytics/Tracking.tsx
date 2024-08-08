import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const Tracking = () => {
	return (
		<>
			<Analytics />
			<SpeedInsights />
		</>
	);
};
