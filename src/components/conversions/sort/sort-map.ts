export enum SortOptions {
	alphanumeric = "alphanumeric",
	numericAscending = "numericAscending",
	numericDescending = "numericDescending",
	dateTimeAscending = "dateTimeAscending",
	dateTimeDescending = "dateTimeDescending",
}
export const SORT_MAP = {
	// should be alpha ascending and descending
	alphanumeric: SortOptions.alphanumeric,
	numericAscending: SortOptions.numericAscending,
	numericDescending: SortOptions.numericDescending,
	dateTimeAscending: SortOptions.dateTimeAscending,
	dateTimeDescending: SortOptions.dateTimeDescending,
} as const;
