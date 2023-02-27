import React, { useContext, useEffect } from "react";
import {
	TextInputWithControl,
	TextInputWithControlAndInputBlocker,
} from "../../input/TextInput";
import { EditComponents } from "./EditComponents";
import { EditContainer } from "./EditContainer";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { getPageByRoute } from "@/src/queries/pages/get-page-queries";

export const PageEdit = () => {
	const editCtx = useContext(EditContext);
	const { user } = useUser();
	//nicer than ternary / get on the tip of tongue
	const username = user?.username || "";
	//This all seems very hacky...
	const { setValue, getValues, getFieldState, reset, resetField } =
		useFormContext();

	// const fieldState = getFieldState("route");
	const { currentPage } = editCtx;
	const pageRoute = currentPage ? `/${currentPage}` : "";

	useEffect(() => {
		//If we are just updating the endpoint??
		//We will need to mention that there will be a disconnect - but that might be what the user wants

		const route = `/users/${username}${pageRoute}`;
		async function getPageData() {
			let pageData;
			try {
				pageData = await getPageByRoute(route);
			} catch (error) {
				console.log(error);
			}
			const page = pageData?.page || {};
			console.log({ pageData });
			console.log({ page });
			//Actually working as a set too
			reset(
				{
					...page,
					route: `/users/${username}${pageRoute}`,
				},
				{
					keepValues: false,
				}
			);
		}

		//Set off a loading etc - don't want button presses
		getPageData();
		//Here load pageData for edit OR brand new page
		// If pageData then set content and components, etc, to the returned data
		// Will need update edits to be driven by the 'form' data but it should, in theory, work
		//if there is no data then it is just a new page
		// we may need to check on save etc but...
		// reset(
		// 	{
		// 		route: `/users/${username}${pageRoute}`,
		// 		content: {},
		// 	},
		// 	{
		// 		keepValues: false,
		// 	}
		// );
		// reset((formValues) => ({
		// 	// ...formValues,// is how we can save form values
		// 	route: `/users/${username}${pageRoute}`,
		// 	content: {
		// 		components: [],
		// 	},
		// }));
	}, [currentPage, username, pageRoute, reset]);

	//Why so many renders?
	// console.log({ root: getValues("route") });
	// console.log({ currentPage });
	// console.log({ fieldState });
	return (
		<>
			<TextInputWithControlAndInputBlocker
				label={"endpoint"}
				name={"route"}
				fullWidth={true}
				variant="outlined"
				// disabled={true}
				defaultValue={`/users/${username}${pageRoute}`}
				required={true}
				value={`/users/${username}${pageRoute}`}
			/>
			<EditContainer objectKey={`content.container`} />
			<EditComponents objectKey={"content"} />
		</>
	);
};
