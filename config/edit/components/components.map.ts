import { ARTICLE_LIST } from "./article/article-list.config";
import { SIMPLE_ARTICLE_LIST } from "./article/simple-list.config";
import { SIMPLE_LIST } from "./lists/simple-list.config";
import { SIMPLE_STACK } from "./stack/simple-stack.config";
import { ARTICLE_DISPLAY_STACK } from "@/src/components/content-display/article/stacks/article-display-stack.edit.config";
import { ARTICLE_GRID_STACK } from "@/src/components/content-display/article/grid/article-grid.controller.edit.config";
import { DATA_TABLE } from "@/src/components/content-display/tabular/tanstack-table/controllers/data-table.controller.edit.config";
import { OLMAP } from "@/src/components/content-display/geo/open-layers/controllers/ol-map.controller.edit";
import { DUMMY } from "@/src/components/content-display/dummy/dummy.edit.config";
import { D3_BAR_CHART } from "@/src/components/content-display/data-visualization/d3/charts/interfaces/bar/bar-chart.edit.config";
import { D3_SCATTER_CHART } from "@/src/components/content-display/data-visualization/d3/charts/interfaces/scatter/scatter-chart.edit.config";
import { D3_LINE_CHART } from "@/src/components/content-display/data-visualization/d3/charts/interfaces/line/line-chart.edit.config";
import { D3_MAP_CHART } from "@/src/components/content-display/data-visualization/d3/maps/map.edit.config";
// we should be using Maps as standard no?
// Better name for what these are 100%
// Will need to compose these as they will get huge
// Currently these are all shown as available options
// This may not be appropriate in all circumstances??
export const CONTENT_COMPONENTS = {
	ArticleList: ARTICLE_LIST,
	ArticleStack: ARTICLE_DISPLAY_STACK,
	ArticleGrid: ARTICLE_GRID_STACK,

	DataTable: DATA_TABLE,
	Dummy: DUMMY,

	BarChart: D3_BAR_CHART,
	ScatterChart: D3_SCATTER_CHART,
	LineChart: D3_LINE_CHART,
	MapChart: D3_MAP_CHART,

	SimpleArticleList: SIMPLE_ARTICLE_LIST,
	SimpleStack: SIMPLE_STACK,

	OpenLayersMap: OLMAP,
	// rem below
	SimpleList: SIMPLE_LIST,
} as const;
