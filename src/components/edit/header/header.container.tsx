import { HeaderContextProvider } from "./context/header.context";
import { HeaderLayout } from "./layout/header-layout";

export const HeaderContainer = () => {
	return (
		<HeaderContextProvider>
			<HeaderLayout />
		</HeaderContextProvider>
	);
};
