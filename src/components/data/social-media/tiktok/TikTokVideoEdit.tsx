import { createWithEditComponent } from "@/src/components/edit/with-edit-component";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { EDIT_WITH } from "@/src/factories/with";
import { Container, Typography } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";

export const TikTokVideoEdit = ({ objectKey }: BaseEditProps) => {
	const { control } = useFormContext();

	const withComponent = useWatch({
		control,
		name: `${objectKey}._with.type`,
	});

	return (
		<Container>
			<Typography variant="h3">TikTok Video</Typography>
			<Typography>With (Select behaviour)</Typography>
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
		</Container>
	);
};
