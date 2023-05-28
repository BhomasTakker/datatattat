//More of a layout no?

import {
	Box,
	IconButton,
	Stack,
	Accordion,
	AccordionDetails,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { InfoProps, TextVariant } from "../../types/ui";
import { MARGINS } from "config/styles/styles.config";
import { Text } from "../../ui/text";

export const WithInfo = ({
	children,
	info = "",
	infoId = "",
}: InfoProps): ReactElement => {
	const [infoDisplay, setInfoDisplay] = useState(info);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		//perhaps manage better / bur seems to work well
		//We need a loading spinner and a timeout
		const fetchInfo = async () => {
			if (!infoId || !isOpen) return;
			const result = await fetch(`api/info/get/${infoId}`);
			const response = await result.json();

			//error check
			// console.log({ response });

			setInfoDisplay(
				response?.description ||
					"No Description available - Why don't you create some? Go to ***** and submit your description you could earn credits for doing so"
			);
		};
		if (!info && !infoDisplay) fetchInfo();
	}, [info, infoDisplay, infoId, isOpen]);

	const onClickHandler = () => setIsOpen((currentState) => !currentState);

	return (
		<Accordion expanded={isOpen}>
			<Stack
				direction={"row"}
				justifyContent="space-between"
				alignItems="center"
			>
				{children}
				<Box height={MARGINS.MID}>
					<IconButton
						aria-label="Info"
						onClick={() => onClickHandler()}
						color="info"
					>
						<InfoIcon />
					</IconButton>
				</Box>
			</Stack>
			<AccordionDetails>
				<Text variant={TextVariant.DESCIPTION} text={infoDisplay} />
			</AccordionDetails>
		</Accordion>
	);
};
