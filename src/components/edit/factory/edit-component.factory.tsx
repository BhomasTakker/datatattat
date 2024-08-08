import {
	COMPONENT_TYPES_MAP,
	COMPONENT_CONTAINERS_MAP,
} from "config/edit/component-types.map";
import { ReactElement } from "react";

interface EditComponentProps {
	type: string;
	id: string;
}

// this seems an abstraction too far no?
// We only have/need page and content components we don't need a factory
// It's concise but over complicated
// container is
export const EditFactoryComponent = ({
	type,
	id,
}: EditComponentProps): ReactElement => {
	if (!type) {
		return <></>;
	}

	// how to type this? We know what it is
	const typeMap = COMPONENT_TYPES_MAP.get(type); //[type]; // why is typeMap any...

	// get type object
	if (!typeMap) {
		return <></>;
	}

	if (!id) {
		return <></>;
	}

	// get id config
	// @ts-ignore / maybe don't want to lower case!
	// What was the reasoning in the first place?
	const componentConfig = typeMap[id];

	if (!componentConfig) {
		return <></>;
	}

	///////////////////////////////////////////////////////////////
	// Create Component with new config
	// This is a Container Component Page Component etc
	// Just props and components
	///////////////////////////////////////////////////////////////
	// componentProps, and components
	// Create factory to take option and type and return component
	// Effectively recurse me with a new config
	// this is literally endpoints and parameters again
	// but with props and components
	// const EditContainer = containerEditFactory(container);
	/////////////////////////////////////////
	const ComponentContainer = COMPONENT_CONTAINERS_MAP.get(type);
	if (!ComponentContainer) {
		return <></>;
	}

	// This shouldn't be just Page Component
	// guess what
	// just use a hash or a factory component
	return <ComponentContainer config={componentConfig} />;
};
