<?php namespace WSUWP\Theme\Explore; ?>

<div 
	class="<?php echo esc_attr( $atts['wrapper_classes']); ?>"
	data-imagesrc="<?php echo esc_url( $atts['thumbnail_image_src'] ); ?>"
	data-title="<?php echo esc_url( $atts['title'] ); ?>"
	>
	<?php if ( ! empty( $atts['video_src'] ) ) {

		Block_Video_Frame::render_block( $atts, $content, true );

	} else {

		Block_Image_Frame::render_block( $atts, $content, true );

	}; ?>
</div>
