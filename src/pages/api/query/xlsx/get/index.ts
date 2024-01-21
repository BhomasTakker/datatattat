import { log } from "@/src/lib/logger";
import { NextApiRequest, NextApiResponse } from "next/types";
import XLSX from "xlsx";

async function xlsxQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	// We can caste queries
	const { query } = req;
	const { url = "" } = query;

	console.log({ query });

	const URL_TO_DOWNLOAD = "https://sheetjs.com/pres.numbers";

	// TRYCATCH
	const ab = await (await fetch(`${url}`)).arrayBuffer();

	// console.log({ ab });

	/* Parse file and get first worksheet */
	const wb = XLSX.read(ab);
	// I suppose there may be multiple sheets / pages
	const wsname = wb.SheetNames[0];
	const ws = wb.Sheets[wsname];

	// log({ code: "0000", context: "XLSX:QUERY", message: "FETCH:DATA" }, { ws });
	const data = XLSX.utils.sheet_to_json(ws);

	// we need to pass through conversions.
	// We receive an array - we need structured object

	return res.status(200).json(data);

	// to html??????
	// XLSX.utils.sheet_to_html(ws);
}

export default xlsxQuery;
