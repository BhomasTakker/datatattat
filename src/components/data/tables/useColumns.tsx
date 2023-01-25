import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";

//Really just a 'helper' for TanTable (should call useTanTableColumns)

const columnHelper = createColumnHelper<any>();

export function useColumns(initialColumnHeaders: any[]) {
	const [columns, setColumns] = useState<ColumnDef<any, any>[]>([]);

	useEffect(() => {
		const cols = initialColumnHeaders.map((item, i) =>
			columnHelper.accessor(item, {
				cell: (info) => <>{info.getValue()}</>, //we can wrap in a given component
				footer: (info) => item, // understand what info actually is and how exactly this works
			})
		);
		setColumns(cols);
	}, [initialColumnHeaders]);

	//Pass function to update column visibility
	return {
		columns,
	};
}
