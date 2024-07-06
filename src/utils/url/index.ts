export const stringIsAValidUrl = (s: string) => {
	try {
		new URL(s);
		return true;
	} catch (err) {
		return false;
	}
};
