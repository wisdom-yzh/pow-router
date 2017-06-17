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
/******/ 	var hotCurrentHash = "02a98abad0b44ff6d7e3"; // eslint-disable-line no-unused-vars
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
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(module, exports) {

eval("/**\n * inherit a class\n * @param {Function} base base class\n * @param {Function} inherited inherited class\n */\nfunction inherit(base, inherited) {\n  if (Object.create) {\n    inherited.prototype = Object.create(base.prototype);\n    return;\n  }\n  \n  function F() {}\n  F.prototype = base.prototype;\n  inherited.prototype = new F();\n  inherited.prototype.constructor = inherited;\n}\n\n/**\n * get the best router type\n */\nfunction getDefaultRouterType() {\n  if (window.history) {\n    return 'history';\n  }\n  return 'hash';\n}\n\n/**\n * just like Object.assign in es6, but return a new Object\n */\nfunction assign(object1, object2) {\n  if (Object.assign) {\n    return Object.assign({}, object1, object2);\n  }\n  var obj = {};\n  for (var key in object1) {\n    obj[key] = object1[key];\n  }\n  for (var key in object2) {\n    obj[key] = object2[key];\n  }\n  return obj;\n}\n\n/**\n * encode querystring\n * @param {Object} qs qs object\n * @return {String} querystring\n */\nfunction encodeQueryString(qs) {\n  var querystring = '?';\n  for (var key in qs) {\n    querystring = querystring + key + '=' + qs[key] + '&';\n  }\n  return querystring.substr(0, querystring.length - 1);\n}\n\n/**\n * decode querystring\n * @param {String} querystring\n * @return {Object} qs object\n */\nfunction decodeQueryString(querystring) {\n  if (querystring[0] === '?') querystring = querystring.substr(1);\n  var qs = {}, arr = querystring.split('&');\n  for (var i = 0; i < arr.length; i++) {\n    var objArr = arr[i].split('=');\n    if (objArr.length > 1) {\n      qs[objArr[0]] = objArr[1];\n    } else if (objArr.length == 1 && objArr[0] !== '') {\n      qs[objArr[0]] = objArr[0];\n    }\n  }\n  return qs;\n}\n\nmodule.exports = {\n  inherit: inherit,\n  getDefaultRouterType: getDefaultRouterType,\n  assign: assign,\n  encodeQueryString: encodeQueryString,\n  decodeQueryString: decodeQueryString\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz8yZmY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogaW5oZXJpdCBhIGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBiYXNlIGJhc2UgY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluaGVyaXRlZCBpbmhlcml0ZWQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdChiYXNlLCBpbmhlcml0ZWQpIHtcbiAgaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgICBpbmhlcml0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShiYXNlLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBmdW5jdGlvbiBGKCkge31cbiAgRi5wcm90b3R5cGUgPSBiYXNlLnByb3RvdHlwZTtcbiAgaW5oZXJpdGVkLnByb3RvdHlwZSA9IG5ldyBGKCk7XG4gIGluaGVyaXRlZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbmhlcml0ZWQ7XG59XG5cbi8qKlxuICogZ2V0IHRoZSBiZXN0IHJvdXRlciB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRSb3V0ZXJUeXBlKCkge1xuICBpZiAod2luZG93Lmhpc3RvcnkpIHtcbiAgICByZXR1cm4gJ2hpc3RvcnknO1xuICB9XG4gIHJldHVybiAnaGFzaCc7XG59XG5cbi8qKlxuICoganVzdCBsaWtlIE9iamVjdC5hc3NpZ24gaW4gZXM2LCBidXQgcmV0dXJuIGEgbmV3IE9iamVjdFxuICovXG5mdW5jdGlvbiBhc3NpZ24ob2JqZWN0MSwgb2JqZWN0Mikge1xuICBpZiAoT2JqZWN0LmFzc2lnbikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvYmplY3QxLCBvYmplY3QyKTtcbiAgfVxuICB2YXIgb2JqID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QxKSB7XG4gICAgb2JqW2tleV0gPSBvYmplY3QxW2tleV07XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdDIpIHtcbiAgICBvYmpba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIGVuY29kZSBxdWVyeXN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IHFzIHFzIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBxdWVyeXN0cmluZ1xuICovXG5mdW5jdGlvbiBlbmNvZGVRdWVyeVN0cmluZyhxcykge1xuICB2YXIgcXVlcnlzdHJpbmcgPSAnPyc7XG4gIGZvciAodmFyIGtleSBpbiBxcykge1xuICAgIHF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmcgKyBrZXkgKyAnPScgKyBxc1trZXldICsgJyYnO1xuICB9XG4gIHJldHVybiBxdWVyeXN0cmluZy5zdWJzdHIoMCwgcXVlcnlzdHJpbmcubGVuZ3RoIC0gMSk7XG59XG5cbi8qKlxuICogZGVjb2RlIHF1ZXJ5c3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnlzdHJpbmdcbiAqIEByZXR1cm4ge09iamVjdH0gcXMgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGRlY29kZVF1ZXJ5U3RyaW5nKHF1ZXJ5c3RyaW5nKSB7XG4gIGlmIChxdWVyeXN0cmluZ1swXSA9PT0gJz8nKSBxdWVyeXN0cmluZyA9IHF1ZXJ5c3RyaW5nLnN1YnN0cigxKTtcbiAgdmFyIHFzID0ge30sIGFyciA9IHF1ZXJ5c3RyaW5nLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG9iakFyciA9IGFycltpXS5zcGxpdCgnPScpO1xuICAgIGlmIChvYmpBcnIubGVuZ3RoID4gMSkge1xuICAgICAgcXNbb2JqQXJyWzBdXSA9IG9iakFyclsxXTtcbiAgICB9IGVsc2UgaWYgKG9iakFyci5sZW5ndGggPT0gMSAmJiBvYmpBcnJbMF0gIT09ICcnKSB7XG4gICAgICBxc1tvYmpBcnJbMF1dID0gb2JqQXJyWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmhlcml0OiBpbmhlcml0LFxuICBnZXREZWZhdWx0Um91dGVyVHlwZTogZ2V0RGVmYXVsdFJvdXRlclR5cGUsXG4gIGFzc2lnbjogYXNzaWduLFxuICBlbmNvZGVRdWVyeVN0cmluZzogZW5jb2RlUXVlcnlTdHJpbmcsXG4gIGRlY29kZVF1ZXJ5U3RyaW5nOiBkZWNvZGVRdWVyeVN0cmluZ1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var pathToRegexp = __webpack_require__(/*! path-to-regexp */ 5);\nvar utils = __webpack_require__(/*! ../utils */ 0);\n\n/**\n * Base Router Class\n * @constructor \n * @param {String} routerBaseUrl\n * @param {Object} routers router dictionary\n */\nfunction Router(routerBaseUrl, routers) {\n  if (routerBaseUrl.substr(-1) === '/') {\n    routerBaseUrl = routerBaseUrl.substr(0, routerBaseUrl.length - 1);\n  }\n  this.routerBaseUrl = routerBaseUrl;\n  this.routers = {}; \n  if (routers && typeof routers === 'object') {\n    for (var key in routers) {\n      this.register(key, routers[key]);\n    }\n  }\n}\n\n/**\n * match router\n * @return {Object} includes Component name and params\n */\nRouter.prototype.match = function() {\n  var location = this.getLocation();\n  if (false === location) {\n    return false;\n  }\n  // match paths\n  if (this.routers[location]) {\n    return { component: this.routers[location] };\n  }\n  // match for regexp symbols\n  var keys = [];\n  for (var router in this.routers) {\n    if (router.indexOf(':') === -1) continue;\n    var re = pathToRegexp(router, keys);\n    var matched = re.exec(location);\n    if (matched && matched.length) {\n      var values = matched.slice(1);\n      var params = {};\n      for (var i = 0, len = values.length; i < len; i++) {\n        params[keys[i].name] = values[i];\n      }\n      return {\n        component: this.routers[router],\n        params: params \n      };\n    }\n  }\n  return false;\n};\n\n/**\n * get router table\n * @return {Array}\n */\nRouter.prototype.getRouters = function() {\n  return this.routers;\n};\n\n/**\n * register router\n * @param {String} path router path\n * @param {String} component component name\n */\nRouter.prototype.register = function(path, component) {\n  if (this.routers[path]) {\n    throw new Error('the path ' + path + ' has already registered');\n  }\n  this.routers[path] = component;\n};\n\n/**\n * history go back\n */\nRouter.prototype.back = function() {\n  history.go(-1);\n};\n\n/**\n * start the first redirect\n */\nRouter.prototype.start = function() {\n  setTimeout(function() {\n    this.onChange();\n  }.bind(this), 0);\n};\n\n/**\n * redirect to path\n * @virtual\n * @param {String} path\n * @param {Object} qs quertstring object\n * @param {Boolean} needHistory add history or not\n */\nRouter.prototype.redirect = function(path, qs, needHistory) {};\n\n/**\n * get current url location\n * @virtual\n */\nRouter.prototype.getLocation = function() {};\n\nmodule.exports = Router;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvcm91dGVyLmpzPzI1NGQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhdGhUb1JlZ2V4cCA9IHJlcXVpcmUoJ3BhdGgtdG8tcmVnZXhwJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEJhc2UgUm91dGVyIENsYXNzXG4gKiBAY29uc3RydWN0b3IgXG4gKiBAcGFyYW0ge1N0cmluZ30gcm91dGVyQmFzZVVybFxuICogQHBhcmFtIHtPYmplY3R9IHJvdXRlcnMgcm91dGVyIGRpY3Rpb25hcnlcbiAqL1xuZnVuY3Rpb24gUm91dGVyKHJvdXRlckJhc2VVcmwsIHJvdXRlcnMpIHtcbiAgaWYgKHJvdXRlckJhc2VVcmwuc3Vic3RyKC0xKSA9PT0gJy8nKSB7XG4gICAgcm91dGVyQmFzZVVybCA9IHJvdXRlckJhc2VVcmwuc3Vic3RyKDAsIHJvdXRlckJhc2VVcmwubGVuZ3RoIC0gMSk7XG4gIH1cbiAgdGhpcy5yb3V0ZXJCYXNlVXJsID0gcm91dGVyQmFzZVVybDtcbiAgdGhpcy5yb3V0ZXJzID0ge307IFxuICBpZiAocm91dGVycyAmJiB0eXBlb2Ygcm91dGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcm91dGVycykge1xuICAgICAgdGhpcy5yZWdpc3RlcihrZXksIHJvdXRlcnNba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogbWF0Y2ggcm91dGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGluY2x1ZGVzIENvbXBvbmVudCBuYW1lIGFuZCBwYXJhbXNcbiAqL1xuUm91dGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSB0aGlzLmdldExvY2F0aW9uKCk7XG4gIGlmIChmYWxzZSA9PT0gbG9jYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gbWF0Y2ggcGF0aHNcbiAgaWYgKHRoaXMucm91dGVyc1tsb2NhdGlvbl0pIHtcbiAgICByZXR1cm4geyBjb21wb25lbnQ6IHRoaXMucm91dGVyc1tsb2NhdGlvbl0gfTtcbiAgfVxuICAvLyBtYXRjaCBmb3IgcmVnZXhwIHN5bWJvbHNcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIgcm91dGVyIGluIHRoaXMucm91dGVycykge1xuICAgIGlmIChyb3V0ZXIuaW5kZXhPZignOicpID09PSAtMSkgY29udGludWU7XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHJvdXRlciwga2V5cyk7XG4gICAgdmFyIG1hdGNoZWQgPSByZS5leGVjKGxvY2F0aW9uKTtcbiAgICBpZiAobWF0Y2hlZCAmJiBtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlcyA9IG1hdGNoZWQuc2xpY2UoMSk7XG4gICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHBhcmFtc1trZXlzW2ldLm5hbWVdID0gdmFsdWVzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLnJvdXRlcnNbcm91dGVyXSxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMgXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGdldCByb3V0ZXIgdGFibGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5Sb3V0ZXIucHJvdG90eXBlLmdldFJvdXRlcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucm91dGVycztcbn07XG5cbi8qKlxuICogcmVnaXN0ZXIgcm91dGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCByb3V0ZXIgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuICovXG5Sb3V0ZXIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24ocGF0aCwgY29tcG9uZW50KSB7XG4gIGlmICh0aGlzLnJvdXRlcnNbcGF0aF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBwYXRoICcgKyBwYXRoICsgJyBoYXMgYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gIH1cbiAgdGhpcy5yb3V0ZXJzW3BhdGhdID0gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBoaXN0b3J5IGdvIGJhY2tcbiAqL1xuUm91dGVyLnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIGhpc3RvcnkuZ28oLTEpO1xufTtcblxuLyoqXG4gKiBzdGFydCB0aGUgZmlyc3QgcmVkaXJlY3RcbiAqL1xuUm91dGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogcmVkaXJlY3QgdG8gcGF0aFxuICogQHZpcnR1YWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gcXMgcXVlcnRzdHJpbmcgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5lZWRIaXN0b3J5IGFkZCBoaXN0b3J5IG9yIG5vdFxuICovXG5Sb3V0ZXIucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24ocGF0aCwgcXMsIG5lZWRIaXN0b3J5KSB7fTtcblxuLyoqXG4gKiBnZXQgY3VycmVudCB1cmwgbG9jYXRpb25cbiAqIEB2aXJ0dWFsXG4gKi9cblJvdXRlci5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbigpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JvdXRlci9yb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/pow.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! ./router */ 12);\nvar utils = __webpack_require__(/*! ./utils */ 0);\nvar component = __webpack_require__(/*! ./component */ 7);\nvar Resource = __webpack_require__(/*! ./resource */ 9);\n\n/**\n * init pow-router management\n * @constructor\n */\nfunction Pow() {\n  this.router = null;              // router controller\n  this.current = null;             // pointer to current component\n  this.rootScope = null;           // pointer to root element\n  this.resource = new Resource();  // resource loader\n}\n\n/**\n * config the spa router framework\n * @param {Object} config \n * such as below:\n * {\n *   baseUrl: './components',\n *   rootScope: '#main',\n *   routers: {\n *     '/hello': 'Hello',\n *     '/user': 'User'\n *   },\n *   routeType: 'hash', // default 'history' if supported\n * }\n */\nPow.prototype.config = function(config) {\n  var defaultConfig = {\n    routerBaseUrl: '',\n    resourceBaseUrl: '',\n    rootScope: '#main',\n    routers: {},\n    routeType: utils.getDefaultRouterType()\n  };\n  if (config && typeof config === 'object') {\n    for (var key in defaultConfig) {\n      if (config[key]) {\n        defaultConfig[key] = config[key];\n      }\n    }\n  }\n  this.rootScope = document.querySelector(defaultConfig.rootScope) || document;\n  this.resource.setBaseUrl(defaultConfig.resourceBaseUrl);\n  if (defaultConfig.routeType === 'history' && window.history) {\n    this.router = new router.HistoryRouter(\n      defaultConfig.routerBaseUrl,\n      defaultConfig.routers\n    );\n  } else {\n    this.router = new router.HashRouter(\n      defaultConfig.routerBaseUrl, \n      defaultConfig.routers\n    );\n  }\n  return this;\n};\n\n/**\n * Component definition\n * @param {String} name component name\n * @param {*} obj component configuration, object or function\n */\nPow.prototype.Component = function(name, obj) {\n  if (typeof obj === 'function') obj = obj();\n  return this.resource.set(name, component.create(obj));\n};\n\n/**\n * Start!\n */\nPow.prototype.start = function() {\n  var pow = this;\n  if (!this.router || !this.resource) {\n    this.config(undefined);\n  }\n  this.router.onChange = function() {\n    var matched = this.match();\n    if (!matched) {\n      console.error('url not found!');\n      return false;\n    }\n    if (pow.current && pow.current.remove) pow.current.remove();\n    pow.resource.get(matched.component, function(Component) {\n      if (!Component) {\n        console.error('component not define!');\n        return false;\n      }\n      pow.current = new Component({\n        state: {},\n        props: utils.assign(\n          matched.params, \n          utils.decodeQueryString(window.location.search)\n        ),\n        rootScope: pow.rootScope\n      });\n      pow.current.onCreate();\n      pow.current.render();\n    });\n  };\n  this.router.start();\n};\n\nmodule.exports = Pow;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wb3cuanM/M2M3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xuXG4vKipcbiAqIGluaXQgcG93LXJvdXRlciBtYW5hZ2VtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUG93KCkge1xuICB0aGlzLnJvdXRlciA9IG51bGw7ICAgICAgICAgICAgICAvLyByb3V0ZXIgY29udHJvbGxlclxuICB0aGlzLmN1cnJlbnQgPSBudWxsOyAgICAgICAgICAgICAvLyBwb2ludGVyIHRvIGN1cnJlbnQgY29tcG9uZW50XG4gIHRoaXMucm9vdFNjb3BlID0gbnVsbDsgICAgICAgICAgIC8vIHBvaW50ZXIgdG8gcm9vdCBlbGVtZW50XG4gIHRoaXMucmVzb3VyY2UgPSBuZXcgUmVzb3VyY2UoKTsgIC8vIHJlc291cmNlIGxvYWRlclxufVxuXG4vKipcbiAqIGNvbmZpZyB0aGUgc3BhIHJvdXRlciBmcmFtZXdvcmtcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgXG4gKiBzdWNoIGFzIGJlbG93OlxuICoge1xuICogICBiYXNlVXJsOiAnLi9jb21wb25lbnRzJyxcbiAqICAgcm9vdFNjb3BlOiAnI21haW4nLFxuICogICByb3V0ZXJzOiB7XG4gKiAgICAgJy9oZWxsbyc6ICdIZWxsbycsXG4gKiAgICAgJy91c2VyJzogJ1VzZXInXG4gKiAgIH0sXG4gKiAgIHJvdXRlVHlwZTogJ2hhc2gnLCAvLyBkZWZhdWx0ICdoaXN0b3J5JyBpZiBzdXBwb3J0ZWRcbiAqIH1cbiAqL1xuUG93LnByb3RvdHlwZS5jb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgcm91dGVyQmFzZVVybDogJycsXG4gICAgcmVzb3VyY2VCYXNlVXJsOiAnJyxcbiAgICByb290U2NvcGU6ICcjbWFpbicsXG4gICAgcm91dGVyczoge30sXG4gICAgcm91dGVUeXBlOiB1dGlscy5nZXREZWZhdWx0Um91dGVyVHlwZSgpXG4gIH07XG4gIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdENvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZ1trZXldKSB7XG4gICAgICAgIGRlZmF1bHRDb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0aGlzLnJvb3RTY29wZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVmYXVsdENvbmZpZy5yb290U2NvcGUpIHx8IGRvY3VtZW50O1xuICB0aGlzLnJlc291cmNlLnNldEJhc2VVcmwoZGVmYXVsdENvbmZpZy5yZXNvdXJjZUJhc2VVcmwpO1xuICBpZiAoZGVmYXVsdENvbmZpZy5yb3V0ZVR5cGUgPT09ICdoaXN0b3J5JyAmJiB3aW5kb3cuaGlzdG9yeSkge1xuICAgIHRoaXMucm91dGVyID0gbmV3IHJvdXRlci5IaXN0b3J5Um91dGVyKFxuICAgICAgZGVmYXVsdENvbmZpZy5yb3V0ZXJCYXNlVXJsLFxuICAgICAgZGVmYXVsdENvbmZpZy5yb3V0ZXJzXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyByb3V0ZXIuSGFzaFJvdXRlcihcbiAgICAgIGRlZmF1bHRDb25maWcucm91dGVyQmFzZVVybCwgXG4gICAgICBkZWZhdWx0Q29uZmlnLnJvdXRlcnNcbiAgICApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb21wb25lbnQgZGVmaW5pdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29tcG9uZW50IG5hbWVcbiAqIEBwYXJhbSB7Kn0gb2JqIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLCBvYmplY3Qgb3IgZnVuY3Rpb25cbiAqL1xuUG93LnByb3RvdHlwZS5Db21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIG9iaiA9IG9iaigpO1xuICByZXR1cm4gdGhpcy5yZXNvdXJjZS5zZXQobmFtZSwgY29tcG9uZW50LmNyZWF0ZShvYmopKTtcbn07XG5cbi8qKlxuICogU3RhcnQhXG4gKi9cblBvdy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBvdyA9IHRoaXM7XG4gIGlmICghdGhpcy5yb3V0ZXIgfHwgIXRoaXMucmVzb3VyY2UpIHtcbiAgICB0aGlzLmNvbmZpZyh1bmRlZmluZWQpO1xuICB9XG4gIHRoaXMucm91dGVyLm9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1hdGNoZWQgPSB0aGlzLm1hdGNoKCk7XG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd1cmwgbm90IGZvdW5kIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocG93LmN1cnJlbnQgJiYgcG93LmN1cnJlbnQucmVtb3ZlKSBwb3cuY3VycmVudC5yZW1vdmUoKTtcbiAgICBwb3cucmVzb3VyY2UuZ2V0KG1hdGNoZWQuY29tcG9uZW50LCBmdW5jdGlvbihDb21wb25lbnQpIHtcbiAgICAgIGlmICghQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbXBvbmVudCBub3QgZGVmaW5lIScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwb3cuY3VycmVudCA9IG5ldyBDb21wb25lbnQoe1xuICAgICAgICBzdGF0ZToge30sXG4gICAgICAgIHByb3BzOiB1dGlscy5hc3NpZ24oXG4gICAgICAgICAgbWF0Y2hlZC5wYXJhbXMsIFxuICAgICAgICAgIHV0aWxzLmRlY29kZVF1ZXJ5U3RyaW5nKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICksXG4gICAgICAgIHJvb3RTY29wZTogcG93LnJvb3RTY29wZVxuICAgICAgfSk7XG4gICAgICBwb3cuY3VycmVudC5vbkNyZWF0ZSgpO1xuICAgICAgcG93LmN1cnJlbnQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH07XG4gIHRoaXMucm91dGVyLnN0YXJ0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvdztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Bvdy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/.0.0.1@isarray/index.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = Array.isArray || function (arr) {\n  return Object.prototype.toString.call(arr) == '[object Array]';\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vLjAuMC4xQGlzYXJyYXkvaW5kZXguanM/MjhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMC4xQGlzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/.0.11.10@process/browser.js ***!
  \***************************************/
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vLjAuMTEuMTBAcHJvY2Vzcy9icm93c2VyLmpzP2RhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/.1.7.0@path-to-regexp/index.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var isarray = __webpack_require__(/*! isarray */ 3)\n\n/**\n * Expose `pathToRegexp`.\n */\nmodule.exports = pathToRegexp\nmodule.exports.parse = parse\nmodule.exports.compile = compile\nmodule.exports.tokensToFunction = tokensToFunction\nmodule.exports.tokensToRegExp = tokensToRegExp\n\n/**\n * The main path matching regexp utility.\n *\n * @type {RegExp}\n */\nvar PATH_REGEXP = new RegExp([\n  // Match escaped characters that would otherwise appear in future matches.\n  // This allows the user to escape special characters that won't transform.\n  '(\\\\\\\\.)',\n  // Match Express-style parameters and un-named parameters with a prefix\n  // and optional suffixes. Matches appear as:\n  //\n  // \"/:test(\\\\d+)?\" => [\"/\", \"test\", \"\\d+\", undefined, \"?\", undefined]\n  // \"/route(\\\\d+)\"  => [undefined, undefined, undefined, \"\\d+\", undefined, undefined]\n  // \"/*\"            => [\"/\", undefined, undefined, undefined, undefined, \"*\"]\n  '([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))'\n].join('|'), 'g')\n\n/**\n * Parse a string for the raw tokens.\n *\n * @param  {string}  str\n * @param  {Object=} options\n * @return {!Array}\n */\nfunction parse (str, options) {\n  var tokens = []\n  var key = 0\n  var index = 0\n  var path = ''\n  var defaultDelimiter = options && options.delimiter || '/'\n  var res\n\n  while ((res = PATH_REGEXP.exec(str)) != null) {\n    var m = res[0]\n    var escaped = res[1]\n    var offset = res.index\n    path += str.slice(index, offset)\n    index = offset + m.length\n\n    // Ignore already escaped sequences.\n    if (escaped) {\n      path += escaped[1]\n      continue\n    }\n\n    var next = str[index]\n    var prefix = res[2]\n    var name = res[3]\n    var capture = res[4]\n    var group = res[5]\n    var modifier = res[6]\n    var asterisk = res[7]\n\n    // Push the current path onto the tokens.\n    if (path) {\n      tokens.push(path)\n      path = ''\n    }\n\n    var partial = prefix != null && next != null && next !== prefix\n    var repeat = modifier === '+' || modifier === '*'\n    var optional = modifier === '?' || modifier === '*'\n    var delimiter = res[2] || defaultDelimiter\n    var pattern = capture || group\n\n    tokens.push({\n      name: name || key++,\n      prefix: prefix || '',\n      delimiter: delimiter,\n      optional: optional,\n      repeat: repeat,\n      partial: partial,\n      asterisk: !!asterisk,\n      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')\n    })\n  }\n\n  // Match any characters still remaining.\n  if (index < str.length) {\n    path += str.substr(index)\n  }\n\n  // If the path exists, push it onto the end.\n  if (path) {\n    tokens.push(path)\n  }\n\n  return tokens\n}\n\n/**\n * Compile a string to a template function for the path.\n *\n * @param  {string}             str\n * @param  {Object=}            options\n * @return {!function(Object=, Object=)}\n */\nfunction compile (str, options) {\n  return tokensToFunction(parse(str, options))\n}\n\n/**\n * Prettier encoding of URI path segments.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeURIComponentPretty (str) {\n  return encodeURI(str).replace(/[\\/?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase()\n  })\n}\n\n/**\n * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeAsterisk (str) {\n  return encodeURI(str).replace(/[?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase()\n  })\n}\n\n/**\n * Expose a method for transforming tokens into the path function.\n */\nfunction tokensToFunction (tokens) {\n  // Compile all the tokens into regexps.\n  var matches = new Array(tokens.length)\n\n  // Compile all the patterns before compilation.\n  for (var i = 0; i < tokens.length; i++) {\n    if (typeof tokens[i] === 'object') {\n      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')\n    }\n  }\n\n  return function (obj, opts) {\n    var path = ''\n    var data = obj || {}\n    var options = opts || {}\n    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent\n\n    for (var i = 0; i < tokens.length; i++) {\n      var token = tokens[i]\n\n      if (typeof token === 'string') {\n        path += token\n\n        continue\n      }\n\n      var value = data[token.name]\n      var segment\n\n      if (value == null) {\n        if (token.optional) {\n          // Prepend partial segment prefixes.\n          if (token.partial) {\n            path += token.prefix\n          }\n\n          continue\n        } else {\n          throw new TypeError('Expected \"' + token.name + '\" to be defined')\n        }\n      }\n\n      if (isarray(value)) {\n        if (!token.repeat) {\n          throw new TypeError('Expected \"' + token.name + '\" to not repeat, but received `' + JSON.stringify(value) + '`')\n        }\n\n        if (value.length === 0) {\n          if (token.optional) {\n            continue\n          } else {\n            throw new TypeError('Expected \"' + token.name + '\" to not be empty')\n          }\n        }\n\n        for (var j = 0; j < value.length; j++) {\n          segment = encode(value[j])\n\n          if (!matches[i].test(segment)) {\n            throw new TypeError('Expected all \"' + token.name + '\" to match \"' + token.pattern + '\", but received `' + JSON.stringify(segment) + '`')\n          }\n\n          path += (j === 0 ? token.prefix : token.delimiter) + segment\n        }\n\n        continue\n      }\n\n      segment = token.asterisk ? encodeAsterisk(value) : encode(value)\n\n      if (!matches[i].test(segment)) {\n        throw new TypeError('Expected \"' + token.name + '\" to match \"' + token.pattern + '\", but received \"' + segment + '\"')\n      }\n\n      path += token.prefix + segment\n    }\n\n    return path\n  }\n}\n\n/**\n * Escape a regular expression string.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction escapeString (str) {\n  return str.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g, '\\\\$1')\n}\n\n/**\n * Escape the capturing group by escaping special characters and meaning.\n *\n * @param  {string} group\n * @return {string}\n */\nfunction escapeGroup (group) {\n  return group.replace(/([=!:$\\/()])/g, '\\\\$1')\n}\n\n/**\n * Attach the keys as a property of the regexp.\n *\n * @param  {!RegExp} re\n * @param  {Array}   keys\n * @return {!RegExp}\n */\nfunction attachKeys (re, keys) {\n  re.keys = keys\n  return re\n}\n\n/**\n * Get the flags for a regexp from the options.\n *\n * @param  {Object} options\n * @return {string}\n */\nfunction flags (options) {\n  return options.sensitive ? '' : 'i'\n}\n\n/**\n * Pull out keys from a regexp.\n *\n * @param  {!RegExp} path\n * @param  {!Array}  keys\n * @return {!RegExp}\n */\nfunction regexpToRegexp (path, keys) {\n  // Use a negative lookahead to match only capturing groups.\n  var groups = path.source.match(/\\((?!\\?)/g)\n\n  if (groups) {\n    for (var i = 0; i < groups.length; i++) {\n      keys.push({\n        name: i,\n        prefix: null,\n        delimiter: null,\n        optional: false,\n        repeat: false,\n        partial: false,\n        asterisk: false,\n        pattern: null\n      })\n    }\n  }\n\n  return attachKeys(path, keys)\n}\n\n/**\n * Transform an array into a regexp.\n *\n * @param  {!Array}  path\n * @param  {Array}   keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction arrayToRegexp (path, keys, options) {\n  var parts = []\n\n  for (var i = 0; i < path.length; i++) {\n    parts.push(pathToRegexp(path[i], keys, options).source)\n  }\n\n  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))\n\n  return attachKeys(regexp, keys)\n}\n\n/**\n * Create a path regexp from string input.\n *\n * @param  {string}  path\n * @param  {!Array}  keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction stringToRegexp (path, keys, options) {\n  return tokensToRegExp(parse(path, options), keys, options)\n}\n\n/**\n * Expose a function for taking tokens and returning a RegExp.\n *\n * @param  {!Array}          tokens\n * @param  {(Array|Object)=} keys\n * @param  {Object=}         options\n * @return {!RegExp}\n */\nfunction tokensToRegExp (tokens, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */ (keys || options)\n    keys = []\n  }\n\n  options = options || {}\n\n  var strict = options.strict\n  var end = options.end !== false\n  var route = ''\n\n  // Iterate over the tokens and create our regexp string.\n  for (var i = 0; i < tokens.length; i++) {\n    var token = tokens[i]\n\n    if (typeof token === 'string') {\n      route += escapeString(token)\n    } else {\n      var prefix = escapeString(token.prefix)\n      var capture = '(?:' + token.pattern + ')'\n\n      keys.push(token)\n\n      if (token.repeat) {\n        capture += '(?:' + prefix + capture + ')*'\n      }\n\n      if (token.optional) {\n        if (!token.partial) {\n          capture = '(?:' + prefix + '(' + capture + '))?'\n        } else {\n          capture = prefix + '(' + capture + ')?'\n        }\n      } else {\n        capture = prefix + '(' + capture + ')'\n      }\n\n      route += capture\n    }\n  }\n\n  var delimiter = escapeString(options.delimiter || '/')\n  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter\n\n  // In non-strict mode we allow a slash at the end of match. If the path to\n  // match already ends with a slash, we remove it for consistency. The slash\n  // is valid at the end of a path match, not in the middle. This is important\n  // in non-ending mode, where \"/test/\" shouldn't match \"/test//route\".\n  if (!strict) {\n    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'\n  }\n\n  if (end) {\n    route += '$'\n  } else {\n    // In non-ending mode, we need the capturing groups to match as much as\n    // possible by using a positive lookahead to the end or next path segment.\n    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'\n  }\n\n  return attachKeys(new RegExp('^' + route, flags(options)), keys)\n}\n\n/**\n * Normalize the given path string, returning a regular expression.\n *\n * An empty array can be passed in for the keys, which will hold the\n * placeholder key descriptions. For example, using `/user/:id`, `keys` will\n * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.\n *\n * @param  {(string|RegExp|Array)} path\n * @param  {(Array|Object)=}       keys\n * @param  {Object=}               options\n * @return {!RegExp}\n */\nfunction pathToRegexp (path, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */ (keys || options)\n    keys = []\n  }\n\n  options = options || {}\n\n  if (path instanceof RegExp) {\n    return regexpToRegexp(path, /** @type {!Array} */ (keys))\n  }\n\n  if (isarray(path)) {\n    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)\n  }\n\n  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vLjEuNy4wQHBhdGgtdG8tcmVnZXhwL2luZGV4LmpzP2ZmZTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzYXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZVxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT98KFxcXFwqKSknXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLydcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdXG4gICAgdmFyIHByZWZpeCA9IHJlc1syXVxuICAgIHZhciBuYW1lID0gcmVzWzNdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF1cbiAgICB2YXIgZ3JvdXAgPSByZXNbNV1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXhcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyXG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJycsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIGFzdGVyaXNrOiAhIWFzdGVyaXNrLFxuICAgICAgcGF0dGVybjogcGF0dGVybiA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pIDogKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpXG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICAgICAgICAgIHRva2Vuc1xuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJ1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZVxuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKVxuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlclxuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aERlbGltaXRlciA/IHJvdXRlLnNsaWNlKDAsIC1kZWxpbWl0ZXIubGVuZ3RoKSA6IHJvdXRlKSArICcoPzonICsgZGVsaW1pdGVyICsgJyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJ1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMobmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpLCBrZXlzKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19ICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cykpXG4gIH1cblxuICBpZiAoaXNhcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS43LjBAcGF0aC10by1yZWdleHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/.4.7.0@art-template/lib/template-web.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/*! art-template@4.7.0 | https://github.com/aui/art-template */\n!function(e,t){ true?module.exports=t():\"function\"==typeof define&&define.amd?define([],t):\"object\"==typeof exports?exports.template=t():e.template=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e[\"default\"]}:function(){return e};return t.d(n,\"a\",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=\"\",t(t.s=24)}([function(e,t,n){\"use strict\";(function(t){e.exports=!1;try{e.exports=\"[object process]\"===Object.prototype.toString.call(t.process)}catch(n){}}).call(t,n(7))},function(e,t,n){\"use strict\";var r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},o=n(20),i=n(2),s=n(22),c=function(e,t){t.onerror(e,t);var n=function(){return\"{Template Error}\"};return n.mappings=[],n.sourcesContent=[],n},u=function a(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};\"object\"===(void 0===e?\"undefined\":r(e))?t=e:t.source=e,t=i.$extend(t),e=t.source,t.debug&&(t.cache=!1,t.bail=!1,t.minimize=!1,t.compileDebug=!0),t.filename&&(t.filename=t.resolveFilename(t.filename,t));var n=t.filename,u=t.cache,l=t.caches;if(u&&n){var p=l.get(n);if(p)return p}if(!e)try{e=t.loader(n,t),t.source=e}catch(d){var f=new s({name:\"CompileError\",message:\"template not found: \"+d.message,stack:d.stack});if(t.bail)throw f;return c(f,t)}var m=void 0,h=new o(t);try{m=h.build()}catch(f){if(f=new s(f),t.bail)throw f;return c(f,t)}var y=function(e,n){try{return m(e,n)}catch(f){if(!t.compileDebug)return t.cache=!1,t.compileDebug=!0,a(t)(e,n);if(f=new s(f),t.bail)throw f;return c(f,t)()}};return y.mappings=m.mappings,y.toString=function(){return m.toString()},u&&n&&l.set(n,y),y};u.Compiler=o,e.exports=u},function(e,t,n){\"use strict\";var r=n(0),o=n(12),i=n(16),s=n(9),c=n(11),u=n(15),a=n(14),l=n(10),p=n(18),f=n(19),m=n(13),h=n(17),y={source:null,filename:null,rules:[f,p],escape:!0,debug:!!r&&\"production\"!==process.env.NODE_ENV,bail:!1,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:h,htmlMinifier:m,htmlMinifierOptions:{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:[]},onerror:i,loader:u,caches:s,root:\"/\",extname:\".art\",ignore:[],imports:{$each:l,$escape:c,$include:a}};y.$extend=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return o(e,y)},e.exports=y},function(e,t,n){\"use strict\"},function(e,t,n){\"use strict\";var r=n(1),o=function(e,t,n){return r(e,n)(t)};e.exports=o},function(e,t,n){\"use strict\";(function(e){var t=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e};!function(e){e.noop=function(){}}(\"object\"===t(e)&&\"object\"===t(e.exports)?e.exports:window)}).call(t,n(8)(e))},function(e,t,n){\"use strict\";var r={\"abstract\":!0,await:!0,\"boolean\":!0,\"break\":!0,\"byte\":!0,\"case\":!0,\"catch\":!0,\"char\":!0,\"class\":!0,\"const\":!0,\"continue\":!0,\"debugger\":!0,\"default\":!0,\"delete\":!0,\"do\":!0,\"double\":!0,\"else\":!0,\"enum\":!0,\"export\":!0,\"extends\":!0,\"false\":!0,\"final\":!0,\"finally\":!0,\"float\":!0,\"for\":!0,\"function\":!0,\"goto\":!0,\"if\":!0,\"implements\":!0,\"import\":!0,\"in\":!0,\"instanceof\":!0,\"int\":!0,\"interface\":!0,\"let\":!0,\"long\":!0,\"native\":!0,\"new\":!0,\"null\":!0,\"package\":!0,\"private\":!0,\"protected\":!0,\"public\":!0,\"return\":!0,\"short\":!0,\"static\":!0,\"super\":!0,\"switch\":!0,\"synchronized\":!0,\"this\":!0,\"throw\":!0,\"transient\":!0,\"true\":!0,\"try\":!0,\"typeof\":!0,\"var\":!0,\"void\":!0,\"volatile\":!0,\"while\":!0,\"with\":!0,\"yield\":!0};e.exports=function(e){return r.hasOwnProperty(e)}},function(e,t,n){\"use strict\";var r,o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e};r=function(){return this}();try{r=r||Function(\"return this\")()||(0,eval)(\"this\")}catch(i){\"object\"===(\"undefined\"==typeof window?\"undefined\":o(window))&&(r=window)}e.exports=r},function(e,t,n){\"use strict\";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,\"loaded\",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,\"id\",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){\"use strict\";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){\"use strict\";var r=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n,e);else for(var o in e)t(e[o],o)};e.exports=r},function(e,t,n){\"use strict\";var r=function c(e){return\"string\"!=typeof e&&(e=e===undefined||null===e?\"\":\"function\"==typeof e?c(e.call(e)):JSON.stringify(e)),e},o=/[\"&'<>]/,i=function(e){var t=\"\"+e,n=o.exec(t);if(!n)return e;var r=\"\",i=void 0,s=void 0,c=void 0;for(i=n.index,s=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:c=\"&#34;\";break;case 38:c=\"&#38;\";break;case 39:c=\"&#39;\";break;case 60:c=\"&#60;\";break;case 62:c=\"&#62;\";break;default:continue}s!==i&&(r+=t.substring(s,i)),s=i+1,r+=c}return s!==i?r+t.substring(s,i):r},s=function(e){return i(r(e))};e.exports=s},function(e,t,n){\"use strict\";var r=Object.prototype.toString,o=function(e){return null===e?\"Null\":r.call(e).slice(8,-1)},i=function s(e,t){var n=void 0,r=o(e);if(\"Object\"===r?n=Object.create(t||{}):\"Array\"===r&&(n=[].concat(t||[])),n){for(var i in e)n[i]=s(e[i],n[i]);return n}return e};e.exports=i},function(e,t,n){\"use strict\";var r=n(0),o=function(e,t){if(r){var o,i=n(5).minify,s=t.htmlMinifierOptions,c=t.rules.map(function(e){return e.test});(o=s.ignoreCustomFragments).push.apply(o,c),e=i(e,s)}return e};e.exports=o},function(e,t,n){\"use strict\";var r=function(e,t,r,o){var i=n(1);return o=o.$extend({filename:o.resolveFilename(e,o),source:null}),i(o)(t,r)};e.exports=r},function(e,t,n){\"use strict\";var r=n(0),o=function(e){if(r){return n(3).readFileSync(e,\"utf8\")}var t=document.getElementById(e);return t.value||t.innerHTML};e.exports=o},function(e,t,n){\"use strict\";var r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},o=function(e){\"object\"===(\"undefined\"==typeof console?\"undefined\":r(console))&&console.error(e.name,e.message)};e.exports=o},function(e,t,n){\"use strict\";var r=n(0),o=/^\\.+\\//,i=function(e,t){if(r){var i=n(3),s=t.root,c=t.extname;if(o.test(e)){var u=t.filename,a=!u||e===u,l=a?s:i.dirname(u);e=i.resolve(l,e)}else e=i.resolve(s,e);i.extname(e)||(e+=c)}return e};e.exports=i},function(e,t,n){\"use strict\";var r={test:/{{[ \\t]*([@#]?)(\\/?)([\\w\\W]*?)[ \\t]*}}/,use:function(e,t,n,r){var i=this,s=i.options,c=i.getEsTokens(r.trim()),u=c.map(function(e){return e.value}),a={},l=void 0,p=!!t&&\"raw\",f=n+u.shift(),m=function(e,t){console.warn(\"Template upgrade:\",\"{{\"+e+\"}}\",\">>>\",\"{{\"+t+\"}}\",\"\\n\",s.filename||\"\")};switch(\"#\"===t&&m(\"#value\",\"@value\"),f){case\"set\":r=\"var \"+u.join(\"\");break;case\"if\":r=\"if(\"+u.join(\"\")+\"){\";break;case\"else\":var h=u.indexOf(\"if\");h>-1?(u.splice(0,h+1),r=\"}else if(\"+u.join(\"\")+\"){\"):r=\"}else{\";break;case\"/if\":r=\"}\";break;case\"each\":l=o(c),l.shift(),\"as\"===l[1]&&(m(\"each object as value index\",\"each object value index\"),l.splice(1,1));var y=l[0]||\"$data\",d=l[1]||\"$value\",v=l[2]||\"$index\";r=\"$each(\"+y+\",function(\"+d+\",\"+v+\"){\";break;case\"/each\":r=\"})\";break;case\"echo\":f=\"print\",m(\"echo value\",\"value\");case\"print\":case\"include\":case\"extend\":l=o(c),l.shift(),r=f+\"(\"+l.join(\",\")+\")\";break;case\"block\":r=\"block(\"+u.join(\"\")+\",function(){\";break;case\"/block\":r=\"})\";break;default:if(-1!==u.indexOf(\"|\")){for(var b=f,g=[],x=u.filter(function(e){return!/^\\s+$/.test(e)});\"|\"!==x[0];)b+=x.shift();x.filter(function(e){return\":\"!==e}).forEach(function(e){\"|\"===e?g.push([]):g[g.length-1].push(e)}),g.reduce(function(e,t){var n=t.shift();return t.unshift(e),r=n+\"(\"+t.join(\",\")+\")\"},b)}else s.imports[f]?(m(\"filterName value\",\"value | filterName\"),l=o(c),l.shift(),r=f+\"(\"+l.join(\",\")+\")\",p=\"raw\"):r=\"\"+f+u.join(\"\");p||(p=\"escape\")}return a.code=r,a.output=p,a}},o=function(e){for(var t=0,n=e.shift(),r=[[n]];t<e.length;){var o=e[t],i=o.type;\"whitespace\"!==i&&\"comment\"!==i&&(\"punctuator\"===n.type&&\"]\"!==n.value||\"punctuator\"===i?r[r.length-1].push(o):r.push([o]),n=o),t++}return r.map(function(e){return e.map(function(e){return e.value}).join(\"\")})};r._split=o,e.exports=r},function(e,t,n){\"use strict\";var r={test:/<%(#?)((?:==|=#|[=-])?)([\\w\\W]*?)(-?)%>/,use:function(e,t,n,r){var o={\"-\":\"raw\",\"=\":\"escape\",\"\":!1,\"==\":\"raw\",\"=#\":\"raw\"};return t&&(r=\"//\"+r),{code:r,output:o[n]}}};e.exports=r},function(e,t,n){\"use strict\";function r(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}var o=n(21),i=n(23),s=\"$data\",c=\"$imports\",u=\"print\",a=\"include\",l=\"extend\",p=\"block\",f=\"$$out\",m=\"$$line\",h=\"$$blocks\",y=\"$$from\",d=\"$$layout\",v=\"$$options\",b=function(e,t){return e.hasOwnProperty(t)},g=JSON.stringify,x=function(){function e(t){var n,o,b,g=this;r(this,e);var x=t.source,k=t.minimize,w=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.external=(n={},n[s]=!0,n[c]=!0,n[v]=!0,n),this.internal=(o={},o[f]=\"''\",o[m]=\"[0,0,'']\",o[h]=\"arguments[1]||{}\",o[y]=\"null\",o[d]=\"function(){return \"+c+\".$include(\"+y+\",\"+s+\",\"+h+\",\"+v+\")}\",o[u]=\"function(){\"+f+\"+=''.concat.apply('',arguments)}\",o[a]=\"function(src,data,block){\"+f+\"+=\"+c+\".$include(src,data||\"+s+\",block,\"+v+\")}\",o[l]=\"function(from){\"+y+\"=from}\",o[p]=\"function(name,callback){if(\"+y+\"){\"+f+\"='';callback();\"+h+\"[name]=\"+f+\"}else{if(typeof \"+h+\"[name]==='string'){\"+f+\"+=\"+h+\"[name]}else{callback()}}}\",o),this.dependencies=(b={},b[u]=[f],b[a]=[f,c,s,v],b[l]=[y,d],b[p]=[y,f,h],b[d]=[c,y,s,h,v],b),this.importContext(f),t.compileDebug&&this.importContext(m),k)try{x=w(x,t)}catch(S){}this.source=x,this.getTplTokens(x,t.rules,this).forEach(function(e){e.type===i.TYPE_STRING?g.parseString(e):g.parseExpression(e)})}return e.prototype.getTplTokens=function(){return i.apply(undefined,arguments)},e.prototype.getEsTokens=function(e){return o(e)},e.prototype.getVariables=function(e){var t=!1;return e.filter(function(e){return\"whitespace\"!==e.type&&\"comment\"!==e.type}).filter(function(e){return\"name\"===e.type&&!t||(t=\"punctuator\"===e.type&&\".\"===e.value,!1)}).map(function(e){return e.value})},e.prototype.importContext=function(e){var t=this,n=\"\",r=this.internal,o=this.dependencies,i=this.external,u=this.context,a=this.options,l=a.ignore,p=a.imports,f=this.CONTEXT_MAP;!b(f,e)&&!b(i,e)&&l.indexOf(e)<0&&(b(r,e)?(n=r[e],b(o,e)&&o[e].forEach(function(e){return t.importContext(e)})):n=b(p,e)?c+\".\"+e:s+\".\"+e,f[e]=n,u.push({name:e,value:n}))},e.prototype.parseString=function(e){var t=e.value;if(t){var n=f+\"+=\"+g(t);this.scripts.push({source:t,tplToken:e,code:n})}},e.prototype.parseExpression=function(e){var t=this,n=e.value,r=e.script,o=r.output,s=r.code;o&&(s=!1===escape||o===i.TYPE_RAW?f+\"+=\"+r.code:f+\"+=$escape(\"+r.code+\")\");var c=this.getEsTokens(s);this.getVariables(c).forEach(function(e){return t.importContext(e)}),this.scripts.push({source:n,tplToken:e,code:s})},e.prototype.checkExpression=function(e){for(var t=[[/^\\s*?}.*?{?[\\s;]*?$/,\"\"],[/(^[\\w\\W]*?\\s*?function\\s*?\\([\\w\\W]*?\\)\\s*?{[\\s;]*?$)/,\"$1})\"],[/(^.*?\\(\\s*?[\\w\\W]*?=>\\s*?{[\\s;]*?$)/,\"$1})\"],[/(^[\\w\\W]*?\\([\\w\\W]*?\\)\\s*?{[\\s;]*?$)/,\"$1}\"]],n=0;n<t.length;){if(t[n][0].test(e)){var r;e=(r=e).replace.apply(r,t[n]);break}n++}try{return new Function(e),!0}catch(o){return!1}},e.prototype.build=function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,o=this.source,u=e.filename,a=e.imports,p=[],h=b(this.CONTEXT_MAP,l),y=0,x=function(e,t){var n=t.line,o=t.start,i={generated:{line:r.length+y+1,column:1},original:{line:n+1,column:o+1}};return y+=e.split(/\\n/).length-1,i},k=function(e){return e.replace(/^[\\t ]+|[\\t ]$/g,\"\")};r.push(\"function(\"+s+\"){\"),r.push(\"'use strict'\"),r.push(\"var \"+t.map(function(e){return e.name+\"=\"+e.value}).join(\",\")),e.compileDebug?(r.push(\"try{\"),n.forEach(function(e){e.tplToken.type===i.TYPE_EXPRESSION&&r.push(m+\"=[\"+[e.tplToken.line,e.tplToken.start,g(e.source)].join(\",\")+\"]\"),p.push(x(e.code,e.tplToken)),r.push(k(e.code))}),r.push(\"}catch(error){\"),r.push(\"throw {\"+[\"name:'RuntimeError'\",\"path:\"+g(u),\"message:error.message\",\"line:\"+m+\"[0]+1\",\"column:\"+m+\"[1]+1\",\"source:\"+m+\"[2]\",\"stack:error.stack\"].join(\",\")+\"}\"),r.push(\"}\")):n.forEach(function(e){p.push(x(e.code,e.tplToken)),r.push(k(e.code))}),r.push(h?\"return \"+d+\"()\":\"return \"+f),r.push(\"}\");var w=r.join(\"\\n\");try{var S=new Function(c,v,\"return \"+w)(a,e);return S.mappings=p,S.sourcesContent=[o],S}catch(C){for(var E=0,$=0,T=0,O=o;E<n.length;){var j=n[E];if(!this.checkExpression(j.code)){O=j.source,$=j.tplToken.line,T=j.tplToken.start;break}E++}throw{name:\"CompileError\",path:u,message:C.message,line:$+1,column:T+1,source:O,script:w,stack:C.stack}}},e}();x.CONSTS={DATA:s,IMPORTS:c,PRINT:u,INCLUDE:a,EXTEND:l,BLOCK:p,OPTIONS:v,OUT:f,LINE:m,BLOCKS:h,FROM:y,LAYOUT:d,ESCAPE:\"$escape\"},e.exports=x},function(e,t,n){\"use strict\";var r=n(6),o=/((['\"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\'\"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyu]{1,5}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,i=function(e){var t={type:\"invalid\",value:e[0]};return e[1]?(t.type=\"string\",t.closed=!(!e[3]&&!e[4])):e[5]?t.type=\"comment\":e[6]?(t.type=\"comment\",t.closed=!!e[7]):e[8]?t.type=\"regex\":e[9]?t.type=\"number\":e[10]?t.type=\"name\":e[11]?t.type=\"punctuator\":e[12]&&(t.type=\"whitespace\"),t},s=function(e){return e.match(o).map(function(e){return o.lastIndex=0,i(o.exec(e))}).map(function(e){return\"name\"===e.type&&r(e.value)&&(e.type=\"keyword\"),e})};e.exports=s},function(e,t,n){\"use strict\";function r(e){var t=e.stack;delete e.stack,this.name=\"TemplateError\",this.message=JSON.stringify(e,null,4),this.stack=t}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,e.exports=r},function(e,t,n){\"use strict\";var r=function(e,t,n){for(var r=[{type:\"string\",value:e,line:0,start:0,end:e.length}],o=0;o<t.length;o++)!function(e){for(var t=e.test.ignoreCase?\"ig\":\"g\",o=e.test.source+\"|^$|[\\\\w\\\\W]\",i=new RegExp(o,t),s=0;s<r.length;s++)if(\"string\"===r[s].type){for(var c=r[s].line,u=r[s].start,a=r[s].end,l=r[s].value.match(i),p=[],f=0;f<l.length;f++){var m=l[f];e.test.lastIndex=0;var h=e.test.exec(m),y=h?\"expression\":\"string\",d=p[p.length-1],v=d||r[s],b=v.value;u=v.line===c?d?d.end:u:b.length-b.lastIndexOf(\"\\n\")-1,a=u+m.length;var g={type:y,value:m,line:c,start:u,end:a};if(\"string\"===y)d&&\"string\"===d.type?(d.value+=m,d.end+=m.length):p.push(g);else{var x=e.use.apply(n,h);g.script=x,p.push(g)}c+=m.split(/\\n/).length-1}r.splice.apply(r,[s,1].concat(p)),s+=p.length-1}}(t[o]);return r};r.TYPE_STRING=\"string\",r.TYPE_EXPRESSION=\"expression\",r.TYPE_RAW=\"raw\",r.TYPE_ESCAPE=\"escape\",e.exports=r},function(e,t,n){\"use strict\";var r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},o=n(4),i=n(1),s=n(2),c=function(e,t){return\"object\"===(void 0===t?\"undefined\":r(t))?o({filename:e},t):i({filename:e,source:t})};c.render=o,c.compile=i,c.defaults=s,e.exports=c}])});\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../.0.11.10@process/browser.js */ 4)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vLjQuNy4wQGFydC10ZW1wbGF0ZS9saWIvdGVtcGxhdGUtd2ViLmpzPzIxNzciXSwic291cmNlc0NvbnRlbnQiOlsiLyohIGFydC10ZW1wbGF0ZUA0LjcuMCB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnRlbXBsYXRlPXQoKTplLnRlbXBsYXRlPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyx0KSxvLmw9ITAsby5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0Lmk9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHQuZD1mdW5jdGlvbihlLG4scil7dC5vKGUsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpyfSl9LHQubj1mdW5jdGlvbihlKXt2YXIgbj1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZVtcImRlZmF1bHRcIl19OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobixcImFcIixuKSxufSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTI0KX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24odCl7ZS5leHBvcnRzPSExO3RyeXtlLmV4cG9ydHM9XCJbb2JqZWN0IHByb2Nlc3NdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodC5wcm9jZXNzKX1jYXRjaChuKXt9fSkuY2FsbCh0LG4oNykpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sbz1uKDIwKSxpPW4oMikscz1uKDIyKSxjPWZ1bmN0aW9uKGUsdCl7dC5vbmVycm9yKGUsdCk7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm5cIntUZW1wbGF0ZSBFcnJvcn1cIn07cmV0dXJuIG4ubWFwcGluZ3M9W10sbi5zb3VyY2VzQ29udGVudD1bXSxufSx1PWZ1bmN0aW9uIGEoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOnt9O1wib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOnIoZSkpP3Q9ZTp0LnNvdXJjZT1lLHQ9aS4kZXh0ZW5kKHQpLGU9dC5zb3VyY2UsdC5kZWJ1ZyYmKHQuY2FjaGU9ITEsdC5iYWlsPSExLHQubWluaW1pemU9ITEsdC5jb21waWxlRGVidWc9ITApLHQuZmlsZW5hbWUmJih0LmZpbGVuYW1lPXQucmVzb2x2ZUZpbGVuYW1lKHQuZmlsZW5hbWUsdCkpO3ZhciBuPXQuZmlsZW5hbWUsdT10LmNhY2hlLGw9dC5jYWNoZXM7aWYodSYmbil7dmFyIHA9bC5nZXQobik7aWYocClyZXR1cm4gcH1pZighZSl0cnl7ZT10LmxvYWRlcihuLHQpLHQuc291cmNlPWV9Y2F0Y2goZCl7dmFyIGY9bmV3IHMoe25hbWU6XCJDb21waWxlRXJyb3JcIixtZXNzYWdlOlwidGVtcGxhdGUgbm90IGZvdW5kOiBcIitkLm1lc3NhZ2Usc3RhY2s6ZC5zdGFja30pO2lmKHQuYmFpbCl0aHJvdyBmO3JldHVybiBjKGYsdCl9dmFyIG09dm9pZCAwLGg9bmV3IG8odCk7dHJ5e209aC5idWlsZCgpfWNhdGNoKGYpe2lmKGY9bmV3IHMoZiksdC5iYWlsKXRocm93IGY7cmV0dXJuIGMoZix0KX12YXIgeT1mdW5jdGlvbihlLG4pe3RyeXtyZXR1cm4gbShlLG4pfWNhdGNoKGYpe2lmKCF0LmNvbXBpbGVEZWJ1ZylyZXR1cm4gdC5jYWNoZT0hMSx0LmNvbXBpbGVEZWJ1Zz0hMCxhKHQpKGUsbik7aWYoZj1uZXcgcyhmKSx0LmJhaWwpdGhyb3cgZjtyZXR1cm4gYyhmLHQpKCl9fTtyZXR1cm4geS5tYXBwaW5ncz1tLm1hcHBpbmdzLHkudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gbS50b1N0cmluZygpfSx1JiZuJiZsLnNldChuLHkpLHl9O3UuQ29tcGlsZXI9byxlLmV4cG9ydHM9dX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMCksbz1uKDEyKSxpPW4oMTYpLHM9big5KSxjPW4oMTEpLHU9bigxNSksYT1uKDE0KSxsPW4oMTApLHA9bigxOCksZj1uKDE5KSxtPW4oMTMpLGg9bigxNykseT17c291cmNlOm51bGwsZmlsZW5hbWU6bnVsbCxydWxlczpbZixwXSxlc2NhcGU6ITAsZGVidWc6ISFyJiZcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WLGJhaWw6ITEsY2FjaGU6ITAsbWluaW1pemU6ITAsY29tcGlsZURlYnVnOiExLHJlc29sdmVGaWxlbmFtZTpoLGh0bWxNaW5pZmllcjptLGh0bWxNaW5pZmllck9wdGlvbnM6e2NvbGxhcHNlV2hpdGVzcGFjZTohMCxtaW5pZnlDU1M6ITAsbWluaWZ5SlM6ITAsaWdub3JlQ3VzdG9tRnJhZ21lbnRzOltdfSxvbmVycm9yOmksbG9hZGVyOnUsY2FjaGVzOnMscm9vdDpcIi9cIixleHRuYW1lOlwiLmFydFwiLGlnbm9yZTpbXSxpbXBvcnRzOnskZWFjaDpsLCRlc2NhcGU6YywkaW5jbHVkZTphfX07eS4kZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9O3JldHVybiBvKGUseSl9LGUuZXhwb3J0cz15fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpLG89ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByKGUsbikodCl9O2UuZXhwb3J0cz1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKGUpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9OyFmdW5jdGlvbihlKXtlLm5vb3A9ZnVuY3Rpb24oKXt9fShcIm9iamVjdFwiPT09dChlKSYmXCJvYmplY3RcIj09PXQoZS5leHBvcnRzKT9lLmV4cG9ydHM6d2luZG93KX0pLmNhbGwodCxuKDgpKGUpKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPXtcImFic3RyYWN0XCI6ITAsYXdhaXQ6ITAsXCJib29sZWFuXCI6ITAsXCJicmVha1wiOiEwLFwiYnl0ZVwiOiEwLFwiY2FzZVwiOiEwLFwiY2F0Y2hcIjohMCxcImNoYXJcIjohMCxcImNsYXNzXCI6ITAsXCJjb25zdFwiOiEwLFwiY29udGludWVcIjohMCxcImRlYnVnZ2VyXCI6ITAsXCJkZWZhdWx0XCI6ITAsXCJkZWxldGVcIjohMCxcImRvXCI6ITAsXCJkb3VibGVcIjohMCxcImVsc2VcIjohMCxcImVudW1cIjohMCxcImV4cG9ydFwiOiEwLFwiZXh0ZW5kc1wiOiEwLFwiZmFsc2VcIjohMCxcImZpbmFsXCI6ITAsXCJmaW5hbGx5XCI6ITAsXCJmbG9hdFwiOiEwLFwiZm9yXCI6ITAsXCJmdW5jdGlvblwiOiEwLFwiZ290b1wiOiEwLFwiaWZcIjohMCxcImltcGxlbWVudHNcIjohMCxcImltcG9ydFwiOiEwLFwiaW5cIjohMCxcImluc3RhbmNlb2ZcIjohMCxcImludFwiOiEwLFwiaW50ZXJmYWNlXCI6ITAsXCJsZXRcIjohMCxcImxvbmdcIjohMCxcIm5hdGl2ZVwiOiEwLFwibmV3XCI6ITAsXCJudWxsXCI6ITAsXCJwYWNrYWdlXCI6ITAsXCJwcml2YXRlXCI6ITAsXCJwcm90ZWN0ZWRcIjohMCxcInB1YmxpY1wiOiEwLFwicmV0dXJuXCI6ITAsXCJzaG9ydFwiOiEwLFwic3RhdGljXCI6ITAsXCJzdXBlclwiOiEwLFwic3dpdGNoXCI6ITAsXCJzeW5jaHJvbml6ZWRcIjohMCxcInRoaXNcIjohMCxcInRocm93XCI6ITAsXCJ0cmFuc2llbnRcIjohMCxcInRydWVcIjohMCxcInRyeVwiOiEwLFwidHlwZW9mXCI6ITAsXCJ2YXJcIjohMCxcInZvaWRcIjohMCxcInZvbGF0aWxlXCI6ITAsXCJ3aGlsZVwiOiEwLFwid2l0aFwiOiEwLFwieWllbGRcIjohMH07ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiByLmhhc093blByb3BlcnR5KGUpfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByLG89XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX07cj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtyPXJ8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKXx8KDAsZXZhbCkoXCJ0aGlzXCIpfWNhdGNoKGkpe1wib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz9cInVuZGVmaW5lZFwiOm8od2luZG93KSkmJihyPXdpbmRvdyl9ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUud2VicGFja1BvbHlmaWxsfHwoZS5kZXByZWNhdGU9ZnVuY3Rpb24oKXt9LGUucGF0aHM9W10sZS5jaGlsZHJlbnx8KGUuY2hpbGRyZW49W10pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwibG9hZGVkXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUubH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImlkXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuaX19KSxlLndlYnBhY2tQb2x5ZmlsbD0xKSxlfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPXtfX2RhdGE6T2JqZWN0LmNyZWF0ZShudWxsKSxzZXQ6ZnVuY3Rpb24oZSx0KXt0aGlzLl9fZGF0YVtlXT10fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX19kYXRhW2VdfSxyZXNldDpmdW5jdGlvbigpe3RoaXMuX19kYXRhPXt9fX07ZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1mdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKXQoZVtuXSxuLGUpO2Vsc2UgZm9yKHZhciBvIGluIGUpdChlW29dLG8pfTtlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uIGMoZSl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihlPWU9PT11bmRlZmluZWR8fG51bGw9PT1lP1wiXCI6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9jKGUuY2FsbChlKSk6SlNPTi5zdHJpbmdpZnkoZSkpLGV9LG89L1tcIiYnPD5dLyxpPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCIrZSxuPW8uZXhlYyh0KTtpZighbilyZXR1cm4gZTt2YXIgcj1cIlwiLGk9dm9pZCAwLHM9dm9pZCAwLGM9dm9pZCAwO2ZvcihpPW4uaW5kZXgscz0wO2k8dC5sZW5ndGg7aSsrKXtzd2l0Y2godC5jaGFyQ29kZUF0KGkpKXtjYXNlIDM0OmM9XCImIzM0O1wiO2JyZWFrO2Nhc2UgMzg6Yz1cIiYjMzg7XCI7YnJlYWs7Y2FzZSAzOTpjPVwiJiMzOTtcIjticmVhaztjYXNlIDYwOmM9XCImIzYwO1wiO2JyZWFrO2Nhc2UgNjI6Yz1cIiYjNjI7XCI7YnJlYWs7ZGVmYXVsdDpjb250aW51ZX1zIT09aSYmKHIrPXQuc3Vic3RyaW5nKHMsaSkpLHM9aSsxLHIrPWN9cmV0dXJuIHMhPT1pP3IrdC5zdWJzdHJpbmcocyxpKTpyfSxzPWZ1bmN0aW9uKGUpe3JldHVybiBpKHIoZSkpfTtlLmV4cG9ydHM9c30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbz1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWU/XCJOdWxsXCI6ci5jYWxsKGUpLnNsaWNlKDgsLTEpfSxpPWZ1bmN0aW9uIHMoZSx0KXt2YXIgbj12b2lkIDAscj1vKGUpO2lmKFwiT2JqZWN0XCI9PT1yP249T2JqZWN0LmNyZWF0ZSh0fHx7fSk6XCJBcnJheVwiPT09ciYmKG49W10uY29uY2F0KHR8fFtdKSksbil7Zm9yKHZhciBpIGluIGUpbltpXT1zKGVbaV0sbltpXSk7cmV0dXJuIG59cmV0dXJuIGV9O2UuZXhwb3J0cz1pfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigwKSxvPWZ1bmN0aW9uKGUsdCl7aWYocil7dmFyIG8saT1uKDUpLm1pbmlmeSxzPXQuaHRtbE1pbmlmaWVyT3B0aW9ucyxjPXQucnVsZXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRlc3R9KTsobz1zLmlnbm9yZUN1c3RvbUZyYWdtZW50cykucHVzaC5hcHBseShvLGMpLGU9aShlLHMpfXJldHVybiBlfTtlLmV4cG9ydHM9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKGUsdCxyLG8pe3ZhciBpPW4oMSk7cmV0dXJuIG89by4kZXh0ZW5kKHtmaWxlbmFtZTpvLnJlc29sdmVGaWxlbmFtZShlLG8pLHNvdXJjZTpudWxsfSksaShvKSh0LHIpfTtlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMCksbz1mdW5jdGlvbihlKXtpZihyKXtyZXR1cm4gbigzKS5yZWFkRmlsZVN5bmMoZSxcInV0ZjhcIil9dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIHQudmFsdWV8fHQuaW5uZXJIVE1MfTtlLmV4cG9ydHM9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oZSl7XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgY29uc29sZT9cInVuZGVmaW5lZFwiOnIoY29uc29sZSkpJiZjb25zb2xlLmVycm9yKGUubmFtZSxlLm1lc3NhZ2UpfTtlLmV4cG9ydHM9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMCksbz0vXlxcLitcXC8vLGk9ZnVuY3Rpb24oZSx0KXtpZihyKXt2YXIgaT1uKDMpLHM9dC5yb290LGM9dC5leHRuYW1lO2lmKG8udGVzdChlKSl7dmFyIHU9dC5maWxlbmFtZSxhPSF1fHxlPT09dSxsPWE/czppLmRpcm5hbWUodSk7ZT1pLnJlc29sdmUobCxlKX1lbHNlIGU9aS5yZXNvbHZlKHMsZSk7aS5leHRuYW1lKGUpfHwoZSs9Yyl9cmV0dXJuIGV9O2UuZXhwb3J0cz1pfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e3Rlc3Q6L3t7WyBcXHRdKihbQCNdPykoXFwvPykoW1xcd1xcV10qPylbIFxcdF0qfX0vLHVzZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT10aGlzLHM9aS5vcHRpb25zLGM9aS5nZXRFc1Rva2VucyhyLnRyaW0oKSksdT1jLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS52YWx1ZX0pLGE9e30sbD12b2lkIDAscD0hIXQmJlwicmF3XCIsZj1uK3Uuc2hpZnQoKSxtPWZ1bmN0aW9uKGUsdCl7Y29uc29sZS53YXJuKFwiVGVtcGxhdGUgdXBncmFkZTpcIixcInt7XCIrZStcIn19XCIsXCI+Pj5cIixcInt7XCIrdCtcIn19XCIsXCJcXG5cIixzLmZpbGVuYW1lfHxcIlwiKX07c3dpdGNoKFwiI1wiPT09dCYmbShcIiN2YWx1ZVwiLFwiQHZhbHVlXCIpLGYpe2Nhc2VcInNldFwiOnI9XCJ2YXIgXCIrdS5qb2luKFwiXCIpO2JyZWFrO2Nhc2VcImlmXCI6cj1cImlmKFwiK3Uuam9pbihcIlwiKStcIil7XCI7YnJlYWs7Y2FzZVwiZWxzZVwiOnZhciBoPXUuaW5kZXhPZihcImlmXCIpO2g+LTE/KHUuc3BsaWNlKDAsaCsxKSxyPVwifWVsc2UgaWYoXCIrdS5qb2luKFwiXCIpK1wiKXtcIik6cj1cIn1lbHNle1wiO2JyZWFrO2Nhc2VcIi9pZlwiOnI9XCJ9XCI7YnJlYWs7Y2FzZVwiZWFjaFwiOmw9byhjKSxsLnNoaWZ0KCksXCJhc1wiPT09bFsxXSYmKG0oXCJlYWNoIG9iamVjdCBhcyB2YWx1ZSBpbmRleFwiLFwiZWFjaCBvYmplY3QgdmFsdWUgaW5kZXhcIiksbC5zcGxpY2UoMSwxKSk7dmFyIHk9bFswXXx8XCIkZGF0YVwiLGQ9bFsxXXx8XCIkdmFsdWVcIix2PWxbMl18fFwiJGluZGV4XCI7cj1cIiRlYWNoKFwiK3krXCIsZnVuY3Rpb24oXCIrZCtcIixcIit2K1wiKXtcIjticmVhaztjYXNlXCIvZWFjaFwiOnI9XCJ9KVwiO2JyZWFrO2Nhc2VcImVjaG9cIjpmPVwicHJpbnRcIixtKFwiZWNobyB2YWx1ZVwiLFwidmFsdWVcIik7Y2FzZVwicHJpbnRcIjpjYXNlXCJpbmNsdWRlXCI6Y2FzZVwiZXh0ZW5kXCI6bD1vKGMpLGwuc2hpZnQoKSxyPWYrXCIoXCIrbC5qb2luKFwiLFwiKStcIilcIjticmVhaztjYXNlXCJibG9ja1wiOnI9XCJibG9jayhcIit1LmpvaW4oXCJcIikrXCIsZnVuY3Rpb24oKXtcIjticmVhaztjYXNlXCIvYmxvY2tcIjpyPVwifSlcIjticmVhaztkZWZhdWx0OmlmKC0xIT09dS5pbmRleE9mKFwifFwiKSl7Zm9yKHZhciBiPWYsZz1bXSx4PXUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiEvXlxccyskLy50ZXN0KGUpfSk7XCJ8XCIhPT14WzBdOyliKz14LnNoaWZ0KCk7eC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCIhPT1lfSkuZm9yRWFjaChmdW5jdGlvbihlKXtcInxcIj09PWU/Zy5wdXNoKFtdKTpnW2cubGVuZ3RoLTFdLnB1c2goZSl9KSxnLnJlZHVjZShmdW5jdGlvbihlLHQpe3ZhciBuPXQuc2hpZnQoKTtyZXR1cm4gdC51bnNoaWZ0KGUpLHI9bitcIihcIit0LmpvaW4oXCIsXCIpK1wiKVwifSxiKX1lbHNlIHMuaW1wb3J0c1tmXT8obShcImZpbHRlck5hbWUgdmFsdWVcIixcInZhbHVlIHwgZmlsdGVyTmFtZVwiKSxsPW8oYyksbC5zaGlmdCgpLHI9ZitcIihcIitsLmpvaW4oXCIsXCIpK1wiKVwiLHA9XCJyYXdcIik6cj1cIlwiK2YrdS5qb2luKFwiXCIpO3B8fChwPVwiZXNjYXBlXCIpfXJldHVybiBhLmNvZGU9cixhLm91dHB1dD1wLGF9fSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49ZS5zaGlmdCgpLHI9W1tuXV07dDxlLmxlbmd0aDspe3ZhciBvPWVbdF0saT1vLnR5cGU7XCJ3aGl0ZXNwYWNlXCIhPT1pJiZcImNvbW1lbnRcIiE9PWkmJihcInB1bmN0dWF0b3JcIj09PW4udHlwZSYmXCJdXCIhPT1uLnZhbHVlfHxcInB1bmN0dWF0b3JcIj09PWk/cltyLmxlbmd0aC0xXS5wdXNoKG8pOnIucHVzaChbb10pLG49byksdCsrfXJldHVybiByLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KS5qb2luKFwiXCIpfSl9O3IuX3NwbGl0PW8sZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj17dGVzdDovPCUoIz8pKCg/Oj09fD0jfFs9LV0pPykoW1xcd1xcV10qPykoLT8pJT4vLHVzZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgbz17XCItXCI6XCJyYXdcIixcIj1cIjpcImVzY2FwZVwiLFwiXCI6ITEsXCI9PVwiOlwicmF3XCIsXCI9I1wiOlwicmF3XCJ9O3JldHVybiB0JiYocj1cIi8vXCIrcikse2NvZGU6cixvdXRwdXQ6b1tuXX19fTtlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBvPW4oMjEpLGk9bigyMykscz1cIiRkYXRhXCIsYz1cIiRpbXBvcnRzXCIsdT1cInByaW50XCIsYT1cImluY2x1ZGVcIixsPVwiZXh0ZW5kXCIscD1cImJsb2NrXCIsZj1cIiQkb3V0XCIsbT1cIiQkbGluZVwiLGg9XCIkJGJsb2Nrc1wiLHk9XCIkJGZyb21cIixkPVwiJCRsYXlvdXRcIix2PVwiJCRvcHRpb25zXCIsYj1mdW5jdGlvbihlLHQpe3JldHVybiBlLmhhc093blByb3BlcnR5KHQpfSxnPUpTT04uc3RyaW5naWZ5LHg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBuLG8sYixnPXRoaXM7cih0aGlzLGUpO3ZhciB4PXQuc291cmNlLGs9dC5taW5pbWl6ZSx3PXQuaHRtbE1pbmlmaWVyO2lmKHRoaXMub3B0aW9ucz10LHRoaXMuc3RhY2tzPVtdLHRoaXMuY29udGV4dD1bXSx0aGlzLnNjcmlwdHM9W10sdGhpcy5DT05URVhUX01BUD17fSx0aGlzLmV4dGVybmFsPShuPXt9LG5bc109ITAsbltjXT0hMCxuW3ZdPSEwLG4pLHRoaXMuaW50ZXJuYWw9KG89e30sb1tmXT1cIicnXCIsb1ttXT1cIlswLDAsJyddXCIsb1toXT1cImFyZ3VtZW50c1sxXXx8e31cIixvW3ldPVwibnVsbFwiLG9bZF09XCJmdW5jdGlvbigpe3JldHVybiBcIitjK1wiLiRpbmNsdWRlKFwiK3krXCIsXCIrcytcIixcIitoK1wiLFwiK3YrXCIpfVwiLG9bdV09XCJmdW5jdGlvbigpe1wiK2YrXCIrPScnLmNvbmNhdC5hcHBseSgnJyxhcmd1bWVudHMpfVwiLG9bYV09XCJmdW5jdGlvbihzcmMsZGF0YSxibG9jayl7XCIrZitcIis9XCIrYytcIi4kaW5jbHVkZShzcmMsZGF0YXx8XCIrcytcIixibG9jayxcIit2K1wiKX1cIixvW2xdPVwiZnVuY3Rpb24oZnJvbSl7XCIreStcIj1mcm9tfVwiLG9bcF09XCJmdW5jdGlvbihuYW1lLGNhbGxiYWNrKXtpZihcIit5K1wiKXtcIitmK1wiPScnO2NhbGxiYWNrKCk7XCIraCtcIltuYW1lXT1cIitmK1wifWVsc2V7aWYodHlwZW9mIFwiK2grXCJbbmFtZV09PT0nc3RyaW5nJyl7XCIrZitcIis9XCIraCtcIltuYW1lXX1lbHNle2NhbGxiYWNrKCl9fX1cIixvKSx0aGlzLmRlcGVuZGVuY2llcz0oYj17fSxiW3VdPVtmXSxiW2FdPVtmLGMscyx2XSxiW2xdPVt5LGRdLGJbcF09W3ksZixoXSxiW2RdPVtjLHkscyxoLHZdLGIpLHRoaXMuaW1wb3J0Q29udGV4dChmKSx0LmNvbXBpbGVEZWJ1ZyYmdGhpcy5pbXBvcnRDb250ZXh0KG0pLGspdHJ5e3g9dyh4LHQpfWNhdGNoKFMpe310aGlzLnNvdXJjZT14LHRoaXMuZ2V0VHBsVG9rZW5zKHgsdC5ydWxlcyx0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudHlwZT09PWkuVFlQRV9TVFJJTkc/Zy5wYXJzZVN0cmluZyhlKTpnLnBhcnNlRXhwcmVzc2lvbihlKX0pfXJldHVybiBlLnByb3RvdHlwZS5nZXRUcGxUb2tlbnM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5hcHBseSh1bmRlZmluZWQsYXJndW1lbnRzKX0sZS5wcm90b3R5cGUuZ2V0RXNUb2tlbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSl9LGUucHJvdG90eXBlLmdldFZhcmlhYmxlcz1mdW5jdGlvbihlKXt2YXIgdD0hMTtyZXR1cm4gZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCJ3aGl0ZXNwYWNlXCIhPT1lLnR5cGUmJlwiY29tbWVudFwiIT09ZS50eXBlfSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVyblwibmFtZVwiPT09ZS50eXBlJiYhdHx8KHQ9XCJwdW5jdHVhdG9yXCI9PT1lLnR5cGUmJlwiLlwiPT09ZS52YWx1ZSwhMSl9KS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KX0sZS5wcm90b3R5cGUuaW1wb3J0Q29udGV4dD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49XCJcIixyPXRoaXMuaW50ZXJuYWwsbz10aGlzLmRlcGVuZGVuY2llcyxpPXRoaXMuZXh0ZXJuYWwsdT10aGlzLmNvbnRleHQsYT10aGlzLm9wdGlvbnMsbD1hLmlnbm9yZSxwPWEuaW1wb3J0cyxmPXRoaXMuQ09OVEVYVF9NQVA7IWIoZixlKSYmIWIoaSxlKSYmbC5pbmRleE9mKGUpPDAmJihiKHIsZSk/KG49cltlXSxiKG8sZSkmJm9bZV0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5pbXBvcnRDb250ZXh0KGUpfSkpOm49YihwLGUpP2MrXCIuXCIrZTpzK1wiLlwiK2UsZltlXT1uLHUucHVzaCh7bmFtZTplLHZhbHVlOm59KSl9LGUucHJvdG90eXBlLnBhcnNlU3RyaW5nPWZ1bmN0aW9uKGUpe3ZhciB0PWUudmFsdWU7aWYodCl7dmFyIG49ZitcIis9XCIrZyh0KTt0aGlzLnNjcmlwdHMucHVzaCh7c291cmNlOnQsdHBsVG9rZW46ZSxjb2RlOm59KX19LGUucHJvdG90eXBlLnBhcnNlRXhwcmVzc2lvbj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49ZS52YWx1ZSxyPWUuc2NyaXB0LG89ci5vdXRwdXQscz1yLmNvZGU7byYmKHM9ITE9PT1lc2NhcGV8fG89PT1pLlRZUEVfUkFXP2YrXCIrPVwiK3IuY29kZTpmK1wiKz0kZXNjYXBlKFwiK3IuY29kZStcIilcIik7dmFyIGM9dGhpcy5nZXRFc1Rva2VucyhzKTt0aGlzLmdldFZhcmlhYmxlcyhjKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiB0LmltcG9ydENvbnRleHQoZSl9KSx0aGlzLnNjcmlwdHMucHVzaCh7c291cmNlOm4sdHBsVG9rZW46ZSxjb2RlOnN9KX0sZS5wcm90b3R5cGUuY2hlY2tFeHByZXNzaW9uPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bWy9eXFxzKj99Lio/ez9bXFxzO10qPyQvLFwiXCJdLFsvKF5bXFx3XFxXXSo/XFxzKj9mdW5jdGlvblxccyo/XFwoW1xcd1xcV10qP1xcKVxccyo/e1tcXHM7XSo/JCkvLFwiJDF9KVwiXSxbLyheLio/XFwoXFxzKj9bXFx3XFxXXSo/PT5cXHMqP3tbXFxzO10qPyQpLyxcIiQxfSlcIl0sWy8oXltcXHdcXFddKj9cXChbXFx3XFxXXSo/XFwpXFxzKj97W1xccztdKj8kKS8sXCIkMX1cIl1dLG49MDtuPHQubGVuZ3RoOyl7aWYodFtuXVswXS50ZXN0KGUpKXt2YXIgcjtlPShyPWUpLnJlcGxhY2UuYXBwbHkocix0W25dKTticmVha31uKyt9dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24oZSksITB9Y2F0Y2gobyl7cmV0dXJuITF9fSxlLnByb3RvdHlwZS5idWlsZD1mdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9ucyx0PXRoaXMuY29udGV4dCxuPXRoaXMuc2NyaXB0cyxyPXRoaXMuc3RhY2tzLG89dGhpcy5zb3VyY2UsdT1lLmZpbGVuYW1lLGE9ZS5pbXBvcnRzLHA9W10saD1iKHRoaXMuQ09OVEVYVF9NQVAsbCkseT0wLHg9ZnVuY3Rpb24oZSx0KXt2YXIgbj10LmxpbmUsbz10LnN0YXJ0LGk9e2dlbmVyYXRlZDp7bGluZTpyLmxlbmd0aCt5KzEsY29sdW1uOjF9LG9yaWdpbmFsOntsaW5lOm4rMSxjb2x1bW46bysxfX07cmV0dXJuIHkrPWUuc3BsaXQoL1xcbi8pLmxlbmd0aC0xLGl9LGs9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHQgXSt8W1xcdCBdJC9nLFwiXCIpfTtyLnB1c2goXCJmdW5jdGlvbihcIitzK1wiKXtcIiksci5wdXNoKFwiJ3VzZSBzdHJpY3QnXCIpLHIucHVzaChcInZhciBcIit0Lm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5uYW1lK1wiPVwiK2UudmFsdWV9KS5qb2luKFwiLFwiKSksZS5jb21waWxlRGVidWc/KHIucHVzaChcInRyeXtcIiksbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudHBsVG9rZW4udHlwZT09PWkuVFlQRV9FWFBSRVNTSU9OJiZyLnB1c2gobStcIj1bXCIrW2UudHBsVG9rZW4ubGluZSxlLnRwbFRva2VuLnN0YXJ0LGcoZS5zb3VyY2UpXS5qb2luKFwiLFwiKStcIl1cIikscC5wdXNoKHgoZS5jb2RlLGUudHBsVG9rZW4pKSxyLnB1c2goayhlLmNvZGUpKX0pLHIucHVzaChcIn1jYXRjaChlcnJvcil7XCIpLHIucHVzaChcInRocm93IHtcIitbXCJuYW1lOidSdW50aW1lRXJyb3InXCIsXCJwYXRoOlwiK2codSksXCJtZXNzYWdlOmVycm9yLm1lc3NhZ2VcIixcImxpbmU6XCIrbStcIlswXSsxXCIsXCJjb2x1bW46XCIrbStcIlsxXSsxXCIsXCJzb3VyY2U6XCIrbStcIlsyXVwiLFwic3RhY2s6ZXJyb3Iuc3RhY2tcIl0uam9pbihcIixcIikrXCJ9XCIpLHIucHVzaChcIn1cIikpOm4uZm9yRWFjaChmdW5jdGlvbihlKXtwLnB1c2goeChlLmNvZGUsZS50cGxUb2tlbikpLHIucHVzaChrKGUuY29kZSkpfSksci5wdXNoKGg/XCJyZXR1cm4gXCIrZCtcIigpXCI6XCJyZXR1cm4gXCIrZiksci5wdXNoKFwifVwiKTt2YXIgdz1yLmpvaW4oXCJcXG5cIik7dHJ5e3ZhciBTPW5ldyBGdW5jdGlvbihjLHYsXCJyZXR1cm4gXCIrdykoYSxlKTtyZXR1cm4gUy5tYXBwaW5ncz1wLFMuc291cmNlc0NvbnRlbnQ9W29dLFN9Y2F0Y2goQyl7Zm9yKHZhciBFPTAsJD0wLFQ9MCxPPW87RTxuLmxlbmd0aDspe3ZhciBqPW5bRV07aWYoIXRoaXMuY2hlY2tFeHByZXNzaW9uKGouY29kZSkpe089ai5zb3VyY2UsJD1qLnRwbFRva2VuLmxpbmUsVD1qLnRwbFRva2VuLnN0YXJ0O2JyZWFrfUUrK310aHJvd3tuYW1lOlwiQ29tcGlsZUVycm9yXCIscGF0aDp1LG1lc3NhZ2U6Qy5tZXNzYWdlLGxpbmU6JCsxLGNvbHVtbjpUKzEsc291cmNlOk8sc2NyaXB0Oncsc3RhY2s6Qy5zdGFja319fSxlfSgpO3guQ09OU1RTPXtEQVRBOnMsSU1QT1JUUzpjLFBSSU5UOnUsSU5DTFVERTphLEVYVEVORDpsLEJMT0NLOnAsT1BUSU9OUzp2LE9VVDpmLExJTkU6bSxCTE9DS1M6aCxGUk9NOnksTEFZT1VUOmQsRVNDQVBFOlwiJGVzY2FwZVwifSxlLmV4cG9ydHM9eH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNiksbz0vKChbJ1wiXSkoPzooPyFcXDJ8XFxcXCkufFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSooXFwyKT98YCg/OlteYFxcXFwkXXxcXFxcW1xcc1xcU118XFwkKD8hXFx7KXxcXCRcXHsoPzpbXnt9XXxcXHtbXn1dKlxcfT8pKlxcfT8pKihgKT8pfChcXC9cXC8uKil8KFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqKFxcKlxcLyk/KXwoXFwvKD8hXFwqKSg/OlxcWyg/Oig/IVtcXF1cXFxcXSkufFxcXFwuKSpcXF18KD8hW1xcL1xcXVxcXFxdKS58XFxcXC4pK1xcLyg/Oig/IVxccyooPzpcXGJ8W1xcdTAwODAtXFx1RkZGRiRcXFxcJ1wifih7XXxbK1xcLSFdKD8hPSl8XFwuP1xcZCkpfFtnbWl5dV17MSw1fVxcYig/IVtcXHUwMDgwLVxcdUZGRkYkXFxcXF18XFxzKig/OlsrXFwtKiUmfF48PiE9Pyh7XXxcXC8oPyFbXFwvKl0pKSkpKXwoMFt4WF1bXFxkYS1mQS1GXSt8MFtvT11bMC03XSt8MFtiQl1bMDFdK3woPzpcXGQqXFwuXFxkK3xcXGQrXFwuPykoPzpbZUVdWystXT9cXGQrKT8pfCgoPyFcXGQpKD86KD8hXFxzKVskXFx3XFx1MDA4MC1cXHVGRkZGXXxcXFxcdVtcXGRhLWZBLUZdezR9fFxcXFx1XFx7W1xcZGEtZkEtRl0rXFx9KSspfCgtLXxcXCtcXCt8JiZ8XFx8XFx8fD0+fFxcLnszfXwoPzpbK1xcLVxcLyUmfF5dfFxcKnsxLDJ9fDx7MSwyfXw+ezEsM318IT0/fD17MSwyfSk9P3xbP34uLDo7W1xcXSgpe31dKXwoXFxzKyl8KF4kfFtcXHNcXFNdKS9nLGk9ZnVuY3Rpb24oZSl7dmFyIHQ9e3R5cGU6XCJpbnZhbGlkXCIsdmFsdWU6ZVswXX07cmV0dXJuIGVbMV0/KHQudHlwZT1cInN0cmluZ1wiLHQuY2xvc2VkPSEoIWVbM10mJiFlWzRdKSk6ZVs1XT90LnR5cGU9XCJjb21tZW50XCI6ZVs2XT8odC50eXBlPVwiY29tbWVudFwiLHQuY2xvc2VkPSEhZVs3XSk6ZVs4XT90LnR5cGU9XCJyZWdleFwiOmVbOV0/dC50eXBlPVwibnVtYmVyXCI6ZVsxMF0/dC50eXBlPVwibmFtZVwiOmVbMTFdP3QudHlwZT1cInB1bmN0dWF0b3JcIjplWzEyXSYmKHQudHlwZT1cIndoaXRlc3BhY2VcIiksdH0scz1mdW5jdGlvbihlKXtyZXR1cm4gZS5tYXRjaChvKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG8ubGFzdEluZGV4PTAsaShvLmV4ZWMoZSkpfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwibmFtZVwiPT09ZS50eXBlJiZyKGUudmFsdWUpJiYoZS50eXBlPVwia2V5d29yZFwiKSxlfSl9O2UuZXhwb3J0cz1zfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXt2YXIgdD1lLnN0YWNrO2RlbGV0ZSBlLnN0YWNrLHRoaXMubmFtZT1cIlRlbXBsYXRlRXJyb3JcIix0aGlzLm1lc3NhZ2U9SlNPTi5zdHJpbmdpZnkoZSxudWxsLDQpLHRoaXMuc3RhY2s9dH1yLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSksci5wcm90b3R5cGUuY29uc3RydWN0b3I9cixlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W3t0eXBlOlwic3RyaW5nXCIsdmFsdWU6ZSxsaW5lOjAsc3RhcnQ6MCxlbmQ6ZS5sZW5ndGh9XSxvPTA7bzx0Lmxlbmd0aDtvKyspIWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnRlc3QuaWdub3JlQ2FzZT9cImlnXCI6XCJnXCIsbz1lLnRlc3Quc291cmNlK1wifF4kfFtcXFxcd1xcXFxXXVwiLGk9bmV3IFJlZ0V4cChvLHQpLHM9MDtzPHIubGVuZ3RoO3MrKylpZihcInN0cmluZ1wiPT09cltzXS50eXBlKXtmb3IodmFyIGM9cltzXS5saW5lLHU9cltzXS5zdGFydCxhPXJbc10uZW5kLGw9cltzXS52YWx1ZS5tYXRjaChpKSxwPVtdLGY9MDtmPGwubGVuZ3RoO2YrKyl7dmFyIG09bFtmXTtlLnRlc3QubGFzdEluZGV4PTA7dmFyIGg9ZS50ZXN0LmV4ZWMobSkseT1oP1wiZXhwcmVzc2lvblwiOlwic3RyaW5nXCIsZD1wW3AubGVuZ3RoLTFdLHY9ZHx8cltzXSxiPXYudmFsdWU7dT12LmxpbmU9PT1jP2Q/ZC5lbmQ6dTpiLmxlbmd0aC1iLmxhc3RJbmRleE9mKFwiXFxuXCIpLTEsYT11K20ubGVuZ3RoO3ZhciBnPXt0eXBlOnksdmFsdWU6bSxsaW5lOmMsc3RhcnQ6dSxlbmQ6YX07aWYoXCJzdHJpbmdcIj09PXkpZCYmXCJzdHJpbmdcIj09PWQudHlwZT8oZC52YWx1ZSs9bSxkLmVuZCs9bS5sZW5ndGgpOnAucHVzaChnKTtlbHNle3ZhciB4PWUudXNlLmFwcGx5KG4saCk7Zy5zY3JpcHQ9eCxwLnB1c2goZyl9Yys9bS5zcGxpdCgvXFxuLykubGVuZ3RoLTF9ci5zcGxpY2UuYXBwbHkocixbcywxXS5jb25jYXQocCkpLHMrPXAubGVuZ3RoLTF9fSh0W29dKTtyZXR1cm4gcn07ci5UWVBFX1NUUklORz1cInN0cmluZ1wiLHIuVFlQRV9FWFBSRVNTSU9OPVwiZXhwcmVzc2lvblwiLHIuVFlQRV9SQVc9XCJyYXdcIixyLlRZUEVfRVNDQVBFPVwiZXNjYXBlXCIsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPW4oNCksaT1uKDEpLHM9bigyKSxjPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJvYmplY3RcIj09PSh2b2lkIDA9PT10P1widW5kZWZpbmVkXCI6cih0KSk/byh7ZmlsZW5hbWU6ZX0sdCk6aSh7ZmlsZW5hbWU6ZSxzb3VyY2U6dH0pfTtjLnJlbmRlcj1vLGMuY29tcGlsZT1pLGMuZGVmYXVsdHM9cyxlLmV4cG9ydHM9Y31dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNC43LjBAYXJ0LXRlbXBsYXRlL2xpYi90ZW1wbGF0ZS13ZWIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var artTemplate = __webpack_require__(/*! art-template/lib/template-web */ 6);\nvar utils = __webpack_require__(/*! ./utils */ 0);\n\nfunction Component(config) {\n  this.props = config.props || {};\n  this.state = config.state || {};\n  this.rootScope = config.rootScope || document;\n}\n\nComponent.prototype.render = function() {\n  var data = utils.assign(this.props, this.state);\n  this.onRender(data, function (data) {\n    var html = this.template && this.template(data);\n    this.rootScope.innerHTML = html || 'template is empty';\n    this.onStart(this.rootScope);\n  }.bind(this));\n};\n\nComponent.prototype.setState = function(state) {\n  this.onStop(this.rootScope);\n  this.state = utils.assign(this.state, state);\n  setTimeout(function() {\n    this.render();\n  }.bind(this), 0);\n};\n\nComponent.prototype.remove = function() {\n  this.onStop(this.rootScope);\n  this.onDestroy();\n};\n\nComponent.prototype.onCreate = function() {};\nComponent.prototype.onStart = function() {};\nComponent.prototype.onStop = function() {};\nComponent.prototype.onDestroy = function() {};\nComponent.prototype.onRender = function (data, next) { next(data); };\nComponent.prototype.template = '';\n\nfunction create(obj) {\n  var protoType = {};\n  var funcs = ['onStart', 'onStop', 'onCreate', 'onDestroy', 'onRender'];\n  for (var i = 0; i < funcs.length; i++) {\n    obj[funcs[i]] && (protoType[funcs[i]] = obj[funcs[i]]);\n    delete obj[funcs[i]];\n  }\n  if (obj.template) {\n    protoType.template = artTemplate.compile(obj.template);\n    delete obj.template;\n  }\n  var F = function(params) {\n    Component.call(this, params);\n    for (var key in obj) {\n      this[key] = obj[key];\n    }\n  };\n  utils.inherit(Component, F);\n  for (var key in protoType) {\n    F.prototype[key] = protoType[key];\n  }\n  return F;\n}\n\nmodule.exports = {\n  create: create\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQuanM/YTYyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJ0VGVtcGxhdGUgPSByZXF1aXJlKCdhcnQtdGVtcGxhdGUvbGliL3RlbXBsYXRlLXdlYicpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBDb21wb25lbnQoY29uZmlnKSB7XG4gIHRoaXMucHJvcHMgPSBjb25maWcucHJvcHMgfHwge307XG4gIHRoaXMuc3RhdGUgPSBjb25maWcuc3RhdGUgfHwge307XG4gIHRoaXMucm9vdFNjb3BlID0gY29uZmlnLnJvb3RTY29wZSB8fCBkb2N1bWVudDtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSB1dGlscy5hc3NpZ24odGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIHRoaXMub25SZW5kZXIoZGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgaHRtbCA9IHRoaXMudGVtcGxhdGUgJiYgdGhpcy50ZW1wbGF0ZShkYXRhKTtcbiAgICB0aGlzLnJvb3RTY29wZS5pbm5lckhUTUwgPSBodG1sIHx8ICd0ZW1wbGF0ZSBpcyBlbXB0eSc7XG4gICAgdGhpcy5vblN0YXJ0KHRoaXMucm9vdFNjb3BlKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB0aGlzLm9uU3RvcCh0aGlzLnJvb3RTY29wZSk7XG4gIHRoaXMuc3RhdGUgPSB1dGlscy5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uU3RvcCh0aGlzLnJvb3RTY29wZSk7XG4gIHRoaXMub25EZXN0cm95KCk7XG59O1xuXG5Db21wb25lbnQucHJvdG90eXBlLm9uQ3JlYXRlID0gZnVuY3Rpb24oKSB7fTtcbkNvbXBvbmVudC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uKCkge307XG5Db21wb25lbnQucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uKCkge307XG5Db21wb25lbnQucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uKCkge307XG5Db21wb25lbnQucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gKGRhdGEsIG5leHQpIHsgbmV4dChkYXRhKTsgfTtcbkNvbXBvbmVudC5wcm90b3R5cGUudGVtcGxhdGUgPSAnJztcblxuZnVuY3Rpb24gY3JlYXRlKG9iaikge1xuICB2YXIgcHJvdG9UeXBlID0ge307XG4gIHZhciBmdW5jcyA9IFsnb25TdGFydCcsICdvblN0b3AnLCAnb25DcmVhdGUnLCAnb25EZXN0cm95JywgJ29uUmVuZGVyJ107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpKyspIHtcbiAgICBvYmpbZnVuY3NbaV1dICYmIChwcm90b1R5cGVbZnVuY3NbaV1dID0gb2JqW2Z1bmNzW2ldXSk7XG4gICAgZGVsZXRlIG9ialtmdW5jc1tpXV07XG4gIH1cbiAgaWYgKG9iai50ZW1wbGF0ZSkge1xuICAgIHByb3RvVHlwZS50ZW1wbGF0ZSA9IGFydFRlbXBsYXRlLmNvbXBpbGUob2JqLnRlbXBsYXRlKTtcbiAgICBkZWxldGUgb2JqLnRlbXBsYXRlO1xuICB9XG4gIHZhciBGID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB0aGlzW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH07XG4gIHV0aWxzLmluaGVyaXQoQ29tcG9uZW50LCBGKTtcbiAgZm9yICh2YXIga2V5IGluIHByb3RvVHlwZSkge1xuICAgIEYucHJvdG90eXBlW2tleV0gPSBwcm90b1R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gRjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogY3JlYXRlXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var Pow = __webpack_require__(/*! ./pow */ 2);\nvar utils = __webpack_require__(/*! ./utils */ 0);\n\nvar pow = new Pow();\npow.utils = utils;\n\nmodule.exports = pow;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBQb3cgPSByZXF1aXJlKCcuL3BvdycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgcG93ID0gbmV3IFBvdygpO1xucG93LnV0aWxzID0gdXRpbHM7XG5cbm1vZHVsZS5leHBvcnRzID0gcG93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./src/resource.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("/**\n * Class Resource\n * a Component manager\n */\nfunction Resource(baseUrl) {\n  this.resource = {};\n  this.baseUrl = baseUrl || '';\n}\n\n/**\n * set baseUrl to load resource\n * @param {String} baseUrl\n */\nResource.prototype.setBaseUrl = function (baseUrl) {\n  this.baseUrl = baseUrl;\n};\n\n/**\n * get a Component\n */\nResource.prototype.get = function(name, next) {\n  if (this.resource[name]) {\n    return next(this.resource[name]);\n  }\n  var scriptElement = document.createElement('script');\n  scriptElement.setAttribute('src',\n      this.baseUrl + '/' + name.toLowerCase() + '.js');\n  document.body.append(scriptElement);\n\n  var self = this;\n  scriptElement.onload = function() {\n    if (!self.resource[name]) {\n      return next(false);\n    }\n    return next(self.resource[name]);\n  }\n};\n\n/**\n * set a Component\n */\nResource.prototype.set = function(name, newClass) {\n  this.resource[name] = newClass;\n  return true;\n};\n\nmodule.exports = Resource;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZS5qcz9lYzdkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2xhc3MgUmVzb3VyY2VcbiAqIGEgQ29tcG9uZW50IG1hbmFnZXJcbiAqL1xuZnVuY3Rpb24gUmVzb3VyY2UoYmFzZVVybCkge1xuICB0aGlzLnJlc291cmNlID0ge307XG4gIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwgfHwgJyc7XG59XG5cbi8qKlxuICogc2V0IGJhc2VVcmwgdG8gbG9hZCByZXNvdXJjZVxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2VVcmxcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnNldEJhc2VVcmwgPSBmdW5jdGlvbiAoYmFzZVVybCkge1xuICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xufTtcblxuLyoqXG4gKiBnZXQgYSBDb21wb25lbnRcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUsIG5leHQpIHtcbiAgaWYgKHRoaXMucmVzb3VyY2VbbmFtZV0pIHtcbiAgICByZXR1cm4gbmV4dCh0aGlzLnJlc291cmNlW25hbWVdKTtcbiAgfVxuICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJyxcbiAgICAgIHRoaXMuYmFzZVVybCArICcvJyArIG5hbWUudG9Mb3dlckNhc2UoKSArICcuanMnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0RWxlbWVudCk7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzY3JpcHRFbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghc2VsZi5yZXNvdXJjZVtuYW1lXSkge1xuICAgICAgcmV0dXJuIG5leHQoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dChzZWxmLnJlc291cmNlW25hbWVdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBzZXQgYSBDb21wb25lbnRcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIG5ld0NsYXNzKSB7XG4gIHRoaXMucmVzb3VyY2VbbmFtZV0gPSBuZXdDbGFzcztcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/router/hash_router.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var utils = __webpack_require__(/*! ../utils */ 0);\nvar Router = __webpack_require__(/*! ./router */ 1);\n\nfunction HashRouter(routerBaseUrl, routers) {\n  Router.call(this, routerBaseUrl, routers);\n}\n\nutils.inherit(Router, HashRouter);\n\n/**\n * get location by hash\n */\nHashRouter.prototype.getLocation = function() {\n  var baseUrl = this.routerBaseUrl;\n  var path = window.location.hash;\n  if (path === '') {\n    window.location.replace('#/');\n  }\n  path = path.substr(1); // remove '#'\n  var baseUrlIndex = path.indexOf(baseUrl);\n  if (baseUrlIndex !== 0 && baseUrlIndex !== 1) {\n    return false;\n  }\n  return path.substr(baseUrlIndex + baseUrl.length);\n};\n\n/**\n * @override Router::redirect\n */\nHashRouter.prototype.redirect = function(path, qs, needHistory) {\n  path = this.routerBaseUrl + path;\n  if (qs) {\n    path = path + utils.encodeQueryString(qs);\n  }\n  if (needHistory === undefined || needHistory) {\n    window.location.hash = path;\n  } else {\n    var finalPath = window.location.pathname +\n                    window.location.search + '#' + path;\n    window.location.replace(finalPath);\n  }\n  // automatic trigger onHashChange...\n};\n\nHashRouter.prototype.start = function() {\n  var self = this;\n  window.onhashchange = function() {\n    self.onChange();\n  };\n  Router.prototype.start.call(this);\n};\n\nmodule.exports = HashRouter;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2hhc2hfcm91dGVyLmpzPzk4OGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xuXG5mdW5jdGlvbiBIYXNoUm91dGVyKHJvdXRlckJhc2VVcmwsIHJvdXRlcnMpIHtcbiAgUm91dGVyLmNhbGwodGhpcywgcm91dGVyQmFzZVVybCwgcm91dGVycyk7XG59XG5cbnV0aWxzLmluaGVyaXQoUm91dGVyLCBIYXNoUm91dGVyKTtcblxuLyoqXG4gKiBnZXQgbG9jYXRpb24gYnkgaGFzaFxuICovXG5IYXNoUm91dGVyLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZVVybCA9IHRoaXMucm91dGVyQmFzZVVybDtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJyMvJyk7XG4gIH1cbiAgcGF0aCA9IHBhdGguc3Vic3RyKDEpOyAvLyByZW1vdmUgJyMnXG4gIHZhciBiYXNlVXJsSW5kZXggPSBwYXRoLmluZGV4T2YoYmFzZVVybCk7XG4gIGlmIChiYXNlVXJsSW5kZXggIT09IDAgJiYgYmFzZVVybEluZGV4ICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBwYXRoLnN1YnN0cihiYXNlVXJsSW5kZXggKyBiYXNlVXJsLmxlbmd0aCk7XG59O1xuXG4vKipcbiAqIEBvdmVycmlkZSBSb3V0ZXI6OnJlZGlyZWN0XG4gKi9cbkhhc2hSb3V0ZXIucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24ocGF0aCwgcXMsIG5lZWRIaXN0b3J5KSB7XG4gIHBhdGggPSB0aGlzLnJvdXRlckJhc2VVcmwgKyBwYXRoO1xuICBpZiAocXMpIHtcbiAgICBwYXRoID0gcGF0aCArIHV0aWxzLmVuY29kZVF1ZXJ5U3RyaW5nKHFzKTtcbiAgfVxuICBpZiAobmVlZEhpc3RvcnkgPT09IHVuZGVmaW5lZCB8fCBuZWVkSGlzdG9yeSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmluYWxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGg7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoZmluYWxQYXRoKTtcbiAgfVxuICAvLyBhdXRvbWF0aWMgdHJpZ2dlciBvbkhhc2hDaGFuZ2UuLi5cbn07XG5cbkhhc2hSb3V0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgd2luZG93Lm9uaGFzaGNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIHNlbGYub25DaGFuZ2UoKTtcbiAgfTtcbiAgUm91dGVyLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoUm91dGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVyL2hhc2hfcm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/router/history_router.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var utils = __webpack_require__(/*! ../utils */ 0);\nvar Router = __webpack_require__(/*! ./router */ 1);\n\nfunction HistoryRouter(routerBaseUrl, routers) {\n  Router.call(this, routerBaseUrl, routers);\n}\n\nutils.inherit(Router, HistoryRouter);\n\n/**\n * get location by history\n */\nHistoryRouter.prototype.getLocation = function() {\n  var baseUrl = this.routerBaseUrl;\n  var path = window.location.pathname;\n  if (path.indexOf(baseUrl) !== 0) {\n    return false;\n  }\n  return path.substr(baseUrl.length);\n};\n\n/**\n * @override Router::redirect\n */\nHistoryRouter.prototype.redirect = function(path, qs, needHistory) {\n  path = this.routerBaseUrl + path;\n  if (qs) {\n    path = path + utils.encodeQueryString(qs);\n  }\n\n  if (needHistory === undefined || needHistory) {\n    window.history.pushState({}, '', path);\n  } else {\n    window.history.replaceState({}, '', path);\n  }\n  this.onChange();\n};\n\nHistoryRouter.prototype.start = function() {\n  var self = this;\n  window.onpopstate = function(event) {\n    self.onChange(event);\n  }\n  Router.prototype.start.call(this);\n};\n\nmodule.exports = HistoryRouter;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2hpc3Rvcnlfcm91dGVyLmpzP2M0MzMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xuXG5mdW5jdGlvbiBIaXN0b3J5Um91dGVyKHJvdXRlckJhc2VVcmwsIHJvdXRlcnMpIHtcbiAgUm91dGVyLmNhbGwodGhpcywgcm91dGVyQmFzZVVybCwgcm91dGVycyk7XG59XG5cbnV0aWxzLmluaGVyaXQoUm91dGVyLCBIaXN0b3J5Um91dGVyKTtcblxuLyoqXG4gKiBnZXQgbG9jYXRpb24gYnkgaGlzdG9yeVxuICovXG5IaXN0b3J5Um91dGVyLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZVVybCA9IHRoaXMucm91dGVyQmFzZVVybDtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmIChwYXRoLmluZGV4T2YoYmFzZVVybCkgIT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHBhdGguc3Vic3RyKGJhc2VVcmwubGVuZ3RoKTtcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlIFJvdXRlcjo6cmVkaXJlY3RcbiAqL1xuSGlzdG9yeVJvdXRlci5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbihwYXRoLCBxcywgbmVlZEhpc3RvcnkpIHtcbiAgcGF0aCA9IHRoaXMucm91dGVyQmFzZVVybCArIHBhdGg7XG4gIGlmIChxcykge1xuICAgIHBhdGggPSBwYXRoICsgdXRpbHMuZW5jb2RlUXVlcnlTdHJpbmcocXMpO1xuICB9XG5cbiAgaWYgKG5lZWRIaXN0b3J5ID09PSB1bmRlZmluZWQgfHwgbmVlZEhpc3RvcnkpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRoKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBwYXRoKTtcbiAgfVxuICB0aGlzLm9uQ2hhbmdlKCk7XG59O1xuXG5IaXN0b3J5Um91dGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBzZWxmLm9uQ2hhbmdlKGV2ZW50KTtcbiAgfVxuICBSb3V0ZXIucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3RvcnlSb3V0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXIvaGlzdG9yeV9yb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  HistoryRouter: __webpack_require__(/*! ./history_router */ 11),\n  HashRouter: __webpack_require__(/*! ./hash_router */ 10)\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2luZGV4LmpzPzYxYTEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhpc3RvcnlSb3V0ZXI6IHJlcXVpcmUoJy4vaGlzdG9yeV9yb3V0ZXInKSxcbiAgSGFzaFJvdXRlcjogcmVxdWlyZSgnLi9oYXNoX3JvdXRlcicpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcm91dGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
});