//	https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=uS5xR7jBxDw&list=RDMMuS5xR7jBxDw&index=1&format=json

export const YOUTUBE_IFRAME_VIDEO_OBJECT = (data: any) => {
	// set autoplay etc here for now
	const url = `https://www.youtube.com/embed/${data.v}?autoplay=1&origin=https://datatattat.com`;
	const returnData = { ...data, url };
	delete returnData.v;

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
	};
};

export const YOUTUBE_IFRAME_PLAYLIST_OBJECT = (data: any) => {
	// set autoplay etc here for now
	// Should check if PL exists and add or not
	const url = `https://www.youtube.com/embed?listType=playlist&list=PL${data.listId}&autoplay=1&origin=https://datatattat.com`;
	const returnData = { ...data, url };
	delete returnData.v;

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
	};
};

// User id is a bit of a bitch to get
// https://www.streamweasels.com/tools/youtube-channel-id-and-user-id-convertor/
// potentially more available
export const YOUTUBE_IFRAME_USER_OBJECT = (data: any) => {
	// set autoplay etc here for now
	const url = `https://www.youtube.com/embed/videoseries?list=UU${data.username}&origin=https://datatattat.com`;
	const returnData = { ...data, url };
	delete returnData.v;

	return {
		url: url, // `https://www.youtube.com/oembed?url=${url}`,
	};
};

export const YOUTUBE_IFRAME_OBJECT = {
	video: YOUTUBE_IFRAME_VIDEO_OBJECT,
	playlist: YOUTUBE_IFRAME_PLAYLIST_OBJECT,
	user: YOUTUBE_IFRAME_USER_OBJECT,
};
