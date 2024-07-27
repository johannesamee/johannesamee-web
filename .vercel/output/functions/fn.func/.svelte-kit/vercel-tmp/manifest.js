export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Congratulations.mp4","avatar.jpeg","favicon.png","gradient-preview-png.png","ja_favicon_background.png","ja_favicon_transparent.png"]),
	mimeTypes: {".mp4":"video/mp4",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BLnQZt5B.js","app":"_app/immutable/entry/app.DZYe-s-o.js","imports":["_app/immutable/entry/start.BLnQZt5B.js","_app/immutable/chunks/entry.LW09VBSM.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DZYe-s-o.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/index.BKg8bbRF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
