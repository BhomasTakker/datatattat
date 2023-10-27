interface MinMaxWidth {
	minWidth?: string;
	maxWidth?: string;
}

export const minMaxWidth = ({
	minWidth = "400px",
	maxWidth = "100%",
}: MinMaxWidth) => ({
	minWidth,
	maxWidth,
});
