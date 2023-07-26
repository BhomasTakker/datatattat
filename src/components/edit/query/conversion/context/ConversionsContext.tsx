import { cloneDeep } from "@/src/utils/object";
import { ReactNode, createContext, useState } from "react";
import { Conversion, Conversions } from "../types";

// this becomes non required
// but we could store parameters here?
// then on change / reset
// potentially simpler

type ConversionData = {
	id: string;
	type: string; // enum
	props?: any; // key value [string, enum]
};

type ConversionsState = {
	// Perhaps this is where you argue conversions is better as a class
	conversions: any[];
	sort: any; // ConversionData[];
	filter: any; //ConversionData[];
	transform: any; //ConversionData[];
};

type ConversionsInterface = {
	// deleteConversion: (conversion: any) => void;
	// moveConversion: (conversion: any) => void;
	addConversion: (conversionData: Conversion) => void; // pass data in || default
	addConversions: (conversionDatas: Conversions) => void;
	setConversion: () => void;
	deleteConversion: (i: number, callback: () => void) => void;
	moveConversion: (dir: number, i: number, callback?: () => void) => void;
};

const conversionsInitialState: ConversionsState & ConversionsInterface = {
	conversions: [],

	addConversion: () => {},
	addConversions: () => {},
	deleteConversion: () => {},
	moveConversion: () => {},
	setConversion: () => {},
	// deleteConversion: (param: any) => {},
	// moveConversion: (param: any) => {},
	sort: {},
	filter: {},
	transform: {},
};

export const ConversionsContextProvider = ({
	value,
	children,
}: {
	value: ConversionsState;
	children: ReactNode;
}) => {
	const [conversions, setConversions] = useState<Conversions>([]);
	// const { getValues, unregister } = useFormContext();

	console.log({ conversionsContext: conversions });

	// we need to useCallback all of these functions
	const addConversions = (conversionsData: Conversions) => {
		const conversionsToAdd = conversionsData.map((conversion) => conversion);
		setConversions([...conversionsToAdd]);
	};

	const addConversion = (conversionData: Conversion) => {
		console.log("Add Conversion");
		// let updateConversions = cloneDeep(conversions);
		// updateConversions.push({ ...conversionData });

		//use conversions in context
		setConversions([...conversions, conversionData]);
	};
	//?
	const setConversion = () => {};

	const deleteConversion = (i: number, callback: () => void = () => {}) => {
		// too tightly coupled to react hook form
		// this is seperate part of callback
		// const conversionsFormValues = getValues(id);
		// unregister(conversionFormId, { keepValue: false });
		console.log("Delete Conversion");

		if (conversions.length === 0) {
			return;
		}
		const updateConversions = cloneDeep(conversions);
		updateConversions.splice(i, 1);

		setConversions(updateConversions);
		callback();
	};
	const moveConversion = (
		dir: number,
		i: number,
		callback: () => void = () => {}
	) => {
		console.log("Move Conversion");
		if (conversions.length === 0) {
			return;
		}

		const updateConversions = cloneDeep(conversions);
		const movedConversion = updateConversions.splice(i, 1);
		updateConversions.splice(i + dir, 0, ...movedConversion);
		// unregister(conversionFormId, { keepValue: false });
		setConversions(updateConversions);
		callback();
	};

	return (
		<ConversionsContext.Provider
			value={{
				...value,
				conversions,
				addConversion,
				addConversions,
				deleteConversion,
				moveConversion,
				setConversion,
			}}
		>
			{children}
		</ConversionsContext.Provider>
	);
};

export const ConversionsContext = createContext({ ...conversionsInitialState });
