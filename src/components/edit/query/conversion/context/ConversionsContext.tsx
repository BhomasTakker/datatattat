import { cloneDeep } from "@/src/utils/object";
import {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import { Conversion, ConversionObject, Conversions } from "../types";
import { useFormContext, useWatch } from "react-hook-form";

const defaultConversion = {
	id: "",
	map: undefined,
	defaultConversions: [],
};

// type ConversionData = {
// 	id: string;
// 	type: string; // enum
// 	props?: any; // key value [string, enum]
// };

type ConversionsState = {
	objectKey: string;
	// conversionsFormId: string;
	// Perhaps this is where you argue conversions is better as a class
	// conversions: any[];
	sort: any; // ConversionData[];
	filter: any; //ConversionData[];
	transform: any; //ConversionData[];

	conversionJson: ConversionObject;

	// getValues: (id: string) => void;
	// setValue: (id: string, value: any) => void;
};

type ConversionsInterface = {
	conversionsFormId: string;

	addConversion: (conversionData: Conversion) => void; // pass data in || default
	addConversions: (conversionDatas: Conversions) => void;
	updateConversion: (i: number, conversionData: Conversion) => void; // Partial
	deleteConversion: (i: number) => void;
	moveConversion: (dir: number, i: number) => void;

	getFormValues: (id: string) => void;
	setFormValue: (id: string, value: any) => void;
};

const conversionsInitialState: ConversionsState & ConversionsInterface = {
	objectKey: "",
	// conversions: [],
	conversionsFormId: "",

	addConversion: () => {},
	addConversions: () => {},
	deleteConversion: () => {},
	moveConversion: () => {},
	updateConversion: () => {},

	// external form
	// getValues: () => {},
	// setValue: () => {},
	// internal form
	getFormValues: () => {},
	setFormValue: () => {},

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
	const { setValue, unregister, getValues } = useFormContext();

	const { conversionJson, objectKey } = value;
	const conversionsFormId = `${objectKey}.conversions`;

	const {
		id = undefined,
		iterable = false,
		defaultConversions,
	} = conversionJson;

	////////////////////////////////
	// initialize function ?
	useEffect(() => {
		if (id) {
			setValue(`${objectKey}.responseKey`, id);
		}
	}, [id, objectKey, setValue]);
	useEffect(() => {
		setValue(`${objectKey}.iterable`, iterable);
	}, [iterable, objectKey, setValue]);
	///////////////////////////////////////
	//
	/////////////////////////////////
	// move these functions
	// we need to useCallback all of these functions
	const addConversion = useCallback(
		(conversionData: Conversion) => {
			const conversions = getValues(conversionsFormId);
			console.log("Add Conversion");

			// const len = conversions?.length ?? 0;
			// setValue(`${conversionsFormId}.${len}`, conversionData);

			const updateConversions = cloneDeep(conversions);
			updateConversions.push(conversionData);

			unregister(conversionsFormId);
			setValue(conversionsFormId, updateConversions);
		},
		[conversionsFormId, getValues, setValue, unregister]
	);

	const addConversions = useCallback(
		(conversionsData: Conversions) => {
			conversionsData.forEach((conversion) => {
				addConversion(conversion);
			});
		},
		[addConversion]
	);

	useEffect(() => {
		const conversions = getValues(conversionsFormId) || [];
		// I don't think we should have this check?
		// indicates an issue <- yep <- undecided
		// Why? / even providing an empty dependency adds default conversions multiple times...
		// we will have instances of conversions being undefined
		// We need to set the default value when we call watch!
		// Quite possibly
		// by setting default value of watch we will always get an array
		// remove !conversions ||
		if (conversions.length === 0) {
			// console.log({ DEFAULT: defaultConversions });
			addConversions(defaultConversions);
		}
	}, [addConversions, conversionsFormId, defaultConversions, getValues]);

	//? / void esq
	const updateConversion = useCallback(
		(i: number, conversionData: Conversion) => {
			const conversions = getValues(conversionsFormId);
			console.log("Update Conversion", { conversionData }, { i });

			// update conversions array
			const updateConversions = cloneDeep(conversions);

			const conversion = { ...conversions[i], ...conversionData };
			updateConversions.splice(i, 1, conversion);

			// Nothing happens here?

			console.log({ updateConversions });
		},
		[conversionsFormId, getValues]
	);

	const deleteConversion = useCallback(
		(i: number) => {
			const conversions = getValues(conversionsFormId);
			if (conversions.length === 0) {
				return;
			}

			const updateConversions = cloneDeep(conversions);
			updateConversions.splice(i, 1);

			unregister(conversionsFormId);
			setValue(conversionsFormId, updateConversions);
		},
		[conversionsFormId, getValues, setValue, unregister]
	);

	const moveConversion = useCallback(
		(dir: number, i: number, callback: () => void = () => {}) => {
			const conversions = getValues(conversionsFormId);
			console.log("Move Conversion");
			if (conversions.length === 0) {
				return;
			}

			const updateConversions = cloneDeep(conversions);
			const movedConversion = updateConversions.splice(i, 1);
			updateConversions.splice(i + dir, 0, ...movedConversion);

			// potentially better?
			// unregister(conversionsFormId);
			setValue(conversionsFormId, updateConversions);

			// should be?
			// unregister(conversionsFormId);
			// setValue(conversionsFormId, updateConversions);
		},
		[conversionsFormId, getValues, setValue]
	);

	const getFormValues = useCallback(() => {
		console.log("GET VALUES");
	}, []);

	const setFormValue = useCallback(
		(id: string, value: any) => {
			// Temp - just use update conversion
			console.log("SET VALUE", { id }, { value });
			setValue(id, value);
		},
		[setValue]
	);

	return (
		<ConversionsContext.Provider
			value={{
				...value,
				// conversions,
				conversionsFormId,
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
