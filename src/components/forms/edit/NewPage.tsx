import React from "react";
import { Box } from "@mui/material";
import { HeaderForm } from "../../header/edit/HeaderForm";
import { PageForm } from "./PageForm";
import { EditContextProvider } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "../../loading/LoadingSpinner";
import { EditRouteForm } from "./EditRouteForm";

//Rename just to edit pages
//The concept of a 'new' page should be somewhat meaningless? - !!
//Or this is seperate to it's current use
//It would should have a route/endpoint
export const NewPage = () => {
	const { user, isLoading } = useUser();
	const username = user?.username || "";

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!user) {
		//redirect
		return <div>You are in the wrong place jebrony</div>;
	}

	return (
		<Box>
			<EditContextProvider currentPage={`/users/${username}`}>
				{/* Show available admin routes and change on select */}
				<EditRouteForm />
				{/* Header Edit would be a better name - show create header button if no header exists  */}
				<HeaderForm />
				{/* Show what route this is - if no associated page data then create new - ?? */}

				{/* Pass route in - Or create a temporary hash/map of pages with a key of the endpoint */}
				<PageForm />
			</EditContextProvider>
		</Box>
	);
};
