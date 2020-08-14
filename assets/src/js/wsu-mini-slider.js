class WsuMiniSlider {

	constructor( selector, params, parent ) {
		this.selector = selector;
		this.params = params;
		this.parent = parent;

		this.config();

	}

	config() {

		this.diff = 0; // Difference between slides - used to check direction if needed.
		this.play = this.params.hasOwnProperty('play') ?  this.params.play : 1;
		this.remainingTime = false;
		this.startTime = false;
		this.timing = [];
		this.loop = 0;
		this.delay = 7000;
		this.isSliding = false; // Is in slide transition
		this.timer = false; // timer to auto advance next slide
		this.autoRotate = this.params.hasOwnProperty('autoRotate') ?  this.params.autoRotate : 1; // Should auto rotate
		this.activeIndex = 0; // Currently active slide
		this.previousIndex = -1; // Previously active slide
		this.slider = this.parent.querySelector( this.selector ); // slider wrapper element
		this.hasSlider = ( this.slider !== null ) ? 1 : 0;
		this.slideSelector = this.params.hasOwnProperty('slideSelector') ?  this.params.slideSelector : '.wsu-c-mini-slider__slide'; // Selector to use for slides
		this.slides = ( this.slider ) ? this.parent.querySelectorAll( this.slideSelector ) : []; // Slide elements
		this.pagerSelector = this.params.hasOwnProperty('pagerSelector') ?  this.params.pagerSelector : '.wsu-c-mini-slider__slide-pager';
		this.customPager = false;
		this.pagerItems = [];
		this.pagerTemplate = '<span class="wsu-c-mini-slider__pager-item" data-index="[[slideIndex]]" tabindex="0" ><span class="wsu-c-mini-slider__pager-item-thumb" style="background-image:url([[imageSrc]])"></span><span class="wsu-c-mini-slider__pager-item-title">[[title]]</span></span>';

		if ( this.hasSlider ) {

			this.parse_data_attrs();

			this.pager = document.querySelector( this.pagerSelector );

			if ( this.selector != 'wsu-c-mini-slider' ) {

				// Add wsu-c-mini-slider class if not the selector - used for css
				this.slider.classList.add( 'wsu-c-mini-slider' );

			};

			if ( this.slides.length != 0 ) {

				for ( let i = 0; i < this.slides.length; i++ ) {

					this.slides[i].classList.add('wsu-c-mini-slider__slide--set');
		
				}

				this.setActiveSlideState( this.slides[this.activeIndex] );

				this.addPager();

			}

		}

		if ( this.autoRotate && this.play ) {
			this.playSlides();
		}


	}

	parse_data_attrs() {

		if ( this.slider.hasAttribute("data-play") ) {
			this.play = parseInt( this.slider.dataset.play );
		}

		if ( this.slider.hasAttribute("data-auto") ) {
			this.auto = parseInt( this.slider.dataset.auto );
		}

		if ( this.slider.hasAttribute("data-pagerid") ) {
			this.pagerSelector = '#' + this.slider.dataset.pagerid;
		}

		if ( this.slider.hasAttribute("data-timing") ) {

			let timer = this.slider.dataset.timing;

			this.timing = timer.split(',');
		}

	}

	addPager() {

		if ( this.pager  !== null && this.pager.length != 0 ) {

			let pagers = '';

			this.slides.forEach(
				( item, index ) => {
					let pagerItem = this.pagerTemplate;
					let itemTitle = item.hasAttribute("data-title") ? item.dataset.title : '';
					let itemImageSrc = item.hasAttribute("data-imagesrc") ? item.dataset.imagesrc : '';
					pagerItem = pagerItem.replace( '[[slideIndex]]', index );
					pagerItem = pagerItem.replace( '[[title]]', itemTitle );
					pagerItem = pagerItem.replace( '[[imageSrc]]', itemImageSrc );

					pagers += pagerItem;
				}
			);

			this.pager.innerHTML = pagers;

		}

		this.pagerItems = this.pager.querySelectorAll('.wsu-c-mini-slider__pager-item');

		this.pagerItems.forEach( ( pager, index ) => {
				pager.addEventListener( 
					'click', 
					( event ) => {
						this.pauseSlides();
						this.changeSlide( index );
					} 
				);
			}
		)

	}

	playSlides() {

		if ( this.hasSlider ) {

			this.playVideo( this.activeIndex );

			this.play = 1;

			let slideDelay = (typeof this.timing[ this.activeIndex ] === 'undefined') ? this.timing[ this.activeIndex ] : this.delay;

			slideDelay = ( this.remainingTime ) ? this.remainingTime : slideDelay;

			this.timer = setTimeout( () => { this.nextSlide() }, slideDelay );

		}
	}

	pauseSlides() {
		this.play = 0;
		clearTimeout( this.timer );

	}


	changeSlide( newSlideIndex ) {

		this.pauseAllVideo();

		if ( newSlideIndex == this.activeIndex ) {
			return null;
		}

		this.previousIndex = this.activeIndex;
		this.activeIndex = newSlideIndex;

		let activeSlide = this.slides[ this.activeIndex ];
		let previousSlide = this.slides[ this.previousIndex ];

		this.setActiveSlideState( activeSlide );
		this.setPreviousSlideState( previousSlide );

		this.playVideo( this.activeIndex );

		if ( this.play ) {
			this.playSlides();
		}

	}

	nextSlide() {

		let nextIndex = ( this.activeIndex + 1 );

		if ( ! ( nextIndex < this.slides.length ) && ! this.loop ) {
			return null;
		}

		let slideIndex = ( nextIndex < this.slides.length ) ? this.activeIndex + 1 : 0;

		this.changeSlide( slideIndex );

	}

	setActiveSlideState( slide ) {
		slide.classList.add('wsu-c-mini-slider__slide--active');

	}

	setPreviousSlideState( slide ) {
		slide.classList.remove('wsu-c-mini-slider__slide--active')
	}

	pauseAllVideo() {
		this.slides.forEach( ( slide, index ) => {
				this.pauseVideo( slide );
			}
		)
	}

	pauseVideo( slide ) {

		let video = slide.querySelector('.wsu-explore-video');

		if ( video  !== null ) {

			try {

				let player = new Vimeo.Player( video );

				player.pause();

			}
			catch(err) {
				console.log('Could not Pause Slide Video');
			}

		}
	}

	playVideo( slideIndex ) {

		slideIndex =  ( undefined !== slideIndex && slideIndex !== false ) ? slideIndex : this.activeIndex;

		console.log( 'play video ' + slideIndex );

		let slide = this.slides[ slideIndex ];

		let video = slide.querySelector('.wsu-explore-video');

		if ( video  !== null ) {

			try {

				let player = new Vimeo.Player( video );

				console.log( player );

				player.play();

			}
			catch(err) {
				console.log('Could not play slide video');
			}

		}
	}

}

export default WsuMiniSlider;
