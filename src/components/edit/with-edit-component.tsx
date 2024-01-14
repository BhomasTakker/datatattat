import { withEditFactory } from "@/src/factories/with-factory";
import { ReactElement } from "react";

//////////////////////////////////////////////////////////
// DELETE ME//////////////////////////////////////////////
//////////////////////////////////////////////////////////

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

	return <EditComponent objectKey={objectKey} />;
};
