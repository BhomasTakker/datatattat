import { inputMap } from "../input.map";

interface InputFactoryProps {
	data: any;
}

export const InputFactory = ({ data }: InputFactoryProps) => {
	const { type } = data;
	const Component = inputMap.get(type) || <></>; // Error component

	// Should perhaps pass an object?
	return <Component {...data} />;
};
