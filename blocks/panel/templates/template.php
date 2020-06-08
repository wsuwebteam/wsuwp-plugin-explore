<div 
	class="wsu-explore-panel__wrapper swiper-slide" >
	<div class="wsu-explore-panel wsu-explore-panel--<?php echo esc_attr( $atts['type'] ); ?>" >
		<div class="wsu-explore-panel__header">
		</div>
		<div class="wsu-explore-panel__content">
			<?php echo $content; ?>
		</div>
		<div class="wsu-explore-panel__footer">
			<div class="wsu-explore-panel__spirit-guide">
				<?php if ( ! empty( $atts['vimeo_video_src'] ) ) : ?>
				<iframe class="wsu-explore-panel__narrator wsu-explore-panel__narrator--vimeo" src="<?php echo esc_url( $atts['vimeo_video_src'] ); ?>?title=0&byline=0&portrait=0&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="wsu-explore-panel__background">
		<?php if ( ! empty( $atts['bg_video_src'] ) ) : ?>
		<iframe class="wsu-explore-panel__background__video wsu-explore-panel__background__video--vimeo" src="<?php echo esc_url( $atts['bg_video_src'] ); ?>?&loop=1<?php if ( empty( $atts['bg_video_is_360'] ) ) : ?>&background=1<?php endif; ?>&portrait=0&autopause=0" frameborder="0" allow="fullscreen<?php if ( ! empty( $atts['bg_video_is_360'] ) ) : ?>; gyroscope; accelerometer<?php endif; ?>" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
		<?php elseif ( ! empty( $atts['img_src'] ) ) : ?>
		<img class="wsu-explore-panel__background__image" src="<?php echo esc_url( $atts['img_src'] ); ?>" />
		<?php endif; ?>
		
	</div>
</div>
