<?php namespace WSUWP\Theme\Explore;

class Block_Panel_caption extends Block {

	public static $default_atts = array(
		'narrator_audio_src'  => '',
		'narration_caption' => '',
		'narrator_name' => '',
		'title' => '',
		'caption' => '',
		'wrapper_class' => 'wsu-explore-panel-caption swiper-no-swiping',
	);


	public static function render( $atts, $content ) {

		if ( ! empty( $atts['narrator_audio_src'] ) ) {
			$atts['wrapper_class'] .= ' wsu-explore-panel-caption--hide-description';
		}

		include __DIR__ . '/template.php';

	}

}
