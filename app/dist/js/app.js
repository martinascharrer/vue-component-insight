/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: 'CardCommunicationChannel',\n  props: {\n    channel: {\n      type: Object,\n      required: true\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/ForceGraph.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.map.js */ \"./node_modules/core-js/modules/es.map.js\");\n/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var webcola__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! webcola */ \"./node_modules/webcola/dist/index.js\");\n/* harmony import */ var webcola__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(webcola__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_8__[\"defineComponent\"])({\n  name: 'ForceGraph',\n  props: {\n    data: {\n      type: Object,\n      required: true\n    }\n  },\n  setup: function setup(props, _ref) {\n    var emit = _ref.emit;\n    var graphRef = Object(vue__WEBPACK_IMPORTED_MODULE_8__[\"ref\"])(null);\n    var width = 800;\n    var height = 400;\n\n    var unselect = function unselect() {\n      d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.node--selected').classed('node--selected', false);\n      d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.node--selected-dependent').classed('node--selected-dependent', false);\n      d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.link--selected').classed('link--selected', false);\n      d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.node--greyed-out').classed('node--greyed-out', false);\n      d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.link--greyed-out').classed('link--greyed-out', false);\n    };\n\n    Object(vue__WEBPACK_IMPORTED_MODULE_8__[\"onMounted\"])(function () {\n      var nodes = props.data.nodes.map(function (d) {\n        return Object.create(d);\n      });\n      var index = new Map(nodes.map(function (d) {\n        return [d.id, d];\n      }));\n      var links = props.data.links.map(function (d) {\n        return Object.assign(Object.create(d), {\n          source: index.get(d.source),\n          target: index.get(d.target)\n        });\n      });\n      var svg = d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](graphRef.value).attr('viewBox', [0, 0, width, height]).attr('class', 'svg').on('click', function () {\n        unselect();\n      });\n      var g = svg.append('g');\n      var layout = webcola__WEBPACK_IMPORTED_MODULE_10__[\"d3adaptor\"](d3__WEBPACK_IMPORTED_MODULE_9__).size([width, height]).nodes(nodes).links(links).flowLayout('y', 30).avoidOverlaps(true).symmetricDiffLinkLengths(20).start(20, 20, 20);\n      var link = g.append('g').selectAll('line').data(links).enter().append('line').attr('id', function (d) {\n        return \"link-\".concat(d.source.index, \"-\").concat(d.target.index);\n      }).attr('class', 'link');\n      var node = g.append('g').selectAll('g').data(nodes).enter().append('g').attr('id', function (d) {\n        return \"node-\".concat(d.index);\n      }).attr('class', 'node').call(layout.drag).on('click', function (data) {\n        d3__WEBPACK_IMPORTED_MODULE_9__[\"event\"].stopPropagation();\n        unselect(); // highlight selected node + dependents\n\n        d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](this).classed('node--selected', true);\n        var dependents = links.filter(function (l) {\n          return l.target.index === data.index;\n        });\n        dependents.forEach(function (dependent) {\n          d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](\"#node-\".concat(dependent.source.index)).classed('node--selected-dependent', true);\n          d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](\"#link-\".concat(dependent.source.index, \"-\").concat(dependent.target.index)).classed('link--selected', true);\n        }); // grey out everything else\n\n        d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.node:not(.node--selected, .node--selected-dependent)').classed('node--greyed-out', true);\n        d3__WEBPACK_IMPORTED_MODULE_9__[\"selectAll\"]('.link:not(.link--selected').classed('link--greyed-out', true);\n        emit('selected', data.id);\n      });\n      node.append('circle').attr('r', 15).attr('class', 'circle');\n      var label = node.append('g').attr('dy', 2).attr('dx', 0).attr('class', 'label');\n      label.append('text').attr('dy', 2).attr('dx', 0).attr('class', 'label__text').text(function (d) {\n        return d.title;\n      });\n      label.insert('rect', '.label__text').attr('fill', 'white').attr('width', function () {\n        var bbox = d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](this.parentNode).select('.label__text').node().getBBox();\n        return bbox.width + 2;\n      }).attr('height', function () {\n        var bbox = d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](this.parentNode).select('.label__text').node().getBBox();\n        return bbox.height;\n      }).attr('x', function () {\n        var bbox = d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](this.parentNode).select('.label__text').node().getBBox();\n        return bbox.x - 1;\n      }).attr('y', function () {\n        var bbox = d3__WEBPACK_IMPORTED_MODULE_9__[\"select\"](this.parentNode).select('.label__text').node().getBBox();\n        return bbox.y;\n      }).attr('class', 'label__background');\n      layout.on('tick', function () {\n        link.attr('x1', function (d) {\n          return d.source.x;\n        }).attr('y1', function (d) {\n          return d.source.y;\n        }).attr('x2', function (d) {\n          return d.target.x;\n        }).attr('y2', function (d) {\n          return d.target.y;\n        });\n        node.attr('transform', function (d) {\n          return \"translate(\".concat(d.x, \",\").concat(d.y, \")\");\n        });\n      });\n\n      function zoomed() {\n        g.attr('transform', d3__WEBPACK_IMPORTED_MODULE_9__[\"event\"].transform);\n      }\n\n      var zoom = d3__WEBPACK_IMPORTED_MODULE_9__[\"zoom\"]().scaleExtent([0.4, 8]).on('zoom', zoomed);\n      svg.call(zoom);\n      return svg.node();\n    });\n    return {\n      graphRef: graphRef\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SidebarCommunication.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_CardCommunicationChannel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardCommunicationChannel.vue */ \"./src/components/CardCommunicationChannel.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: 'SidebarCommunication',\n  components: {\n    CardCommunicationChannel: _components_CardCommunicationChannel_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {\n    component: {\n      type: Object,\n      required: true\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  name: 'LayoutSplitView'\n}));\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PageCommunication.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/PageCommunication.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _services_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/services/parser */ \"./src/services/parser.ts\");\n/* harmony import */ var _components_ForceGraph_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ForceGraph.vue */ \"./src/components/ForceGraph.vue\");\n/* harmony import */ var _components_layout_LayoutSplitView_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/layout/LayoutSplitView.vue */ \"./src/components/layout/LayoutSplitView.vue\");\n/* harmony import */ var _components_SidebarCommunication_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/SidebarCommunication.vue */ \"./src/components/SidebarCommunication.vue\");\n/* harmony import */ var _composables_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/composables/fetch */ \"./src/composables/fetch.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_6__[\"defineComponent\"])({\n  name: 'PageCommunication',\n  components: {\n    ForceGraph: _components_ForceGraph_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    LayoutSplitView: _components_layout_LayoutSplitView_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    SidebarCommunication: _components_SidebarCommunication_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  },\n  setup: function setup() {\n    var _useFetch = Object(_composables_fetch__WEBPACK_IMPORTED_MODULE_11__[\"useFetch\"])(_services_parser__WEBPACK_IMPORTED_MODULE_7__[\"get\"]),\n        data = _useFetch.data,\n        getParserData = _useFetch.get,\n        isLoading = _useFetch.isLoading,\n        isError = _useFetch.isError;\n\n    var selectedComponent = Object(vue__WEBPACK_IMPORTED_MODULE_6__[\"ref\"])(null);\n\n    var selectComponent = function selectComponent(fullPath) {\n      var _copy$find;\n\n      var copy = data.value;\n      selectedComponent.value = (_copy$find = copy.find(function (component) {\n        return component.fullPath === fullPath;\n      })) !== null && _copy$find !== void 0 ? _copy$find : null;\n    };\n\n    getParserData();\n    var forceGraphData = Object(vue__WEBPACK_IMPORTED_MODULE_6__[\"computed\"])(function () {\n      if (data && data.value !== null && data) {\n        var copy = data.value;\n        var temp = {\n          nodes: [],\n          links: []\n        };\n        copy.forEach(function (component) {\n          if (!component.fullPath.includes('.js')) {\n            temp.nodes.push({\n              id: component.fullPath,\n              title: component.name,\n              size: 30\n            });\n            component.dependencies.forEach(function (dependency) {\n              if (!dependency.fullPath.includes('.js')) {\n                temp.links.push({\n                  source: component.fullPath,\n                  target: dependency.fullPath\n                });\n              }\n            });\n          }\n        });\n        return temp;\n      }\n\n      return null;\n    });\n    return {\n      data: data,\n      selectComponent: selectComponent,\n      selectedComponent: selectedComponent,\n      isLoading: isLoading,\n      isError: isError,\n      forceGraphData: forceGraphData\n    };\n  }\n}));\n\n//# sourceURL=webpack:///./src/views/PageCommunication.vue?./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  key: 0\n};\nvar _hoisted_2 = {\n  key: 1\n};\nvar _hoisted_3 = {\n  key: 1\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_force_graph = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"force-graph\");\n\n  var _component_sidebar_communication = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"sidebar-communication\");\n\n  var _component_layout_split_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"layout-split-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_layout_split_view, null, {\n    aside: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_ctx.selectedComponent ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_sidebar_communication, {\n        key: 0,\n        component: _ctx.selectedComponent\n      }, null, 8\n      /* PROPS */\n      , [\"component\"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"p\", _hoisted_3, \"Select a component!\"))];\n    }),\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [_ctx.isLoading ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"p\", _hoisted_1, \"... loading\")) : _ctx.isError ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"p\", _hoisted_2, \"Something went wrong parsing your project.\")) : _ctx.forceGraphData ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_force_graph, {\n        key: 2,\n        data: _ctx.forceGraphData,\n        onSelected: _ctx.selectComponent\n      }, null, 8\n      /* PROPS */\n      , [\"data\", \"onSelected\"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)];\n    }),\n    _: 1\n    /* STABLE */\n\n  });\n}\n\n//# sourceURL=webpack:///./src/views/PageCommunication.vue?./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_router_view);\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _hoisted_1 = {\n  class: \"cardCommunicationChannel\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementVNode\"])(\"p\", null, \"some info about this component\", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementVNode\"])(\"h3\", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"toDisplayString\"])(_ctx.channel.name), 1\n  /* TEXT */\n  ), _hoisted_2]);\n}\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  ref: \"graphRef\",\n  class: \"forceGraph\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"svg\", _hoisted_1, null, 512\n  /* NEED_PATCH */\n  );\n}\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _hoisted_1 = {\n  class: \"sidebarCommunication\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementVNode\"])(\"p\", null, \"some info about this component\", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_card_communication_channel = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"resolveComponent\"])(\"card-communication-channel\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementVNode\"])(\"h2\", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"toDisplayString\"])(_ctx.component.name), 1\n  /* TEXT */\n  ), _hoisted_2, (Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"renderList\"])(_ctx.component.props, function (prop) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createBlock\"])(_component_card_communication_channel, {\n      key: prop.name,\n      channel: prop\n    }, null, 8\n    /* PROPS */\n    , [\"channel\"]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"layoutSplitView\"\n};\nvar _hoisted_2 = {\n  class: \"layoutSplitView__main\"\n};\nvar _hoisted_3 = {\n  class: \"layoutSplitView__aside\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"main\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderSlot\"])(_ctx.$slots, \"default\")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"aside\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderSlot\"])(_ctx.$slots, \"aside\")])]);\n}\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!./assets/css/color.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/color.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!./assets/css/font.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/font.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!./assets/css/spacing.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/spacing.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!./assets/css/border-radius.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/border-radius.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!./assets/css/box-shadow.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/box-shadow.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n}\\n#app {\\n  font-family: NotoSans, Arial, Helvetica, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--navy-90);\\n}\\nh1, h2, h3, h4, p {\\n  margin: 0;\\n}\\nh2, h3, h4 {\\n  font-weight: normal;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".cardCommunicationChannel {\\n  background: white;\\n  padding: var(--spacing--l);\\n  border-radius: var(--border-radius--m);\\n  box-shadow: var(--box-shadow--s);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".svg {\\n  height: 100%;\\n  width: 100%;\\n  background: var(--grey-10);\\n  cursor: -webkit-grab;\\n  cursor: grab;\\n}\\n.node {\\n  text-anchor: middle;\\n}\\n.node--selected .circle,\\n.node--selected .label__background {\\n  fill: var(--yellow-30);\\n}\\n.node--selected .circle {\\n  stroke: var(--yellow-50);\\n}\\n.node--selected-dependent .circle {\\n  stroke: var(--grey-50);\\n}\\n.node--greyed-out .circle {\\n  stroke: none;\\n}\\n.node--greyed-out .label__text {\\n  fill: var(--grey-20);\\n}\\n.link {\\n  stroke: var(--grey-20);\\n}\\n.link--selected {\\n  stroke: var(--grey-50);\\n}\\n.link--greyed-out {\\n  stroke: var(--grey-15);\\n}\\n.circle {\\n  fill: white;\\n  stroke: var(--grey-20);\\n  stroke-width: 1px;\\n  cursor: pointer;\\n  transition: fill 200ms;\\n}\\n.circle--small {\\n  fill: var(--mint-50);\\n}\\n.label {\\n  cursor: pointer;\\n}\\n.label__text {\\n  font-size: var(--font-size--xs);\\n  fill: var(--navy-90);\\n  transition: fill 200ms;\\n}\\n.label__background {\\n  fill: white;\\n  rx: var(--border-radius--xs);\\n  transition: fill 200ms;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sidebarCommunication {\\n  display: flex;\\n  flex-direction: column;\\n  gap: var(--spacing--m);\\n  height: 100%;\\n  background: white;\\n  padding: var(--spacing--l) var(--spacing--xl);\\n  box-shadow: var(--box-shadow--s);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".layoutSplitView {\\n  display: flex;\\n  flex-direction: row;\\n  height: 100vh;\\n}\\n.layoutSplitView__main {\\n  width: 75vw;\\n}\\n.layoutSplitView__aside {\\n  width: 25vw;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/border-radius.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./src/assets/css/border-radius.css ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n    --border-radius--xs: 2px;\\n    --border-radius--s: 5px;\\n    --border-radius--m: 10px;\\n    --border-radius--l: 15px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/border-radius.css?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/box-shadow.css":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./src/assets/css/box-shadow.css ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n    --box-shadow--s: 0px 0px 4px rgba(0,0,0,0.23);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/box-shadow.css?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/color.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./src/assets/css/color.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n    --mint-grey: #CBE5DE;\\n    --mint-10: #CDF6EB;\\n    --mint-30: #A0E2CF;\\n    --mint-50: #61c799;\\n    --mint-70: #369D6F;\\n\\n    --red-grey: #E9D0C9;\\n    --red-10: #F6DCD4;\\n    --red-30: #FFB7A1;\\n    --red-50: #F57A5F;\\n    --red-70: #C54C31;\\n\\n    --purple-30: #E9BCEF;\\n    --purple-50: #C37ECD;\\n    --purple-70: #854D8D;\\n\\n    --yellow-30: #F6D697;\\n    --yellow-50: #EDAB2C;\\n\\n    --grey-10: #F1F1F1;\\n    --grey-15: #d7d7d7;\\n    --grey-20: #CECECE;\\n    --grey-50: #7c7c7c;\\n\\n    --navy-50: #7A8497;\\n    --navy-90: #212c41;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/color.css?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/font.css":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./src/assets/css/font.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/NotoSans-Regular.ttf */ \"./src/assets/fonts/NotoSans-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/NotoSans-Bold.ttf */ \"./src/assets/fonts/NotoSans-Bold.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/NotoSans-Italic.ttf */ \"./src/assets/fonts/NotoSans-Italic.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/NotoSans-BoldItalic.ttf */ \"./src/assets/fonts/NotoSans-BoldItalic.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \":root {\\n    font-size: 16px;\\n\\n    --font-size--xs: 0.5em;\\n    --font-size--s: 0.75em;\\n    --font-size--m: 1em;\\n    --font-size--l: 1.125em;\\n    --font-size--xl: 1.25em;\\n    --font-size--2xl: 1.5em;\\n    --font-size--3xl: 2em;\\n    --font-size--4xl: 2.75em;\\n}\\n@font-face {\\n    font-family: NotoSans;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n    font-family: NotoSans;\\n    font-weight: bold;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n@font-face {\\n    font-family: NotoSans;\\n    font-style: italic;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n@font-face {\\n    font-family: NotoSans;\\n    font-style: italic;\\n    font-weight: bold;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/font.css?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/spacing.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./src/assets/css/spacing.css ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n    --spacing--2xs: 0.125rem;\\n    --spacing--xs: 0.25rem;\\n    --spacing--s: 0.5rem;\\n    --spacing--m: 0.75rem;\\n    --spacing--l: 1rem;\\n    --spacing--xl: 1.5rem;\\n    --spacing--2xl: 2rem;\\n    --spacing--3xl: 2.75rem;\\n    --spacing--4xl: 4rem;\\n    --spacing--5xl: 6rem;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/spacing.css?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6e29d1d6\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3b76f4c4\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"41c97b28\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2598894a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"337f6ca6\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\nconst script = {}\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(script, [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--9-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Bold.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Bold.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/NotoSans-Bold.91fd8891.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/NotoSans-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-BoldItalic.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/NotoSans-BoldItalic.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/NotoSans-BoldItalic.cc259a7e.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/NotoSans-BoldItalic.ttf?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Italic.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Italic.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/NotoSans-Italic.27f0f389.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/NotoSans-Italic.ttf?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Regular.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/NotoSans-Regular.d5649a4a.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/NotoSans-Regular.ttf?");

/***/ }),

/***/ "./src/components/CardCommunicationChannel.vue":
/*!*****************************************************!*\
  !*** ./src/components/CardCommunicationChannel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardCommunicationChannel_vue_vue_type_template_id_c2bd4da6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6 */ \"./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6\");\n/* harmony import */ var _CardCommunicationChannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardCommunicationChannel.vue?vue&type=script&lang=js */ \"./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss */ \"./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_CardCommunicationChannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_CardCommunicationChannel_vue_vue_type_template_id_c2bd4da6__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/CardCommunicationChannel.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?");

/***/ }),

/***/ "./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./CardCommunicationChannel.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?");

/***/ }),

/***/ "./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss":
/*!**************************************************************************************************!*\
  !*** ./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=style&index=0&id=c2bd4da6&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_style_index_0_id_c2bd4da6_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?");

/***/ }),

/***/ "./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6":
/*!***********************************************************************************!*\
  !*** ./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6 ***!
  \***********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_template_id_c2bd4da6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CardCommunicationChannel.vue?vue&type=template&id=c2bd4da6\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CardCommunicationChannel_vue_vue_type_template_id_c2bd4da6__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/CardCommunicationChannel.vue?");

/***/ }),

/***/ "./src/components/ForceGraph.vue":
/*!***************************************!*\
  !*** ./src/components/ForceGraph.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ForceGraph_vue_vue_type_template_id_9b459c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForceGraph.vue?vue&type=template&id=9b459c5a */ \"./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a\");\n/* harmony import */ var _ForceGraph_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForceGraph.vue?vue&type=script&lang=js */ \"./src/components/ForceGraph.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss */ \"./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_ForceGraph_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ForceGraph_vue_vue_type_template_id_9b459c5a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/ForceGraph.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?");

/***/ }),

/***/ "./src/components/ForceGraph.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/ForceGraph.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./ForceGraph.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?");

/***/ }),

/***/ "./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=style&index=0&id=9b459c5a&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_style_index_0_id_9b459c5a_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?");

/***/ }),

/***/ "./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a":
/*!*********************************************************************!*\
  !*** ./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a ***!
  \*********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_template_id_9b459c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./ForceGraph.vue?vue&type=template&id=9b459c5a */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ForceGraph.vue?vue&type=template&id=9b459c5a\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_ForceGraph_vue_vue_type_template_id_9b459c5a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ForceGraph.vue?");

/***/ }),

/***/ "./src/components/SidebarCommunication.vue":
/*!*************************************************!*\
  !*** ./src/components/SidebarCommunication.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SidebarCommunication_vue_vue_type_template_id_0e0b6dec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarCommunication.vue?vue&type=template&id=0e0b6dec */ \"./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec\");\n/* harmony import */ var _SidebarCommunication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarCommunication.vue?vue&type=script&lang=js */ \"./src/components/SidebarCommunication.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss */ \"./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_SidebarCommunication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SidebarCommunication_vue_vue_type_template_id_0e0b6dec__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/SidebarCommunication.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?");

/***/ }),

/***/ "./src/components/SidebarCommunication.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/components/SidebarCommunication.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./SidebarCommunication.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?");

/***/ }),

/***/ "./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=style&index=0&id=0e0b6dec&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_style_index_0_id_0e0b6dec_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?");

/***/ }),

/***/ "./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec":
/*!*******************************************************************************!*\
  !*** ./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_template_id_0e0b6dec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./SidebarCommunication.vue?vue&type=template&id=0e0b6dec */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SidebarCommunication.vue?vue&type=template&id=0e0b6dec\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SidebarCommunication_vue_vue_type_template_id_0e0b6dec__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/SidebarCommunication.vue?");

/***/ }),

/***/ "./src/components/layout/LayoutSplitView.vue":
/*!***************************************************!*\
  !*** ./src/components/layout/LayoutSplitView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LayoutSplitView_vue_vue_type_template_id_3a3b0de0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutSplitView.vue?vue&type=template&id=3a3b0de0 */ \"./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0\");\n/* harmony import */ var _LayoutSplitView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutSplitView.vue?vue&type=script&lang=js */ \"./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss */ \"./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_LayoutSplitView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_LayoutSplitView_vue_vue_type_template_id_3a3b0de0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/layout/LayoutSplitView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?");

/***/ }),

/***/ "./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./LayoutSplitView.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?");

/***/ }),

/***/ "./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=style&index=0&id=3a3b0de0&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_style_index_0_id_3a3b0de0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?");

/***/ }),

/***/ "./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0":
/*!*********************************************************************************!*\
  !*** ./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0 ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_template_id_3a3b0de0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./LayoutSplitView.vue?vue&type=template&id=3a3b0de0 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/layout/LayoutSplitView.vue?vue&type=template&id=3a3b0de0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_LayoutSplitView_vue_vue_type_template_id_3a3b0de0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/layout/LayoutSplitView.vue?");

/***/ }),

/***/ "./src/composables/fetch.ts":
/*!**********************************!*\
  !*** ./src/composables/fetch.ts ***!
  \**********************************/
/*! exports provided: useFetch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetch\", function() { return useFetch; });\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\nvar useFetch = function useFetch(fetcher) {\n  var data = Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])(null);\n  var isLoading = Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])(false);\n  var isError = Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"ref\"])(false);\n\n  var get = /*#__PURE__*/function () {\n    var _ref = Object(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              isLoading.value = true;\n              data.value = null;\n              isError.value = false;\n              _context.prev = 3;\n              _context.next = 6;\n              return fetcher();\n\n            case 6:\n              data.value = _context.sent;\n              _context.next = 13;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](3);\n              isError.value = true;\n              console.error(_context.t0);\n\n            case 13:\n              isLoading.value = false;\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 9]]);\n    }));\n\n    return function get() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return {\n    data: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"readonly\"])(data),\n    isLoading: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"readonly\"])(isLoading),\n    isError: Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"readonly\"])(isError),\n    get: get\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  useFetch: useFetch\n});\n\n//# sourceURL=webpack:///./src/composables/fetch.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.ts\");\n\n\n\n\n\n\n\nObject(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_PageCommunication_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/PageCommunication.vue */ \"./src/views/PageCommunication.vue\");\n\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: _views_PageCommunication_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_0__[\"createWebHistory\"])(\"/\"),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.ts?");

/***/ }),

/***/ "./src/services/parser.ts":
/*!********************************!*\
  !*** ./src/services/parser.ts ***!
  \********************************/
/*! exports provided: get, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar get = function get() {\n  return fetch('http://localhost:4444/parse-result').then(function (result) {\n    return result.json();\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: get\n});\n\n//# sourceURL=webpack:///./src/services/parser.ts?");

/***/ }),

/***/ "./src/views/PageCommunication.vue":
/*!*****************************************!*\
  !*** ./src/views/PageCommunication.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageCommunication_vue_vue_type_template_id_a6b0a986_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true */ \"./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true\");\n/* harmony import */ var _PageCommunication_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageCommunication.vue?vue&type=script&lang=ts */ \"./src/views/PageCommunication.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_martina_scharrer_PhpstormProjects_vue_component_insight_app_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_PageCommunication_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_PageCommunication_vue_vue_type_template_id_a6b0a986_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/PageCommunication.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/PageCommunication.vue?");

/***/ }),

/***/ "./src/views/PageCommunication.vue?vue&type=script&lang=ts":
/*!*****************************************************************!*\
  !*** ./src/views/PageCommunication.vue?vue&type=script&lang=ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageCommunication_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--15-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--15-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./PageCommunication.vue?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PageCommunication.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageCommunication_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/PageCommunication.vue?");

/***/ }),

/***/ "./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true":
/*!*******************************************************************************!*\
  !*** ./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageCommunication_vue_vue_type_template_id_a6b0a986_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--15-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--15-2!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PageCommunication.vue?vue&type=template&id=a6b0a986&ts=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_PageCommunication_vue_vue_type_template_id_a6b0a986_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/PageCommunication.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });