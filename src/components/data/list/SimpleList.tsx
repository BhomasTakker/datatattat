import { componentFactory } from "@/src/factories/component-factory";
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

//We need this to take a componentId and losd the component from a factory
export const SimpleList = ({
	queryData = {},
	componentId,
}: {
	queryData: any;
	componentId: string;
}) => {
	const { items = [] } = queryData;

	console.log({ queryData });
	console.log("NO ITEMS!!!", { items });

	////////////////////////
	//doesn't feel okay?
	//Right in theory perhaps just need to overload input perhaps - pass Id and nothing else surely?
	const Component = componentFactory(componentId);

	// console.log("SimpleList");
	// console.log({ SimpleListdata: items });
	// console.log({ SimpleList_queryData: queryData });
	const componentList = items.map((item: any) => (
		<Component key={item.link} data={item} />
	));
	return <List>{componentList}</List>;
};
