import Typography from "@mui/material/Typography";
import React from "react";
import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Stack,
} from "@mui/material";

//this is still dependent upon being used with a list though
export const BasicArticle = ({ data }: any) => {
	const { title, url, image, description, author, published, source } = data;

	const { id, name } = source;

	const onClickHandler = () => {
		console.log("clicked");
	};

	return (
		<Card>
			<CardActionArea onClick={onClickHandler}>
				<Box height={"50%"}>
					<CardMedia
						component="img"
						alt={description}
						// sx={{ height: 100% }}
						image={image}
					/>
				</Box>
				<Stack justifyContent={"space-between"} height={"50%"}>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							{title}
						</Typography>
					</CardContent>
					<CardActions>
						<Typography variant="body2">{published}</Typography>
					</CardActions>
				</Stack>
			</CardActionArea>
		</Card>
	);
};
