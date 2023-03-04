import Header from "@/models/Header";
import mongooseConnect from "../lib/mongoose-connection";
import { GetHeadersParameters, HeaderDataType } from "./types";

//just pass in route
export async function getHeaders(
	route: GetHeadersParameters
): Promise<HeaderDataType[]> {
	await mongooseConnect();
	const mainHeader = await getMainHeader();
	const subHeaders = await getSubHeaders(route);
	return [mainHeader, subHeaders];
}

export async function getMainHeader(): Promise<HeaderDataType> {
	await mongooseConnect();

	//Perhaps not the best?
	//route!!! '/'
	const header = await Header.findOne({ route: "/" }).lean();

	return JSON.parse(JSON.stringify(header));
}

//This is all a bit ugly / since change from parent id for headers
//we need to refactor this and uses
async function populateSubHeaders(route: string): Promise<any[]> {
	//This isn't great?
	//missed a thing and got into an infinite loop
	//We CANNOT do this on Vercel!!
	if (!route || route === "/" || route === "/users") {
		return [];
	}
	//if not found we'll return null...
	//Works but ugly
	let header = [await Header.findOne({ route })] || []; //check
	let parentHeader = route.split("/");

	parentHeader.pop(); //why

	const sub = parentHeader
		? await populateSubHeaders(parentHeader.join("/"))
		: [];

	header = JSON.parse(JSON.stringify(header));

	return [...header, ...sub];
}

//How/should type ObjectId?
export async function getSubHeaders(route: string): Promise<HeaderDataType[]> {
	const subHeaders = await populateSubHeaders(route);
	return subHeaders;
}
