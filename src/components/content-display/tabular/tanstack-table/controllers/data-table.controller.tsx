import { TanStackTable, TanStackTableProps } from "../tanstack-table";
import { getDataTableConfig } from "./data-table.controller.config";
import { destructureChildObjects } from "@/src/utils/object";

export type DataTableStyleVariants = "basic" | "striped" | "crossed";
export type DataTableConversionVariants = "basic" | "striped" | "crossed";
export type DataTableColumnVariants = "basic" | "striped" | "crossed";

// UnknownIndex type?
interface Index {
	[key: string]: unknown;
}
// We - at least at this stage can assume we will always need to flatten the given data?
const formatData = (list: Index[]) => {
	return list.map((item) => ({
		...destructureChildObjects(item),
	}));
};

// How to do this?
// auto/expand checkbox list
// show this / column title
// meaning edit would need to know shape of incoming data
// would be get data object shape and provide options
/////////////////////////////////////////////
// If I am an api - set context - this is my shape
// If I am an edit - check context and show shape when available
// This is absolutely required for edit.
/////////////////////////////////////////////
const createKeyColumns = (obj: Index) => {
	return Object.keys(obj).map((key) => ({
		accessorKey: key,
		header: key, // string or component
		// we need to amend team
		// cell: () => {}
		// This can happen
		// filterFn: 'fuzzy',
		// sortingFn: fuzzySort,
	}));
};

type DataSource = {
	data: Index[];
	other?: string;
	stuff?: string;
};

export interface DataTableProps
	extends Omit<TanStackTableProps, "data" | "columns"> {
	// TanstackTable only takes a data list
	// We take the full data object
	data: DataSource;

	styleVariant: DataTableStyleVariants;

	// We need something like this
	columnsVariant: DataTableColumnVariants;

	// pros and cons for something like this
	conversionVariant: DataTableConversionVariants;
}

// DON'T use tanstack for SimpleTable
// Create just a mui / vanilla table for that

// We need styled variants

// props, data, columns / width, height
export const DataTable = ({
	styleVariant = "basic",
	conversionVariant,
	columnsVariant,

	data: sourceObject,
	...rest
}: DataTableProps) => {
	// get config for style
	const config = getDataTableConfig(styleVariant);
	const { data } = sourceObject;

	// Format data / provide rule
	const formattedData = formatData(data);

	// Create columns / Keys
	const columns = createKeyColumns(formattedData[0]);
	// ALL data should be of a uniform structure
	// IF it is of a discernable type
	// We convert data as standard
	// We don't care what the data is
	// We care about the shape to get there
	// i.e.
	/* 
  {
    details: {},
    source: {},
    data:[],
  }*/

	// Should add width and height to config if provided
	// get function for columns
	// get HOC/function for conversion

	// WE shouldn't be expecting anything more than data being a list
	// IF you want a title etc then that should be the job of a wrapper?
	return (
		<TanStackTable
			data={formattedData}
			columns={columns}
			{...config}
			{...rest}
		/>
	);
};

type DataConversion = "none" | "flatten-object";

type DataConversionProps = {
	// Should be generic
	Component: any;
	conversion: DataConversion;
	data: any;
	// Not okay but
} & any;

const DataConversion = ({
	Component,
	conversion,
	data,
	...props
}: DataConversionProps) => {
	const newData = { ...data };
	return <Component data={newData} {...props} />;
};

// Would need flatten object in array etc - think
const TryMe = () => {
	return (
		<DataConversion
			Component={DataTable}
			conversion="flatten-object"
			data={{}}
			stuffHere={[1, 2, 3, 4, 5]}
		/>
	);
};
