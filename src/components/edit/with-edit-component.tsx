import { withEditFactory } from "@/src/factories/with-factory";
import { ReactElement } from "react";

export const createWithEditComponent = (
	component: any,
	objectKey: string
): ReactElement => {
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
