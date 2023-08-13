import { useContext } from "react";
import { ContentComponentContext } from "./context/content-component.context";

export const ContentComponent = () => {
	const { config } = useContext(ContentComponentContext);
	console.log("FEATURE:404", "CONTENT:COMPONENT", { config });
	return <>Content Component</>;
};
