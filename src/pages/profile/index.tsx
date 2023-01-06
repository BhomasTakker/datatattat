import Head from "next/head";
import { Stack, Typography } from "@mui/material";
export default function Home() {
	return (
		<>
			<Head>
				{/* This needs storing and doing properly */}
				<title>Bad Dog Digital</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Typography variant="h1">User Profile Page</Typography>
			</main>
		</>
	);
}
