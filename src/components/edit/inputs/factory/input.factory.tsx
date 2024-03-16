import { inputMap } from "../input.map";

interface InputFactoryProps {
	data: any;
}

export const InputFactory = ({ data }: InputFactoryProps) => {
	const { type } = data;
	const Component = inputMap.get(type) || <></>; // Error component

	// console.log("This is us", { data });
	// Need protection - incorrect type will fully blow up
	// Should perhaps pass an object?
	return <Component {...data} />;
};
