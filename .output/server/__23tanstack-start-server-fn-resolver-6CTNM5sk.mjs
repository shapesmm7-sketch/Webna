//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-6CTNM5sk.js
var manifest = {
	"0ec82f665f21f8137a72aa7c79c6a4b115662d17f0e8fd9fe00bc51789fe9299": {
		functionName: "getFootballNews_createServerFn_handler",
		importer: () => import("./_ssr/news.functions-Djkbkl6m.mjs")
	},
	"12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c": {
		functionName: "getTikTokFeed_createServerFn_handler",
		importer: () => import("./_ssr/tiktok.functions-_O2Ypab1.mjs")
	},
	"2d9ab34da3812c140e34a8ff8418d3b07aa14e8e0c4153bb9620ccb96a43fc49": {
		functionName: "getArticle_createServerFn_handler",
		importer: () => import("./_ssr/news.functions-Djkbkl6m.mjs")
	},
	"97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6": {
		functionName: "getTrendingTracks_createServerFn_handler",
		importer: () => import("./_ssr/music.functions-BZ8FywSr.mjs")
	},
	"a3071d49fef0c4e200c04884cdb0bdc49a01a98fd796e18ba9329ca56e4dd094": {
		functionName: "resolveNews_createServerFn_handler",
		importer: () => import("./_ssr/news.functions-Djkbkl6m.mjs")
	},
	"bfbec92a60869ea1e09c7f95f0839b6952da957ddfb9e9d7e780b3072625bd4f": {
		functionName: "getNews_createServerFn_handler",
		importer: () => import("./_ssr/news.functions-Djkbkl6m.mjs")
	},
	"d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4": {
		functionName: "searchMusicTracks_createServerFn_handler",
		importer: () => import("./_ssr/music.functions-BZ8FywSr.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
