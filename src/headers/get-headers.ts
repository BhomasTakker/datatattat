import Header from "@/models/Header";
import mongooseConnect from "../lib/mongoose-connection";
import { GetHeadersParameters, HeaderDataType } from "./types";

export async function getHeaders(
	headersData: GetHeadersParameters
): Promise<HeaderDataType[]> {
	const mainHeader = await getMainHeader();
	const subHeaders = await getSubHeaders(headersData);
	return [mainHeader, subHeaders];
}

export async function getMainHeader(): Promise<HeaderDataType> {
	mongooseConnect();

	//Perhaps not the best?
	const header = await Header.findOne({ id: "Main" }).lean();

	return JSON.parse(JSON.stringify(header));
}

//We should really just figure out why populate doesn't work
//(I mean it probably works I'm just using it wrong)
async function populateSubHeaders(id: string): Promise<any[]> {
	let header = await Header.findById(id);
	header = JSON.parse(JSON.stringify(header));
	const sub = header.parent ? await populateSubHeaders(header.parent) : [];

	return [header, ...sub];
}

//How/should type ObjectId?
export async function getSubHeaders(
	headerId: string
): Promise<HeaderDataType[]> {
	const subHeaders = await populateSubHeaders(headerId);
	return subHeaders;
}
