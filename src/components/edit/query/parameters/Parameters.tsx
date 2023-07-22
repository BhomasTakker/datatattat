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

export const Parameters = ({ params, objectKey }: ParametersProps) => {
	// probably not great...
	if (!params?.length) {
		return <></>;
	}
	console.log({ params });
	return (
		<ParametersContextProvider value={{ objectKey }}>
			<WithInfo info="Query parameters. Controls to modify the query sent to your chosen api.">
				<Title text="Parameters" variant={TitleVariant.EDIT_COMPONENT}></Title>
			</WithInfo>
			<ParametersList parameters={params} />
		</ParametersContextProvider>
	);
};
