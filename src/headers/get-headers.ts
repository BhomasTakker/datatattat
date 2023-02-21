import Header from "@/models/Header";
import { GetHeadersParameters, HeaderDataType } from "./types";

export async function getHeaders(
	headersData: GetHeadersParameters
): Promise<HeaderDataType[]> {
	const mainHeader = await getMainHeader();
	const subHeaders = await getSubHeaders("");
	return [mainHeader, subHeaders];
}

export async function getMainHeader(): Promise<HeaderDataType> {
	//Perhaps not the best?
	const header = await Header.findOne({ id: "Main" }).lean();
	//if error return default data

	return JSON.parse(JSON.stringify(header));
}

//How/should type ObjectId?
export async function getSubHeaders(
	headerId: string
): Promise<HeaderDataType[]> {
	//get given and loop all parents until main
	return [];
}
