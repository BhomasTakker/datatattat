import { Html, Head, Main, NextScript } from "next/document";
import { setCode, setLog } from "../lib/logger";

/////////////////////
// Call a function
// Check mode dev etc
// check .env for code ? etc
////////////////////
setLog(true);
setCode("FEATURE:0010");
//////////////////////////

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
