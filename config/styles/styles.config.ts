// TEXT.SIZES.SMALL ??

//We want to use different values when phone etc

export enum MARGINS {
	VSMALL = "0.25rem",
	SMALL = "0.5rem",
	MIDSMALL = "1rem",
	MID = "1.5rem",
	MIDLARGE = "2rem",
	LARGE = "2.5rem",
}

//On mobile STANDARD_LEFT, etc needs to be 0
export enum INFO_MARGINS {
	STANDARD_LEFT = "22%", //"11rem", / this is dirty but it looks good! / not quite % very variable! / vw would be more stable
	//
	STANDARD_RIGHT = "3rem",
	TOGGLE_RIGHT = "6rem",
	ARRAY_CONTROLS_RIGHT = "13rem",
}
