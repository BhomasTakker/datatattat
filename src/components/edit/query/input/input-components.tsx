import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { WithInfo } from "../../info/WithInfo";
import { createSelectInputList } from "@/src/components/input/TextInput";

type EditSelectInputProps = {
	endpoints: any[];
	id: string;
	label: string;
	info?: string;
	infoId?: string;
};

// Replace use with edit select
export const EditSelectInput = ({
	endpoints,
	id,
	label,
}: EditSelectInputProps) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<SelectInputWithControl label={label} name={id} fullWidth={true} required>
				{createSelectInputList(endpoints)}
			</SelectInputWithControl>
		</WithInfo>
	);
};

EditSelectInput.displayName = "EditSelectInput";
