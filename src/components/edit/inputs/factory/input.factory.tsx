import { inputMap } from "../input.map";

interface InputFactoryProps {
	data: any;
}

export const InputFactory = ({ data }: InputFactoryProps) => {
	const { type } = data;
	const Component = inputMap.get(type) || <></>; // Error component

	console.log("FEATURE:115", "EDIT:PROPS", "INPUT:FACTORY", { data });

	// Should perhaps pass an object?
	return <Component {...data} />;
};
