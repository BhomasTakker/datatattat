import { useContext } from "react";
import { ContentComponentContext } from "../content/context/content-component.context";
import { withEditFactory } from "@/src/factories/with-factory";

export const WithComponentFactory = () => {
	// Component form data needs typing / we at least know some
	const { withComponentType, withFormId } = useContext(ContentComponentContext);
	// Probably validate given data
	// Also type this thing
	const Component = withEditFactory(withComponentType);

	if (!Component) {
		return (
			<div>
				There was an error
				{/* {component} */}
			</div>
		);
	}

	console.log("FEATURE:215", "WITH:COMPONENT:FACTORY", {
		withComponentType,
	});

	return <Component objectKey={withFormId} />;
};
