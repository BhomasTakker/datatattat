// TEXT.SIZES.SMALL ??

//We want to use different values when phone etc

export enum MARGINS {
	NONE = 0,
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

// Widths?
export enum LAYOUT {
	auto = "auto",
	xxl = 1200,
	xl = 900,
	lg2 = 750,
	lg = 600,
	ml = 450,
	m = 300,
	ms = 200,
	sm = 150,
	xs = 100,
	xxs = 75,
	t = 50,
	xt = 25,

	zero = 0,

	full = "100%",
	half = "50%",
	quart = "25%",
	threeQuart = "75%",
	third = "33%",
	twoThird = "66%",

	twenty = "20%",
	forty = "40%",
	sixty = "60%",
	eighty = "80%",
}

// We probably want a minimal set for whatever we use
// Think banner like a 4 / 1 or something
export enum ASPECT_RATIO {
	sixteenNine = "16 / 9",
	nineSixteen = "9 / 16",

	fiveFour = "5 / 4",
	fourFive = "4 / 5",
	fourThree = "4 / 3",
	threeFour = "3 / 4",
	threeTwo = "3 / 2",
	twoThree = "2 / 3",
	oneOne = "1 / 1",
}
