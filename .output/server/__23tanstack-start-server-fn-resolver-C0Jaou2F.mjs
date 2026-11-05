//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-C0Jaou2F.js
var manifest = {
	"97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6": {
		functionName: "getTrendingTracks_createServerFn_handler",
		importer: () => import("./_ssr/music.functions-DB-G34UN.mjs")
	},
	"d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4": {
		functionName: "searchMusicTracks_createServerFn_handler",
		importer: () => import("./_ssr/music.functions-DB-G34UN.mjs")
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
