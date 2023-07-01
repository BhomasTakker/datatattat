import {
	EditSelectInput,
	EditTextInput,
	EditTextToggleInput,
} from "../RssInputComponents";

type QueryInputFactoryComponentProps = {
	id: string;
	label: string;
	type: string;
	objectKey: string;
	options: any[];
};

// Could just call this factory
// need pass props
export const QueryInputFactoryComponent = ({
	id,
	label,
	options,
	type,
	objectKey,
}: QueryInputFactoryComponentProps) => {
	// const { type, id, label, options } = data;
	// const { objectKey, updateParameters } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	// const parameterFormState = useWatch({
	// 	name: parameterId,
	// });

	console.log("TYPE", { type });

	// We could / should have many
	// Convert to a Map?
	switch (type) {
		case "text":
			console.log("RERENDERED THIS BUGGER");
			return <EditTextInput id={parameterId} label={label} />;
		// should just be a behaviour / wrong place
		case "text-toggle":
			console.log("TEXT-TOGGLE");
			return <EditTextToggleInput id={parameterId} label={label} />;
		case "select":
			return (
				<EditSelectInput endpoints={options} id={parameterId} label={label} />
			);
		case "select-endpoint":
		case "text-endpoint":
		case "none":
		default:
			return <></>;
	}
};
