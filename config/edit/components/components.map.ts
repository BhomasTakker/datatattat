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
import { D3_HISTOGRAM_CHART } from "@/src/components/content-display/data-visualization/d3/charts/interfaces/histogram/histogram.edit.config";
import { D3_BUBBLE_MAP_CHART } from "@/src/components/content-display/data-visualization/d3/maps/bubble/bubble-map.edit.config";
import { D3_CHOROPLETH_MAP_CHART } from "@/src/components/content-display/data-visualization/d3/maps/choropleth/choropleth-map.edit.config";
import ExternalObjectData from "../../../src/components/content-display/external-object/external-object.edit.config.json";
import { ARTICLE_COLLECTION } from "@/src/components/content-display/new-article/collection/article-collection.edit.config";
import { CONTENT_OEMBED } from "@/src/components/content-display/social-media/edit/content-oembed.edit.config";
import { MEDIA_PLAYER } from "@/src/components/content-display/media-player/Player.edit.config";
import { DISPLAY_PLAYER } from "@/src/components/content-display/media-player/display/DisplayPlayer.edit.config";

// we should be using Maps as standard no?
// Better name for what these are 100%
// Will need to compose these as they will get huge
// Currently these are all shown as available options
// This may not be appropriate in all circumstances??
export const CONTENT_COMPONENTS = {
	// NEW
	ArticleCollection: ARTICLE_COLLECTION,
	ContentOembed: CONTENT_OEMBED,
	MediaPlayer: MEDIA_PLAYER,
	DisplayPlayer: DISPLAY_PLAYER,

	// OLD

	// ArticleList: ARTICLE_LIST,
	// ArticleStack: ARTICLE_DISPLAY_STACK,
	// ArticleGrid: ARTICLE_GRID_STACK,

	// DataTable: DATA_TABLE,
	// Dummy: DUMMY,

	// BarChart: D3_BAR_CHART,
	// ScatterChart: D3_SCATTER_CHART,
	// LineChart: D3_LINE_CHART,
	// HistogramChart: D3_HISTOGRAM_CHART,

	// MapChart: D3_MAP_CHART,
	// D3BubbleMap: D3_BUBBLE_MAP_CHART,
	// D3ChoroplethMap: D3_CHOROPLETH_MAP_CHART,

	// SimpleArticleList: SIMPLE_ARTICLE_LIST,
	// SimpleStack: SIMPLE_STACK,

	// OpenLayersMap: OLMAP,

	// //
	// ExternalObject: ExternalObjectData,
	// // rem below
	// SimpleList: SIMPLE_LIST,
} as const;
