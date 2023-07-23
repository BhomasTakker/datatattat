import { useWatch } from "react-hook-form";
import { CONVERSION_PROPS_MAP } from "./config";
import { Parameters } from "../../parameters/Parameters";
import { ParametersType } from "../../parameters/types";

type ConversionProps = {
	conversionFormId: string;
	objectKey: string;
};

// useful to have type of conversion
export const ConversionProps = ({
	conversionFormId,
	objectKey,
}: ConversionProps) => {
	const conversionId = useWatch({ name: conversionFormId });

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
