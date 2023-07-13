import React, { useEffect } from "react";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { useFormContext } from "react-hook-form";
import { withEditFactory } from "@/src/factories/with-factory";

export const IframelyOembedEdit = ({ objectKey }: BaseEditProps) => {
	const formId = `${objectKey}._with`;
	const { setValue } = useFormContext();

	useEffect(() => {
		setValue(`${formId}.type`, "iframely-oembed-query");
	}, [formId, setValue]);

	const OembedEditComponent = withEditFactory("iframely-oembed-query");

	if (!OembedEditComponent) {
		//Error
		return (
			<div>
				There was an error
				{/* {component} */}
			</div>
		);
	}

	return <OembedEditComponent objectKey={formId} />;
};
