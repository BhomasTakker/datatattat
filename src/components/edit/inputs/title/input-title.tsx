import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";

type InputTitleProps = {
	title: string;
};

export const InputTitle = ({ title }: InputTitleProps) => {
	return <Title text={title} variant={TitleVariant.EDIT_COMPONENT} />;
};
