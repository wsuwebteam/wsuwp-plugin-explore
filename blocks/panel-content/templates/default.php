<?php namespace WSUWP\Theme\Explore; ?>
<div 
	class="wsu-explore-panel__wrapper swiper-slide"
	data-title="<?php echo esc_attr( $atts['title'] ); ?>"
	>
	<div class="wsu-explore-panel wsu-explore-panel-content" >
	<?php Templates::include( 'panel-background', $atts ); ?>
	<div class="wsu-explore-panel__container">
		<?php echo $content; ?>
	</div>
	<?php Block_Panel_Footer::render_block( $atts, $content, true ); ?>
	</div>
</div>
