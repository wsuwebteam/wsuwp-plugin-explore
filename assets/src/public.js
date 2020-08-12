import './public.scss';

class wsu_explore {

	constructor( container_id, swiper_container_selector ) {
		this.container_id = container_id;
		this.container = document.getElementById( container_id );
		this.swiper_container_selector = swiper_container_selector;

		this.init_swiper();

		this.init_events();

		//this.init_map();
	}

	init_swiper() {

		this.swiper = new Swiper ( this.swiper_container_selector, {
			// Optional parameters
			loop: false,
			preventClicksPropagation: true,
		
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		
			// And if we need scrollbar
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		});

		this.swiper.on( 'slideChangeTransitionEnd', () => { this.slide_changed() } );

		this.update_nav();

	}

	init_events() {
		document.querySelectorAll('.wsu-explore-panel__next-slide').forEach(item => {
			item.addEventListener('click', event => {
				this.swiper.slideNext();
			})
		});

		document.querySelectorAll('.wsu-explore-panel__pause-background').forEach(item => {
			item.addEventListener('click', event => {
				this.pause_background_video();
			})
		});

		document.querySelectorAll('.wsu-explore-audio-narrator__play-button').forEach(item => {
			item.addEventListener('click', event => {
				this.toggle_narrator( this.swiper.activeIndex, true );
			})
		});

		document.querySelectorAll('.wsu-explore-panel-caption__description-toggle').forEach(item => {
			item.addEventListener('click', event => {
				this.toggle_caption();
			})
		});

		document.querySelectorAll('.wsu-explore-narrator').forEach(item => {
			item.addEventListener('click', event => {
				event.stopPropagation();
			})
		});

		
	}

	init_map() {

		let map = document.querySelector('.wsu-explore-panel-group__map__wrapper');

		document.querySelectorAll('.wsu-explore-panel-group__map__pin').forEach(item => {
			item.addEventListener('click', event => {
				this.swiper.slideTo( item.dataset.slide );
			})
		});

		map.addEventListener('click', event => {

			if ( map.classList.contains( 'active' ) ) {

				map.classList.remove('active');
			} else {
				map.classList.add('active');
			}
		})

	}


	pause_background_video() {

		let slide_index = this.swiper.activeIndex;

		this.do_background_video( slide_index, 'pause' );

	}


	slide_changed() {

		let active_slide_index = this.swiper.activeIndex;

		if ( ( this.swiper.activeIndex - this.swiper.previousIndex  )  > 0 ) {

			this.play_narrator( this.swiper.activeIndex );

		} 

		this.pause_narrator( this.swiper.previousIndex );

		this.do_background_video( this.swiper.activeIndex, 'play' );
		this.do_background_video( this.swiper.previousIndex, 'pause' );

		this.update_nav();

	}

	update_nav() {


		let prevSlideIndex = ( this.swiper.activeIndex - 1 );
		let nextSlideIndex = ( this.swiper.activeIndex + 1 );

		let prevSlideLabel = ( 0 > prevSlideIndex ) ? 'Go Cougs' : this.swiper.slides[ prevSlideIndex ].dataset.title;
		let nextSlideLabel = ( nextSlideIndex > ( this.swiper.slides.length - 1 ) ) ? 'Go Cougs': this.swiper.slides[ nextSlideIndex ].dataset.title;

		let nextSlideControl = document.querySelector('.swiper-button-label-next');
		let prevSlideControl = document.querySelector('.swiper-button-label-prev');

		nextSlideControl.innerHTML = nextSlideLabel;
		prevSlideControl.innerHTML = prevSlideLabel;

	}

	get_narrator( slide_index ) {

		let slide = this.swiper.slides[slide_index];

		return slide.querySelector('.wsu-explore-narrator');

	}

	get_background_video( slide_index ) {

		let slide = this.swiper.slides[slide_index];

		return slide.querySelector('.wsu-explore-panel__background__video');

	}

	get_caption( slide_index ) {

		let slide = this.swiper.slides[slide_index];

		return slide.querySelector('.wsu-explore-panel-caption');
	}

	show_caption( caption ) {
		caption = ( caption ) ? caption : this.get_caption( this.swiper.activeIndex );

		if ( caption ) {
			caption.classList.add( 'wsu-explore-panel-caption--show-description' );
			caption.classList.remove( 'wsu-explore-panel-caption--hide-description' );
		}
	}

	hide_caption( caption ) {
		caption = ( caption ) ? caption : this.get_caption( this.swiper.activeIndex );

		if ( caption ) {
			caption.classList.add( 'wsu-explore-panel-caption--hide-description' );
			caption.classList.remove( 'wsu-explore-panel-caption--show-description' );
		}
	}

	toggle_caption() {

		let slide_index = this.swiper.activeIndex;

		let caption = this.get_caption( slide_index );

		if ( caption ) {

			if ( caption.classList.contains( 'wsu-explore-panel-caption--show-description' ) ) {

				this.hide_caption( caption );

			} else {

				this.show_caption( caption );

			}

		}

	}

	toggle_narrator( slideIndex, showCaption ) {

		let narrator = this.get_narrator( slideIndex );

		if ( narrator.classList.contains( 'wsu-explore-narrator--paused' ) ) {

			this.play_narrator( slideIndex );

		} else {

			this.pause_narrator( slideIndex );

			if ( showCaption ) {

				this.show_caption( this.get_caption( slideIndex ) );

			}

		}



	}

	do_narrator( slide_index, action, value ) {

		let narrator = this.get_narrator( slide_index );

		if ( narrator ) {

			if ( narrator.classList.contains( 'wsu-explore-panel__narrator--vimeo' ) ) {

				try {

					let player = new Vimeo.Player( narrator );

					switch( action ) {
						case 'play':
							player.play();
							break;
						case 'pause':
							player.pause();
							break;
					}					
				}
				catch(err) {
					console.log('Error with Vimeo Player');
				}

			} else if ( narrator.classList.contains( 'wsu-explore-audio-narrator' ) ) {

				if ( 'toggle' == action ) {

					action = ( narrator.classList.contains( 'wsu-explore-audio-narrator--paused' ) ) ? 'play' : 'pause';

				}

				try {

					let player = narrator.querySelector('.wsu-explore-audio-narrator__player');

					switch( action ) {
						case 'play':
							player.play();
							narrator.classList.remove( 'wsu-explore-audio-narrator--paused' );
							break;
						case 'pause':
							player.pause();
							narrator.classList.add( 'wsu-explore-audio-narrator--paused' );
							break;
					}					
				}
				catch(err) {
					console.log('Error with Audio Player');
				}

			}

		}


	}

	pause_narrator( slideIndex, callback ) {

		let narrator = this.get_narrator( slideIndex );

		if ( narrator ) {

			if ( narrator.classList.contains( 'wsu-explore-audio-narrator' ) ) {

				try {

					let player = narrator.querySelector('.wsu-explore-audio-narrator__player');

					player.pause();

					narrator.classList.add( 'wsu-explore-narrator--paused' );
					
				}
				catch(err) {
					console.log('Error with Audio Player');
				}
			}
		}
	}

	play_narrator( slideIndex, callback ) {

		let narrator = this.get_narrator( slideIndex );

		if ( narrator ) {

			if ( narrator.classList.contains( 'wsu-explore-audio-narrator' ) ) {

				try {

					let player = narrator.querySelector('.wsu-explore-audio-narrator__player');

					player.play();
					
					narrator.classList.remove( 'wsu-explore-narrator--paused' );
					
				}
				catch(err) {
					console.log('Error with Audio Player');
				}
			}
		}
	}


	do_background_video( slide_index, action, value ) {

		let background_video = this.get_background_video( slide_index );

		if ( background_video ) {

			if ( background_video.classList.contains( 'wsu-explore-panel__background__video--vimeo' ) ) {

				try {

					let player = new Vimeo.Player( background_video );

					switch( action ) {
						case 'play':
							player.play();
							break;
						case 'pause':
							player.pause();
							break;
					}					
				}
				catch(err) {
					console.log('Error with Vimeo Player');
				}

			}

		}

	}

}

const wsu_explore_app = new wsu_explore( 'wsu-explore-panel-group', '.swiper-container' );
