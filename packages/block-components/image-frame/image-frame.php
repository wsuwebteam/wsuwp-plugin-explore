<?php namespace WSUWP\Theme\Explore;

class Block_Image_Frame extends Block {

	public static $default_atts = array(
		'image_src' => '',
		'image_alt' => '',
	);


	public static function render( $atts, $content ) {

		include __DIR__ . '/template.php';

	}

}