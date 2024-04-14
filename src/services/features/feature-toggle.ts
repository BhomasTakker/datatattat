export const fetchFeatures = async () => {
	try {
		const response = await fetch("/api/features");

		return await response.json();
	} catch (e) {
		console.log("Something went wrong");
	}

	return [] as string[];
};
