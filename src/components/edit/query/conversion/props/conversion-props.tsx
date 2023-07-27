import { useWatch } from "react-hook-form";
import { CONVERSION_PROPS_MAP } from "./config";
import { Parameters } from "../../parameters/Parameters";
import { ParametersType } from "../../parameters/types";
import { useContext, useEffect } from "react";
import { ConversionContext } from "../context/ConversionContext";

type ConversionProps = {
	conversionFormId: string;
	objectKey: string;
};

// useful to have type of conversion
export const ConversionProps = ({
	conversionFormId,
	objectKey,
}: ConversionProps) => {
	const { updateConversion } = useContext(ConversionContext);
	const conversionId = useWatch({ name: conversionFormId });
	const props = useWatch({ name: `${objectKey}.props` });

	useEffect(() => {
		console.log("Call update PROPS");
		if (props) {
			updateConversion({ props });
		}
		// need add dependencey when useEffect wraps it
	}, [props]);

	console.log("PROPS!!");
	console.log({ PROPS_conversionId: conversionId });
	if (!conversionId) {
		return <></>;
	}

	const propsConfig = CONVERSION_PROPS_MAP.get(
		conversionId
	) as ParametersType[];

	if (!propsConfig) {
		return <></>;
	}

	console.log({ PROPS_CONFIG: propsConfig });

	// load conversion config/data
	// get props
	// display required / available props / fucking defaults
	// Save selection under props
	// Available to read

	// if props
	return <Parameters params={propsConfig} objectKey={`${objectKey}.props`} />;
};
