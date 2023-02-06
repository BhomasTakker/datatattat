import { List } from "@mui/material";
import React, { FC } from "react";

//this is tightly coupled with a query giver
//when it possibly shouldn't be
//I only want list data
//
//Do we shape the return?
//Something else would want number of results plus data
//
//Perhaps I only receive data from a withQuery component
// A paginated List will also expect pagination data from a WithPaginationQuery
// Whatever goes with InfiniteScrollList and WithInfiniteScrollQuery ????
// OR is this effectively the same a different component using the same pagination component?
export const SimpleList = ({
	queryData,
	Component,
}: {
	queryData: any;
	Component: FC<any>;
}) => {
	const { data } = queryData;
	const items = data.map((item: any) => (
		<Component key={item.url} data={item} />
	));
	return <List>{items}</List>;
};
