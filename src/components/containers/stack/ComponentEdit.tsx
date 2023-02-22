import { componentEditFactory } from "@/src/factories/component-factory";
import { EDIT_COMPONENTS } from "@/src/factories/components";
import { MenuItem, Container } from "@mui/material";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";

export const ComponentEdit = ({ objectKey }: BaseEditProps) => {
	const { control } = useFormContext();
	const component = useWatch({
		control,
		name: `${objectKey}.componentType`,
	});
	const createComponentList = () => {
		return Object.keys(EDIT_COMPONENTS).map((container) => (
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};
	const createComponent = (component: any): ReactElement => {
		// console.log({ COMPONENTID: component });
		if (!component) {
			return <></>;
		}

		const EditComponent = componentEditFactory(component);

		if (!EditComponent) {
			//Error
			return <div>{component}</div>;
		}

		return <EditComponent objectKey={objectKey} />;
	};
	return (
		<Container>
			<SelectInputWithControl
				label="Select Component"
				name={`${objectKey}.componentType`}
				fullWidth={true}
				required
			>
				{createComponentList()}
			</SelectInputWithControl>
			{createComponent(component)}
		</Container>
	);
};
