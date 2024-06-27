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
		client: {"start":"_app/immutable/entry/start.D2miyEEk.js","app":"_app/immutable/entry/app.BSUi9dVT.js","imports":["_app/immutable/entry/start.D2miyEEk.js","_app/immutable/chunks/entry.DrF0u_6x.js","_app/immutable/chunks/scheduler.DWE2ryb4.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BSUi9dVT.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DWE2ryb4.js","_app/immutable/chunks/index.DiUfanPG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
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
