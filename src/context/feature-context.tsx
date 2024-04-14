// Features based on
// https://www.freecodecamp.org/news/how-to-use-feature-toggles-in-next-js-and-react/

import { ReactNode, createContext, useEffect, useState } from "react";
import { fetchFeatures } from "../services/features/feature-toggle";

type featureState = {
	// enabledFeatures: string[];
};

type featureInterface = {
	enabledFeatures: string[];
};

const initialState: featureState & featureInterface = {
	enabledFeatures: [],
};

export const FeatureContextProvider = ({
	value,
	children,
}: {
	value?: featureState;
	children: ReactNode;
}) => {
	const [enabledFeatures, setFeatures] = useState<string[]>([]);

	const processFeatures = async () => {
		const features = await fetchFeatures();

		setFeatures(features);
	};

	useEffect(() => {
		processFeatures();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	console.log("999111", { enabledFeatures });

	return (
		// Would you always spread given value here?
		<FeatureContext.Provider value={{ ...value, enabledFeatures }}>
			{children}
		</FeatureContext.Provider>
	);
};

export const FeatureContext = createContext({ ...initialState });
