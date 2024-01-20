import { PageContextProvider } from "./context/page.context";
import { PageForm } from "./page-form";

// rename ...
// entirely useless - empty structure
export const PageFormContainer = () => {
	return (
		<PageContextProvider>
			<PageForm />
		</PageContextProvider>
	);
};
