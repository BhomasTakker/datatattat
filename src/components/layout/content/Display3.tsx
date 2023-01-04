//Grids work well but are very basic
//They are effectively just flex box and use columns only
//Possibly Masonry
//but for our purposes it looks like best bet is to create grid component ourselves

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
	Grid,
} from "@mui/material";
import BasicArticleCard from "./content-cards/BasicArticleCard";

const Display3 = () => {
	return (
		<Stack direction={{ md: "row", sm: "column" }} spacing={1}>
			{/* <BasicArticleCard height={600} width={"50%"} />
			<Stack direction={"column"} spacing={1}>
				<Stack direction={"row"} spacing={1}>
					<BasicArticleCard height={295} width="100%" />
					<BasicArticleCard height={295} width="100%" />
				</Stack>
				<Stack direction={"row"} spacing={1}>
					<BasicArticleCard height={295} width="50%" />
					<BasicArticleCard height={295} width="50%" />
				</Stack>
			</Stack> */}
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={6}>
					<BasicArticleCard height={600} width="100%" />
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={12} lg={6}>
							<BasicArticleCard height={295} width="100%" />
						</Grid>
						<Grid item xs={12} md={12} lg={6}>
							<BasicArticleCard height={295} width="100%" />
						</Grid>
						<Grid item xs={12} md={12} lg={6}>
							<BasicArticleCard height={295} width="100%" />
						</Grid>
						<Grid item xs={12} md={12} lg={6}>
							<BasicArticleCard height={295} width="100%" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default Display3;
