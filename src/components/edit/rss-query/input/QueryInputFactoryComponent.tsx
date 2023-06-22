import { EditSelectInput, EditTextInput } from "../RssInputComponents";

type QueryInputFactoryComponentProps = {
	id: string;
	label: string;
	type: string;
	objectKey: string;
	options: any[];
};

// Could just call this factory
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

	// We could should have many
	// Convert to a Map
	switch (type) {
		case "text":
			console.log("RERENDERED THIS BUGGER");
			return <EditTextInput id={parameterId} label={label} />;

		case "select":
			return (
				<EditSelectInput endpoints={options} id={parameterId} label={label} />
			);
		default:
			return <></>;
	}
};
