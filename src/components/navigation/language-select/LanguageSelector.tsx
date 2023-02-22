//https://mui.com/material-ui/react-autocomplete/

//A popover is probably a better more straightforward aproach...
//I mean hell, this still ain't right!!
//bug where no proper selection made when you click on a flag ...
//call it - a menu button would work way better
import { styled } from "@mui/material/styles";
import styles from "./LanguageSelector.module.css";
import { Box, TextField, Autocomplete } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setLocale } from "@/store/locale/localeSlice";
import {
	LanguageType,
	languagesList,
	ILanguageData,
	languageData,
	LanguageName,
} from "@/types/locale";
import Image from "next/image";

//I mean jesus - on mobile devices this will need a complete overhaul too
export const LanguageSelector = () => {
	const dispatch = useAppDispatch();
	const [lang, setLang] = useState<LanguageName>(LanguageName.EN);

	//this seems like a fudge but it works using dataset no less
	const changeHandler = (e: SyntheticEvent) => {
		if (e !== null && e.target instanceof HTMLElement) {
			const id = e.target.dataset.code as LanguageType;
			const data = languageData[id];
			setLang(data.language);
			dispatch(setLocale(id));
			// console.log({ val: data });
		}
	};

	return (
		<StyledAutocomplete
			className={styles.control}
			color="white"
			id="language-select"
			style={{ width: 150 }}
			// sx={{ width: "150px" }}
			options={languagesList}
			autoHighlight
			onChange={changeHandler}
			getOptionLabel={(option: ILanguageData) => option.language}
			renderOption={(props: any, option: ILanguageData) => (
				<Box
					className={styles.item}
					component="li"
					{...props}
					// onChange={() => changeHandler(option.id)}
					data-code={option.id} //object would need to be stringified
				>
					{option.language}
					{/* This is a hack - flex justify on the containing box didn't work */}
					<Box width={"50px"}></Box>
					<Image
						loading="lazy"
						width="24"
						height="16"
						src={option.icon}
						alt={`Flag of ${option.code}`}
					/>
				</Box>
			)}
			renderInput={(params: any) => (
				<TextField
					// label="Country"
					className={styles.input}
					{...params}
					size="small"
					variant="standard"
					inputProps={{
						...params.inputProps,
						value: lang,
						autoComplete: "new-pasword", // disable autocomplete and autofill
					}}
				/>
			)}
		/>
	);
};

//Okay you need to know bout this and the use of classes
const StyledAutocomplete: any = styled(Autocomplete)({
	// "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
	// 	// Default transform is "translate(14px, 20px) scale(1)""
	// 	// This lines up the label with the initial cursor position in the input
	// 	// after changing its padding-left.
	// 	transform: "translate(34px, 20px) scale(1);",
	// },
	// "&.Mui-focused .MuiInputLabel-outlined": {
	// 	color: "purple",
	// },
	"& .MuiAutocomplete-inputRoot": {
		color: "white",
		// This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
		// '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
		// 	// Default left padding is 6px
		// 	paddingLeft: 26,
		// },
		// "& .MuiOutlinedInput-notchedOutline": {
		// 	borderColor: "green",
		// },
		// "&:hover .MuiOutlinedInput-notchedOutline": {
		// 	borderColor: "red",
		// },
		// "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		// 	borderColor: "purple",
		// },
	},
	"& .MuiAutocomplete-clearIndicator": {
		display: "none",
	},
});
