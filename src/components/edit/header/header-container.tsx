import { HeaderContextProvider } from "./context/header.context";
import { HeaderForm } from "./header-form";

export const HeaderContainer = () => {
	return (
		<HeaderContextProvider>
			<HeaderForm />
		</HeaderContextProvider>
	);
};
