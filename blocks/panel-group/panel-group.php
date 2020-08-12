<?php namespace WSUWP\Theme\Explore;

class Block_Panel_Group extends Block {

	public static $default_atts = array(
		'map_src' => '',
		'pins'    => array(),
	);


	public static function render( $atts, $content ) {

		include __DIR__ . '/templates/template.php';

	}

}
