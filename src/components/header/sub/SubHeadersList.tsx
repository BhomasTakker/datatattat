import React, { ReactElement } from "react";
import { SubHeader } from "./SubHeader";

//The question really is - should these function be outside of the component?
//Here is a very good answer
//https://stackoverflow.com/questions/46138145/where-should-functions-in-function-components-go
const renderSubMenu = (item: any, i: number): ReactElement => {
	console.log({ item });
	return <SubHeader key={`SubHeader${i}`} headerData={item} />;
};

const renderList = (list: any[]): ReactElement => {
	//@ts-ignore / would you wrap just for the sake of it / can you add a key to fragments
	return list.map(renderSubMenu);
};

//should pass a limit / curry a function if you want to fake reusabiloity
const trimList = (list: any[]) => {
	const { length } = list;
	return length <= 2 ? list : list.slice(length - 2);
};

//Not any this is known
//Type all of this - aside from lack of proper typing this is all actually pretty beautiful
//Go through it but header now seems to be a fairly complicated set of things
//Neatly done and very simply coded / organised
export const SubHeadersList = ({ headersArray }: { headersArray: any[] }) => {
	if (!headersArray) {
		return <></>;
	}

	//Take in list and reverse
	const reversedList = headersArray.reverse();
	//Show last 2 by default / check if more than 2
	//renderList or split and renderList

	const trimmedList = trimList(reversedList); //if show all show all else

	// console.log({ trimmedList });
	// console.log({ reversedList });
	//enable opening all / have an arrow or something
	//put a little seperator in ? Or main header control
	return renderList(trimmedList);
};
