import { getFileSizeFromJson } from "@/src/utils/file";
import { decimalPlace } from "@/src/utils/math";
import { NextApiRequest, NextApiResponse } from "next/types";

// We need api guard
async function fileQuery(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return;
	}

	const { query } = req;
	const { url = "" } = query;

	// TRYCATCH
	const result = await fetch(`${url}`);
	const file = await result.json();
	const fileSize = getFileSizeFromJson(file);

	// We need file conversions
	// in our situation
	// We need to convert from TopoJSON to GeoJson
	// jesus effing wept

	// need as this - geo, json, etc
	// we need to transform the data
	const returnData = {
		filesize: `${decimalPlace(fileSize.size, 100)}${fileSize.type}`,
		variant: "json",

		result: file,
	};

	return res.status(200).json(returnData);
}

export default fileQuery;
