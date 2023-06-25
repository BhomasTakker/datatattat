import { withEditFactory } from "@/src/factories/with-factory";
import { ReactElement } from "react";
import { useUnregisterForm } from "./hooks/useUnregisterForm";

// on onjectkey change
// unregister
// If this was an actual component
// We could just call unregister form
// Theoretically should work?
export const createWithEditComponent = (
	component: any,
	objectKey: string
): ReactElement => {
	//We should make this into a factory compoennt and call
	// useUnregisterForm(objectKey);

	if (!component) {
		return <></>;
	}

	//this should probably be injected
	const EditComponent = withEditFactory(component);

	if (!EditComponent) {
		//Error
		return (
			<div>
				There was an error
				{/* {component} */}
			</div>
		);
	}

	// console.log({ WITH_COMPONENT: objectKey });
	return <EditComponent objectKey={objectKey} />;
};
