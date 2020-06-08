<?php namespace WSUWP\Theme\Explore;


class Post_Type_Story {

	public function init() {

		add_action( 'init', array( __CLASS__, 'add_post_type' ) );

		add_filter( 'template_include', array( __CLASS__, 'single_story' ), 999999 );

	}


	public static function single_story( $template ) {

		if ( is_singular( 'story' ) ) {

			$template = Explore::get('directory') . '/single-story.php';

		}

		return $template;

	}


	public static function add_post_type() {

		$labels = array(
			'name'                  => _x( 'Stories', 'Post type general name', 'wsuwp-theme-explore' ),
			'singular_name'         => _x( 'Story', 'Post type singular name', 'wsuwp-theme-explore' ),
			'menu_name'             => _x( 'Stories', 'Admin Menu text', 'wsuwp-theme-explore' ),
			'name_admin_bar'        => _x( 'Story', 'Add New on Toolbar', 'wsuwp-theme-explore' ),
			'add_new'               => __( 'Add New', 'wsuwp-theme-explore' ),
			'add_new_item'          => __( 'Add New Story', 'wsuwp-theme-explore' ),
			'new_item'              => __( 'New Story', 'wsuwp-theme-explore' ),
			'edit_item'             => __( 'Edit Story', 'wsuwp-theme-explore' ),
			'view_item'             => __( 'View Story', 'wsuwp-theme-explore' ),
			'all_items'             => __( 'All Stories', 'wsuwp-theme-explore' ),
			'search_items'          => __( 'Search Stories', 'wsuwp-theme-explore' ),
			'parent_item_colon'     => __( 'Parent Stories:', 'wsuwp-theme-explore' ),
			'not_found'             => __( 'No Stories found.', 'wsuwp-theme-explore' ),
			'not_found_in_trash'    => __( 'No Stories found in Trash.', 'wsuwp-theme-explore' ),
			'featured_image'        => _x( 'Story Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'wsuwp-theme-explore' ),
			'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'wsuwp-theme-explore' ),
			'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'wsuwp-theme-explore' ),
			'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'wsuwp-theme-explore' ),
			'archives'              => _x( 'Story archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'wsuwp-theme-explore' ),
			'insert_into_item'      => _x( 'Insert into Story', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'wsuwp-theme-explore' ),
			'uploaded_to_this_item' => _x( 'Uploaded to this Story', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'wsuwp-theme-explore' ),
			'filter_items_list'     => _x( 'Filter Stories list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wsuwp-theme-explore' ),
			'items_list_navigation' => _x( 'Stories list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wsuwp-theme-explore' ),
			'items_list'            => _x( 'Stories list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wsuwp-theme-explore' ),
		);
	 
		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'       => true,
   			'supports'           => array( 'editor' ),
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'stories' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author' ),
		);
	 
		register_post_type( 'story', $args );

	}


	public static function add_scripts() {

		die();

		var_dump( is_singular( 'story' ) );

		if ( is_singular( 'story' ) ) {

			wp_enqueue_script( 'wsu-explore-app', Explore::get('url') . '/assets/dist/public.js', array(), rand(), true );

		}

	}

}

(new Post_Type_Story)->init();
