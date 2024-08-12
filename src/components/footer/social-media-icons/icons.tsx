import { BsTwitterX } from "react-icons/bs";
import { TfiReddit } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { TbBrandRumble } from "react-icons/tb";
import { FaTumblr } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TbBrand4Chan } from "react-icons/tb";
import { SiUdemy } from "react-icons/si";
import { FaTwitch } from "react-icons/fa6";
import { SiOnlyfans } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { FaVimeo } from "react-icons/fa6";
import { SiDailymotion } from "react-icons/si";

import { FcBbc } from "react-icons/fc";
import { SiNewyorktimes } from "react-icons/si";
import { SiCbs } from "react-icons/si";
import { SiCnn } from "react-icons/si";
import { TbBrandGuardian } from "react-icons/tb";

import styles from "./icons.module.scss";
// we are missing logos
// We need a better supplier

import Link from "next/link";

const iconsList = [
	{
		link: "https://x.com/datatattat",
		icon: BsTwitterX,
	},
	{
		link: "https://www.reddit.com/user/datatattat/",
		icon: TfiReddit,
	},
	{
		link: "https://www.youtube.com/@RickAstleyYT",
		icon: FaYoutube,
	},
	{
		link: "https://open.spotify.com/user/31f53zn4qds7oykh55x5ps735qoi",
		icon: FaSpotify,
	},
	{
		link: "https://www.mixcloud.com/datatattat/",
		icon: FaMixcloud,
	},
	{
		link: "https://www.instagram.com/jeremycorbyn/",
		icon: FaInstagram,
	},
	{
		link: "https://www.threads.net/@elonmusksjet",
		icon: FaThreads,
	},
	{
		link: "https://www.facebook.com/AntifaAustralia/",
		icon: FaFacebook,
	},
	{
		link: "https://bsky.app/profile/datatattat.bsky.social",
		icon: FaBluesky,
	},
	{
		link: "https://www.twitch.tv/datatattat",
		icon: FaTwitch,
	},
	{
		link: "https://www.reddit.com/user/datatattat/",
		icon: FaSnapchat,
	},
	{
		link: "https://www.tiktok.com/@datatattat",
		icon: FaTiktok,
	},
	{
		link: "https://onlyfans.com/datatattat",
		icon: SiOnlyfans,
	},
	{
		link: "https://www.flickr.com/people/201123085@N06/",
		icon: FaFlickr,
	},
	{
		link: "https://www.tumblr.com/blog/datatattat",
		icon: FaTumblr,
	},
	{
		link: "https://substack.com/@datatattat",
		icon: BsSubstack,
	},
];

// Really ought to pull these from db
// Or have them passed in
// But I would have to manually enter them in to the database so...
// Just add x amount we have - we should go for the main ones etc
export const Icons = () => {
	return (
		<div className={styles.root}>
			{iconsList.map(({ link, icon: Icon }, i) => (
				<Link href={link} key={i}>
					<Icon size={"2rem"} />
					{/* Womp3 */}
				</Link>
			))}
		</div>
	);
};
