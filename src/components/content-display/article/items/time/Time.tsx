import { CSS } from "@/src/css/text";
import { Typography, TypographyProps } from "@mui/material";

type TimeVariant = "age" | "string" | "locale" | "locale-date" | "locale-time";

// probs utils
const pluralise = (unit: number, str: string) => {
	return unit > 1 ? `${unit} ${str}s` : `${unit} ${str}`;
};

const TimeText = ({ children, ...rest }: TypographyProps) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			data-testid="time"
			sx={{
				...CSS.maxLines({ maxLines: 1 }),
			}}
			{...rest}
		>
			{children}
		</Typography>
	);
};

// Too much going on
// Organise better
// Typography should be a 'time'? typog type
// Calculation - the switch - should be utilsy or module
export const Time = ({
	time = Date.now(),
	variant = "locale",
}: {
	time?: Date | string | number | null;
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
			return <TimeText>{date.toDateString()}</TimeText>;
		case "locale":
			return <TimeText>{date.toLocaleString()}</TimeText>;
		case "locale-date":
			return <TimeText>{date.toLocaleDateString()}</TimeText>;
		case "locale-time":
			return <TimeText>{date.toLocaleTimeString()}</TimeText>;

		// This is ropey but works
		// needs own file / function etc
		// time getAgo etc
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

			let diff;
			// Okay you would do better
			// minutes etc up to double so 2 hours should follow 120 minutes?
			// 2+ hours is better but?
			// Or you round when close
			switch (true) {
				// There's nothing for now!
				case !!diffYears:
					diff = pluralise(diffYears, "year");
					break;
				case !!diffRoughMonths:
					diff = pluralise(diffRoughMonths, "month");
					break;
				case !!diffWeeks:
					diff = pluralise(diffWeeks, "week");
					break;
				case !!diffDays:
					diff = pluralise(diffDays, "day");
					break;
				case !!diffHours:
					diff = pluralise(diffHours, "hour");
					break;
				case !!diffMinutes:
					diff = pluralise(diffMinutes, "minute");
					break;
				case !!diffSeconds:
					diff = pluralise(diffSeconds, "second");
					break;
			}
			// now or error!
			const str = diff ? `Published ${diff} ago` : "Published now!";
			return <TimeText>{str}</TimeText>;
	}
};
