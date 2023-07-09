import { useEffect } from "react";

type UseUpdateParameters = {
	id: string;
	key: string;
	options: any;
	parameterFormState: any;
	updateParameters: (param: any) => void;
};

export const useUpdateParameters = ({
	id,
	key,
	options,
	parameterFormState,
	updateParameters,
}: UseUpdateParameters) => {
	useEffect(() => {
		// We are checking this to find out type of input
		// when we have type.
		// type makes it easier
		const parameterValue = options
			? options[parameterFormState]
			: parameterFormState;
		updateParameters({ id: key, value: parameterValue });
	}, [id, key, options, parameterFormState, updateParameters]);
};
