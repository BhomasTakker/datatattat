import { ERRORS } from "@/lib/errors/error-messages";

//header type
export async function saveHeader(headerData: any) {
	let response;

	//validate data? / prior to this - this assumes

	try {
		response = await fetch("/api/header/save", {
			method: "POST",
			body: JSON.stringify({ ...headerData }),
			//create somne standard headers
			headers: {
				"Content-Type": "application/json",
			},
		});
		// console.log("post header ", { headerData });
	} catch (error) {
		console.log({ error });
		return error;
	}
	//Error breaks

	const data = await response.json();

	if (!response.ok) {
		console.log("post header - not ok");
		throw new Error(data.message || ERRORS.createUser);
	}
	// console.log("post header return data ", { data });
	return data;
}
