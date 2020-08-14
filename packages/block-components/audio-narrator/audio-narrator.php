<?php namespace WSUWP\Theme\Explore;

class Block_Audio_Narrator extends Block {

	public static $default_atts = array(
		'narrator_audio_src'  => '',
		'narrator_image_src'  => '',
		'narrator_name'  => '',
		'narrator_title' => '',
		'narrator_thumbnail' => '',
		'narration_caption' => '',
		'narration_title' => '',
		'title' => '',
	);


	public static function render( $atts, $content ) {

		$atts['narration_title'] = ( ! empty( $atts['narration_title'] ) ) ? $atts['narration_title'] : $atts['title'];

		if ( ! empty( $atts['narrator_audio_src'] ) ) {

			include __DIR__ . '/template.php';

		}

	}

}
