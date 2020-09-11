/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/components/AddAudioControl/AddAudioControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/components/AddAudioControl/AddAudioControl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SlidePanel/SlidePanel */ "./assets/src/components/SlidePanel/SlidePanel.js");







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var TextControl = wp.components.TextControl;

var AddAudioControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AddAudioControl, _Component);

  var _super = _createSuper(AddAudioControl);

  function AddAudioControl(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AddAudioControl);

    _this = _super.call(this, props);
    _this.state = {
      active: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AddAudioControl, [{
    key: "togglePanel",
    value: function togglePanel() {
      var isActive = this.state.active ? false : true;
      this.setState({
        active: isActive
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "wsuwp-explore-control__add-video__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "wsuwp-explore-control__add-video",
        onClick: function onClick(e) {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wsu-icon wsu-i-play"
      }), "Add Audio"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "above",
        slide: "left",
        isActive: this.state.active,
        onClose: function onClose() {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "Audio File URL",
        value: this.props.audioSrc,
        onChange: function onChange(content) {
          return _this2.props.onChange({
            audioSrc: content
          });
        },
        placeholder: 'Enter audio url here.'
      })));
    }
  }]);

  return AddAudioControl;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddAudioControl);

/***/ }),

/***/ "./assets/src/components/AddVideoControl/AddVideoControl.js":
/*!******************************************************************!*\
  !*** ./assets/src/components/AddVideoControl/AddVideoControl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SlidePanel/SlidePanel */ "./assets/src/components/SlidePanel/SlidePanel.js");







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var TextControl = wp.components.TextControl;

var AddVideoControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AddVideoControl, _Component);

  var _super = _createSuper(AddVideoControl);

  function AddVideoControl(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AddVideoControl);

    _this = _super.call(this, props);
    _this.state = {
      active: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AddVideoControl, [{
    key: "togglePanel",
    value: function togglePanel() {
      var isActive = this.state.active ? false : true;
      this.setState({
        active: isActive
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "wsuwp-explore-control__add-audio__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "wsuwp-explore-control__add-audio",
        onClick: function onClick(e) {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wsu-icon wsu-i-play-circle"
      }), "Add Video"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        position: "above",
        slide: "left",
        isActive: this.state.active,
        onClose: function onClose() {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "WebM URL",
        value: this.props.videoSrcWebm,
        onChange: function onChange(content) {
          return _this2.props.onChange({
            videoSrcWebm: content
          });
        },
        placeholder: 'Enter video URL here.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "Vimeo (MP4) Video URL",
        value: this.props.videoSrcMp4,
        onChange: function onChange(content) {
          return _this2.props.onChange({
            videoSrcMp4: content
          });
        },
        placeholder: 'Enter video URL here.'
      })));
    }
  }]);

  return AddVideoControl;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddVideoControl);

/***/ }),

/***/ "./assets/src/components/BackgroundControl/BackgroundControl.js":
/*!**********************************************************************!*\
  !*** ./assets/src/components/BackgroundControl/BackgroundControl.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SlidePanel/SlidePanel */ "./assets/src/components/SlidePanel/SlidePanel.js");







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;

var BackgroundControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BackgroundControl, _Component);

  var _super = _createSuper(BackgroundControl);

  function BackgroundControl(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BackgroundControl);

    _this = _super.call(this, props);
    _this.state = {
      active: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BackgroundControl, [{
    key: "togglePanel",
    value: function togglePanel() {
      var isActive = this.state.active ? false : true;
      this.setState({
        active: isActive
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wsuwp-explore-control__background__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "wsuwp-explore-control__background",
        onClick: function onClick(e) {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "wsu-icon wsu-i-settings"
      }), "Edit Background"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_SlidePanel_SlidePanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isActive: this.state.active,
        onClose: function onClose() {
          return _this2.togglePanel();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
        onSelect: function onSelect(media) {
          return _this2.props.onChange({
            bgImgSrc: media.url
          });
        } // allowedTypes={ALLOWED_MEDIA_TYPES}
        // value={mediaId}
        ,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BaseControl, {
            label: "Replace Background Image"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
            isLink: true,
            onClick: open
          }, "Open Media Library"));
        }
      }))));
    }
  }]);

  return BackgroundControl;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundControl);

/***/ }),

/***/ "./assets/src/components/OptionSetControl/OptionSetControl.js":
/*!********************************************************************!*\
  !*** ./assets/src/components/OptionSetControl/OptionSetControl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var OptionControl = function OptionControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "wsuwp-explore-control__option-set__option",
    onClick: function onClick(e) {
      props.onChange({
        'type': props.option.value
      });
    }
  }, props.option.label);
};

var OptionSetControl = function OptionSetControl(props) {
  console.log(props);
  var activeClass = props.isActive ? 'active' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-control__option-set " + activeClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "wsuwp-explore-control__option-set__options"
  }, props.options.map(function (option, i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OptionControl, {
      key: i,
      option: option,
      onChange: props.onChange
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionSetControl);

/***/ }),

/***/ "./assets/src/components/OptionSetControl/_OptionSetControl.scss":
/*!***********************************************************************!*\
  !*** ./assets/src/components/OptionSetControl/_OptionSetControl.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/src/components/PanelCaption/panel-caption.js":
/*!*************************************************************!*\
  !*** ./assets/src/components/PanelCaption/panel-caption.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;

var PanelCaption = function PanelCaption(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-caption"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "wsu-explore-panel-caption__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "div",
    value: props.title,
    onChange: function onChange(title) {
      return props.onTitleChange(title);
    },
    allowedFormats: [],
    placeholder: 'Enter caption text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-caption__caption"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "div",
    value: props.caption,
    onChange: function onChange(caption) {
      return props.onCaptionChange(caption);
    },
    allowedFormats: [],
    placeholder: 'Enter caption text here.'
  })));
};

PanelCaption.defaultProps = {
  title: '',
  caption: '',
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (PanelCaption);

/***/ }),

/***/ "./assets/src/components/Pin/Pin-2.js":
/*!********************************************!*\
  !*** ./assets/src/components/Pin/Pin-2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var TextControl = wp.components.TextControl;

var Pin = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Pin, _Component);

  var _super = _createSuper(Pin);

  function Pin(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pin);

    _this = _super.call(this, props);
    _this.state = {
      index: props.index,
      label: props.label,
      position_x: props.position.x,
      position_y: props.position.y,
      slide: props.slide
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pin, [{
    key: "return_pin",
    value: function return_pin() {
      this.props.onChange({
        label: this.state.label,
        position: {
          x: this.state.position_x,
          y: this.state.position_y
        },
        slide: this.state.slide
      }, this.state.index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active ? 'active' : 'inactive';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: 'wsu-comp-pin is-' + active,
        onClick: function onClick(e) {
          _this2.setState({
            active: true
          });
        },
        style: {
          left: this.props.position.x + '%',
          top: this.props.position.y + '%'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wsu-comp-pin__controls"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("legend", null, "Pin: ", this.props.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "Label",
        value: this.state.label,
        placeholder: 'Location Label',
        className: "wsu-comp-pin__input-label",
        onChange: function onChange(value) {
          console.log(value);

          _this2.setState({
            label: value
          });

          _this2.return_pin();
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "X:",
        value: this.props.position.x,
        placeholder: '50',
        className: "wsu-comp-pin__input-x",
        onChange: function onChange(value) {
          _this2.setState({
            position_x: value
          });

          _this2.return_pin();
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: "Y:",
        value: this.props.position.x,
        placeholder: '50',
        className: "wsu-comp-pin__input-y",
        onChange: function onChange(value) {
          _this2.setState({
            position_y: value
          });

          _this2.return_pin();
        }
      }))));
    }
  }]);

  return Pin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ }),

/***/ "./assets/src/components/SlidePanel/SlidePanel.js":
/*!********************************************************!*\
  !*** ./assets/src/components/SlidePanel/SlidePanel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var SlidePanel = function SlidePanel(props) {
  var activeClass = props.isActive ? 'active' : '';
  var positionClass = props.position ? 'slide-panel-position-' + props.position : 'slide-panel-position-below';
  var directionClass = props.slide ? 'slide-panel-direction-' + props.slide : 'slide-panel-direction-right';
  var wrapperClasses = [activeClass, positionClass, directionClass];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-control__slide-panel__wrapper " + wrapperClasses.join(' ')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-control__slide-panel"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wsuwp-explore-control__slide-panel__close",
    onClick: props.onClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "wsu-icon wsu-i-x-close"
  }), "Close"), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (SlidePanel);

/***/ }),

/***/ "./assets/src/editor.js":
/*!******************************!*\
  !*** ./assets/src/editor.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/_editor.scss */ "./assets/src/scss/_editor.scss");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./assets/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_OptionSetControl_OptionSetControl_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/OptionSetControl/_OptionSetControl.scss */ "./assets/src/components/OptionSetControl/_OptionSetControl.scss");
/* harmony import */ var _components_OptionSetControl_OptionSetControl_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_OptionSetControl_OptionSetControl_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_panel_editor_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/panel/editor/block */ "./blocks/panel/editor/block.js");
/* harmony import */ var _blocks_panel_group_editor_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/panel-group/editor/block */ "./blocks/panel-group/editor/block.js");
/* harmony import */ var _blocks_panel_start_editor_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/panel-start/editor/block */ "./blocks/panel-start/editor/block.js");
/* harmony import */ var _blocks_panel_image_editor_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/panel-image/editor/block */ "./blocks/panel-image/editor/block.js");
/* harmony import */ var _blocks_panel_slider_editor_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/panel-slider/editor/block */ "./blocks/panel-slider/editor/block.js");
/* harmony import */ var _blocks_panel_slide_editor_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/panel-slide/editor/block */ "./blocks/panel-slide/editor/block.js");
/* harmony import */ var _blocks_panel_content_editor_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/panel-content/editor/block */ "./blocks/panel-content/editor/block.js");











/***/ }),

/***/ "./assets/src/editor.scss":
/*!********************************!*\
  !*** ./assets/src/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/src/scss/_editor.scss":
/*!**************************************!*\
  !*** ./assets/src/scss/_editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/src/scss/partials/_editor-panel.scss":
/*!*****************************************************!*\
  !*** ./assets/src/scss/partials/_editor-panel.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel-content/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/panel-content/editor/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/panel-content/editor/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/panel-content/editor/edit.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp-explore/panel-content', {
  title: 'Content Panel',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    caption: {
      type: 'string',
      default: ''
    },
    backgroundImgTitle: {
      type: 'string',
      default: ''
    },
    backgroundCaption: {
      type: 'string',
      default: ''
    },
    backgroundImgCaptionUrl: {
      type: 'string',
      default: ''
    },
    backgroundImgSrc: {
      type: 'string',
      default: ''
    },
    backgroundImgFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    backgroundImgDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    narratorAudioSrc: {
      type: 'string',
      default: ''
    },
    narrationCaption: {
      type: 'string',
      default: ''
    },
    narratorName: {
      type: 'string',
      default: ''
    },
    narratorThumbnail: {
      type: 'string',
      default: ''
    },
    narratorTitle: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/panel-content/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/panel-content/editor/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/scss/partials/_editor-panel.scss */ "./assets/src/scss/partials/_editor-panel.scss");
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/panel-content/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_block_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../packages/block-components/index */ "./packages/block-components/index.js");
/* harmony import */ var _assets_src_components_PanelCaption_panel_caption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/components/PanelCaption/panel-caption */ "./assets/src/components/PanelCaption/panel-caption.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;





var PanelContent = function PanelContent(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Enter image caption text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Slide Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Auto Rotate",
    checked: attributes.auto,
    onChange: function onChange(value) {
      return setAttributes({
        auto: value ? 1 : 0
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Auto Play",
    checked: attributes.play,
    onChange: function onChange(value) {
      return setAttributes({
        play: value ? 1 : 0
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Timing",
    value: attributes.timing,
    onChange: function onChange(timing) {
      return setAttributes({
        timing: timing
      });
    },
    placeholder: 'Comma separated list in milliseconds.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.backgroundImgTitle,
    onChange: function onChange(backgroundImgTitle) {
      return setAttributes({
        backgroundImgTitle: backgroundImgTitle
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.backgroundCaption,
    onChange: function onChange(backgroundCaption) {
      return setAttributes({
        backgroundCaption: backgroundCaption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), attributes.backgroundImgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.backgroundImgSrc,
    dimensions: attributes.backgroundImgDimensions,
    value: attributes.backgroundImgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        backgroundImgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Narration",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_packages_block_components_index__WEBPACK_IMPORTED_MODULE_3__["AudioNarrator"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__wrapper wsu-explore-panel--image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__background",
    style: {
      backgroundImage: "url(" + attributes.backgroundImgSrc + ")",
      backgroundPositionX: attributes.backgroundImgFocalPoint.x * 100 + '%',
      backgroundPositionY: attributes.backgroundImgFocalPoint.y * 100 + '%'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-image__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: ['core/freeform']
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelContent);

/***/ }),

/***/ "./blocks/panel-content/editor/save.js":
/*!*********************************************!*\
  !*** ./blocks/panel-content/editor/save.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var save = function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/panel-content/editor/style.scss":
/*!************************************************!*\
  !*** ./blocks/panel-content/editor/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel-group/editor/block.js":
/*!********************************************!*\
  !*** ./blocks/panel-group/editor/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/panel-group/editor/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/panel-group/editor/edit.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp-explore/panel-group', {
  title: 'Explore Panel Group',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    type: {
      type: 'string',
      default: ''
    },
    map_src: {
      type: 'string',
      default: ''
    },
    pins: {
      type: 'array',
      default: [['', '', '', '']]
    },
    toggle_render: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/panel-group/editor/edit.js":
/*!*******************************************!*\
  !*** ./blocks/panel-group/editor/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_components_Pin_Pin_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/components/Pin/Pin-2 */ "./assets/src/components/Pin/Pin-2.js");



var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl;

var remove_pin = function remove_pin(index, attributes, setAttributes) {
  var pins = attributes.pins;
  pins.splice(index, 1);
  setAttributes({
    'pins': pins
  });
  toggle_render(attributes, setAttributes);
};

var toggle_render = function toggle_render(attributes, setAttributes) {
  var render = attributes.toggle_render ? false : true;
  setAttributes({
    'toggle_render': render
  });
};

var add_pin = function add_pin(attributes, setAttributes) {
  console.log(attributes);
  var pin = [['', '', '', '']];
  var pins = attributes.pins;
  pins = pins.concat(pin);
  setAttributes({
    'pins': pins
  });
};

var get_pin = function get_pin(pin, index, attributes, setAttributes) {
  var pins = attributes.pins;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: index,
    className: 'wsu-comp-pin wsu-comp-pin-' + index
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-comp-pin__controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("legend", null, "Pin: ", pin[0]), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Label",
    value: pin[0],
    placeholder: 'Location Label',
    className: "wsu-comp-pin__input-label",
    onChange: function onChange(value) {
      console.log(value);
      pin[0] = value;
      pins[index] = pin;
      setAttributes({
        'pins': pins
      });
      toggle_render(attributes, setAttributes);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "X:",
    value: pin[1],
    placeholder: '50',
    className: "wsu-comp-pin__input-x",
    onChange: function onChange(value) {
      console.log(value);
      pin[1] = value;
      pins[index] = pin;
      setAttributes({
        'pins': pins
      });
      toggle_render(attributes, setAttributes);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Y:",
    value: pin[2],
    placeholder: '50',
    className: "wsu-comp-pin__input-y",
    onChange: function onChange(value) {
      console.log(value);
      pin[2] = value;
      pins[index] = pin;
      setAttributes({
        'pins': pins
      });
      toggle_render(attributes, setAttributes);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Slide Index",
    value: pin[3],
    placeholder: '0',
    className: "wsu-comp-pin__input-slide",
    onChange: function onChange(value) {
      console.log(value);
      pin[3] = value;
      pins[index] = pin;
      setAttributes({
        'pins': pins
      });
      toggle_render(attributes, setAttributes);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isLink: true,
    onClick: function onClick(e) {
      remove_pin(index, attributes, setAttributes);
    }
  }, "Remove Pin"))));
};

var panelGroupEdit = function panelGroupEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var map_style = {
    backgroundImage: 'url(' + attributes.map_src + ')'
  };
  console.log(attributes.pins);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Map",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        map_src: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })), attributes.pins.map(function (pin, index) {
    return get_pin(pin, index, attributes, setAttributes);
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isLink: true,
    onClick: function onClick(e) {
      add_pin(attributes, setAttributes);
    }
  }, "Add Pin"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-group__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-group__controls"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-group__panels"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ['wsuwp-explore/panel-image', 'wsuwp-explore/panel-start', 'wsuwp-explore/panel-slider', 'wsuwp-explore/panel-content'],
    template: [['wsuwp-explore/panel-start', {}]]
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (panelGroupEdit);

/***/ }),

/***/ "./blocks/panel-group/editor/save.js":
/*!*******************************************!*\
  !*** ./blocks/panel-group/editor/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var panelGroupSave = function panelGroupSave() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (panelGroupSave);

/***/ }),

/***/ "./blocks/panel-image/editor/block.js":
/*!********************************************!*\
  !*** ./blocks/panel-image/editor/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/panel-image/editor/edit.js");

 // import save from './save';


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp-explore/panel-image', {
  title: 'Image Panel',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    caption: {
      type: 'string',
      default: ''
    },
    backgroundImgTitle: {
      type: 'string',
      default: ''
    },
    backgroundCaption: {
      type: 'string',
      default: ''
    },
    backgroundImgCaptionUrl: {
      type: 'string',
      default: ''
    },
    backgroundImgSrc: {
      type: 'string',
      default: ''
    },
    backgroundImgFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    backgroundImgDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    narratorAudioSrc: {
      type: 'string',
      default: ''
    },
    narrationCaption: {
      type: 'string',
      default: ''
    },
    narratorName: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/panel-image/editor/edit.js":
/*!*******************************************!*\
  !*** ./blocks/panel-image/editor/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/scss/partials/_editor-panel.scss */ "./assets/src/scss/partials/_editor-panel.scss");
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/panel-image/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_components_PanelCaption_panel_caption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/components/PanelCaption/panel-caption */ "./assets/src/components/PanelCaption/panel-caption.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;




var PanelImage = function PanelImage(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Enter image caption text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.backgroundImgTitle,
    onChange: function onChange(backgroundImgTitle) {
      return setAttributes({
        backgroundImgTitle: backgroundImgTitle
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.backgroundCaption,
    onChange: function onChange(backgroundCaption) {
      return setAttributes({
        backgroundCaption: backgroundCaption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), attributes.backgroundImgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.backgroundImgSrc,
    dimensions: attributes.backgroundImgDimensions,
    value: attributes.backgroundImgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        backgroundImgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Narration",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Narrator Name",
    value: attributes.narratorName,
    onChange: function onChange(narratorName) {
      return setAttributes({
        narratorName: narratorName
      });
    },
    placeholder: 'Enter audio url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Audio URL",
    value: attributes.narratorAudioSrc,
    onChange: function onChange(url) {
      return setAttributes({
        narratorAudioSrc: url
      });
    },
    placeholder: 'Enter audio url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Narration Caption",
    value: attributes.narrationCaption,
    onChange: function onChange(narrationCaption) {
      return setAttributes({
        narrationCaption: narrationCaption
      });
    },
    placeholder: 'Enter audio url here.'
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__wrapper wsu-explore-panel--image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__background",
    style: {
      backgroundImage: "url(" + attributes.backgroundImgSrc + ")",
      backgroundPositionX: attributes.backgroundImgFocalPoint.x * 100 + '%',
      backgroundPositionY: attributes.backgroundImgFocalPoint.y * 100 + '%'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-image__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_components_PanelCaption_panel_caption__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: attributes.backgroundImgTitle,
    caption: attributes.backgroundImgCaption,
    onTitleChange: function onTitleChange(title) {
      setAttributes({
        'backgroundImgTitle': title
      });
      console.log(title);
    },
    onCaptionChange: function onCaptionChange(caption) {
      return setAttributes({
        'backgroundImgCaption': caption
      });
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelImage);

/***/ }),

/***/ "./blocks/panel-image/editor/style.scss":
/*!**********************************************!*\
  !*** ./blocks/panel-image/editor/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel-slide/editor/block.js":
/*!********************************************!*\
  !*** ./blocks/panel-slide/editor/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/panel-slide/editor/edit.js");

 // import save from './save';


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp-explore/panel-slide', {
  title: 'Panel Slide',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    backgroundCaption: {
      type: 'string',
      default: ''
    },
    imageSrc: {
      type: 'string',
      default: ''
    },
    imageFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    imageDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    videoSrc: {
      type: 'string',
      default: ''
    },
    videoTitle: {
      type: 'bool',
      default: false
    },
    is360: {
      type: 'bool',
      default: false
    },
    thumbnailImageSrc: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/panel-slide/editor/edit.js":
/*!*******************************************!*\
  !*** ./blocks/panel-slide/editor/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/panel-slide/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;


var PanelSlide = function PanelSlide(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter image title text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background Image",
    initialOpen: false
  }, attributes.imageSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.imageSrc,
    dimensions: attributes.imageDimensions,
    value: attributes.imageFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        imageFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background Video",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Video URL (Vimeo)",
    value: attributes.videoSrc,
    onChange: function onChange(videoSrc) {
      return setAttributes({
        videoSrc: videoSrc
      });
    },
    placeholder: 'Enter video url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Video Title",
    value: attributes.videoTitle,
    onChange: function onChange(videoTitle) {
      return setAttributes({
        videoTitle: videoTitle
      });
    },
    placeholder: 'Enter video title here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        thumbnailImageSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-block wsu-explore-block-slide",
    style: {
      backgroundImage: 'url(' + attributes.imageSrc + ')'
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelSlide);

/***/ }),

/***/ "./blocks/panel-slide/editor/style.scss":
/*!**********************************************!*\
  !*** ./blocks/panel-slide/editor/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel-slider/editor/block.js":
/*!*********************************************!*\
  !*** ./blocks/panel-slider/editor/block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./blocks/panel-slider/editor/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./blocks/panel-slider/editor/edit.js");
/* harmony import */ var _packages_block_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../packages/block-controls */ "./packages/block-controls/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wsuwp-explore/panel-slider', {
  title: 'Slideshow Panel',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: _objectSpread(_objectSpread(_objectSpread({}, _packages_block_controls__WEBPACK_IMPORTED_MODULE_5__["panelContentAtts"]), _packages_block_controls__WEBPACK_IMPORTED_MODULE_5__["panelSettingsAtts"]), {}, {
    backgroundImgTitle: {
      type: 'string',
      default: ''
    },
    backgroundCaption: {
      type: 'string',
      default: ''
    },
    backgroundImgCaptionUrl: {
      type: 'string',
      default: ''
    },
    backgroundImgSrc: {
      type: 'string',
      default: ''
    },
    backgroundImgFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    backgroundImgDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    narratorAudioSrc: {
      type: 'string',
      default: ''
    },
    narrationCaption: {
      type: 'string',
      default: ''
    },
    narratorName: {
      type: 'string',
      default: ''
    },
    narratorThumbnail: {
      type: 'string',
      default: ''
    },
    narratorTitle: {
      type: 'string',
      default: ''
    },
    timing: {
      type: 'string',
      default: ''
    },
    play: {
      type: 'number',
      default: 0
    },
    auto: {
      type: 'number',
      default: 1
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./blocks/panel-slider/editor/edit.js":
/*!********************************************!*\
  !*** ./blocks/panel-slider/editor/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/scss/partials/_editor-panel.scss */ "./assets/src/scss/partials/_editor-panel.scss");
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/panel-slider/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_block_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../packages/block-components/index */ "./packages/block-components/index.js");
/* harmony import */ var _assets_src_components_PanelCaption_panel_caption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/components/PanelCaption/panel-caption */ "./assets/src/components/PanelCaption/panel-caption.js");
/* harmony import */ var _packages_block_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../packages/block-controls */ "./packages/block-controls/index.js");

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;






var PanelSlider = function PanelSlider(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_packages_block_controls__WEBPACK_IMPORTED_MODULE_5__["PanelContentControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Panel Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_packages_block_controls__WEBPACK_IMPORTED_MODULE_5__["PanelSettingsControl"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Inner Slide Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Auto Rotate",
    checked: attributes.auto,
    onChange: function onChange(value) {
      return setAttributes({
        auto: value ? 1 : 0
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Auto Play",
    checked: attributes.play,
    onChange: function onChange(value) {
      return setAttributes({
        play: value ? 1 : 0
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Timing",
    value: attributes.timing,
    onChange: function onChange(timing) {
      return setAttributes({
        timing: timing
      });
    },
    placeholder: 'Comma separated list in milliseconds.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.backgroundImgTitle,
    onChange: function onChange(backgroundImgTitle) {
      return setAttributes({
        backgroundImgTitle: backgroundImgTitle
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.backgroundCaption,
    onChange: function onChange(backgroundCaption) {
      return setAttributes({
        backgroundCaption: backgroundCaption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), attributes.backgroundImgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.backgroundImgSrc,
    dimensions: attributes.backgroundImgDimensions,
    value: attributes.backgroundImgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        backgroundImgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Narration",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_packages_block_components_index__WEBPACK_IMPORTED_MODULE_3__["AudioNarrator"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__wrapper wsu-explore-panel--image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__background",
    style: {
      backgroundImage: "url(" + attributes.backgroundImgSrc + ")",
      backgroundPositionX: attributes.backgroundImgFocalPoint.x * 100 + '%',
      backgroundPositionY: attributes.backgroundImgFocalPoint.y * 100 + '%'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-image__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-explore-panel__slider-title"
  }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: ['wsuwp-explore/panel-slide']
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelSlider);

/***/ }),

/***/ "./blocks/panel-slider/editor/save.js":
/*!********************************************!*\
  !*** ./blocks/panel-slider/editor/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var save = function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./blocks/panel-slider/editor/style.scss":
/*!***********************************************!*\
  !*** ./blocks/panel-slider/editor/style.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel-start/editor/block.js":
/*!********************************************!*\
  !*** ./blocks/panel-start/editor/block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/panel-start/editor/edit.js");
/* harmony import */ var _packages_block_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../packages/block-controls */ "./packages/block-controls/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


 // import save from './save';



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wsuwp-explore/panel-start', {
  title: 'Start Panel',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: _objectSpread(_objectSpread(_objectSpread({}, _packages_block_controls__WEBPACK_IMPORTED_MODULE_4__["panelContentAtts"]), _packages_block_controls__WEBPACK_IMPORTED_MODULE_4__["panelSettingsAtts"]), {}, {
    showLoading: {
      type: 'boolean',
      default: false
    },
    backgroundCaption: {
      type: 'string',
      default: ''
    },
    backgroundImgCaptionUrl: {
      type: 'string',
      default: ''
    },
    backgroundImgSrc: {
      type: 'string',
      default: ''
    },
    backgroundImgFocalPoint: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    backgroundImgDimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    backgroundVideoSrc: {
      type: 'string',
      default: ''
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./blocks/panel-start/editor/edit.js":
/*!*******************************************!*\
  !*** ./blocks/panel-start/editor/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/scss/partials/_editor-panel.scss */ "./assets/src/scss/partials/_editor-panel.scss");
/* harmony import */ var _assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_src_scss_partials_editor_panel_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/panel-start/editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;



var PanelStart = function PanelStart(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Enter caption text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Panel Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Show Loading Screen",
    checked: attributes.showLoading,
    onChange: function onChange(showLoading) {
      return setAttributes({
        showLoading: showLoading
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Background Video",
    value: attributes.backgroundVideoSrc,
    onChange: function onChange(backgroundVideoSrc) {
      return setAttributes({
        backgroundVideoSrc: backgroundVideoSrc
      });
    },
    placeholder: 'Vimeo URL.'
  }), attributes.backgroundImgSrc && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.backgroundImgSrc,
    dimensions: attributes.backgroundImgDimensions,
    value: attributes.backgroundImgFocalPoint,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        backgroundImgFocalPoint: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        backgroundImgSrc: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__wrapper wsu-explore-panel--start"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__background",
    style: {
      backgroundImage: "url(" + attributes.backgroundImgSrc + ")",
      backgroundPositionX: attributes.backgroundImgFocalPoint.x * 100 + '%',
      backgroundPositionY: attributes.backgroundImgFocalPoint.y * 100 + '%'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-start__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "wsu-icon wsu-i-play-circle"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-start__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "h1",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    allowedFormats: [],
    placeholder: "Enter title text here"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsu-explore-panel-start__caption"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "div",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    allowedFormats: [],
    placeholder: "Enter caption text here"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelStart);

/***/ }),

/***/ "./blocks/panel-start/editor/style.scss":
/*!**********************************************!*\
  !*** ./blocks/panel-start/editor/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/panel/editor/block.js":
/*!**************************************!*\
  !*** ./blocks/panel/editor/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/panel/editor/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/panel/editor/edit.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('wsuwp-explore/panel', {
  title: 'Explore Panel',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    bg_video_src: {
      type: 'string',
      default: ''
    },
    bg_video_is_360: {
      type: 'boolean',
      default: false
    },
    img_src: {
      type: 'string',
      default: ''
    },
    img_focal_point: {
      type: 'object',
      default: {
        x: 0.2,
        y: 0.5
      }
    },
    img_dimensions: {
      type: 'object',
      default: {
        width: 1070,
        height: 500
      }
    },
    img_caption: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    subtitle: {
      type: 'string',
      default: ''
    },
    type: {
      type: 'string',
      default: ''
    },
    url: {
      type: 'string',
      default: ''
    },
    button_text: {
      type: 'string',
      default: ''
    },
    caption_text: {
      type: 'string',
      default: ''
    },
    audio_src: {
      type: 'string',
      default: ''
    },
    webm_video_src: {
      type: 'string',
      default: ''
    },
    vimeo_video_src: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/panel/editor/edit.js":
/*!*************************************!*\
  !*** ./blocks/panel/editor/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_src_components_OptionSetControl_OptionSetControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/components/OptionSetControl/OptionSetControl */ "./assets/src/components/OptionSetControl/OptionSetControl.js");
/* harmony import */ var _assets_src_components_BackgroundControl_BackgroundControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/components/BackgroundControl/BackgroundControl */ "./assets/src/components/BackgroundControl/BackgroundControl.js");
/* harmony import */ var _assets_src_components_AddAudioControl_AddAudioControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/components/AddAudioControl/AddAudioControl */ "./assets/src/components/AddAudioControl/AddAudioControl.js");
/* harmony import */ var _assets_src_components_AddVideoControl_AddVideoControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/src/components/AddVideoControl/AddVideoControl */ "./assets/src/components/AddVideoControl/AddVideoControl.js");






var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl;

var getPanelType = function getPanelType(props) {
  var panel = {
    allowedBlocks: [],
    template: [],
    templateLock: ''
  };

  switch (props.type) {
    case 'intro':
      panel.allowedBlocks = ['wsuwp-explore/panel-subtitle', 'wsuwp-explore/panel-title', 'panel-caption'];
      panel.template = [];
      panel.templateLock = 'All';
      break;

    case 'slide':
      panel.allowedBlocks = ['wsuwp-explore/panel-slide-group'];
      panel.template = [['wsuwp-explore/panel-slide-group', {}]];
      panel.templateLock = 'All';
      break;

    case 'content':
      panel.allowedBlocks = ['wsuwp-explore/panel-content'];
      panel.template = [['wsuwp-explore/panel-content', {}]];
      panel.templateLock = 'All';
      break;

    case 'gallery':
      panel.allowedBlocks = ['wsuwp-explore/image-gallery'];
      panel.template = [['wsuwp-explore/image-gallery', {}]];
      panel.templateLock = 'All';
      break;
  }

  return panel;
};

var panelOptionsActive = function panelOptionsActive(attributes) {
  return attributes.type ? true : false;
};

var panelEdit = function panelEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  console.log(attributes);
  var panel = getPanelType(attributes);
  var panelOptions = [{
    label: 'Intro Panel',
    value: 'intro',
    icon: ''
  }
  /*{
  	label:'Slide Panel',
  	value:'slide',
  	icon: '',
  },
  {
  	label:'Gallery Panel',
  	value:'gallery',
  	icon: '',
  },
  {
  	label:'Content Panel',
  	value:'content',
  	icon: '',
  },*/
  ];
  var panelStyle = {
    backgroundImage: 'url(' + attributes.img_src + ')'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Subtitle",
    value: attributes.subtitle,
    onChange: function onChange(subtitle) {
      return setAttributes({
        subtitle: subtitle
      });
    },
    placeholder: 'Enter subtitle text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Image Caption",
    value: attributes.img_caption,
    onChange: function onChange(img_caption) {
      return setAttributes({
        img_caption: img_caption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Button Text",
    value: attributes.button_text,
    onChange: function onChange(button_text) {
      return setAttributes({
        button_text: button_text
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Button Link Destination"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
    id: "bannerButtonLink",
    className: 'wsu-c-block__banner__editor__content__link',
    value: attributes.url,
    onChange: function onChange(url, post) {
      return setAttributes({
        url: url
      });
    },
    placeholder: 'Button Link',
    isFullWidth: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Display Style",
    value: "",
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'San Juan',
      value: 'san-juan'
    }, {
      label: 'Olympic',
      value: 'olympic'
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Narration",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Vimeo Video URL",
    value: attributes.vimeo_video_src,
    onChange: function onChange(url) {
      return setAttributes({
        "vimeo_video_src": url
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "WebM Video URL",
    value: attributes.webm_video_src,
    onChange: function onChange(url) {
      return setAttributes({
        "webm_video_src": url
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Audio URL",
    value: attributes.audio_src,
    onChange: function onChange(url) {
      return setAttributes({
        "audio_src": url
      });
    },
    placeholder: 'Enter button text here.'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Background",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Vimeo Video URL",
    value: attributes.bg_video_src,
    onChange: function onChange(url) {
      return setAttributes({
        "bg_video_src": url
      });
    },
    placeholder: 'Enter button text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: '360 Video',
    checked: attributes.bg_video_is_360,
    onChange: function onChange(value) {
      return setAttributes({
        'bg_video_is_360': value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: "Focal Point Picker",
    help: "Select where you would like the background to resize around."
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FocalPointPicker, {
    url: attributes.img_src,
    dimensions: attributes.img_dimensions,
    value: attributes.img_focal_point,
    onChange: function onChange(focalPoint) {
      return setAttributes({
        img_focal_point: focalPoint
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        img_src: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Replace Background Image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-panel__wrapper wsuwp-admin-editor",
    style: panelStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-panel wsuwp-explore-panel--" + attributes.type
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
    className: "wsuwp-explore-panel__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wsuwp-explore-panel__control__wrapper"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    className: "wsuwp-explore-panel__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: panel.allowedBlocks,
    template: panel.template,
    templateLock: panel.templateLock
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", {
    className: "wsuwp-explore-panel__footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "wsuwp-explore-panel__media-options"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_assets_src_components_OptionSetControl_OptionSetControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: attributes.type ? false : true,
    options: panelOptions,
    onChange: setAttributes
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (panelEdit);

/***/ }),

/***/ "./blocks/panel/editor/save.js":
/*!*************************************!*\
  !*** ./blocks/panel/editor/save.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var panelSave = function panelSave() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
};

/* harmony default export */ __webpack_exports__["default"] = (panelSave);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./packages/block-components/audio-narrator/index.js":
/*!***********************************************************!*\
  !*** ./packages/block-components/audio-narrator/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    FocalPointPicker = _wp$components.FocalPointPicker,
    BaseControl = _wp$components.BaseControl;

var AudioNarrator = function AudioNarrator(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Narrator Name",
    value: attributes.narratorName,
    onChange: function onChange(narratorName) {
      return setAttributes({
        narratorName: narratorName
      });
    },
    placeholder: 'Enter narrator name.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Narrator Title",
    value: attributes.narratorTitle,
    onChange: function onChange(narratorTitle) {
      return setAttributes({
        narratorTitle: narratorTitle
      });
    },
    placeholder: 'Enter narrator title here'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Audio URL",
    value: attributes.narratorAudioSrc,
    onChange: function onChange(url) {
      return setAttributes({
        narratorAudioSrc: url
      });
    },
    placeholder: 'Enter audio url here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        narratorThumbnail: media.url
      });
    } // allowedTypes={ALLOWED_MEDIA_TYPES}
    // value={mediaId}
    ,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Add Narrator Thumbnail"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        isLink: true,
        onClick: open
      }, "Open Media Library"));
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AudioNarrator);

/***/ }),

/***/ "./packages/block-components/index.js":
/*!********************************************!*\
  !*** ./packages/block-components/index.js ***!
  \********************************************/
/*! exports provided: AudioNarrator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio_narrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-narrator */ "./packages/block-components/audio-narrator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioNarrator", function() { return _audio_narrator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./packages/block-controls/index.js":
/*!******************************************!*\
  !*** ./packages/block-controls/index.js ***!
  \******************************************/
/*! exports provided: PanelContentControl, PanelSettingsControl, panelContentAtts, panelSettingsAtts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_content_panel_content_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-content/panel-content-control */ "./packages/block-controls/panel-content/panel-content-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContentControl", function() { return _panel_content_panel_content_control__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _panel_settings_panel_settings_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-settings/panel-settings-control */ "./packages/block-controls/panel-settings/panel-settings-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelSettingsControl", function() { return _panel_settings_panel_settings_control__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _panel_content_panel_content_atts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-content/panel-content-atts */ "./packages/block-controls/panel-content/panel-content-atts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelContentAtts", function() { return _panel_content_panel_content_atts__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _panel_settings_panel_settings_atts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-settings/panel-settings-atts */ "./packages/block-controls/panel-settings/panel-settings-atts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelSettingsAtts", function() { return _panel_settings_panel_settings_atts__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./packages/block-controls/panel-content/panel-content-atts.js":
/*!*********************************************************************!*\
  !*** ./packages/block-controls/panel-content/panel-content-atts.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var panelContentAtts = {
  title: {
    type: 'string',
    default: ''
  },
  caption: {
    type: 'string',
    default: ''
  },
  label: {
    type: 'string',
    default: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (panelContentAtts);

/***/ }),

/***/ "./packages/block-controls/panel-content/panel-content-control.js":
/*!************************************************************************!*\
  !*** ./packages/block-controls/panel-content/panel-content-control.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var TextControl = wp.components.TextControl;

var PanelContentControl = function PanelContentControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Title",
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    },
    placeholder: 'Enter image title text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Caption",
    value: attributes.caption,
    onChange: function onChange(caption) {
      return setAttributes({
        caption: caption
      });
    },
    placeholder: 'Enter image caption text here.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Label",
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    },
    placeholder: 'Enter slide label here.'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelContentControl);

/***/ }),

/***/ "./packages/block-controls/panel-settings/panel-settings-atts.js":
/*!***********************************************************************!*\
  !*** ./packages/block-controls/panel-settings/panel-settings-atts.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var panelSettingsAtts = {
  autoAdvance: {
    type: 'boolean',
    default: true
  },
  delay: {
    type: 'number',
    default: 8000
  },
  delayAudio: {
    type: 'number',
    default: 2000
  }
};
/* harmony default export */ __webpack_exports__["default"] = (panelSettingsAtts);

/***/ }),

/***/ "./packages/block-controls/panel-settings/panel-settings-control.js":
/*!**************************************************************************!*\
  !*** ./packages/block-controls/panel-settings/panel-settings-control.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;

var PanelSettingsControl = function PanelSettingsControl(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: "Auto Advance",
    checked: attributes.autoAdvance,
    onChange: function onChange(autoAdvance) {
      return setAttributes({
        autoAdvance: autoAdvance
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Advance After (ms)",
    value: attributes.delay,
    onChange: function onChange(delay) {
      return setAttributes({
        delay: delay
      });
    },
    placeholder: 'Delay till advance.'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Delay After Audio (ms)",
    value: attributes.delayAudio,
    onChange: function onChange(delayAudio) {
      return setAttributes({
        delayAudio: delayAudio
      });
    },
    placeholder: 'Delay after audio.'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelSettingsControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map