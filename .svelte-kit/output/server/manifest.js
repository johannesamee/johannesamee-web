export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Congratulations.mp4","favicon.png","gradient-preview-png.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cc9oqKJF.js","app":"_app/immutable/entry/app.CCkNdbAX.js","imports":["_app/immutable/entry/start.Cc9oqKJF.js","_app/immutable/chunks/entry.9yiwfX1h.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CCkNdbAX.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/index.BLeMwuBr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
