<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Content extends Block {

	public static $default_atts = array(
		'title' => '',
		'caption' => '',
		'background_img_src'         => '',
		'background_video_src'    => '',
		'background_video_is_360' => false,
		'background_caption' => '',
		'narrator_audio_src'       => '',
		'narrator_name' => '',
		'narrator_title' => '',
		'narrator_thumbnail' => '',
		'webm_video_src'  => '',
		'vimeo_video_src' => '',
		'class_name'      => '',
		'wrapper_classes'   => 'wsu-explore-panel-content',
	);


	public static function render( $atts, $content ) {


		include __DIR__ . '/templates/default.php';

	}

}