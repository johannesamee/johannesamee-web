export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","gradient-preview.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cb9X-j4U.js","app":"_app/immutable/entry/app.D9q6Cr9N.js","imports":["_app/immutable/entry/start.Cb9X-j4U.js","_app/immutable/chunks/entry.P6AfWSrq.js","_app/immutable/chunks/scheduler.CVTL0etF.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.D9q6Cr9N.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.CVTL0etF.js","_app/immutable/chunks/index.cpxQQXN5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
