interface MinMaxWidth {
	minWidth?: string;
	maxWidth?: string;
}

export const minMaxWidth = ({
	minWidth = "400px",
	maxWidth = "100%",
}: MinMaxWidth = {}) => ({
	minWidth,
	maxWidth,
});

// would be pass in preset to have any value
// i.e. Card
export const widthObject = () => ({
	width: "100%",
});
