/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1, h2, h3, h4, h5, p {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n.content {\n    display: grid;\n    grid-template-columns: 40vw 40vw;\n    margin-top: 5vw;\n    grid-template-rows:48px 1fr 1fr 1fr;\n}\n\n#searchContainer {\n    grid-column: span 2;\n    justify-self: center;\n}\n\n#tempContainer {\n    grid-column: span 2;\n    display: grid;\n    grid-template-columns: 5fr 3fr;\n}\n\nh1 {\n    align-self: center;\n    justify-self: center;\n    font-size: 20vw;\n}\n\n#iconConditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n#conditionText {\n\n    text-align: center;\n\n}\n\n#conditionIcon {\n    align-self: center;\n    justify-self: center;\n    width: 20vw;\n}\n\n#locationContainer {\n    grid-row-start: 3;\n    grid-column: span 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,gCAAgC;IAChC,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB","sourcesContent":["h1, h2, h3, h4, h5, p {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n.content {\n    display: grid;\n    grid-template-columns: 40vw 40vw;\n    margin-top: 5vw;\n    grid-template-rows:48px 1fr 1fr 1fr;\n}\n\n#searchContainer {\n    grid-column: span 2;\n    justify-self: center;\n}\n\n#tempContainer {\n    grid-column: span 2;\n    display: grid;\n    grid-template-columns: 5fr 3fr;\n}\n\nh1 {\n    align-self: center;\n    justify-self: center;\n    font-size: 20vw;\n}\n\n#iconConditionContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n#conditionText {\n\n    text-align: center;\n\n}\n\n#conditionIcon {\n    align-self: center;\n    justify-self: center;\n    width: 20vw;\n}\n\n#locationContainer {\n    grid-row-start: 3;\n    grid-column: span 2;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMcontroller.js":
/*!******************************!*\
  !*** ./src/DOMcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstPageLoad: () => (/* binding */ firstPageLoad),
/* harmony export */   populateDOM: () => (/* binding */ populateDOM)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function firstPageLoad() {
  const content = document.getElementById('content');

  // temperature container
  const tempContainer = document.createElement('div');
  tempContainer.id = 'tempContainer';

  const temperatureText = document.createElement('h1');
  temperatureText.id = 'temperatureText';

  const conditionIcon = document.createElement('img');
  conditionIcon.id = 'conditionIcon';

  const conditionText = document.createElement('p');
  conditionText.id = 'conditionText';

  tempContainer.appendChild(temperatureText);
  
  const iconConditionContainer = document.createElement('div');
  iconConditionContainer.id = 'iconConditionContainer';

  iconConditionContainer.appendChild(conditionIcon);
  iconConditionContainer.appendChild(conditionText);

  tempContainer.appendChild(iconConditionContainer);


  // search container
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.maxLength = 20;
  searchInput.id = 'searchInput';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.textContent = 'Search';
  searchButton.id = 'searchButton';

  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = document.getElementById('searchInput').value;
      if (searchQuery !== '') {
        (0,___WEBPACK_IMPORTED_MODULE_0__.logWeather)(searchQuery);
        searchInput.value = '';
      }
    } else {
      // do nothing
    }
  });

  searchButton.addEventListener('click', (e) => {
    const searchQuery = document.getElementById('searchInput').value;
    (0,___WEBPACK_IMPORTED_MODULE_0__.logWeather)(searchQuery);
    searchInput.value = '';
  });

  const searchContainer = document.createElement('div');
  searchContainer.id = 'searchContainer';
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  content.appendChild(searchContainer);
  content.appendChild(tempContainer);

  // day/cloud/UV section
  const skyInfoContainer = document.createElement('div');
  skyInfoContainer.id = 'skyInfoContainer';

  const isDay = document.createElement('p');
  isDay.id = 'isDay';

  const cloudPercent = document.createElement('p');
  cloudPercent.id = 'cloudPercent';

  const UVIndex = document.createElement('p');
  UVIndex.id = 'UVIndex';

  skyInfoContainer.appendChild(isDay);
  skyInfoContainer.appendChild(cloudPercent);
  skyInfoContainer.appendChild(UVIndex);
  content.appendChild(skyInfoContainer);

  // location and time section
  const locationContainer = document.createElement('div');
  locationContainer.id = 'locationContainer';
  const locationName = document.createElement('h2');
  locationName.id = 'locationName';

  const countryName = document.createElement('h3');
  countryName.id = 'countryName';

  const regionName = document.createElement('h4');
  regionName.id = 'regionName';

  const regionTime = document.createElement('h4');
  regionTime.id = 'regionTime';

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(countryName);
  locationContainer.appendChild(regionName);
  locationContainer.appendChild(regionTime);

  content.appendChild(locationContainer);

  // rain and humidity
  const rainContainer = document.createElement('div');
  rainContainer.id = 'rainContainer';
  const rainMM = document.createElement('p');
  rainMM.id = 'rainMM';
  const humidityPercent = document.createElement('p');
  humidityPercent.id = 'humidityPercent';

  rainContainer.appendChild(rainMM);
  rainContainer.appendChild(humidityPercent);

  content.appendChild(rainContainer);
}

function populateDOM(weatherData) {
  // temperature container
  console.log(weatherData);
  const temperatureText = document.getElementById('temperatureText');
  temperatureText.textContent = `${weatherData[0].locationTempCelsius}\u00B0C`;

  const conditionIcon = document.getElementById('conditionIcon');
  const iconUrl = `https:${weatherData[0].locationConditionIcon}`;
  conditionIcon.src = iconUrl;
  const conditionText = document.getElementById('conditionText');
  conditionText.textContent = `${weatherData[0].locationConditionText}`;

  // day/cloud/UV section
  const isDay = document.getElementById('isDay');
  if (weatherData[0].locationIsDay === '0') {
    isDay.textContent = 'Night';
  }
  if (weatherData[0].locationIsDay === '1') {
    isDay.textContent = 'Day';
  }
  const cloudPercent = document.getElementById('cloudPercent');
  cloudPercent.textContent = `Cloud: ${weatherData[0].locationCloudPercent}` + '%';

  const UVIndex = document.getElementById('UVIndex');
  UVIndex.textContent = `UV Index ${weatherData[0].locationUVIndex}`;

  // location and time section
  const locationName = document.getElementById('locationName');
  locationName.textContent = `${weatherData[0].locationName}`;
  const countryName = document.getElementById('countryName');
  countryName.textContent = `${weatherData[0].locationCountry}`;
  const regionName = document.getElementById('regionName');
  regionName.textContent = `${weatherData[0].locationRegion}`;
  const regionTime = document.getElementById('regionTime');
  regionTime.textContent = `${weatherData[0].locationTime}`;

  // rain and humidity
  const rainMM = document.getElementById('rainMM');
  rainMM.textContent = `Rain (mm): ${weatherData[0].locationRainMM}`;
  const humidityPercent = document.getElementById('humidityPercent');
  humidityPercent.textContent = `Humidity: ${weatherData[0].locationHumidityPercent}`;
}




/***/ }),

/***/ "./src/getWeatherData.js":
/*!*******************************!*\
  !*** ./src/getWeatherData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeatherData: () => (/* binding */ getCurrentWeatherData)
/* harmony export */ });
function processWeatherData(fetchedData) {
  if (fetchedData.error) {
    const error = fetchedData.error.message;
    alert(`${error}`);
  }
  if (!fetchedData.error) {
    const weatherDataJS = [{
      locationName: `${fetchedData.location.name}`,
      locationRegion: `${fetchedData.location.region}`,
      locationCountry: `${fetchedData.location.country}`,
      locationTime: `${fetchedData.location.localtime}`,
      locationTempCelsius: `${fetchedData.current.temp_c}`,
      locationTempFarenheit: `${fetchedData.current.temp_f}`,
      locationHumidityPercent: `${fetchedData.current.humidity}`,
      locationIsDay: `${fetchedData.current.is_day}`,
      locationConditionText: `${fetchedData.current.condition.text}`,
      locationConditionIcon: `${fetchedData.current.condition.icon}`,
      locationCloudPercent: `${fetchedData.current.cloud}`,
      locationRainMM: `${fetchedData.current.precip_mm}`,
      locationUVIndex: `${fetchedData.current.uv}`,
    }];
    return weatherDataJS;
  }
}
async function getCurrentWeatherData(searchQuery) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=13b63145a5424e57bac133002232605&q=${searchQuery}`, { mode: 'cors' });
  const responseData = await response.json();
  console.log(responseData);
  const weatherData = processWeatherData(responseData);
  return weatherData;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logWeather: () => (/* binding */ logWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeatherData */ "./src/getWeatherData.js");
/* harmony import */ var _DOMcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMcontroller */ "./src/DOMcontroller.js");





(0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_2__.firstPageLoad)();

async function logWeather(searchTerm) {
    const weather = await (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherData)(searchTerm);
    console.log(weather);
    (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_2__.populateDOM)(weather);
}

logWeather('perth');




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aENaO0FBQ29DO0FBQ1Q7QUFDRjs7QUFFOUMsNkRBQWE7O0FBRWI7QUFDQSwwQkFBMEIsc0VBQXFCO0FBQy9DO0FBQ0EsSUFBSSwyREFBVztBQUNmOztBQUVBOzs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9ET01jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSwgaDIsIGgzLCBoNCwgaDUsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNDB2dztcXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6NDhweCAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI3NlYXJjaENvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdGVtcENvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDNmcjtcXG59XFxuXFxuaDEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwdnc7XFxufVxcblxcbiNpY29uQ29uZGl0aW9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbmRpdGlvblRleHQge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbiNjb25kaXRpb25JY29uIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcblxcbiNsb2NhdGlvbkNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxLCBoMiwgaDMsIGg0LCBoNSwgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA0MHZ3O1xcbiAgICBtYXJnaW4tdG9wOiA1dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czo0OHB4IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4jc2VhcmNoQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgM2ZyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjB2dztcXG59XFxuXFxuI2ljb25Db25kaXRpb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29uZGl0aW9uVGV4dCB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuI2NvbmRpdGlvbkljb24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2xvY2F0aW9uQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb2dXZWF0aGVyIH0gZnJvbSAnLic7XG5cbmZ1bmN0aW9uIGZpcnN0UGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIC8vIHRlbXBlcmF0dXJlIGNvbnRhaW5lclxuICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBDb250YWluZXIuaWQgPSAndGVtcENvbnRhaW5lcic7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGVtcGVyYXR1cmVUZXh0LmlkID0gJ3RlbXBlcmF0dXJlVGV4dCc7XG5cbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25kaXRpb25JY29uLmlkID0gJ2NvbmRpdGlvbkljb24nO1xuXG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbmRpdGlvblRleHQuaWQgPSAnY29uZGl0aW9uVGV4dCc7XG5cbiAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZVRleHQpO1xuICBcbiAgY29uc3QgaWNvbkNvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uQ29uZGl0aW9uQ29udGFpbmVyLmlkID0gJ2ljb25Db25kaXRpb25Db250YWluZXInO1xuXG4gIGljb25Db25kaXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSWNvbik7XG4gIGljb25Db25kaXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG5cbiAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29uZGl0aW9uQ29udGFpbmVyKTtcblxuXG4gIC8vIHNlYXJjaCBjb250YWluZXJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICBzZWFyY2hJbnB1dC5tYXhMZW5ndGggPSAyMDtcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoSW5wdXQnO1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgc2VhcmNoQnV0dG9uLmlkID0gJ3NlYXJjaEJ1dHRvbic7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKS52YWx1ZTtcbiAgICAgIGlmIChzZWFyY2hRdWVyeSAhPT0gJycpIHtcbiAgICAgICAgbG9nV2VhdGhlcihzZWFyY2hRdWVyeSk7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH0pO1xuXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKS52YWx1ZTtcbiAgICBsb2dXZWF0aGVyKHNlYXJjaFF1ZXJ5KTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICB9KTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLmlkID0gJ3NlYXJjaENvbnRhaW5lcic7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG5cbiAgLy8gZGF5L2Nsb3VkL1VWIHNlY3Rpb25cbiAgY29uc3Qgc2t5SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBza3lJbmZvQ29udGFpbmVyLmlkID0gJ3NreUluZm9Db250YWluZXInO1xuXG4gIGNvbnN0IGlzRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpc0RheS5pZCA9ICdpc0RheSc7XG5cbiAgY29uc3QgY2xvdWRQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjbG91ZFBlcmNlbnQuaWQgPSAnY2xvdWRQZXJjZW50JztcblxuICBjb25zdCBVVkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBVVkluZGV4LmlkID0gJ1VWSW5kZXgnO1xuXG4gIHNreUluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaXNEYXkpO1xuICBza3lJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkUGVyY2VudCk7XG4gIHNreUluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoVVZJbmRleCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2t5SW5mb0NvbnRhaW5lcik7XG5cbiAgLy8gbG9jYXRpb24gYW5kIHRpbWUgc2VjdGlvblxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbkNvbnRhaW5lci5pZCA9ICdsb2NhdGlvbkNvbnRhaW5lcic7XG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uTmFtZS5pZCA9ICdsb2NhdGlvbk5hbWUnO1xuXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY291bnRyeU5hbWUuaWQgPSAnY291bnRyeU5hbWUnO1xuXG4gIGNvbnN0IHJlZ2lvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICByZWdpb25OYW1lLmlkID0gJ3JlZ2lvbk5hbWUnO1xuXG4gIGNvbnN0IHJlZ2lvblRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICByZWdpb25UaW1lLmlkID0gJ3JlZ2lvblRpbWUnO1xuXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50cnlOYW1lKTtcbiAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVnaW9uTmFtZSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZ2lvblRpbWUpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xuXG4gIC8vIHJhaW4gYW5kIGh1bWlkaXR5XG4gIGNvbnN0IHJhaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmFpbkNvbnRhaW5lci5pZCA9ICdyYWluQ29udGFpbmVyJztcbiAgY29uc3QgcmFpbk1NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByYWluTU0uaWQgPSAncmFpbk1NJztcbiAgY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHlQZXJjZW50JztcblxuICByYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5NTSk7XG4gIHJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHJhaW5Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURPTSh3ZWF0aGVyRGF0YSkge1xuICAvLyB0ZW1wZXJhdHVyZSBjb250YWluZXJcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBjb25zdCB0ZW1wZXJhdHVyZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmVUZXh0Jyk7XG4gIHRlbXBlcmF0dXJlVGV4dC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhWzBdLmxvY2F0aW9uVGVtcENlbHNpdXN9XFx1MDBCMENgO1xuXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uSWNvbicpO1xuICBjb25zdCBpY29uVXJsID0gYGh0dHBzOiR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25Db25kaXRpb25JY29ufWA7XG4gIGNvbmRpdGlvbkljb24uc3JjID0gaWNvblVybDtcbiAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25kaXRpb25UZXh0Jyk7XG4gIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YVswXS5sb2NhdGlvbkNvbmRpdGlvblRleHR9YDtcblxuICAvLyBkYXkvY2xvdWQvVVYgc2VjdGlvblxuICBjb25zdCBpc0RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc0RheScpO1xuICBpZiAod2VhdGhlckRhdGFbMF0ubG9jYXRpb25Jc0RheSA9PT0gJzAnKSB7XG4gICAgaXNEYXkudGV4dENvbnRlbnQgPSAnTmlnaHQnO1xuICB9XG4gIGlmICh3ZWF0aGVyRGF0YVswXS5sb2NhdGlvbklzRGF5ID09PSAnMScpIHtcbiAgICBpc0RheS50ZXh0Q29udGVudCA9ICdEYXknO1xuICB9XG4gIGNvbnN0IGNsb3VkUGVyY2VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG91ZFBlcmNlbnQnKTtcbiAgY2xvdWRQZXJjZW50LnRleHRDb250ZW50ID0gYENsb3VkOiAke3dlYXRoZXJEYXRhWzBdLmxvY2F0aW9uQ2xvdWRQZXJjZW50fWAgKyAnJSc7XG5cbiAgY29uc3QgVVZJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdVVkluZGV4Jyk7XG4gIFVWSW5kZXgudGV4dENvbnRlbnQgPSBgVVYgSW5kZXggJHt3ZWF0aGVyRGF0YVswXS5sb2NhdGlvblVWSW5kZXh9YDtcblxuICAvLyBsb2NhdGlvbiBhbmQgdGltZSBzZWN0aW9uXG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbk5hbWUnKTtcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25OYW1lfWA7XG4gIGNvbnN0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnlOYW1lJyk7XG4gIGNvdW50cnlOYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25Db3VudHJ5fWA7XG4gIGNvbnN0IHJlZ2lvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaW9uTmFtZScpO1xuICByZWdpb25OYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25SZWdpb259YDtcbiAgY29uc3QgcmVnaW9uVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpb25UaW1lJyk7XG4gIHJlZ2lvblRpbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YVswXS5sb2NhdGlvblRpbWV9YDtcblxuICAvLyByYWluIGFuZCBodW1pZGl0eVxuICBjb25zdCByYWluTU0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbk1NJyk7XG4gIHJhaW5NTS50ZXh0Q29udGVudCA9IGBSYWluIChtbSk6ICR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25SYWluTU19YDtcbiAgY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5UGVyY2VudCcpO1xuICBodW1pZGl0eVBlcmNlbnQudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGFbMF0ubG9jYXRpb25IdW1pZGl0eVBlcmNlbnR9YDtcbn1cblxuZXhwb3J0IHsgZmlyc3RQYWdlTG9hZCwgcG9wdWxhdGVET00gfTtcbiIsImZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShmZXRjaGVkRGF0YSkge1xuICBpZiAoZmV0Y2hlZERhdGEuZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvciA9IGZldGNoZWREYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgYWxlcnQoYCR7ZXJyb3J9YCk7XG4gIH1cbiAgaWYgKCFmZXRjaGVkRGF0YS5lcnJvcikge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhSlMgPSBbe1xuICAgICAgbG9jYXRpb25OYW1lOiBgJHtmZXRjaGVkRGF0YS5sb2NhdGlvbi5uYW1lfWAsXG4gICAgICBsb2NhdGlvblJlZ2lvbjogYCR7ZmV0Y2hlZERhdGEubG9jYXRpb24ucmVnaW9ufWAsXG4gICAgICBsb2NhdGlvbkNvdW50cnk6IGAke2ZldGNoZWREYXRhLmxvY2F0aW9uLmNvdW50cnl9YCxcbiAgICAgIGxvY2F0aW9uVGltZTogYCR7ZmV0Y2hlZERhdGEubG9jYXRpb24ubG9jYWx0aW1lfWAsXG4gICAgICBsb2NhdGlvblRlbXBDZWxzaXVzOiBgJHtmZXRjaGVkRGF0YS5jdXJyZW50LnRlbXBfY31gLFxuICAgICAgbG9jYXRpb25UZW1wRmFyZW5oZWl0OiBgJHtmZXRjaGVkRGF0YS5jdXJyZW50LnRlbXBfZn1gLFxuICAgICAgbG9jYXRpb25IdW1pZGl0eVBlcmNlbnQ6IGAke2ZldGNoZWREYXRhLmN1cnJlbnQuaHVtaWRpdHl9YCxcbiAgICAgIGxvY2F0aW9uSXNEYXk6IGAke2ZldGNoZWREYXRhLmN1cnJlbnQuaXNfZGF5fWAsXG4gICAgICBsb2NhdGlvbkNvbmRpdGlvblRleHQ6IGAke2ZldGNoZWREYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YCxcbiAgICAgIGxvY2F0aW9uQ29uZGl0aW9uSWNvbjogYCR7ZmV0Y2hlZERhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gLFxuICAgICAgbG9jYXRpb25DbG91ZFBlcmNlbnQ6IGAke2ZldGNoZWREYXRhLmN1cnJlbnQuY2xvdWR9YCxcbiAgICAgIGxvY2F0aW9uUmFpbk1NOiBgJHtmZXRjaGVkRGF0YS5jdXJyZW50LnByZWNpcF9tbX1gLFxuICAgICAgbG9jYXRpb25VVkluZGV4OiBgJHtmZXRjaGVkRGF0YS5jdXJyZW50LnV2fWAsXG4gICAgfV07XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhSlM7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTNiNjMxNDVhNTQyNGU1N2JhYzEzMzAwMjIzMjYwNSZxPSR7c2VhcmNoUXVlcnl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEocmVzcG9uc2VEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9nZXRXZWF0aGVyRGF0YSc7XG5pbXBvcnQgeyBmaXJzdFBhZ2VMb2FkIH0gZnJvbSAnLi9ET01jb250cm9sbGVyJztcbmltcG9ydCB7IHBvcHVsYXRlRE9NIH0gZnJvbSAnLi9ET01jb250cm9sbGVyJztcblxuZmlyc3RQYWdlTG9hZCgpO1xuXG5hc3luYyBmdW5jdGlvbiBsb2dXZWF0aGVyKHNlYXJjaFRlcm0pIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJEYXRhKHNlYXJjaFRlcm0pO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIHBvcHVsYXRlRE9NKHdlYXRoZXIpO1xufVxuXG5sb2dXZWF0aGVyKCdwZXJ0aCcpO1xuXG5cbmV4cG9ydCB7IGxvZ1dlYXRoZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==