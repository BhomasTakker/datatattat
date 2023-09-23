import { returnBasicCreator } from "../../utils/creators";

const BASE_URL = "https://www.aljazeera.com/xml/rss/all.xml";

// pass in more than params?
export const ALJAZEERA_NEWS_RSS_CREATOR = returnBasicCreator(BASE_URL, {});
