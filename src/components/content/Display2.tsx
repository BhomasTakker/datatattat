import React from "react";
import { Stack, Grid, Box } from "@mui/material";
import BasicArticleCard from "./content-cards/BasicArticleCard";

//This style - as a grid - works very well
//need modify height i.e. maxHeight and make the content responsive

const Display2 = () => {
	return (
		// Need make responsive / this should be grid
		<Grid container>
			<Grid item xs={12} sm={12} md={6} lg={4}>
				<BasicArticleCard height={300} />
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={4}>
				<BasicArticleCard height={300} />
			</Grid>

			<Grid item xs={12} sm={12} md={12} lg={4}>
				<BasicArticleCard height={300} />
			</Grid>
		</Grid>
	);
};

export default Display2;
