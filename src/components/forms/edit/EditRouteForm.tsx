import { useUser } from "@/src/hooks/useUser";
import { useContext, useEffect } from "react";
import { EditContext } from "@/src/context/edit-context";

export const EditRouteForm = () => {
	const { user } = useUser();
	const { setCurrentPageHandler } = useContext(EditContext);

	useEffect(() => {
		if (user && user.role === "admin") {
			setCurrentPageHandler("/");
		}
	}, [user, setCurrentPageHandler]);

	//Add array of available routes here to select from
	return <></>;
};
