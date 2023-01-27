import { TanTable } from "./TanTable";
import { withQuery } from "./withQuery";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Create a Controller
const queryClient = new QueryClient();

export default {
	title: "Components/content/test/TanTable",
	component: TanTable,
};
const El = withQuery(TanTable);

export const Display = () => (
	<QueryClientProvider client={queryClient}>
		<El />
	</QueryClientProvider>
);
