<?php namespace WSUWP\Theme\Explore;

class Block_Panel extends Block {

	public static $default_atts = array(
		'img_src'         => '',
		'type'            => '',
		'bg_video_src'    => '',
		'bg_video_is_360' => false,
		'audio_src'       => '',
		'webm_video_src'  => '',
		'vimeo_video_src' => '',
	);


	public static function render( $atts, $content ) {

		include __DIR__ . '/templates/template.php';

	}

}
