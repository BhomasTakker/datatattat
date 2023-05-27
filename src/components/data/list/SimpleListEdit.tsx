import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { Typography, Box } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";
import { createWithEditComponent } from "../../edit/with-edit-component";
import { Title } from "../../ui/title";
import { TitleVariant } from "../../types/ui";
import { WithInfo } from "../../edit/info/WithInfo";
import { MARGINS } from "config/styles/styles.config";

// We need to pass an id through
// a for unique id b
export const SimpleListEdit = ({ objectKey }: BaseEditProps) => {
	const { control } = useFormContext();
	//These are dangerous
	//When set as i.e. an object (_with)
	//if subsequently the _with object checges it counts as this _with changing!
	//Clever but dumb!
	const withComponent = useWatch({
		control,
		name: `${objectKey}._with.type`,
	});

	// console.log({ ONJECT_KEY: objectKey });
	return (
		<Box marginLeft={MARGINS.MIDLARGE}>
			{/* At most use a title component - options can then say - turn all off */}
			{/* <Typography variant="h3">SimpleList</Typography> */}
			{/* If we have a title for Simple list etc then we can easily add an info tag and expand that to show info text */}
			<WithInfo infoId="SimpleList">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="Simple List" />
			</WithInfo>

			{/* Header or title / same thing - different? */}
			<Title variant={TitleVariant.SUB} text="Component Properties" />
			<Box marginLeft={MARGINS.MIDLARGE}>
				{/* With Info add an info button and link to data  */}
				<SelectInputWithControl
					label="Component Id"
					name={`${objectKey}.componentProps.componentId`}
					fullWidth={true}
					required
					// onChange={changeHandler}
				>
					{/* //This needs to be item components - i.e. article list item, article card, article stub, etc */}
					{/* Would you / Could you distinguish between list and say layout components - should you */}
					{createSelectInputList(COMPONENTS)}
				</SelectInputWithControl>
			</Box>
			<Title variant={TitleVariant.SUB} text="With (Select behaviour)" />
			<SelectInputWithControl
				// label="Component Id"
				name={`${objectKey}._with.type`}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(EDIT_WITH)}
			</SelectInputWithControl>
			{createWithEditComponent(withComponent, `${objectKey}._with`)}
		</Box>
	);
};
