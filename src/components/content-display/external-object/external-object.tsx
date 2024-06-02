// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
type ExternalObjectType = "application/pdf" | "video/mp4";

interface ExternalObject {
	type: ExternalObjectType;

	// Should be dependent on type ish
	// video type might have an image tag as a fallbacik
	data: string;
}

// Quick test - easy enough - what is available?
// Would need general content stuff
// We need to create a wrapper with edit jazz and adds interactives - add, like, etc.
// Some checks on what required!
export const ExternalObject = ({ type, data }: ExternalObject) => {
	return (
		<object type={type} data={data} width="600" height="400">
			{/* <img src="path/image.jpg" alt="useful image description" /> */}
		</object>
	);
};
