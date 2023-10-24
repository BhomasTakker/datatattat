import { Typography } from "@mui/material";

type TimeVariant = "age" | "string" | "locale" | "locale-date" | "locale-time";

export const Time = ({
	time,
	variant,
}: {
	time: Date | string | null;
	variant?: TimeVariant;
}) => {
	if (!time) {
		return <></>;
	}

	const date = new Date(time);
	const now = new Date(Date.now());
	// need return if ...
	switch (variant) {
		default:
		case "string":
			return <p>{date.toDateString()}</p>;
		case "locale":
			return <p>{date.toLocaleString()}</p>;
		case "locale-date":
			return <p>{date.toLocaleDateString()}</p>;
		case "locale-time":
			return <p>{date.toLocaleTimeString()}</p>;

		// This is ropey but works
		case "age":
			// @ts-ignore - whatever this is - not a number etc
			const diffTime = Math.abs(now - date);
			const diffSeconds = Math.floor(diffTime / 1000);
			const diffMinutes = Math.floor(diffTime / (1000 * 60));
			const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
			const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
			const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
			const diffRoughMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
			const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
			console.log(diffTime + " milliseconds");
			console.log(diffSeconds + " seconds");
			console.log(diffMinutes + " minutes");
			console.log(diffHours + " hours");
			console.log(diffDays + " days");
			console.log(diffWeeks + " weeks");
			console.log(diffRoughMonths + " months");
			console.log(diffYears + " years");
			// prob get days hours minutes secounds of something
			// minus each from now
			// show years if, months if, weeks if, days if > 0, hours > 0, minutes > 0, etc
			let diff;
			// Okay you would do better
			// minutes etc up to double so 2 hours should follow 120 minutes?
			// 2+ hours is better but?
			// Or you round when close
			switch (true) {
				case !!diffYears:
					diff = `${diffYears} years`;
					break;
				case !!diffRoughMonths:
					diff = `${diffRoughMonths} months`;
					break;
				case !!diffWeeks:
					diff = `${diffWeeks} weeks`;
					break;
				case !!diffDays:
					diff = `${diffDays} days`;
					break;
				case !!diffHours:
					diff = `${diffHours} hours`;
					break;
				case !!diffMinutes:
					diff = `${diffMinutes} minutes`;
					break;
				case !!diffSeconds:
					diff = `${diffSeconds} seconds`;
					break;
			}
			const str = `Published ${diff} ago`;
			return (
				<Typography variant="body2" color="text.secondary">
					{str}
				</Typography>
			);
	}
};
