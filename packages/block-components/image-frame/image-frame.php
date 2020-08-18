<?php namespace WSUWP\Theme\Explore;

class Block_Image_Frame extends Block {

	public static $default_atts = array(
		'image_src' => '',
		'image_alt' => '',
		'lazy_load' => true,
	);


	public static function render( $atts, $content ) {

		if ( $atts['lazy_load'] ) {

			include __DIR__ . '/templates/lazy-load.php';

		} else {

			include __DIR__ . '/templates/default.php';

		}

	}

}