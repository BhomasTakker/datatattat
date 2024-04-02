// @ts-nocheck / FIX ME
import { timeFormat } from "d3";
import { format } from "path";
import { UnknownObject } from "../types";

type NumberOptions = {
	key: string;
	dp?: number;
	integer?: boolean;
	// would you parse float?
};

type StringOptions = {
	key: string; // could be more?
	uppercase?: boolean;
	lowercase?: boolean;
	capitalise?: boolean;
	maxLength?: number;
	prefix?: string;
	postfix?: string;
	replace?: [string, string];
	trim?: boolean;
	trimStart?: number;
};

const _formatNumber = ({
	value,
	dp,
	integer = false,
}: Omit<NumberOptions, "key"> & { value: string | number | Date }) => {
	const formatValue = +value;

	if (integer) {
		return parseInt(`${formatValue}`);
	}

	if (dp) {
		return (Math.round(formatValue * 100) / 100).toFixed(dp);
	}

	return formatValue;
};

const formatNumber =
	({ key, ...args }: NumberOptions) =>
	(d: UnknownObject) => {
		return _formatNumber({ value: d[key] as number, ...args });
	};

const formatLabelNumber =
	({ ...args }: Omit<NumberOptions, "key">) =>
	(value: string | number | Date) => {
		return _formatNumber({ value, ...args });
	};

const _formatString = ({
	uppercase,
	lowercase,
	maxLength,
	replace,
	prefix = "",
	postfix = "",
	trim,
	trimStart,
	value = "",
}: Omit<StringOptions, "key"> & { value: string | number | Date }) => {
	let formatValue = value.toString();

	if (trim) {
		formatValue.trim();
	}

	if (replace) {
		// position one and two
		// replace vs replaceAll
		formatValue = formatValue.replaceAll(...replace);
	}

	if (uppercase) {
		// locales?
		formatValue = formatValue.toUpperCase();
	}

	if (lowercase) {
		formatValue = formatValue.toLowerCase();
	}

	if (maxLength) {
		formatValue = formatValue.slice(0, maxLength);
	}

	if (trimStart) {
		formatValue = formatValue.slice(trimStart);
	}
	//

	return `${prefix}${formatValue}${postfix}`;
};

const formatString =
	({ key, ...args }: StringOptions) =>
	(d: UnknownObject) => {
		return _formatString({ value: d[key] as string, ...args });
	};

const formatLabelString =
	({ ...args }: Omit<StringOptions, "key">) =>
	(value: string | number | Date) => {
		return _formatString({ value, ...args });
	};

type DateOptions = {
	key: string; // unused
	// value: string | number | Date;
	format?: string; // the %B %d, %Y
	// or provided like
	dayWeekMonth?: boolean;
};

const formatDate =
	({ key, ...args }: DateOptions) =>
	(d: UnknownObject) => {
		return new Date(d[key]);
	};
// we're not dealing with the bsame thing
// const formatLabelDate = ({ ...args }: Omit<DateOptions, "key">) =>
// (value: string | number | Date) => {
//   return _formatString({ value, ...args });
// };

const formatDateLabel = ({
	format,
	dayWeekMonth,
}: Omit<DateOptions, "key">) => {
	if (format) {
		return timeFormat(format);
	}

	if (dayWeekMonth) {
		timeFormat("%m%d%Y");
	}

	// this might be resulting in an error
	return (val: unknown) => val;
};

const formatCurrency = () => {};

export const formatMap = new Map<
	string,
	typeof formatNumber | typeof formatString | typeof formatDate
>([
	["number", formatNumber],
	["string", formatString],
	["date", formatDate],
]);

const labelFormatMap = new Map<
	string,
	typeof formatLabelNumber | typeof formatLabelString | typeof formatDateLabel
>([
	["number", formatLabelNumber],
	["string", formatLabelString],
	["date", formatDateLabel],
]);

type GetFormatter = {
	type: "number" | "string" | "date";
	key: string;
	options?: UnknownObject;
};

const noop =
	({ key }: { key: string }) =>
	(d: UnknownObject) =>
		d[key] as unknown;

const labelNoop = (val: unknown) => val;

export const getScaleFormatter = ({
	type,
	key,
	options = {},
}: GetFormatter) => {
	const formatFn = formatMap.get(type) || noop;
	return formatFn({ key, ...options });
};

export const getLabelFormatter = ({
	type,
	options = {},
}: Omit<GetFormatter, "key">) => {
	const formatFn = labelFormatMap.get(type) || labelNoop;
	return formatFn(options);
};
