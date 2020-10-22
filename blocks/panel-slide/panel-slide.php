<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Slide extends Block {

	public static $default_atts = array(
		'title'  => '',
		'caption' => '',
		'image_src'         => '',
		'thumbnail_image_src' => '',
		'is360' => false,
		'audio_src'       => '',
		'video_src' => '',
		'video_title' => '',
		'class_name'      => '',
		'wrapper_classes'   => 'wsu-explore-panel__slide wsu-c-mini-slider__slide',
		'lazy_load' => true,
		'image_focal_point' => array( 'x' => '0.5', 'y' => '0.5' ),
	);


	public static function render( $atts, $content ) {

		$atts['thumbnail_image_src'] = ( ! empty( $atts['thumbnail_image_src'] ) ) ? $atts['thumbnail_image_src'] : $atts['image_src'];

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}