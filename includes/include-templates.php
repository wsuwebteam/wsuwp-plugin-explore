<?php namespace WSUWP\Theme\Explore;


class Templates {

	public static function include( $slug, $atts = array(), $content = '' ) {

		$template_dir = Explore::get( 'directory' ) . '/templates/';

		switch ( $slug ) {

			case 'panel-wrapper-start':
				include $template_dir . 'panel-wrapper-start.php';
				break;

			case 'panel-wrapper-end':
				include $template_dir . 'panel-wrapper-end.php';
				break;
			case 'panel-background':
				include $template_dir . 'panel-background.php';
				break;

		}

	}

}
