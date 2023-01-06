//Grids work well but are very basic
//They are effectively just flex box and use columns only
//Possibly Masonry
//but for our purposes it looks like best bet is to create grid component ourselves

/**
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

import React, { useEffect, useState } from "react";
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
	ImageList,
	ImageListItem,
} from "@mui/material";
import BasicArticleCard from "./content-cards/BasicArticleCard";
import styles from "./Display3.module.css";
import { screenSize } from "../../../store/screen/screenSlice";
import { useAppSelector } from "../../../store/hooks";

const Display3 = () => {
	//TODO
	//need memoize - this is redrawing every frame on move!!!
	// const size = useResponsiveSize();
	const size = useAppSelector(screenSize);

	//Grid works nicely but need sort out component properly
	//i.e. basic layout is great, everything else is trash

	let mainArticleHeight: number = 600;
	let gridTopHeight: number;
	let gridBottomHeight: number;

	switch (size) {
		case "xl":
		case "lg":
			gridTopHeight = 300;
			gridBottomHeight = 300;
			break;
		case "md":
			gridTopHeight = 300;
			gridBottomHeight = 600;
			break;
		case "sm":
		default:
			gridTopHeight = 600;
			gridBottomHeight = 600;
			break;
	}

	// console.log({ ResponseSize: size });
	// console.log({ dimensions });

	// console.log({ gridTopHeight });
	// console.log({ gridBottomHeight });
	//On small screens should all be 600?
	//seems unavoidable that height needs setting?

	//You can use custom themes to change default themes for 'this' component
	//by wrapping components in a theme provider
	//It looks like I could mod box
	//but then wouldn't all sub themes also be chnaged - probably
	return (
		// <ImageList cols={8} rowHeight={300} variant="quilted">
		// 	<ImageListItem cols={4} rows={2}>
		// 		<BasicArticleCard height={mainArticleHeight} />
		// 	</ImageListItem>
		// 	<ImageListItem cols={2} rows={1}>
		// 		<BasicArticleCard height={gridTopHeight} />
		// 	</ImageListItem>
		// 	<ImageListItem cols={2} rows={1}>
		// 		<BasicArticleCard height={gridTopHeight} />
		// 	</ImageListItem>
		// 	<ImageListItem cols={2} rows={1}>
		// 		<BasicArticleCard height={gridBottomHeight} />
		// 	</ImageListItem>
		// 	<ImageListItem cols={2} rows={1}>
		// 		<BasicArticleCard height={gridBottomHeight} />
		// 	</ImageListItem>
		// </ImageList>

		<Box>
			<div className={styles.gridContainer}>
				<div className={styles.gridItemMain}>
					<BasicArticleCard height={mainArticleHeight} />
				</div>

				<div className={styles.gridItemTop}>
					<BasicArticleCard height={gridTopHeight} />
				</div>
				<div className={styles.gridItemTop}>
					<BasicArticleCard height={gridTopHeight} />
				</div>
				<div className={styles.gridItemBottom}>
					<BasicArticleCard height={gridBottomHeight} />
				</div>
				<div className={styles.gridItemBottom}>
					<BasicArticleCard height={gridBottomHeight} />
				</div>
			</div>
		</Box>
	);
};

export default Display3;
