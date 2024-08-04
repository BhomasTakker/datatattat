import { useContext } from "react";
import { PageContainerContext } from "../context/container/page-container.context";
import { Box } from "@mui/material";
import { EditFactoryComponent } from "../../factory/edit-component.factory";
import { SelectInput } from "../../inputs/select/select-input";

// Edit Container
export const PageContainer = () => {
	const { container, containerTypeKey, config } =
		useContext(PageContainerContext);

	const { select, info, label, type } = config;

	return (
		<Box>
			<SelectInput
				info={info}
				id={containerTypeKey}
				label={label}
				options={select}
			/>
			<EditFactoryComponent type={type} id={container} />
		</Box>
	);
};
