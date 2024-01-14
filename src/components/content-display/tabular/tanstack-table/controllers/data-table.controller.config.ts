import { TanStackTableProps } from "../tanstack-table";
import { Basic } from "./basic.config";
import { DataTableStyleVariants } from "./data-table.controller";

const configMap = new Map<string, Omit<TanStackTableProps, "data" | "columns">>(
	[
		["basic", Basic],
		["striped", Basic],
		["crossed", Basic],
	]
);
export const getDataTableConfig = (variant: DataTableStyleVariants) => {
	// // console.log("hello", { variant, viewport });
	return configMap.get(`${variant}`);
};
