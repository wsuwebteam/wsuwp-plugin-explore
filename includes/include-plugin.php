<?php namespace WSUWP\Theme\Explore;


class Explore {

	protected static $version = '0.9.0';


	public static function get( $property ) {

		switch ( $property ) {

			case 'version':
				return self::$version;
			case 'url':
				return plugin_dir_url( dirname( __FILE__ ) );
			case 'directory':
				return plugin_dir_path( dirname( __FILE__ ) );
			default:
				return '';
		}

	}


	public function init() {

		require_once __DIR__ . '/include-blocks.php';
		require_once __DIR__ . '/include-post-type-story.php';
		require_once __DIR__ . '/include-templates.php';

	}


}

(new Explore)->init();
