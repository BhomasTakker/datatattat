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
import { screenSize } from "../../store/screen/screenSlice";
import { useAppSelector } from "../../store/hooks";

const Display3 = () => {
	const size = useAppSelector(screenSize);

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

	return (
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
