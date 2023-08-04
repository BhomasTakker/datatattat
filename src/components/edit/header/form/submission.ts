import { saveHeader } from "@/src/queries/header/save-header";
import type { ObjectId } from "mongoose";
import type { FieldValues } from "react-hook-form";

type NavItem = {
	label: string;
	route: string;
};

const HOME = "/";

// really create/form/etc NavData
const getNavData = (nav: NavItem[], page: string) => {
	return nav.map((item: NavItem) => {
		//////////////////////////////////////////////
		// HACK
		// if homepage - probably do something better
		// This is where the error is - I think
		// can't be - symptom not cause looksee currentPage set
		// ERROR: prefix /
		///////////////////////////////////////////////
		const route = page !== HOME ? `${page}/${item.route}` : `/${item.route}`;
		return {
			label: item.label,
			route,
		};
	});
};

export const submitHeader = async (
	id: ObjectId,
	data: FieldValues,
	currentPage: string | null = ""
) => {
	console.log("FEATURE:102", "SAVE:HEADER", "HEADER:SUBMISSION", { data });

	const navData: NavItem[] = getNavData(data as NavItem[], currentPage || "");

	console.log("FEATURE:102", "SAVE:HEADER", "HEADER:SUBMISSION", { navData });
	// type from somewhere
	// we probably want some form of info here
	// I'd argue a class / data structure for submissionData

	const saveData = {
		nav: navData,
		id: "",
		description: "",
		route: currentPage,
		creator: id,
	};

	// try catch ourselvs and ret? / doesn't feel like a difference
	return saveHeader(saveData);
};
