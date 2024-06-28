export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Congratulations.mp4","avatar.jpeg","favicon.png","gradient-preview-png.png"]),
	mimeTypes: {".mp4":"video/mp4",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start._Hp0VBrQ.js","app":"_app/immutable/entry/app.D27t65TG.js","imports":["_app/immutable/entry/start._Hp0VBrQ.js","_app/immutable/chunks/entry.Dpi0Eh8a.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.D27t65TG.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/index.BKg8bbRF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
