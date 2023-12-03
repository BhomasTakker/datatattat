import {
	EditSelectInput,
	EditTextInput,
	EditTextToggleInput,
} from "./input-components";

type QueryInputData = {
	id: string;
	label: string;
	type: string;
	options: any[];
};

type QueryInputFactoryComponentProps = {
	queryInputData: QueryInputData;
	objectKey: string;
};

// Could just call this factory
// need pass props
export const QueryInputFactoryComponent = ({
	queryInputData,
	objectKey,
}: QueryInputFactoryComponentProps) => {
	const { type, id, label, options } = queryInputData;
	const parameterId = `${objectKey}.${id}`;

	// Used for Parameters - need update parameters to use the main edit etc
	// console.log("TYPE", { type });

	// We could / should have many
	// Convert to a Map?
	switch (type) {
		case "text":
			// pass queryInput data into a function
			return <EditTextInput id={parameterId} label={label} />;
		// should just be a behaviour / wrong place
		case "text-toggle":
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
