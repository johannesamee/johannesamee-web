export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","gradient-preview-png.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DbXzgsDW.js","app":"_app/immutable/entry/app.UIXq13ii.js","imports":["_app/immutable/entry/start.DbXzgsDW.js","_app/immutable/chunks/entry.BZuvU1mE.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.UIXq13ii.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/index.BLeMwuBr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
