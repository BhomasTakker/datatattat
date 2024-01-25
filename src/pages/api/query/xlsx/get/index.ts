import { getFileSizeFromJson } from "@/src/utils/file";
import { decimalPlace } from "@/src/utils/math";
import { NextApiRequest, NextApiResponse } from "next/types";
import XLSX from "xlsx";

// We need api guard
async function xlsxQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	// We can caste queries
	const { query } = req;
	const { url = "" } = query;

	// TRYCATCH
	const ab = await (await fetch(`${url}`)).arrayBuffer();

	/* Parse file and get first worksheet */
	const wb = XLSX.read(ab);

	// I suppose there may be multiple sheets / pages
	// returnarray of arrays
	// We want to return an object with data as a part of that
	// return all sheets and some data / we should be expecting headers but how do we know
	const wsname = wb.SheetNames[0];
	const ws = wb.Sheets[wsname];

	// we may need to specify return type - csv, json, sheets, html, etc
	const data = XLSX.utils.sheet_to_json(ws);

	// we can separate columns here (conversions)
	// return number columns
	// return number - results - paginate results?
	// provide size of data in bytes/kb (string characters / 1024) for kb.

	// console.log({ ws });

	// we want to create an object with
	// number of entries, headers?, data size in kb, etc
	// we want to be able to filter results
	// Should be somewhere in utils etc
	const fileSize = getFileSizeFromJson(data);
	const returnData = {
		responses: data.length,
		filesize: `${decimalPlace(fileSize.size, 100)}${fileSize.type}`,
		variant: "json-results",
		// headers and columns would be if returning csv no?
		headers: Object.keys(data[0] || {}),
		columns: data,
		// returning json
		keys: Object.keys(data[0] || {}),
		results: data,
		// html: data.toHtml
		// return xlsx / table?
	};

	return res.status(200).json(returnData);
}

export default xlsxQuery;
