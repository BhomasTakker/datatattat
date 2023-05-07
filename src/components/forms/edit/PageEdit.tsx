import React, { useContext, useEffect } from "react";
import { TextInputWithControlAndInputBlocker } from "../../input/TextInput";
import { EditComponents } from "./EditComponents";
import { EditContainer } from "./EditContainer";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { getPageByRoute } from "@/src/queries/pages/get-page-queries";

export const PageEdit = () => {
	const editCtx = useContext(EditContext);
	const { user } = useUser();
	const username = user?.username || "";

	const { reset } = useFormContext();

	const { currentPage } = editCtx;

	useEffect(() => {
		//If we are just updating the endpoint??
		//We will need to mention that there will be a disconnect - but that might be what the user wants
		console.log("GET PAGE DATA CALLED");

		const route = `${currentPage}`;
		// editCtx.setCurrentPageHandler(route);
		async function getPageData() {
			let pageData;
			try {
				console.log({ getRoute: route });
				pageData = await getPageByRoute(route);
			} catch (error) {
				console.log(error);
			}
			const page = pageData?.page || {};

			console.log({ route });
			console.log({ pageData });

			reset(
				{
					...page,
					route: `${currentPage}`,
				},
				{
					keepValues: false,
				}
			);
		}

		getPageData();
	}, [currentPage, reset, username]); //, username, pageRoute, reset, editCtx

	//Need a better way of calling withs HOCs
	return (
		<>
			<TextInputWithControlAndInputBlocker
				label={"endpoint"}
				name={"route"}
				fullWidth={true}
				variant="outlined"
				defaultValue={`/users/${username}${currentPage}`}
				required={true}
				value={`/users/${username}${currentPage}`}
			/>
			<EditContainer objectKey={`content.container`} />
			<EditComponents objectKey={"content"} />
		</>
	);
};
