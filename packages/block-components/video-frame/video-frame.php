<?php namespace WSUWP\Theme\Explore;

class Block_Video_Frame extends Block {

	public static $default_atts = array(
		'video_src'   => '',
		'video_title' => '',
		'is_360'      => '',
		'auto_play'   => false,
	);


	public static function render( $atts, $content ) {

		self::parse_video_src( $atts );

		include __DIR__ . '/template.php';

	}


	protected static function parse_video_src( &$atts ) {

		$atts['video_src'] .= '?&loop=1';

		$atts['video_src'] .= ( empty( $atts['is_360'] ) ) ? '&background=1' : '';

		$atts['video_src'] .= '&portrait=0';

		$atts['video_src'] .= '&autopause=0';

		$atts['video_src'] .= ( ! empty( $atts['auto_play'] ) ) ? '&autoplay=1' : '&autoplay=0';

	}

}