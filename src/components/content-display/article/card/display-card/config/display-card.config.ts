import {
	extraLargeRow,
	extraLargeRowReverse,
	largeRow,
	largeRowReverse,
	mediumLargeRow,
	mediumLargeRowReverse,
	mediumRow,
	mediumRowReverse,
	smallRow,
	smallRowReverse,
} from "./row.config";
import {
	extraLargeColumn,
	extraLargeColumnReverse,
	extraSmallColumn,
	extraSmallColumnReverse,
	largeColumn,
	largeColumnReverse,
	mediumColumn,
	mediumColumnReverse,
	smallColumn,
	smallColumnReverse,
} from "./column.config";
import {
	compact1line,
	compact2line,
	compact3line,
	compact5line,
	compactColumn,
} from "./compact.config";

export type DisplayCardVariant =
	| "extra-large-row"
	| "extra-large-row-reverse"
	| "large-row"
	| "large-row-reverse"
	| "medium-row"
	| "medium-row-reverse"
	| "medium-large-row"
	| "medium-large-row-reverse"
	| "small-row"
	| "small-row-reverse"
	| "extra-large-column"
	| "extra-large-column-reverse"
	| "large-column"
	| "large-column-reverse"
	| "medium-column"
	| "medium-column-reverse"
	| "small-column"
	| "small-column-reverse"
	| "extra-small-column"
	| "extra-small-column-reverse"
	| "compact-1-line"
	| "compact-2-line"
	| "compact-3-line"
	| "compact-5-line"
	| "compact-column";

export const getConfig = (variant: DisplayCardVariant) => {
	switch (variant) {
		case "extra-large-row":
			return extraLargeRow;
		case "extra-large-row-reverse":
			return extraLargeRowReverse;
		case "large-row":
			return largeRow;
		case "large-row-reverse":
			return largeRowReverse;
		case "medium-row":
			return mediumRow;
		case "medium-row-reverse":
			return mediumRowReverse;
		case "medium-large-row":
			return mediumLargeRow;
		case "medium-large-row-reverse":
			return mediumLargeRowReverse;
		case "small-row":
			return smallRow;
		case "small-row-reverse":
			return smallRowReverse;

		case "extra-large-column":
			return extraLargeColumn;
		case "extra-large-column-reverse":
			return extraLargeColumnReverse;
		case "large-column":
			return largeColumn;
		case "large-column-reverse":
			return largeColumnReverse;
		case "medium-column":
			return mediumColumn;
		case "medium-column-reverse":
			return mediumColumnReverse;

		case "small-column":
			return smallColumn;
		case "small-column-reverse":
			return smallColumnReverse;
		case "extra-small-column":
			return extraSmallColumn;
		case "extra-small-column-reverse":
			return extraSmallColumnReverse;
		// Should have with description
		// Or just no image on the rest?
		case "compact-1-line":
			return compact1line;
		case "compact-2-line":
			return compact2line;
		case "compact-3-line":
			return compact3line;
		case "compact-5-line":
			return compact5line;
		case "compact-column":
			return compactColumn;
	}
};
