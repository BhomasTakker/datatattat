import { EditInputList } from "./input-list";
import { META_CONFIG } from "./page-meta.edit.config";

interface Props {
	objectKey: string;
}

// This isn't actually meta - this is just the Head
// meta will be a component...
export const PageMeta = ({ objectKey }: Props) => {
	const { props: metaProps } = META_CONFIG;
	return <EditInputList objectKey={objectKey} inputs={metaProps} />;
};
