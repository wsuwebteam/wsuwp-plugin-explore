<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Image extends Block {

	public static $default_atts = array(
		'title'  => '',
		'caption' => '',
		'background_img_src'         => '',
		'background_video_src'    => '',
		'background_video_is_360' => false,
		'background_caption' => '',
		'narrator_audio_src'       => '',
		'narrator_name' => '',
		'narration_caption' => '',
		'webm_video_src'  => '',
		'vimeo_video_src' => '',
		'class_name'      => '',
		'wrapper_class'   => 'wsu-explore-panel-image',
	);


	public static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}