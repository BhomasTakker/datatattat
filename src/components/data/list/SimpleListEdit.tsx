import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { Box, Stack } from "@mui/material";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";
import { createWithEditComponent } from "../../edit/with-edit-component";
import { Title } from "../../ui/title";
import { TitleVariant } from "../../types/ui";
import { WithInfo } from "../../edit/info/WithInfo";
import { MARGINS } from "config/styles/styles.config";
import { useQuery } from "@tanstack/react-query";
import { clientsideFetch } from "@/src/api/clientside-fetch";

// const componentsSelectInputList = createSelectInputList(COMPONENTS);
// const withSelectInputList = createSelectInputList(EDIT_WITH);
// We need to pass an id through
// a for unique id b
// So whenever form updates / this component and all children will be re-rendered because that is how context works
// We need to use emo on children to protect them from unnecessary re-renders
// we will re-render regardless
export const SimpleListEdit = memo(
	({ objectKey }: BaseEditProps) => {
		////////////////////////////////////////////////////
		// You could type simpleListInfo / need to really
		// This would re-render the whole component when info loaded
		// not sure that would be the correct aproach / here maybe not / or use useMemo for the function uses
		/////////////////////////////////////////////////////////
		// Sure it could be better / should be neater but it works
		// Arguably create a hook for this - sure it's small but it'll be repeated {data, errors, status} = useClientQuery(key, url, params)
		const { data: simpleListInfo } = useQuery({
			queryKey: ["SimpleListInfo"],
			queryFn: () => clientsideFetch({ url: "api/info/get/SimpleList" }),
		});

		// console.log("RENDER ME AGAIN ", {
		// 	description: simpleListInfo?.description,
		// });
		// const { control } = useFormContext();
		const componentsSelectInputList = useMemo(() => {
			// console.log("WE SHOULD RENDER ONCE");
			return createSelectInputList(COMPONENTS);
		}, []);
		const withSelectInputList = useMemo(
			() => createSelectInputList(EDIT_WITH),
			[]
		);

		const [withEditComponent, setWithEditComponent] = useState(<></>);
		// createWithEditComponent(withComponent, `${objectKey}._with`)

		//These are dangerous
		//When set as i.e. an object (_with)
		//if subsequently the _with object checges it counts as this _with changing!
		//Clever but dumb!
		const withComponent = useWatch({
			// control,
			name: `${objectKey}._with.type`,
		});

		useEffect(() => {
			setWithEditComponent(
				createWithEditComponent(withComponent, `${objectKey}._with`)
			);
		}, [withComponent, objectKey]);

		// console.log("SIMPLE LIST RE-RENDER");

		// console.log({ ONJECT_KEY: objectKey });
		return (
			//  marginLeft={MARGINS.MIDLARGE}
			<Stack gap={MARGINS.SMALL}>
				{/* At most use a title component - options can then say - turn all off */}
				{/* <Typography variant="h3">SimpleList</Typography> */}
				{/* If we have a title for Simple list etc then we can easily add an info tag and expand that to show info text */}
				<WithInfo info={simpleListInfo?.description || "loading"}>
					<Title variant={TitleVariant.EDIT_COMPONENT} text="Simple List" />
				</WithInfo>

				{/* Header or title / same thing - different? */}
				{/* <Title variant={TitleVariant.SUB} text="Component Properties" /> */}
				{/* marginLeft={MARGINS.MIDLARGE} */}
				<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
					{/* Could/Should we update infoId on the choice made? */}
					<WithInfo info={simpleListInfo?.items?.componentId}>
						{/* With Info add an info button and link to data  */}

						<SelectInputWithControl
							label="Component Id"
							name={`${objectKey}.componentProps.componentId`}
							fullWidth={true}
							required
							// onChange={changeHandler}
						>
							{/* //This needs to be item components - i.e. article list item, article card, article stub, etc */}
							{/* Would you / Could you distinguish between list and say layout components - should you */}
							{/* {createSelectInputList(COMPONENTS)} */}
							{componentsSelectInputList}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				{/* <Title variant={TitleVariant.SUB} text="With (Select behaviour)" /> */}
				<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
					<WithInfo infoId="withBehaviour">
						<SelectInputWithControl
							label="With Behaviour"
							name={`${objectKey}._with.type`}
							fullWidth={true}
							required
							// onChange={changeHandler}
						>
							{/* {createSelectInputList(EDIT_WITH)} */}
							{withSelectInputList}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				{withEditComponent}
				{/* {createWithEditComponent(withComponent, `${objectKey}._with`)} */}
			</Stack>
		);
	},
	// Effectively don't ever re-render me
	// I look after myself
	// My parent might get re-rendered and that is how I get deleted, moved etc
	(prev, next) => prev.objectKey === next.objectKey
);

SimpleListEdit.displayName = "SimpleListEdit";
