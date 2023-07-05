//	https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=uS5xR7jBxDw&list=RDMMuS5xR7jBxDw&index=1&format=json

export const YOUTUBE_OEMBED_VIDEO_OBJECT = (data: any) => {
	// set autoplay etc here for now
	const url = `https://www.youtube.com/watch`;
	const returnData = { ...data, url };

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
		data: returnData,
	};
};

export const YOUTUBE_OEMBED_PLAYLIST_OBJECT = (data: any) => {
	// set autoplay etc here for now
	// Should check if PL exists and add or not
	const url = `https://www.youtube.com/playlist`;
	const returnData = { ...data, url };

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
		data: returnData,
	};
};

export const YOUTUBE_OEMBED_SHORTS_OBJECT = (data: any) => {
	// set autoplay etc here for now
	// Should check if PL exists and add or not
	const url = `https://www.youtube.com/shorts/${data.videoId}`;
	const returnData = { ...data, url };
	delete returnData.videoId;

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
		data: returnData,
	};
};
// User id is a bit of a bitch to get
// https://www.streamweasels.com/tools/youtube-channel-id-and-user-id-convertor/
// potentially more available
export const YOUTUBE_OEMBED_USER_OBJECT = (data: any) => {
	// set autoplay etc here for now
	const url = `https://www.youtube.com/${data.username}`;
	const returnData = { ...data, url };
	delete returnData.username;

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
		data: returnData,
	};
};

export const YOUTUBE_OEMBED_OBJECT = {
	video: YOUTUBE_OEMBED_VIDEO_OBJECT,
	playlist: YOUTUBE_OEMBED_PLAYLIST_OBJECT,
	user: YOUTUBE_OEMBED_USER_OBJECT,
	shorts: YOUTUBE_OEMBED_SHORTS_OBJECT,
};
