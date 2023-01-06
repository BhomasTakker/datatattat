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
} from "@mui/material";

//Create a simple banner card component
//make the text responsive and props etc
const Display1 = () => {
	return (
		<Card
			sx={{
				// height: 300,
				color: "white",
				backgroundColor: "primary.light",
				backgroundImage: "url('https://source.unsplash.com/1200x300')",
			}}
		>
			<CardActionArea>
				<CardContent>
					<Typography variant="h3" gutterBottom>
						Feature Heading
					</Typography>
					<Typography variant="h4">Feature sub description</Typography>
					<Typography variant="body1" gutterBottom>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
						explicabo aliquid. Praesentium, obcaecati? Reiciendis esse quae
						temporibus repellendus odio. Et delectus fuga corporis, aperiam
						numquam accusantium architecto autem quod explicabo?
					</Typography>
				</CardContent>
				<CardActions>
					<Typography variant="body2">
						Details about the creator, author, reporter, etc
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default Display1;
