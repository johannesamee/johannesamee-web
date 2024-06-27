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
		client: {"start":"_app/immutable/entry/start.BKG9DehO.js","app":"_app/immutable/entry/app.C11XUwfN.js","imports":["_app/immutable/entry/start.BKG9DehO.js","_app/immutable/chunks/entry.BkB2JPdt.js","_app/immutable/chunks/scheduler.D5mtbMwm.js","_app/immutable/chunks/index.Chq_olFB.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.C11XUwfN.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.D5mtbMwm.js","_app/immutable/chunks/index.C453Bwz7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
