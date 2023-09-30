import { PageContextProvider } from "./context/page.context";
import { PageForm } from "./page-form";

// rename ...
export const PageFormContainer = () => {
	console.log("ISSUE:12345", "PAGE:FORM:CONTAINER");
	return (
		<PageContextProvider>
			<PageForm />
		</PageContextProvider>
	);
};
