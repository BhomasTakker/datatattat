import { PageContextProvider } from "./context/page.context";
import { PageForm } from "./page-form";

export const PageContainer = () => {
	return (
		<PageContextProvider>
			<PageForm />
		</PageContextProvider>
	);
};
