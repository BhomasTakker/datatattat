import { cloneDeep } from "@/src/utils/object";
import { ReactNode, createContext, useCallback, useState } from "react";
import { Conversion, ConversionObject, Conversions } from "../types";
import { useFormContext } from "react-hook-form";

const defaultConversion = {
	id: "",
	map: undefined,
	defaultConversions: [],
};

type ConversionData = {
	id: string;
	type: string; // enum
	props?: any; // key value [string, enum]
};

type ConversionsState = {
	objectKey: string;
	// Perhaps this is where you argue conversions is better as a class
	conversions: any[];
	sort: any; // ConversionData[];
	filter: any; //ConversionData[];
	transform: any; //ConversionData[];

	conversionJson: ConversionObject;

	getValues: (id: string) => void;
	setValue: (id: string, value: any) => void;
};

type ConversionsInterface = {
	// deleteConversion: (conversion: any) => void;
	// moveConversion: (conversion: any) => void;
	addConversion: (conversionData: Conversion) => void; // pass data in || default
	addConversions: (conversionDatas: Conversions) => void;
	updateConversion: (i: number, conversionData: Conversion) => void; // Partial
	deleteConversion: (i: number, callback: () => void) => void;
	moveConversion: (dir: number, i: number, callback?: () => void) => void;

	getFormValues: (id: string) => void;
	setFormValue: (id: string, value: any) => void;
};

const conversionsInitialState: ConversionsState & ConversionsInterface = {
	objectKey: "",
	conversions: [],

	addConversion: () => {},
	addConversions: () => {},
	deleteConversion: () => {},
	moveConversion: () => {},
	updateConversion: () => {},

	// external form
	getValues: () => {},
	setValue: () => {},
	// internal form
	getFormValues: () => {},
	setFormValue: () => {},

	// deleteConversion: (param: any) => {},
	// moveConversion: (param: any) => {},
	sort: {},
	filter: {},
	transform: {},

	conversionJson: defaultConversion,
};

//////////////////////////////////////////
// We need to manage form data here
// setting value
// unregistering, etc
// has to be the best aproach
/////////////////////////////////////////////
export const ConversionsContextProvider = ({
	value,
	children,
}: {
	value: ConversionsState;
	children: ReactNode;
}) => {
	// const [conversions, setConversions] = useState<Conversions>([]);
	const { setValue, watch, register, unregister } = useFormContext();

	const { conversionJson, objectKey } = value;
	const conversionsFormId = `${objectKey}.conversions`;
	const conversions = watch(conversionsFormId);
	console.log({ conversionJson }, { objectKey });
	console.log({ conversions });

	const { id = undefined, iterable = false } = conversionJson;

	console.log({ conversionsContext: conversions });
	console.log({ id: id });
	console.log({ iterable: iterable });

	////////////////////////////////
	// initialize function
	if (id) {
		setValue(`${objectKey}.responseKey`, id);
	}
	setValue(`${objectKey}.iterable`, iterable);
	/////////////////////////////////

	// move these functions
	// we need to useCallback all of these functions
	const addConversions = (conversionsData: Conversions) => {
		conversionsData.forEach((conversion) => {
			addConversion(conversion);
		});
	};

	const addConversion = useCallback(
		(conversionData: Conversion) => {
			console.log("Add Conversion");

			const len = conversions?.length ?? 0;
			setValue(`${conversionsFormId}.${len}`, conversionData);
		},
		[conversions, conversionsFormId, setValue]
	);
	//? / void esq
	const updateConversion = useCallback(
		(i: number, conversionData: Conversion) => {
			console.log("Update Conversion", { conversionData }, { i });

			// update conversions array
			const updateConversions = cloneDeep(conversions);

			const conversion = { ...conversions[i], ...conversionData };
			updateConversions.splice(i, 1, conversion);

			console.log({ updateConversions });
		},
		[conversions]
	);

	const deleteConversion = useCallback(
		(i: number, callback: () => void = () => {}) => {
			if (conversions.length === 0) {
				return;
			}

			const updateConversions2 = cloneDeep(conversions);
			updateConversions2.splice(i, 1);

			unregister(conversionsFormId);
			setValue(conversionsFormId, updateConversions2);
		},
		[conversions, conversionsFormId, setValue, unregister]
	);

	const moveConversion = useCallback(
		(dir: number, i: number, callback: () => void = () => {}) => {
			console.log("Move Conversion");
			if (conversions.length === 0) {
				return;
			}

			const updateConversions = cloneDeep(conversions);
			const movedConversion = updateConversions.splice(i, 1);
			updateConversions.splice(i + dir, 0, ...movedConversion);

			// unregister(conversionsFormId);
			setValue(conversionsFormId, updateConversions);
		},
		[conversions, conversionsFormId, setValue]
	);

	const getFormValues = useCallback(() => {
		console.log("GET VALUES");
	}, []);

	const setFormValue = useCallback(
		(id: string, value: any) => {
			// Temp - just use update conversion
			console.log("SET VALUE", { id }, { value });
			setValue(id, value);

			// temp but here th issue
			// const updateConversions = cloneDeep(conversions);
			// unregister(conversionsFormId);
			// setValue(conversionsFormId, updateConversions);
		},
		[setValue]
	);

	return (
		<ConversionsContext.Provider
			value={{
				...value,
				conversions,
				addConversion,
				addConversions,
				deleteConversion,
				moveConversion,
				updateConversion,
				getFormValues,
				setFormValue,
			}}
		>
			{children}
		</ConversionsContext.Provider>
	);
};

export const ConversionsContext = createContext({ ...conversionsInitialState });
