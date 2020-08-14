<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Footer extends Block {

	public static $default_atts = array(
		'narrator_audio_src'  => '',
		'narration_caption' => '',
		'narrator_name' => '',
		'narrator_title' => '',
		'narrator_thumbnail' => '',
		'title' => '',
		'caption' => '',
		'background_caption' => '',
		'pager_id' => '',
	);


	public static function render( $atts, $content ) {

		include __DIR__ . '/template.php';

	}

}
