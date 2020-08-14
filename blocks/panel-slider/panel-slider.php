<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Slider extends Block {

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
		'narration_caption' => '',
		'webm_video_src'  => '',
		'vimeo_video_src' => '',
		'class_name'      => '',
		'wrapper_classes'   => 'wsu-explore-panel-slider',
		'play' => 0,
		'timing' => '',
		'auto'   => 1,
		'pager_id' => '',
	);


	public static function render( $atts, $content ) {

		$atts['pager_id'] = 'slide-'. wp_rand( 0, 10000000 );

		include __DIR__ . '/templates/default.php';

	}

}