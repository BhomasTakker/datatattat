import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	Box,
	Typography,
	Stack,
	Card,
	CardContent,
	CardHeader,
	CardActionArea,
	CardActions,
	CardMedia,
} from "@mui/material";

type BasicArticleCardProps = {
	height: number;
};

//Height and width aren't great.
const BasicArticleCard = ({ height }: BasicArticleCardProps) => {
	const onClickHandler = () => {
		// console.log("clicked");
	};

	return (
		<Card>
			<CardActionArea onClick={onClickHandler}>
				<Box height={"50%"}>
					<CardMedia
						component="img"
						alt="green iguana"
						sx={{ height: height / 2 }}
						image="https://source.unsplash.com/random"
					/>
				</Box>

				<Stack justifyContent={"space-between"} height={height / 2}>
					<CardContent>
						{/* props header variant */}
						<Typography variant="h4" gutterBottom>
							Article Heading
						</Typography>
						<Typography variant="body1">Article sub description</Typography>
					</CardContent>
					<CardActions>
						<Typography variant="body2">About Details</Typography>
					</CardActions>
				</Stack>
			</CardActionArea>
		</Card>
	);
};

export default BasicArticleCard;
