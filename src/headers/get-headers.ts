import Header from "@/models/Header";
import { GetHeadersParameters, HeaderDataType } from "./types";

export async function getHeaders(
	headersData: GetHeadersParameters
): Promise<HeaderDataType[]> {
	const mainHeader = await getMainHeader();
	const subHeaders = await getSubHeaders(headersData);
	return [mainHeader, subHeaders];
}

export async function getMainHeader(): Promise<HeaderDataType> {
	//Perhaps not the best?
	const header = await Header.findOne({ id: "Main" }).lean();
	//if error return default data

	// console.log({ MAINHEADER: header });

	return JSON.parse(JSON.stringify(header));
}

//How/should type ObjectId?
export async function getSubHeaders(
	headerId: string
): Promise<HeaderDataType[]> {
	const subHeaders = await Header.findById(headerId).lean();
	const serialized = JSON.parse(JSON.stringify(subHeaders));
	//get given and loop all parents until main
	return [serialized];
}
