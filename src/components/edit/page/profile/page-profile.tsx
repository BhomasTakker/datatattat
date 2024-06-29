//identical to - src\components\edit\page\meta\page-meta.edit.config.ts
// should just be a generic function - pass in config
import { EditInputList } from "../meta/input-list";
import { PROFILE_CONFIG } from "./page-profile.edit.config";

interface Props {
	objectKey: string;
}

export const PageProfile = ({ objectKey }: Props) => {
	const { props: profileProps } = PROFILE_CONFIG;
	return <EditInputList objectKey={objectKey} inputs={profileProps} />;
};
