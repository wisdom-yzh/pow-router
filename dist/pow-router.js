(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pow"] = factory();
	else
		root["pow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdatepow"];
/******/ 	this["webpackHotUpdatepow"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = 10000;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "02dc16f9a9b80dd3d981"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return Promise.resolve(outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(8)(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * inherit a class
 * @param {Function} base base class
 * @param {Function} inherited inherited class
 */
function inherit(base, inherited) {
  if (Object.create) {
    inherited.prototype = Object.create(base.prototype);
    return;
  }
  
  function F() {}
  F.prototype = base.prototype;
  inherited.prototype = new F();
  inherited.prototype.constructor = inherited;
}

/**
 * get the best router type
 */
function getDefaultRouterType() {
  if (window.history) {
    return 'history';
  }
  return 'hash';
}

/**
 * just like Object.assign in es6, but return a new Object
 */
function assign(object1, object2) {
  if (Object.assign) {
    return Object.assign({}, object1, object2);
  }
  var obj = {};
  for (var key in object1) {
    obj[key] = object1[key];
  }
  for (var key in object2) {
    obj[key] = object2[key];
  }
  return obj;
}

/**
 * encode querystring
 * @param {Object} qs qs object
 * @return {String} querystring
 */
function encodeQueryString(qs) {
  var querystring = '?';
  for (var key in qs) {
    querystring = querystring + key + '=' + qs[key] + '&';
  }
  return querystring.substr(0, querystring.length - 1);
}

/**
 * decode querystring
 * @param {String} querystring
 * @return {Object} qs object
 */
function decodeQueryString(querystring) {
  if (querystring[0] === '?') querystring = querystring.substr(1);
  var qs = {}, arr = querystring.split('&');
  for (var i = 0; i < arr.length; i++) {
    var objArr = arr[i].split('=');
    if (objArr.length > 1) {
      qs[objArr[0]] = objArr[1];
    } else if (objArr.length == 1 && objArr[0] !== '') {
      qs[objArr[0]] = objArr[0];
    }
  }
  return qs;
}

module.exports = {
  inherit: inherit,
  getDefaultRouterType: getDefaultRouterType,
  assign: assign,
  encodeQueryString: encodeQueryString,
  decodeQueryString: decodeQueryString
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var pathToRegexp = __webpack_require__(5);
var utils = __webpack_require__(0);

/**
 * Base Router Class
 * @constructor 
 * @param {String} routerBaseUrl
 * @param {Object} routers router dictionary
 */
function Router(routerBaseUrl, routers) {
  if (routerBaseUrl.substr(-1) === '/') {
    routerBaseUrl = routerBaseUrl.substr(0, routerBaseUrl.length - 1);
  }
  this.routerBaseUrl = routerBaseUrl;
  this.routers = {}; 
  if (routers && typeof routers === 'object') {
    for (var key in routers) {
      this.register(key, routers[key]);
    }
  }
}

/**
 * match router
 * @return {Object} includes Component name and params
 */
Router.prototype.match = function() {
  var location = this.getLocation();
  if (false === location) {
    return false;
  }
  // match paths
  if (this.routers[location]) {
    return { component: this.routers[location] };
  }
  // match for regexp symbols
  var keys = [];
  for (var router in this.routers) {
    if (router.indexOf(':') === -1) continue;
    var re = pathToRegexp(router, keys);
    var matched = re.exec(location);
    if (matched && matched.length) {
      var values = matched.slice(1);
      var params = {};
      for (var i = 0, len = values.length; i < len; i++) {
        params[keys[i].name] = values[i];
      }
      return {
        component: this.routers[router],
        params: params 
      };
    }
  }
  return false;
};

/**
 * get router table
 * @return {Array}
 */
Router.prototype.getRouters = function() {
  return this.routers;
};

/**
 * register router
 * @param {String} path router path
 * @param {String} component component name
 */
Router.prototype.register = function(path, component) {
  if (this.routers[path]) {
    throw new Error('the path ' + path + ' has already registered');
  }
  this.routers[path] = component;
};

/**
 * history go back
 */
Router.prototype.back = function() {
  history.go(-1);
};

/**
 * start the first redirect
 */
Router.prototype.start = function() {
  setTimeout(function() {
    this.onChange();
  }.bind(this), 0);
};

/**
 * redirect to path
 * @virtual
 * @param {String} path
 * @param {Object} qs quertstring object
 * @param {Boolean} needHistory add history or not
 */
Router.prototype.redirect = function(path, qs, needHistory) {};

/**
 * get current url location
 * @virtual
 */
Router.prototype.getLocation = function() {};

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var router = __webpack_require__(12);
var utils = __webpack_require__(0);
var component = __webpack_require__(7);
var Resource = __webpack_require__(9);

/**
 * init pow-router management
 * @constructor
 */
function Pow() {
  this.router = null;              // router controller
  this.current = null;             // pointer to current component
  this.rootScope = null;           // pointer to root element
  this.resource = new Resource();  // resource loader
}

/**
 * config the spa router framework
 * @param {Object} config 
 * such as below:
 * {
 *   baseUrl: './components',
 *   rootScope: '#main',
 *   routers: {
 *     '/hello': 'Hello',
 *     '/user': 'User'
 *   },
 *   routeType: 'hash', // default 'history' if supported
 * }
 */
Pow.prototype.config = function(config) {
  var defaultConfig = {
    routerBaseUrl: '',
    resourceBaseUrl: '',
    rootScope: '#main',
    routers: {},
    routeType: utils.getDefaultRouterType()
  };
  if (config && typeof config === 'object') {
    for (var key in defaultConfig) {
      if (config[key]) {
        defaultConfig[key] = config[key];
      }
    }
  }
  this.rootScope = document.querySelector(defaultConfig.rootScope) || document;
  this.resource.setBaseUrl(defaultConfig.resourceBaseUrl);
  if (defaultConfig.routeType === 'history' && window.history) {
    this.router = new router.HistoryRouter(
      defaultConfig.routerBaseUrl,
      defaultConfig.routers
    );
  } else {
    this.router = new router.HashRouter(
      defaultConfig.routerBaseUrl, 
      defaultConfig.routers
    );
  }
  return this;
};

/**
 * Component definition
 * @param {String} name component name
 * @param {*} obj component configuration, object or function
 */
Pow.prototype.Component = function(name, obj) {
  if (typeof obj === 'function') obj = obj();
  return this.resource.set(name, component.create(obj));
};

/**
 * Start!
 */
Pow.prototype.start = function() {
  var pow = this;
  if (!this.router || !this.resource) {
    this.config(undefined);
  }
  this.router.onChange = function() {
    var matched = this.match();
    if (!matched) {
      console.error('url not found!');
      return false;
    }
    if (pow.current && pow.current.remove) pow.current.remove();
    pow.resource.get(matched.component, function(Component) {
      if (!Component) {
        console.error('component not define!');
        return false;
      }
      pow.current = new Component({
        state: {},
        props: utils.assign(
          matched.params, 
          utils.decodeQueryString(window.location.search)
        ),
        rootScope: pow.rootScope
      });
      pow.current.onCreate();
      pow.current.render();
    });
  };
  this.router.start();
};

module.exports = Pow;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(3)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*! art-template@4.7.0 | https://github.com/aui/art-template */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.template=t():e.template=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=24)}([function(e,t,n){"use strict";(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(n){}}).call(t,n(7))},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(20),i=n(2),s=n(22),c=function(e,t){t.onerror(e,t);var n=function(){return"{Template Error}"};return n.mappings=[],n.sourcesContent=[],n},u=function a(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};"object"===(void 0===e?"undefined":r(e))?t=e:t.source=e,t=i.$extend(t),e=t.source,t.debug&&(t.cache=!1,t.bail=!1,t.minimize=!1,t.compileDebug=!0),t.filename&&(t.filename=t.resolveFilename(t.filename,t));var n=t.filename,u=t.cache,l=t.caches;if(u&&n){var p=l.get(n);if(p)return p}if(!e)try{e=t.loader(n,t),t.source=e}catch(d){var f=new s({name:"CompileError",message:"template not found: "+d.message,stack:d.stack});if(t.bail)throw f;return c(f,t)}var m=void 0,h=new o(t);try{m=h.build()}catch(f){if(f=new s(f),t.bail)throw f;return c(f,t)}var y=function(e,n){try{return m(e,n)}catch(f){if(!t.compileDebug)return t.cache=!1,t.compileDebug=!0,a(t)(e,n);if(f=new s(f),t.bail)throw f;return c(f,t)()}};return y.mappings=m.mappings,y.toString=function(){return m.toString()},u&&n&&l.set(n,y),y};u.Compiler=o,e.exports=u},function(e,t,n){"use strict";var r=n(0),o=n(12),i=n(16),s=n(9),c=n(11),u=n(15),a=n(14),l=n(10),p=n(18),f=n(19),m=n(13),h=n(17),y={source:null,filename:null,rules:[f,p],escape:!0,debug:!!r&&"production"!==process.env.NODE_ENV,bail:!1,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:h,htmlMinifier:m,htmlMinifierOptions:{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:[]},onerror:i,loader:u,caches:s,root:"/",extname:".art",ignore:[],imports:{$each:l,$escape:c,$include:a}};y.$extend=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return o(e,y)},e.exports=y},function(e,t,n){"use strict"},function(e,t,n){"use strict";var r=n(1),o=function(e,t,n){return r(e,n)(t)};e.exports=o},function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){e.noop=function(){}}("object"===t(e)&&"object"===t(e.exports)?e.exports:window)}).call(t,n(8)(e))},function(e,t,n){"use strict";var r={"abstract":!0,await:!0,"boolean":!0,"break":!0,"byte":!0,"case":!0,"catch":!0,"char":!0,"class":!0,"const":!0,"continue":!0,"debugger":!0,"default":!0,"delete":!0,"do":!0,"double":!0,"else":!0,"enum":!0,"export":!0,"extends":!0,"false":!0,"final":!0,"finally":!0,"float":!0,"for":!0,"function":!0,"goto":!0,"if":!0,"implements":!0,"import":!0,"in":!0,"instanceof":!0,"int":!0,"interface":!0,"let":!0,"long":!0,"native":!0,"new":!0,"null":!0,"package":!0,"private":!0,"protected":!0,"public":!0,"return":!0,"short":!0,"static":!0,"super":!0,"switch":!0,"synchronized":!0,"this":!0,"throw":!0,"transient":!0,"true":!0,"try":!0,"typeof":!0,"var":!0,"void":!0,"volatile":!0,"while":!0,"with":!0,"yield":!0};e.exports=function(e){return r.hasOwnProperty(e)}},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(i){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var o in e)t(e[o],o)};e.exports=r},function(e,t,n){"use strict";var r=function c(e){return"string"!=typeof e&&(e=e===undefined||null===e?"":"function"==typeof e?c(e.call(e)):JSON.stringify(e)),e},o=/["&'<>]/,i=function(e){var t=""+e,n=o.exec(t);if(!n)return e;var r="",i=void 0,s=void 0,c=void 0;for(i=n.index,s=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:c="&#34;";break;case 38:c="&#38;";break;case 39:c="&#39;";break;case 60:c="&#60;";break;case 62:c="&#62;";break;default:continue}s!==i&&(r+=t.substring(s,i)),s=i+1,r+=c}return s!==i?r+t.substring(s,i):r},s=function(e){return i(r(e))};e.exports=s},function(e,t,n){"use strict";var r=Object.prototype.toString,o=function(e){return null===e?"Null":r.call(e).slice(8,-1)},i=function s(e,t){var n=void 0,r=o(e);if("Object"===r?n=Object.create(t||{}):"Array"===r&&(n=[].concat(t||[])),n){for(var i in e)n[i]=s(e[i],n[i]);return n}return e};e.exports=i},function(e,t,n){"use strict";var r=n(0),o=function(e,t){if(r){var o,i=n(5).minify,s=t.htmlMinifierOptions,c=t.rules.map(function(e){return e.test});(o=s.ignoreCustomFragments).push.apply(o,c),e=i(e,s)}return e};e.exports=o},function(e,t,n){"use strict";var r=function(e,t,r,o){var i=n(1);return o=o.$extend({filename:o.resolveFilename(e,o),source:null}),i(o)(t,r)};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=function(e){if(r){return n(3).readFileSync(e,"utf8")}var t=document.getElementById(e);return t.value||t.innerHTML};e.exports=o},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){"object"===("undefined"==typeof console?"undefined":r(console))&&console.error(e.name,e.message)};e.exports=o},function(e,t,n){"use strict";var r=n(0),o=/^\.+\//,i=function(e,t){if(r){var i=n(3),s=t.root,c=t.extname;if(o.test(e)){var u=t.filename,a=!u||e===u,l=a?s:i.dirname(u);e=i.resolve(l,e)}else e=i.resolve(s,e);i.extname(e)||(e+=c)}return e};e.exports=i},function(e,t,n){"use strict";var r={test:/{{[ \t]*([@#]?)(\/?)([\w\W]*?)[ \t]*}}/,use:function(e,t,n,r){var i=this,s=i.options,c=i.getEsTokens(r.trim()),u=c.map(function(e){return e.value}),a={},l=void 0,p=!!t&&"raw",f=n+u.shift(),m=function(e,t){console.warn("Template upgrade:","{{"+e+"}}",">>>","{{"+t+"}}","\n",s.filename||"")};switch("#"===t&&m("#value","@value"),f){case"set":r="var "+u.join("");break;case"if":r="if("+u.join("")+"){";break;case"else":var h=u.indexOf("if");h>-1?(u.splice(0,h+1),r="}else if("+u.join("")+"){"):r="}else{";break;case"/if":r="}";break;case"each":l=o(c),l.shift(),"as"===l[1]&&(m("each object as value index","each object value index"),l.splice(1,1));var y=l[0]||"$data",d=l[1]||"$value",v=l[2]||"$index";r="$each("+y+",function("+d+","+v+"){";break;case"/each":r="})";break;case"echo":f="print",m("echo value","value");case"print":case"include":case"extend":l=o(c),l.shift(),r=f+"("+l.join(",")+")";break;case"block":r="block("+u.join("")+",function(){";break;case"/block":r="})";break;default:if(-1!==u.indexOf("|")){for(var b=f,g=[],x=u.filter(function(e){return!/^\s+$/.test(e)});"|"!==x[0];)b+=x.shift();x.filter(function(e){return":"!==e}).forEach(function(e){"|"===e?g.push([]):g[g.length-1].push(e)}),g.reduce(function(e,t){var n=t.shift();return t.unshift(e),r=n+"("+t.join(",")+")"},b)}else s.imports[f]?(m("filterName value","value | filterName"),l=o(c),l.shift(),r=f+"("+l.join(",")+")",p="raw"):r=""+f+u.join("");p||(p="escape")}return a.code=r,a.output=p,a}},o=function(e){for(var t=0,n=e.shift(),r=[[n]];t<e.length;){var o=e[t],i=o.type;"whitespace"!==i&&"comment"!==i&&("punctuator"===n.type&&"]"!==n.value||"punctuator"===i?r[r.length-1].push(o):r.push([o]),n=o),t++}return r.map(function(e){return e.map(function(e){return e.value}).join("")})};r._split=o,e.exports=r},function(e,t,n){"use strict";var r={test:/<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/,use:function(e,t,n,r){var o={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"};return t&&(r="//"+r),{code:r,output:o[n]}}};e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(21),i=n(23),s="$data",c="$imports",u="print",a="include",l="extend",p="block",f="$$out",m="$$line",h="$$blocks",y="$$from",d="$$layout",v="$$options",b=function(e,t){return e.hasOwnProperty(t)},g=JSON.stringify,x=function(){function e(t){var n,o,b,g=this;r(this,e);var x=t.source,k=t.minimize,w=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.external=(n={},n[s]=!0,n[c]=!0,n[v]=!0,n),this.internal=(o={},o[f]="''",o[m]="[0,0,'']",o[h]="arguments[1]||{}",o[y]="null",o[d]="function(){return "+c+".$include("+y+","+s+","+h+","+v+")}",o[u]="function(){"+f+"+=''.concat.apply('',arguments)}",o[a]="function(src,data,block){"+f+"+="+c+".$include(src,data||"+s+",block,"+v+")}",o[l]="function(from){"+y+"=from}",o[p]="function(name,callback){if("+y+"){"+f+"='';callback();"+h+"[name]="+f+"}else{if(typeof "+h+"[name]==='string'){"+f+"+="+h+"[name]}else{callback()}}}",o),this.dependencies=(b={},b[u]=[f],b[a]=[f,c,s,v],b[l]=[y,d],b[p]=[y,f,h],b[d]=[c,y,s,h,v],b),this.importContext(f),t.compileDebug&&this.importContext(m),k)try{x=w(x,t)}catch(S){}this.source=x,this.getTplTokens(x,t.rules,this).forEach(function(e){e.type===i.TYPE_STRING?g.parseString(e):g.parseExpression(e)})}return e.prototype.getTplTokens=function(){return i.apply(undefined,arguments)},e.prototype.getEsTokens=function(e){return o(e)},e.prototype.getVariables=function(e){var t=!1;return e.filter(function(e){return"whitespace"!==e.type&&"comment"!==e.type}).filter(function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)}).map(function(e){return e.value})},e.prototype.importContext=function(e){var t=this,n="",r=this.internal,o=this.dependencies,i=this.external,u=this.context,a=this.options,l=a.ignore,p=a.imports,f=this.CONTEXT_MAP;!b(f,e)&&!b(i,e)&&l.indexOf(e)<0&&(b(r,e)?(n=r[e],b(o,e)&&o[e].forEach(function(e){return t.importContext(e)})):n=b(p,e)?c+"."+e:s+"."+e,f[e]=n,u.push({name:e,value:n}))},e.prototype.parseString=function(e){var t=e.value;if(t){var n=f+"+="+g(t);this.scripts.push({source:t,tplToken:e,code:n})}},e.prototype.parseExpression=function(e){var t=this,n=e.value,r=e.script,o=r.output,s=r.code;o&&(s=!1===escape||o===i.TYPE_RAW?f+"+="+r.code:f+"+=$escape("+r.code+")");var c=this.getEsTokens(s);this.getVariables(c).forEach(function(e){return t.importContext(e)}),this.scripts.push({source:n,tplToken:e,code:s})},e.prototype.checkExpression=function(e){for(var t=[[/^\s*?}.*?{?[\s;]*?$/,""],[/(^[\w\W]*?\s*?function\s*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1})"],[/(^.*?\(\s*?[\w\W]*?=>\s*?{[\s;]*?$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1}"]],n=0;n<t.length;){if(t[n][0].test(e)){var r;e=(r=e).replace.apply(r,t[n]);break}n++}try{return new Function(e),!0}catch(o){return!1}},e.prototype.build=function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,o=this.source,u=e.filename,a=e.imports,p=[],h=b(this.CONTEXT_MAP,l),y=0,x=function(e,t){var n=t.line,o=t.start,i={generated:{line:r.length+y+1,column:1},original:{line:n+1,column:o+1}};return y+=e.split(/\n/).length-1,i},k=function(e){return e.replace(/^[\t ]+|[\t ]$/g,"")};r.push("function("+s+"){"),r.push("'use strict'"),r.push("var "+t.map(function(e){return e.name+"="+e.value}).join(",")),e.compileDebug?(r.push("try{"),n.forEach(function(e){e.tplToken.type===i.TYPE_EXPRESSION&&r.push(m+"=["+[e.tplToken.line,e.tplToken.start,g(e.source)].join(",")+"]"),p.push(x(e.code,e.tplToken)),r.push(k(e.code))}),r.push("}catch(error){"),r.push("throw {"+["name:'RuntimeError'","path:"+g(u),"message:error.message","line:"+m+"[0]+1","column:"+m+"[1]+1","source:"+m+"[2]","stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach(function(e){p.push(x(e.code,e.tplToken)),r.push(k(e.code))}),r.push(h?"return "+d+"()":"return "+f),r.push("}");var w=r.join("\n");try{var S=new Function(c,v,"return "+w)(a,e);return S.mappings=p,S.sourcesContent=[o],S}catch(C){for(var E=0,$=0,T=0,O=o;E<n.length;){var j=n[E];if(!this.checkExpression(j.code)){O=j.source,$=j.tplToken.line,T=j.tplToken.start;break}E++}throw{name:"CompileError",path:u,message:C.message,line:$+1,column:T+1,source:O,script:w,stack:C.stack}}},e}();x.CONSTS={DATA:s,IMPORTS:c,PRINT:u,INCLUDE:a,EXTEND:l,BLOCK:p,OPTIONS:v,OUT:f,LINE:m,BLOCKS:h,FROM:y,LAYOUT:d,ESCAPE:"$escape"},e.exports=x},function(e,t,n){"use strict";var r=n(6),o=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,i=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t},s=function(e){return e.match(o).map(function(e){return o.lastIndex=0,i(o.exec(e))}).map(function(e){return"name"===e.type&&r(e.value)&&(e.type="keyword"),e})};e.exports=s},function(e,t,n){"use strict";function r(e){var t=e.stack;delete e.stack,this.name="TemplateError",this.message=JSON.stringify(e,null,4),this.stack=t}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},function(e,t,n){"use strict";var r=function(e,t,n){for(var r=[{type:"string",value:e,line:0,start:0,end:e.length}],o=0;o<t.length;o++)!function(e){for(var t=e.test.ignoreCase?"ig":"g",o=e.test.source+"|^$|[\\w\\W]",i=new RegExp(o,t),s=0;s<r.length;s++)if("string"===r[s].type){for(var c=r[s].line,u=r[s].start,a=r[s].end,l=r[s].value.match(i),p=[],f=0;f<l.length;f++){var m=l[f];e.test.lastIndex=0;var h=e.test.exec(m),y=h?"expression":"string",d=p[p.length-1],v=d||r[s],b=v.value;u=v.line===c?d?d.end:u:b.length-b.lastIndexOf("\n")-1,a=u+m.length;var g={type:y,value:m,line:c,start:u,end:a};if("string"===y)d&&"string"===d.type?(d.value+=m,d.end+=m.length):p.push(g);else{var x=e.use.apply(n,h);g.script=x,p.push(g)}c+=m.split(/\n/).length-1}r.splice.apply(r,[s,1].concat(p)),s+=p.length-1}}(t[o]);return r};r.TYPE_STRING="string",r.TYPE_EXPRESSION="expression",r.TYPE_RAW="raw",r.TYPE_ESCAPE="escape",e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(4),i=n(1),s=n(2),c=function(e,t){return"object"===(void 0===t?"undefined":r(t))?o({filename:e},t):i({filename:e,source:t})};c.render=o,c.compile=i,c.defaults=s,e.exports=c}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var artTemplate = __webpack_require__(6);
var utils = __webpack_require__(0);

function Component(config) {
  this.props = config.props || {};
  this.state = config.state || {};
  this.rootScope = config.rootScope || document;
}

Component.prototype.render = function() {
  var data = utils.assign(this.props, this.state);
  this.onRender(data, function (data) {
    var html = this.template && this.template(data);
    this.rootScope.innerHTML = html || 'template is empty';
    this.onStart(this.rootScope);
  }.bind(this));
};

Component.prototype.setState = function(state) {
  this.onStop(this.rootScope);
  this.state = utils.assign(this.state, state);
  setTimeout(function() {
    this.render();
  }.bind(this), 0);
};

Component.prototype.remove = function() {
  this.onStop(this.rootScope);
  this.onDestroy();
};

Component.prototype.onCreate = function() {};
Component.prototype.onStart = function() {};
Component.prototype.onStop = function() {};
Component.prototype.onDestroy = function() {};
Component.prototype.onRender = function (data, next) { next(data); };
Component.prototype.template = '';

function create(obj) {
  var F = function(obj) {
    Component.call(this, obj);
  };
  utils.inherit(Component, F);
  var funcs = ['onStart', 'onStop', 'onCreate', 'onDestroy', 'onRender'];
  for (var i = 0; i < funcs.length; i++) {
    obj[funcs[i]] && (F.prototype[funcs[i]] = obj[funcs[i]]);
  }
  obj.template && (F.prototype.template = artTemplate.compile(obj.template));
  return F;
}

module.exports = {
  create: create
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Pow = __webpack_require__(2);
var utils = __webpack_require__(0);

var pow = new Pow();
pow.utils = utils;

module.exports = pow;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Class Resource
 * a Component manager
 */
function Resource(baseUrl) {
  this.resource = {};
  this.baseUrl = baseUrl || '';
}

/**
 * set baseUrl to load resource
 * @param {String} baseUrl
 */
Resource.prototype.setBaseUrl = function (baseUrl) {
  this.baseUrl = baseUrl;
};

/**
 * get a Component
 */
Resource.prototype.get = function(name, next) {
  if (this.resource[name]) {
    return next(this.resource[name]);
  }
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('src',
      this.baseUrl + '/' + name.toLowerCase() + '.js');
  document.body.append(scriptElement);

  var self = this;
  scriptElement.onload = function() {
    if (!self.resource[name]) {
      return next(false);
    }
    return next(self.resource[name]);
  }
};

/**
 * set a Component
 */
Resource.prototype.set = function(name, newClass) {
  this.resource[name] = newClass;
  return true;
};

module.exports = Resource;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var Router = __webpack_require__(1);

function HashRouter(routerBaseUrl, routers) {
  Router.call(this, routerBaseUrl, routers);
}

utils.inherit(Router, HashRouter);

/**
 * get location by hash
 */
HashRouter.prototype.getLocation = function() {
  var baseUrl = this.routerBaseUrl;
  var path = window.location.hash;
  if (path === '') {
    window.location.replace('#/');
  }
  path = path.substr(1); // remove '#'
  var baseUrlIndex = path.indexOf(baseUrl);
  if (baseUrlIndex !== 0 && baseUrlIndex !== 1) {
    return false;
  }
  return path.substr(baseUrlIndex + baseUrl.length);
};

/**
 * @override Router::redirect
 */
HashRouter.prototype.redirect = function(path, qs, needHistory) {
  path = this.routerBaseUrl + path;
  if (qs) {
    path = path + utils.encodeQueryString(qs);
  }
  if (needHistory === undefined || needHistory) {
    window.location.hash = path;
  } else {
    var finalPath = window.location.pathname +
                    window.location.search + '#' + path;
    window.location.replace(finalPath);
  }
  // automatic trigger onHashChange...
};

HashRouter.prototype.start = function() {
  var self = this;
  window.onhashchange = function() {
    self.onChange();
  };
  Router.prototype.start.call(this);
};

module.exports = HashRouter;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(0);
var Router = __webpack_require__(1);

function HistoryRouter(routerBaseUrl, routers) {
  Router.call(this, routerBaseUrl, routers);
}

utils.inherit(Router, HistoryRouter);

/**
 * get location by history
 */
HistoryRouter.prototype.getLocation = function() {
  var baseUrl = this.routerBaseUrl;
  var path = window.location.pathname;
  if (path.indexOf(baseUrl) !== 0) {
    return false;
  }
  return path.substr(baseUrl.length);
};

/**
 * @override Router::redirect
 */
HistoryRouter.prototype.redirect = function(path, qs, needHistory) {
  path = this.routerBaseUrl + path;
  if (qs) {
    path = path + utils.encodeQueryString(qs);
  }

  if (needHistory === undefined || needHistory) {
    window.history.pushState({}, '', path);
  } else {
    window.history.replaceState({}, '', path);
  }
  this.onChange();
};

HistoryRouter.prototype.start = function() {
  var self = this;
  window.onpopstate = function(event) {
    self.onChange(event);
  }
  Router.prototype.start.call(this);
};

module.exports = HistoryRouter;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  HistoryRouter: __webpack_require__(11),
  HashRouter: __webpack_require__(10)
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=pow-router.js.map