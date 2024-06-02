import { ReactNode, createContext, useCallback, useEffect } from "react";
import { cloneDeep } from "@/src/utils/object";
import { useFormContext } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";

type ArrayInputState = {
	id: string;
	input: UnknownObject;
};

type ArrayInputInterface = {
	addInput: () => void;
	deleteInput: (i: number) => void;
	moveInput: (dir: number, i: number) => void;
};

const initialState: ArrayInputState & ArrayInputInterface = {
	id: "",
	input: {},
	addInput: () => {},
	deleteInput: () => {},
	moveInput: () => {},
};

export const ArrayInputContextProvider = ({
	value,
	children,
}: {
	value: ArrayInputState;
	children: ReactNode;
}) => {
	const { id, input } = value;
	const { setValue, unregister, getValues } = useFormContext();
	const checkInputs = getValues(id);
	// I don't think this is required
	// useEffect(() => {
	// 	unregister(FORM_ID);
	// 	setValue(FORM_ID, reformedNav);
	// }, [reformedNav, setValue, unregister]);
	useEffect(() => {
		const inputs = getValues(id);
		if (JSON.stringify(checkInputs) == JSON.stringify(inputs)) {
			return;
		}
		// set props to empty / no need to reset value?
		// perhaps reset would be better but damn simple
		// console.log();
		unregister(id);
		setValue(id, inputs);
	}, [getValues, id, setValue, unregister, checkInputs]);
	/////////////////////////////
	// CONTROLS /////////////////
	/////////////////////////////
	const addInput = useCallback(() => {
		// array Id
		const inputs = getValues(id) || [];
		const newInput = {
			...input,
			id: `${id}.${inputs.length}`,
		};
		// console.log("ADD:INPUT:1", { inputs, id, newInput });
		// setValue(`${FORM_ID}.${nav.length}`, newLink);

		const updateInputs = cloneDeep(inputs);
		updateInputs.push("");

		// console.log("ADD:INPUT:2", { updateInputs });

		unregister(id);
		setValue(id, updateInputs);
		// console.log("ADD:INPUT:3", { updateInputs });
	}, [getValues, id, input, setValue, unregister]);

	const deleteInput = useCallback(
		(i: number) => {
			const inputs = getValues(id);
			if (inputs.length === 0) {
				return;
			}

			const updateInputs = cloneDeep(inputs);
			updateInputs.splice(i, 1);

			unregister(id);
			setValue(id, updateInputs);
		},
		[getValues, id, setValue, unregister]
	);

	const moveInput = useCallback(
		(dir: number, i: number) => {
			const inputs = getValues(id);

			// console.log("0004:MOVE:INPUT", { inputs });

			if (inputs.length === 0) {
				return;
			}

			// console.log("0004:MOVE:INPUT", { i, dir });

			if (i === 0 && dir === -1) {
				//no up / I mean do better though right
				return;
			}

			const updateInputs = cloneDeep(inputs);
			const movedInput = updateInputs.splice(i, 1);
			updateInputs.splice(i + dir, 0, ...movedInput);

			// console.log("0004:MOVE:INPUT", { updateInputs });

			// unregister(conversionsFormId);
			setValue(id, updateInputs);
		},
		[getValues, id, setValue]
	);
	return (
		// Would you always spread given value here?
		<ArrayInputContext.Provider
			value={{ ...value, addInput, deleteInput, moveInput }}
		>
			{children}
		</ArrayInputContext.Provider>
	);
};

export const ArrayInputContext = createContext({ ...initialState });
