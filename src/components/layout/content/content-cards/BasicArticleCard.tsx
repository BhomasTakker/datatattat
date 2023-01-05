import React from "react";
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
	width?: number | string | "inherit";
};

//Height and width aren't great.
//Need make responsive
//props width
const BasicArticleCard = ({
	height,
	width = "inherit",
}: BasicArticleCardProps) => {
	const onClickHandler = () => {
		console.log("clicked");
	};
	return (
		<Card
			sx={{
				height,
				width,
			}}
		>
			<CardActionArea onClick={onClickHandler}>
				<CardMedia
					component="img"
					alt="green iguana"
					height={height / 2}
					image="https://source.unsplash.com/random"
				/>
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
			</CardActionArea>
		</Card>
	);
};

export default BasicArticleCard;
