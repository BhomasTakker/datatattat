import { useEffect } from "react";
import {
	CreateProjectionType,
	createProjections,
	setCurrentProjection,
	addProjection,
} from "../projections/open-layers.projections";
import { ViewProjection } from "../types/open-layers.types";

interface UseProjectionsOptions {
	projections?: CreateProjectionType[];
	projection?: ViewProjection;
}

export const useMapProjections = ({
	projection,
	projections = [],
}: UseProjectionsOptions) => {
	useEffect(() => {
		if (projections) {
			createProjections(projections);
		}

		if (projection) {
			setCurrentProjection(projection);
		}
	}, [projection, projections]);

	return {
		addProjection,
		addProjections: createProjections,
	};
};
