import { useWatch } from "react-hook-form";
import { CONVERSION_PROPS_MAP } from "./config";
import { Parameters } from "../../parameters/Parameters";
import { ParametersType } from "../../parameters/types";
import { useContext, useEffect } from "react";
import { ConversionContext } from "../context/ConversionContext";
import { ConversionsContext } from "../context/ConversionsContext";

type ConversionProps = {
	conversionFormId: string;
	objectKey: string;
	props: any;
};

// useful to have type of conversion
export const ConversionProps = ({
	conversionFormId,
	objectKey,
	props,
}: ConversionProps) => {
	const { setFormValue } = useContext(ConversionsContext);
	const conversionId = useWatch({ name: conversionFormId });
	// const props = useWatch({ name: `${objectKey}.props` });

	useEffect(() => {
		if (props) {
			console.log("Call update props");
			// updateConversion({ id: value });
			setFormValue(`${objectKey}.props`, props);
		}
	}, [objectKey, props, setFormValue]);

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
