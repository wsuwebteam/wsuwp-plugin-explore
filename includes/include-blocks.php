<?php namespace WSUWP\Theme\Explore;


class Blocks {


	public function __construct() {

		$base_dir = Explore::get( 'directory' );

		require_once $base_dir . 'classes/class-block.php';
		require_once $base_dir . 'blocks/panel/panel.php';
		require_once $base_dir . 'blocks/panel-group/panel-group.php';
		//require_once $block_dir . 'panel-title/panel-title.php';
		//require_once $block_dir . 'panel-group/panel-group.php';
		//require_once $block_dir . 'panel-subtitle/panel-subtitle.php';
		//require_once $block_dir . 'panel-caption/panel-caption.php';
	}

	public function init() {

		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );

		add_action( 'init', array( __CLASS__, 'register_dynamic_blocks' ) );

	}


	public static function enqueue_block_editor_assets() {

		wp_enqueue_script(
			'wsuwp-explore-blocks-js',
			Explore::get( 'url' ) . '/assets/dist/editor.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ],
			filemtime( Explore::get( 'directory' ) . '/assets/dist/editor.js' )
		);
	
		// Enqueue block editor styles
		wp_enqueue_style(
			'wsuwp-explore-blocks-css',
			Explore::get( 'url' ) . '/assets/dist/editor.css',
			[ 'wp-edit-blocks' ],
			filemtime( Explore::get( 'directory' ) . '/assets/dist/editor.css' )	
		);

		wp_register_style(
			'wsuwp-explore-icons-css',
			'https://cdn.web.wsu.edu/designsystem/1.x/wsu-icons/dist/wsu-icons.bundle.css',
			array(),
			'0.6.0'
		);

	}


	public static function register_dynamic_blocks() {

		$blocks = array(
			'wsuwp-explore/panel-group'    => 'Block_Panel_Group',
			'wsuwp-explore/panel'          => 'Block_Panel',
			//'wsuwp-explore/panel-title'    => 'Block_Panel_Title',
			//'wsuwp-explore/panel-group'    => 'Block_Panel_Group',
			//'wsuwp-explore/panel-subtitle' => 'Block_Panel_Subtitle',
			//'wsuwp-explore/panel-caption'  => 'Block_Panel_Caption',
		);

		foreach ( $blocks as $block => $class ) {

			register_block_type(
				$block,
				array(
					'render_callback' => array( __NAMESPACE__ . '\\' . $class, 'render_block' ),
				)
			);
		}

	}

}

(new Blocks)->init();
