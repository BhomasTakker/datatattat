import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import {
	CustomViewProjection,
	ViewProjection,
} from "../types/open-layers.types";

const defaultProjection: ViewProjection = "EPSG:3857";
let currentProjection: ViewProjection = defaultProjection;

export const getDefaultProjection = () => defaultProjection;
export const getCurrentProjection = () => currentProjection;
export const setCurrentProjection = (projection: CustomViewProjection) => {
	currentProjection = projection;
};

export type CreateProjectionType = {
	projection: CustomViewProjection;
	def: string;
};

// Should probably add default and set current projection here?
export const createProjections = (projections: CreateProjectionType[]) => {
	projections.forEach((projectionDefinition) => {
		const { projection, def } = projectionDefinition;
		proj4.defs(projection, def);
	});

	// proj4.defs(
	// 	"EPSG:29901",
	// 	"+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1 +x_0=200000 +y_0=250000 +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs +type=crs"
	// );
	// How to extend the type ?
	// Or would you etc - preset available
	// Needs be a class etc - it's just text.
	// This ESPG:ID : text
	register(proj4);
};
