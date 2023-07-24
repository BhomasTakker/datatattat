import { Stack } from "@mui/material";
import { ConversionGroup } from "./group/conversion-group";
import { WithInfo } from "../../info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { SubConversionObject } from "./types";
import { capitalize } from "@/src/utils/string";
import { ConversionsContextProvider } from "./context/ConversionsContext";

type ConversionProps = {
	// conversionsObject surely
	conversion: any; //not any
	objectKey: string;
};

const createMainResponse = (response: any, objectKey: string) => {
	if (!response) {
		return null;
	}
	const { id, sort = {}, filter = {}, transform = {} } = response;
	return (
		<ConversionsContextProvider
			value={{
				conversions: [],
				sort,
				filter,
				transform,
			}}
			key={id}
		>
			<ConversionGroup
				objectKey={objectKey}
				conversion={response}
				formId={"response"}
				title={"Main"}
				info={"blurb about main part "}
			/>
		</ConversionsContextProvider>
	);
};
// const createIterable = (iterable: any, objectKey: string) => {
// 	if (!iterable) {
// 		return null;
// 	}
// 	return (
// 		<ConversionGroup
// 			objectKey={objectKey}
// 			conversion={iterable}
// 			formId={"iterable"} //should be more dynamic
// 			title={"Iterable"}
// 			info={"blurb about iterable part "}
// 			iterable
// 		/>
// 	);
// };

const createSubComponents = (
	conversions: SubConversionObject[],
	objectKey: string
) => {
	if (!conversions) {
		return null;
	}
	if (conversions.length === 0) {
		return null;
	}
	// it is known
	return conversions.map((conversion: SubConversionObject, i: number) => {
		const { id, sort = {}, filter = {}, transform = {} } = conversion;
		return (
			// We may want to add the ConversionsContextProvider here?
			<ConversionsContextProvider
				value={{
					conversions: [],
					sort,
					filter,
					transform,
				}}
				key={id}
			>
				<ConversionGroup
					objectKey={`${objectKey}`}
					conversion={conversion}
					formId={`sub.${id}`}
					title={capitalize(id)}
					info={"We'll need to pass this "}
				/>
			</ConversionsContextProvider>
		);
	});
};

export const ConversionsContainer = ({
	objectKey,
	conversion,
}: ConversionProps) => {
	const { response, conversionId, subConversions } = conversion || {};
	const { setValue } = useFormContext();

	console.log({ subConversions });

	const mainResponseComponent = createMainResponse(response, objectKey);

	// sub
	// const iterableComponent = createIterable(iterable, objectKey);
	const subComponents = createSubComponents(subConversions, objectKey);

	useEffect(() => {
		// Probably manage this better with context?
		// ${objectKey}.conversions should really be passed in
		const formId = `${objectKey}.conversions.conversionId`;
		setValue(formId, conversionId);
	}, [conversionId, objectKey, setValue]);

	if (!mainResponseComponent && !subComponents) {
		// Would there realy ever be an iterable without a main.
		// i.e. sub object with no main object. Yes.
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
			{/* We should probably always be showing main response? */}
			{/* Would we ever not want to allow filtering / transforming? */}
			{mainResponseComponent ? mainResponseComponent : <></>}
			{/* {iterableComponent ? iterableComponent : <></>} */}
			{subComponents ? subComponents : <></>}
		</Stack>
	);
};
