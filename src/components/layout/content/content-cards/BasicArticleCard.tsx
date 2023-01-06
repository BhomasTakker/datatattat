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
//Need make responsive
//props width
const BasicArticleCard = ({ height }: BasicArticleCardProps) => {
	//need mui types
	// const targetRef = useRef<any>(null);

	//custom hook give ref get dimensions
	// const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	// const cardHeight = dimensions.height || "inherited";
	// const halfHeight =
	// 	typeof cardHeight === "number" ? cardHeight / 2 : "inherited";

	// useEffect(() => {
	// 	if (targetRef.current) {
	// 		setDimensions({
	// 			width: targetRef.current.offsetWidth,
	// 			height: targetRef.current.offsetHeight,
	// 		});
	// 	}
	// }, []);
	///////////////////////////////////
	// console.log({ dimensions });
	const onClickHandler = () => {
		console.log("clicked");
		// console.log({ height: dimensions.height });
		// console.log({ cardHeight });
		// console.log({ halfHeight });
	};
	// console.log("render");
	return (
		<Card
		// ref={targetRef}
		// sx={{
		// 	height: cardHeight,
		// }}
		>
			<CardActionArea onClick={onClickHandler}>
				<Box height={"50%"}>
					<CardMedia
						component="img"
						alt="green iguana"
						sx={{ height: height / 2 }}
						// sx={{ height: "50%" }}
						// sx={{ height: halfHeight }}
						// height={dimensions.height / 2}
						// height={height / 2}
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
