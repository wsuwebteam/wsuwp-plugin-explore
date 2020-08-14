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

/***/ "./assets/src/js/wsu-mini-slider.js":
/*!******************************************!*\
  !*** ./assets/src/js/wsu-mini-slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var WsuMiniSlider = /*#__PURE__*/function () {
  function WsuMiniSlider(selector, params, parent) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WsuMiniSlider);

    this.selector = selector;
    this.params = params;
    this.parent = parent;
    this.config();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WsuMiniSlider, [{
    key: "config",
    value: function config() {
      this.diff = 0; // Difference between slides - used to check direction if needed.

      this.play = this.params.hasOwnProperty('play') ? this.params.play : 1;
      this.remainingTime = false;
      this.startTime = false;
      this.timing = [];
      this.loop = 0;
      this.delay = 7000;
      this.isSliding = false; // Is in slide transition

      this.timer = false; // timer to auto advance next slide

      this.autoRotate = this.params.hasOwnProperty('autoRotate') ? this.params.autoRotate : 1; // Should auto rotate

      this.activeIndex = 0; // Currently active slide

      this.previousIndex = -1; // Previously active slide

      this.slider = this.parent.querySelector(this.selector); // slider wrapper element

      this.hasSlider = this.slider !== null ? 1 : 0;
      this.slideSelector = this.params.hasOwnProperty('slideSelector') ? this.params.slideSelector : '.wsu-c-mini-slider__slide'; // Selector to use for slides

      this.slides = this.slider ? this.parent.querySelectorAll(this.slideSelector) : []; // Slide elements

      this.pagerSelector = this.params.hasOwnProperty('pagerSelector') ? this.params.pagerSelector : '.wsu-c-mini-slider__slide-pager';
      this.customPager = false;
      this.pagerItems = [];
      this.pagerTemplate = '<span class="wsu-c-mini-slider__pager-item" data-index="[[slideIndex]]" tabindex="0" ><span class="wsu-c-mini-slider__pager-item-thumb" style="background-image:url([[imageSrc]])"></span><span class="wsu-c-mini-slider__pager-item-title">[[title]]</span></span>';

      if (this.hasSlider) {
        this.parse_data_attrs();
        this.pager = document.querySelector(this.pagerSelector);

        if (this.selector != 'wsu-c-mini-slider') {
          // Add wsu-c-mini-slider class if not the selector - used for css
          this.slider.classList.add('wsu-c-mini-slider');
        }

        ;

        if (this.slides.length != 0) {
          for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add('wsu-c-mini-slider__slide--set');
          }

          this.setActiveSlideState(this.slides[this.activeIndex]);
          this.addPager();
        }
      }

      if (this.autoRotate && this.play) {
        this.playSlides();
      }
    }
  }, {
    key: "parse_data_attrs",
    value: function parse_data_attrs() {
      if (this.slider.hasAttribute("data-play")) {
        this.play = parseInt(this.slider.dataset.play);
      }

      if (this.slider.hasAttribute("data-auto")) {
        this.auto = parseInt(this.slider.dataset.auto);
      }

      if (this.slider.hasAttribute("data-pagerid")) {
        this.pagerSelector = '#' + this.slider.dataset.pagerid;
      }

      if (this.slider.hasAttribute("data-timing")) {
        var timer = this.slider.dataset.timing;
        this.timing = timer.split(',');
      }
    }
  }, {
    key: "addPager",
    value: function addPager() {
      var _this = this;

      if (this.pager !== null && this.pager.length != 0) {
        var pagers = '';
        this.slides.forEach(function (item, index) {
          var pagerItem = _this.pagerTemplate;
          var itemTitle = item.hasAttribute("data-title") ? item.dataset.title : '';
          var itemImageSrc = item.hasAttribute("data-imagesrc") ? item.dataset.imagesrc : '';
          pagerItem = pagerItem.replace('[[slideIndex]]', index);
          pagerItem = pagerItem.replace('[[title]]', itemTitle);
          pagerItem = pagerItem.replace('[[imageSrc]]', itemImageSrc);
          pagers += pagerItem;
        });
        this.pager.innerHTML = pagers;
      }

      this.pagerItems = this.pager.querySelectorAll('.wsu-c-mini-slider__pager-item');
      this.pagerItems.forEach(function (pager, index) {
        pager.addEventListener('click', function (event) {
          _this.pauseSlides();

          _this.changeSlide(index);
        });
      });
    }
  }, {
    key: "playSlides",
    value: function playSlides() {
      var _this2 = this;

      if (this.hasSlider) {
        this.playVideo(this.activeIndex);
        this.play = 1;
        var slideDelay = typeof this.timing[this.activeIndex] === 'undefined' ? this.timing[this.activeIndex] : this.delay;
        slideDelay = this.remainingTime ? this.remainingTime : slideDelay;
        this.timer = setTimeout(function () {
          _this2.nextSlide();
        }, slideDelay);
      }
    }
  }, {
    key: "pauseSlides",
    value: function pauseSlides() {
      this.play = 0;
      clearTimeout(this.timer);
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(newSlideIndex) {
      this.pauseAllVideo();

      if (newSlideIndex == this.activeIndex) {
        return null;
      }

      this.previousIndex = this.activeIndex;
      this.activeIndex = newSlideIndex;
      var activeSlide = this.slides[this.activeIndex];
      var previousSlide = this.slides[this.previousIndex];
      this.setActiveSlideState(activeSlide);
      this.setPreviousSlideState(previousSlide);
      this.playVideo(this.activeIndex);

      if (this.play) {
        this.playSlides();
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var nextIndex = this.activeIndex + 1;

      if (!(nextIndex < this.slides.length) && !this.loop) {
        return null;
      }

      var slideIndex = nextIndex < this.slides.length ? this.activeIndex + 1 : 0;
      this.changeSlide(slideIndex);
    }
  }, {
    key: "setActiveSlideState",
    value: function setActiveSlideState(slide) {
      slide.classList.add('wsu-c-mini-slider__slide--active');
    }
  }, {
    key: "setPreviousSlideState",
    value: function setPreviousSlideState(slide) {
      slide.classList.remove('wsu-c-mini-slider__slide--active');
    }
  }, {
    key: "pauseAllVideo",
    value: function pauseAllVideo() {
      var _this3 = this;

      this.slides.forEach(function (slide, index) {
        _this3.pauseVideo(slide);
      });
    }
  }, {
    key: "pauseVideo",
    value: function pauseVideo(slide) {
      var video = slide.querySelector('.wsu-explore-video');

      if (video !== null) {
        try {
          var player = new Vimeo.Player(video);
          player.pause();
        } catch (err) {
          console.log('Could not Pause Slide Video');
        }
      }
    }
  }, {
    key: "playVideo",
    value: function playVideo(slideIndex) {
      slideIndex = undefined !== slideIndex && slideIndex !== false ? slideIndex : this.activeIndex;
      console.log('play video ' + slideIndex);
      var slide = this.slides[slideIndex];
      var video = slide.querySelector('.wsu-explore-video');

      if (video !== null) {
        try {
          var player = new Vimeo.Player(video);
          console.log(player);
          player.play();
        } catch (err) {
          console.log('Could not play slide video');
        }
      }
    }
  }]);

  return WsuMiniSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = (WsuMiniSlider);

/***/ }),

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
/* harmony import */ var _js_wsu_mini_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/wsu-mini-slider */ "./assets/src/js/wsu-mini-slider.js");





var wsu_explore = /*#__PURE__*/function () {
  function wsu_explore(container_id, swiper_container_selector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, wsu_explore);

    this.container_id = container_id;
    this.container = document.getElementById(container_id);
    this.swiper_container_selector = swiper_container_selector;
    this.wsu_mini_sliders = [];
    this.init_swiper();
    this.init_events(); //this.init_map();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(wsu_explore, [{
    key: "init_swiper",
    value: function init_swiper() {
      var _this = this;

      this.swiper = new Swiper(this.swiper_container_selector, {
        // Optional parameters
        loop: false,
        preventClicksPropagation: true,
        preventInteractionOnTransition: true,
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
      this.update_nav();

      for (var i = 0; i < this.swiper.slides.length; i++) {
        var newSlider = new _js_wsu_mini_slider__WEBPACK_IMPORTED_MODULE_3__["default"]('.wsu-c-mini-slider', {
          play: 1
        }, this.swiper.slides[i]);
        this.wsu_mini_sliders[i] = newSlider;
      }

      console.log(this.wsu_mini_sliders);
    }
  }, {
    key: "init_events",
    value: function init_events() {
      var _this2 = this;

      document.querySelectorAll('.wsu-explore-panel__next-slide').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this2.swiper.slideNext();
        });
      });
      document.querySelectorAll('.wsu-explore-panel__pause-background').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this2.pause_background_video();
        });
      });
      document.querySelectorAll('.wsu-explore-audio-narrator__play-button').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this2.toggle_narrator(_this2.swiper.activeIndex, true);
        });
      });
      document.querySelectorAll('.wsu-explore-panel-caption__description-toggle').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this2.toggle_caption();
        });
      });
      document.querySelectorAll('.wsu-explore-narrator').forEach(function (item) {
        item.addEventListener('click', function (event) {
          event.stopPropagation();
        });
      });
    }
  }, {
    key: "init_map",
    value: function init_map() {
      var _this3 = this;

      var map = document.querySelector('.wsu-explore-panel-group__map__wrapper');
      document.querySelectorAll('.wsu-explore-panel-group__map__pin').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this3.swiper.slideTo(item.dataset.slide);
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
    key: "pause_background_video",
    value: function pause_background_video() {
      var slide_index = this.swiper.activeIndex;
      this.do_background_video(slide_index, 'pause');
    }
  }, {
    key: "slide_changed",
    value: function slide_changed() {
      var active_slide_index = this.swiper.activeIndex;

      if (this.swiper.activeIndex - this.swiper.previousIndex > 0) {
        this.play_narrator(this.swiper.activeIndex);

        try {
          if (this.wsu_mini_sliders[active_slide_index].hasSlider) {
            this.wsu_mini_sliders[active_slide_index].playSlides();
          }

          if (this.wsu_mini_sliders[this.swiper.previousIndex].hasSlider) {
            this.wsu_mini_sliders[this.swiper.previousIndex].pauseAllVideo();
          }
        } catch (err) {
          console.log('Could not Play Slides');
        }
      } else {
        try {
          if (this.wsu_mini_sliders[active_slide_index].hasSlider) {
            this.wsu_mini_sliders[active_slide_index].playVideo(false);
          }

          if (this.wsu_mini_sliders[this.swiper.previousIndex].hasSlider) {
            this.wsu_mini_sliders[this.swiper.previousIndex].pauseAllVideo();
          }
        } catch (err) {
          console.log('Could not Play Slides');
        }
      }

      this.pause_narrator(this.swiper.previousIndex);
      this.do_background_video(this.swiper.activeIndex, 'play');
      this.do_background_video(this.swiper.previousIndex, 'pause');
      this.update_nav();
    }
  }, {
    key: "update_nav",
    value: function update_nav() {
      var prevSlideIndex = this.swiper.activeIndex - 1;
      var nextSlideIndex = this.swiper.activeIndex + 1;
      var prevSlideLabel = 0 > prevSlideIndex ? 'Go Cougs' : this.swiper.slides[prevSlideIndex].dataset.title;
      var nextSlideLabel = nextSlideIndex > this.swiper.slides.length - 1 ? 'Go Cougs' : this.swiper.slides[nextSlideIndex].dataset.title;
      var nextSlideControl = document.querySelector('.swiper-button-label-next');
      var prevSlideControl = document.querySelector('.swiper-button-label-prev');
      nextSlideControl.innerHTML = nextSlideLabel;
      prevSlideControl.innerHTML = prevSlideLabel;
    }
  }, {
    key: "get_narrator",
    value: function get_narrator(slide_index) {
      var slide = this.swiper.slides[slide_index];
      return slide.querySelector('.wsu-explore-narrator');
    }
  }, {
    key: "get_background_video",
    value: function get_background_video(slide_index) {
      var slide = this.swiper.slides[slide_index];
      return slide.querySelector('.wsu-explore-panel__background__video');
    }
  }, {
    key: "get_caption",
    value: function get_caption(slide_index) {
      var slide = this.swiper.slides[slide_index];
      return slide.querySelector('.wsu-explore-panel-caption');
    }
  }, {
    key: "show_caption",
    value: function show_caption(caption) {
      caption = caption ? caption : this.get_caption(this.swiper.activeIndex);

      if (caption) {
        caption.classList.add('wsu-explore-panel-caption--show-description');
        caption.classList.remove('wsu-explore-panel-caption--hide-description');
      }
    }
  }, {
    key: "hide_caption",
    value: function hide_caption(caption) {
      caption = caption ? caption : this.get_caption(this.swiper.activeIndex);

      if (caption) {
        caption.classList.add('wsu-explore-panel-caption--hide-description');
        caption.classList.remove('wsu-explore-panel-caption--show-description');
      }
    }
  }, {
    key: "toggle_caption",
    value: function toggle_caption() {
      var slide_index = this.swiper.activeIndex;
      var caption = this.get_caption(slide_index);

      if (caption) {
        if (caption.classList.contains('wsu-explore-panel-caption--show-description')) {
          this.hide_caption(caption);
        } else {
          this.show_caption(caption);
        }
      }
    }
  }, {
    key: "toggle_narrator",
    value: function toggle_narrator(slideIndex, showCaption) {
      var narrator = this.get_narrator(slideIndex);

      if (narrator.classList.contains('wsu-explore-narrator--paused')) {
        this.play_narrator(slideIndex);
      } else {
        this.pause_narrator(slideIndex);

        if (showCaption) {
          this.show_caption(this.get_caption(slideIndex));
        }
      }
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
        } else if (narrator.classList.contains('wsu-explore-audio-narrator')) {
          if ('toggle' == action) {
            action = narrator.classList.contains('wsu-explore-audio-narrator--paused') ? 'play' : 'pause';
          }

          try {
            var _player = narrator.querySelector('.wsu-explore-audio-narrator__player');

            switch (action) {
              case 'play':
                _player.play();

                narrator.classList.remove('wsu-explore-audio-narrator--paused');
                break;

              case 'pause':
                _player.pause();

                narrator.classList.add('wsu-explore-audio-narrator--paused');
                break;
            }
          } catch (err) {
            console.log('Error with Audio Player');
          }
        }
      }
    }
  }, {
    key: "pause_narrator",
    value: function pause_narrator(slideIndex, callback) {
      var narrator = this.get_narrator(slideIndex);

      if (narrator) {
        if (narrator.classList.contains('wsu-explore-audio-narrator')) {
          try {
            var player = narrator.querySelector('.wsu-explore-audio-narrator__player');
            player.pause();
            narrator.classList.add('wsu-explore-narrator--paused');
          } catch (err) {
            console.log('Error with Audio Player');
          }
        }
      }
    }
  }, {
    key: "play_narrator",
    value: function play_narrator(slideIndex, callback) {
      var narrator = this.get_narrator(slideIndex);

      if (narrator) {
        if (narrator.classList.contains('wsu-explore-audio-narrator')) {
          try {
            var player = narrator.querySelector('.wsu-explore-audio-narrator__player');
            player.play();
            narrator.classList.remove('wsu-explore-narrator--paused');
          } catch (err) {
            console.log('Error with Audio Player');
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