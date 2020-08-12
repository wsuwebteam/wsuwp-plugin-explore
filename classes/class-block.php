<?php namespace WSUWP\Theme\Explore;

class Block {

	public static $default_atts = array();
	public static $shortcode_tag = '';


	public function __construct() {

		if ( ! empty( static::$shortcode_tag ) ) {

			add_action( 'init', array( __CLASS__, 'add_shortcode' ) );

		} // End if
 
	}


	public static function add_shortcode() {

		add_shortcode( static::$shortcode_tag, array( __CLASS__, 'render_shortcode' ) );

	}


	public static function render_block( $attributes = array(), $content = '', $echo = false ) {

		$atts = array();

		// Turn camelCase into snake_case
		foreach ( $attributes as $block_key => $value ) {

			$parts = preg_split( '/(?=[A-Z])/', $block_key, -1, PREG_SPLIT_NO_EMPTY );

			$key = strtolower( implode( '_', $parts ) );

			$atts[ $key ] = $value;

		}

		$atts = shortcode_atts( static::$default_atts, $atts );

		if ( $echo ) {

			static::render( $atts, $content );

		} else {

			ob_start();

			static::render( $atts, $content );

			return ob_get_clean();

		}

	}


	public static function render_shortcode( $attributes, $content, $tag ) {

		$atts = shortcode_atts( static::$default_atts, $attributes, $tag );

		return static::render( $atts, $content );

	}

}
