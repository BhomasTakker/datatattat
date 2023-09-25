import { Box, Button, Container, Modal } from "@mui/material";
import { useContext, useState } from "react";
import { EditComponentContext } from "../context/edit-component.context";
import { useWatch } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import { FactoryComponent } from "@/src/components/content-display/component/factory/component.factory";

export const ComponentPreviewModal = () => {
	const [isVisible, setIsVisiible] = useState(false);
	const { componentTypeFormId, objectKey } = useContext(EditComponentContext);
	// Probably get in context and heave on up
	const component = useWatch({
		name: objectKey,
	});

	if (!isVisible) {
		return <Button onClick={() => setIsVisiible(true)}>Open modal</Button>;
	}

	console.log("FEATURE:1425", { component });

	return (
		<Modal
			open={isVisible}
			onClose={() => setIsVisiible(false)}
			aria-labelledby="modal-component-preview"
			aria-describedby="modal-what-is-this"
		>
			<Container>
				<Box marginTop={MARGINS.LARGE} width={"100%"} bgcolor={"white"}>
					{/* Layout needs work - lol you shock me boy! */}
					<FactoryComponent data={component} />
				</Box>
			</Container>
		</Modal>
	);
};
