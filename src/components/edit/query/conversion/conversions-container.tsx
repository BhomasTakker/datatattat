import { Stack } from "@mui/material";
import { ConversionGroup } from "./group/conversion-group";
import { WithInfo } from "../../info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type ConversionProps = {
	// conversionsObject surely
	conversion: any; //not any
	objectKey: string;
};

const createMainResponse = (response: any, objectKey: string) => {
	if (!response) {
		return null;
	}
	return (
		<ConversionGroup
			objectKey={objectKey}
			conversion={response}
			formId={"response"}
			title={"Main"}
			info={"blurb about main part "}
		/>
	);
};
const createIterable = (iterable: any, objectKey: string) => {
	if (!iterable) {
		return null;
	}
	return (
		<ConversionGroup
			objectKey={objectKey}
			conversion={iterable}
			formId={"iterable"} //should be more dynamic
			title={"Iterable"}
			info={"blurb about iterable part "}
			iterable
		/>
	);
};

export const ConversionsContainer = ({
	objectKey,
	conversion,
}: ConversionProps) => {
	// change iterable to array of sub objects
	const { response, iterable, conversionId } = conversion;
	const { setValue } = useFormContext();

	console.log({ conversionId });

	const mainResponseComponent = createMainResponse(response, objectKey);
	const iterableComponent = createIterable(iterable, objectKey);

	useEffect(() => {
		// Probably manage this better with context?
		// ${objectKey}.conversions should really be passed in
		const formId = `${objectKey}.conversions.conversionId`;
		setValue(formId, conversionId);
	}, [conversionId, objectKey, setValue]);

	if (!mainResponseComponent && !iterableComponent) {
		// Would there realy ever be an iterable without a main.
		// i.e. sub object with no main object
		return <></>;
	}
	// console.log({ conversion });
	return (
		<Stack>
			<WithInfo info="How to modify the data you receive from your query. You can filter, sort, and transform results to suit your needs. Select from a predefined list or create your own.">
				<Title
					text="Response Conversion"
					variant={TitleVariant.EDIT_COMPONENT}
				></Title>
			</WithInfo>
			{mainResponseComponent ? mainResponseComponent : <></>}
			{iterableComponent ? iterableComponent : <></>}
		</Stack>
	);
};
