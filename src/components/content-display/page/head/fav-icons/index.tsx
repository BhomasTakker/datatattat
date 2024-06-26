type FavIcon = {
	rel: string;
	type: string;
	sizes: string;
	href: string;
};

interface FavIcons {
	icons: FavIcon[];
}
export const renderFavIcons = ({ icons }: FavIcons) => {
	// console.log("7598 FavIcons", { icons });
	return icons.map(({ rel, type, sizes, href }) => (
		<link
			key={`${href}&${sizes}`}
			rel={rel}
			type={type}
			href={href}
			sizes={sizes}
			data-rh="true"
		></link>
	));
};
