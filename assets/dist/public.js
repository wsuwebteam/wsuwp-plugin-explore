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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/public.js":
/*!******************************!*\
  !*** ./assets/src/public.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public.scss */ "./assets/src/public.scss");
/* harmony import */ var _public_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_scss__WEBPACK_IMPORTED_MODULE_2__);




var wsu_explore = /*#__PURE__*/function () {
  function wsu_explore(container_id, swiper_container_selector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, wsu_explore);

    this.container_id = container_id;
    this.container = document.getElementById(container_id);
    this.swiper_container_selector = swiper_container_selector;
    this.init_swiper();
    this.init_map();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(wsu_explore, [{
    key: "init_swiper",
    value: function init_swiper() {
      var _this = this;

      this.swiper = new Swiper(this.swiper_container_selector, {
        // Optional parameters
        loop: false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      });
      this.swiper.on('slideChangeTransitionEnd', function () {
        _this.slide_changed();
      });
    }
  }, {
    key: "init_map",
    value: function init_map() {
      var _this2 = this;

      var map = document.querySelector('.wsu-explore-panel-group__map__wrapper');
      document.querySelectorAll('.wsu-explore-panel-group__map__pin').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this2.swiper.slideTo(item.dataset.slide);
        });
      });
      map.addEventListener('click', function (event) {
        if (map.classList.contains('active')) {
          map.classList.remove('active');
        } else {
          map.classList.add('active');
        }
      });
    }
  }, {
    key: "slide_changed",
    value: function slide_changed() {
      var active_slide_index = this.swiper.activeIndex;
      this.do_narrator(this.swiper.activeIndex, 'play');
      this.do_narrator(this.swiper.previousIndex, 'pause');
      this.do_background_video(this.swiper.activeIndex, 'play');
      this.do_background_video(this.swiper.previousIndex, 'pause');
    }
  }, {
    key: "get_narrator",
    value: function get_narrator(slide_index) {
      var slide = this.swiper.slides[slide_index];
      return slide.querySelector('.wsu-explore-panel__narrator');
    }
  }, {
    key: "get_background_video",
    value: function get_background_video(slide_index) {
      var slide = this.swiper.slides[slide_index];
      return slide.querySelector('.wsu-explore-panel__background__video');
    }
  }, {
    key: "do_narrator",
    value: function do_narrator(slide_index, action, value) {
      var narrator = this.get_narrator(slide_index);

      if (narrator) {
        if (narrator.classList.contains('wsu-explore-panel__narrator--vimeo')) {
          try {
            var player = new Vimeo.Player(narrator);

            switch (action) {
              case 'play':
                player.play();
                break;

              case 'pause':
                player.pause();
                break;
            }
          } catch (err) {
            console.log('Error with Vimeo Player');
          }
        }
      }
    }
  }, {
    key: "do_background_video",
    value: function do_background_video(slide_index, action, value) {
      var background_video = this.get_background_video(slide_index);

      if (background_video) {
        if (background_video.classList.contains('wsu-explore-panel__background__video--vimeo')) {
          try {
            var player = new Vimeo.Player(background_video);

            switch (action) {
              case 'play':
                player.play();
                break;

              case 'pause':
                player.pause();
                break;
            }
          } catch (err) {
            console.log('Error with Vimeo Player');
          }
        }
      }
    }
  }]);

  return wsu_explore;
}();

var wsu_explore_app = new wsu_explore('wsu-explore-panel-group', '.swiper-container');

/***/ }),

/***/ "./assets/src/public.scss":
/*!********************************!*\
  !*** ./assets/src/public.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ })

/******/ });
//# sourceMappingURL=public.js.map