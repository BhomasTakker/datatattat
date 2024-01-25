type File = { [key: string]: unknown } | unknown[];

export const getFileSizeFromJson = (file: File) => {
	// const fileSize = JSON.stringify(file).length;
	const fileSize = file.toString().length;
	console.log({ fileSize: fileSize / 1024 });
	return {
		type: "kb",
		size: fileSize / 1024,
	};
};
