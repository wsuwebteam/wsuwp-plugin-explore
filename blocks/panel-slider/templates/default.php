<?php namespace WSUWP\Theme\Explore; ?>
<div 
	class="wsu-explore-panel__wrapper swiper-slide"
	data-title="<?php echo esc_attr( $atts['title'] ); ?>"
	>
	<?php Block_Background_Slider::render_block( $atts, $content, true ); ?>
	<div class="wsu-explore-panel" >
	<div class="wsu-explore-panel__container"></div>
	<?php Block_Panel_Footer::render_block( $atts, $content, true ); ?>
	</div>
</div>
