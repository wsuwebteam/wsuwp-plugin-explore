<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Start extends Block {

	public static $default_atts = array(
		'title'  => '',
		'caption' => '',
		'label'   => '',
		'show_loading' => false,
		'background_img_src'         => '',
		'background_video_src'    => '',
		'background_video_is_360' => false,
		'audio_src'       => '',
		'webm_video_src'  => '',
		'vimeo_video_src' => '',
		'class_name'      => '',
		'wrapper_class'   => 'wsu-explore-panel-start',
	);


	public static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
