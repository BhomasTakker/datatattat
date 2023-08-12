import { COMPONENT_TYPES_MAP } from "config/edit/component-types.map";
import { ReactElement } from "react";
import { PageComponentContainer } from "../page/component/page-component.container";

interface EditComponentProps {
	type: string;
	id: string;
}

// container is
export const EditComponent = ({
	type,
	id,
}: EditComponentProps): ReactElement => {
	console.log(
		"FEATURE:110",
		"DYNAMIC:CONFIG",
		"EDIT:COMPONENT",
		{ type },
		{ id }
	);
	if (!type) {
		return <></>;
	}

	// how to type this? We know what it is
	// @ts-ignore
	const typeMap = COMPONENT_TYPES_MAP[type]; // why is typeMap any...

	console.log("FEATURE:110", "DYNAMIC:CONFIG", "EDIT:COMPONENT", { typeMap });

	// get type object
	if (!typeMap) {
		return <></>;
	}

	if (!id) {
		return <></>;
	}

	// get id config
	const componentConfig = typeMap[id.toLowerCase()];

	console.log("FEATURE:110", "DYNAMIC:CONFIG", "EDIT:COMPONENT", {
		componentConfig,
	});

	if (!componentConfig) {
		return <></>;
	}

	//basically call our generic with a new config
	console.log(
		"FEATURE:110",
		"DYNAMIC:CONFIG",
		"EDIT:COMPONENT",
		"CREATE:COMPONENT"
	);

	///////////////////////////////////////////////////////////////
	// Create Component with new config
	// This is a COntainer Component Page Component etc
	// Just props and components
	///////////////////////////////////////////////////////////////
	// componentProps, and components
	// Create factory to take option and type and return component
	// Effectively recurse me with a new config
	// this is literally endpoints and parameters again
	// but with props and components
	// const EditContainer = containerEditFactory(container);

	return <PageComponentContainer config={componentConfig} />;
};
