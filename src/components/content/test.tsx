import { HEADERS, PATH } from "@/src/api/bing/news/constants";
import { toArticleList } from "@/src/api/bing/news/returns";
import {
	clientsideFetch,
	ClientSideFetchType,
} from "@/src/api/clientside-fetch";
import { withQuery } from "@/src/hoc/query/withQuery";
import React from "react";
import { ArticleStub } from "../data/articles/ArticleStub";
import { SimpleList } from "../data/list/SimpleList";

//Effectively creating a List of anythings
export const Test = () => {
	const componentObject = {
		component: SimpleList,
		props: {
			Component: ArticleStub,
		},
	};

	const searchQuery = {
		q: "Liz Truss",
	};

	const searchObject: ClientSideFetchType = {
		url: `${PATH}`,
		searchParams: searchQuery,
		returnFn: toArticleList as any,
		options: HEADERS, //no longer required
	};

	const queryObject = {
		//query function gets passed state
		queryFn: () => clientsideFetch(searchObject),
		queryId: "fetchBingNews",
		//this is seperate to pagination state but includes
		state: {
			page: 1,
			pageSize: 10,
		},
		options: {
			keepPreviousData: true,
		},
	};

	//this works / but how usable is it? / How scalable?
	const El = withQuery(componentObject, queryObject);
	return (
		<div>
			<El />
		</div>
	);
};
