<?php namespace WSUWP\Theme\Explore;

class Block_Background_Slider extends Block {

	public static $default_atts = array(
		'play' => 0,
		'timing' => '',
		'auto'   => 1,
		'id'     => '',
		'pager_id' => '',
	);


	public static function render( $atts, $content ) {

		include __DIR__ . '/template.php';

	}

}