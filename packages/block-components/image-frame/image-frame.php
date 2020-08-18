<?php namespace WSUWP\Theme\Explore;

class Block_Image_Frame extends Block {

	public static $default_atts = array(
		'image_src' => '',
		'image_alt' => '',
		'lazy_load' => true,
		'image_focal_point' => array( 'x' => '0.5', 'y' => '0.5' ),
		'object_position' => '',
	);


	public static function render( $atts, $content ) {

		self::set_object_postion( $atts );

		if ( $atts['lazy_load'] ) {

			include __DIR__ . '/templates/lazy-load.php';

		} else {

			include __DIR__ . '/templates/default.php';

		}

	}

	public static function set_object_postion( &$atts ) {


		if ( ! empty( $atts['image_focal_point'] ) ) {

			$x_pos = (float) $atts['image_focal_point']['x'];
			$y_pos = (float) $atts['image_focal_point']['y'];
			$x_pos = ( 100 * $x_pos );
			$y_pos = ( 100 * $y_pos );

			$atts['object_position'] = $x_pos . '% ' . $y_pos . '%'; 
		}
	}

}