import React from "react";

import { ParametersContextProvider } from "./context/ParametersContext";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { ParametersType } from "./types";
import { ParametersList } from "./parameters-list";
import { WithInfo } from "../../info/WithInfo";

type ParametersProps = {
	params: ParametersType[];
	objectKey: string;
};

// pass in title and info
export const Parameters = ({ params = [], objectKey }: ParametersProps) => {
	// probably not great...
	// should the test be in context?
	if (params.length === 0) {
		return <></>;
	}

	return (
		// Parameters should just be added to the context
		// subsequently we read those - watch those
		<ParametersContextProvider value={{ objectKey, parameters: params }}>
			{/* Passs in title and info - should info not just be part of Title/ create a component */}
			<WithInfo info="Query parameters. Controls to modify the query sent to your chosen api.">
				<Title text="Parameters" variant={TitleVariant.EDIT_COMPONENT}></Title>
			</WithInfo>
			<ParametersList parameters={params} />
		</ParametersContextProvider>
	);
};
