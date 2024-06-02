import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { EditInputList } from "../../page/meta/input-list";

type Props = {
	id: string;
	inputs: UnknownObject[]; // we need types for this
};

export const InputList = (props: Props) => {
	const { id, inputs } = props;
	return <EditInputList objectKey={id} inputs={inputs} />;
};
