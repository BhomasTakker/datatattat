import { ERRORS } from "@/lib/errors/error-messages";

export async function createLandingPage(
	pageData: any //create type
) {
	let response;

	response = await fetch("/api/edit/create-page", {
		method: "POST",
		body: JSON.stringify(pageData),
		//create somne standard headers
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Create Page ERROR - todo");
	}
	return data;
}
