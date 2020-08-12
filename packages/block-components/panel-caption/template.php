<?php namespace WSUWP\Theme\Explore; ?>
<div class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>">
	<?php if ( ! empty( $atts['title'] ) ) : ?>
		<h2 class="wsu-explore-panel-caption__title">
			<?php echo esc_html( $atts['title'] ); ?>
			<?php if ( ! empty( $atts['caption'] ) ) : ?><i class="wsu-icon wsu-i-discussion wsu-explore-panel-caption__description-toggle">Read Caption</i><?php endif; ?>
		</h2>
	<?php endif; ?>
	<?php if ( ! empty( $atts['caption'] ) ) : ?>
	<div class="wsu-explore-panel-caption__description">
		<?php echo wp_kses_post( $atts['caption'] ); ?>
	</div>
	<?php endif; ?>
	<?php Block_Audio_Narrator::render_block( $atts, $content, true ); ?>
</div>