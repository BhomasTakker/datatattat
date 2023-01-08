export async function createUser(email: string, password: string) {
	let response;

	response = await fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		//create somne standard headers
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	//TODO
	//improve responses etc
	if (!response.ok) {
		throw new Error(data.message || "Something went wrong");
	}
	// } catch (error) {
	// 	console.log({ error });
	// }
	return data;
}
