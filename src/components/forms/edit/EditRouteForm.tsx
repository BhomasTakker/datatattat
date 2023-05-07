import { useUser } from "@/src/hooks/useUser";
import { useContext, useEffect } from "react";
import { EditContext } from "@/src/context/edit-context";

export const EditRouteForm = () => {
	const { user } = useUser();
	const { setCurrentPageHandler, currentPage } = useContext(EditContext);

	useEffect(() => {
		//this thing

		if (user && user.role === "admin") {
			if (currentPage?.includes(user.username)) {
				setCurrentPageHandler("/");
			}
		}
	}, [user, setCurrentPageHandler]);

	//Add array of available routes here to select from
	return <></>;
};
