import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Counter from "../features/counter/Counter";
import Display1 from "../components/layout/content/Display1";
import Display2 from "../components/layout/content/Display2";
import { Stack } from "@mui/material";
import Display3 from "../components/layout/content/Display3";
export default function Home() {
	return (
		<>
			<Head>
				<title>Bad Dog Digital</title>
				<meta name="description" content="First rendition" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Stack spacing={2}>
					<Counter />
					<Display1 />
					<Display2 />
					{/* Mui Grid is a little too simplistic */}
					<Display3 />
				</Stack>
			</main>
		</>
	);
}
