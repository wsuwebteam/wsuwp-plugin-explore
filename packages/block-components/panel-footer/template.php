<?php namespace WSUWP\Theme\Explore; ?>
<div class="wsu-explore-footer">
	<div class="wsu-explore-footer__options">
<?php if ( ! empty( $atts['pager_id'] ) ) : ?><div id="<?php echo esc_attr( $atts['pager_id'] ); ?>" class="wsu-c-mini-slider__slide-pager swiper-no-swiping"></div><?php endif; ?>
		<?php if ( ! empty( $atts['background_caption'] ) ) : ?>
			<div class="wsu-explore-footer__background-caption"><?php echo wp_kses_post( $atts['background_caption'] ); ?></div>
		<?php endif; ?>
	</div>
	<?php Block_Panel_Caption::render_block( $atts, $content, true ); ?>
</div>

