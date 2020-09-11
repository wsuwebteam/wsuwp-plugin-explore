<?php namespace WSUWP\Theme\Explore; ?>
<div 
	class="wsu-explore-panel__wrapper swiper-slide"
	data-title="<?php echo esc_attr( $atts['label'] ); ?>"
	data-auto="<?php echo esc_attr( $atts['auto_advance'] ); ?>"
	data-delay="<?php echo esc_attr( $atts['delay'] ); ?>"
	data-delay-audio="<?php echo esc_attr( $atts['delay_audio'] ); ?>"
	>
	<?php Block_Background_Slider::render_block( $atts, $content, true ); ?>
	<div class="wsu-explore-panel" >
	<div class="wsu-explore-panel__container"></div>
	<?php Block_Panel_Footer::render_block( $atts, $content, true ); ?>
	</div>
</div>
