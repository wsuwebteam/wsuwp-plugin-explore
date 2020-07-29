import './public.scss';

class wsu_explore {

	constructor( container_id, swiper_container_selector ) {
		this.container_id = container_id;
		this.container = document.getElementById( container_id );
		this.swiper_container_selector = swiper_container_selector;

		this.init_swiper();

		this.init_events();

		this.init_map();
	}

	init_swiper() {

		this.swiper = new Swiper ( this.swiper_container_selector, {
			// Optional parameters
			loop: false,
		
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

		this.do_narrator( this.swiper.activeIndex, 'play' );
		this.do_narrator( this.swiper.previousIndex, 'pause' );

		this.do_background_video( this.swiper.activeIndex, 'play' );
		this.do_background_video( this.swiper.previousIndex, 'pause' );

	}

	get_narrator( slide_index ) {

		let slide = this.swiper.slides[slide_index];

		return slide.querySelector('.wsu-explore-panel__narrator');

	}

	get_background_video( slide_index ) {

		let slide = this.swiper.slides[slide_index];

		return slide.querySelector('.wsu-explore-panel__background__video');

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
