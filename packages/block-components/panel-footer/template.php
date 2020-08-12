<?php namespace WSUWP\Theme\Explore; ?>
<div class="wsu-explore-footer">
	<div class="wsu-explore-footer__options">
		<?php if ( ! empty( $atts['background_caption'] ) ) : ?>
			<div class="wsu-explore-footer__background-caption"><?php echo wp_kses_post( $atts['background_caption'] ); ?></div>
		<?php endif; ?>
	</div>
	<?php Block_Panel_Caption::render_block( $atts, $content, true ); ?>
</div>

