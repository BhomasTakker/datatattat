import { PageContextProvider } from "./context/page.context";
import { PageForm } from "./page-form";

// rename ...
export const PageFormContainer = () => {
	return (
		<PageContextProvider>
			<PageForm />
		</PageContextProvider>
	);
};
