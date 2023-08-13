import { Stack } from "@mui/material";
import { WithInfo } from "../info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { PropsList } from "./list/props-list";

export const ComponentProps = () => {
	return (
		<Stack>
			<WithInfo info="Parameters you can use to customise your chosen page container">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="Component Props" />
			</WithInfo>
			<PropsList />
		</Stack>
	);
};
