<?php if ( ! empty( $atts['background_video_src'] ) || ! empty( $atts['background_img_src'] ) ) : ?>
	<div class="wsu-explore-panel__background">
		<?php if ( ! empty( $atts['background_video_src'] ) ) : ?>
			<iframe 
				class="wsu-explore-panel__background__video wsu-explore-panel__background__video--vimeo" 
				src="<?php echo esc_url( $atts['background_video_src'] ); ?>?&loop=1<?php if ( empty( $atts['bg_video_is_360'] ) ) : ?>&background=1<?php endif; ?>&portrait=0&autopause=0" 
				frameborder="0" 
				allow="fullscreen<?php if ( ! empty( $atts['bg_video_is_360'] ) ) : ?>; gyroscope; accelerometer<?php endif; ?>" 
				frameborder="0" 
				webkitallowfullscreen="" 
				mozallowfullscreen="" 
				allowfullscreen="">
			</iframe>
			<nav class="wsu-explore-panel__background__video__options">
				<span class="wsu-icon wsu-i-pause wsu-explore-panel__pause-background"></span>
				Background 
				<span class="wsu-icon wsu-i-info"></span>
			</nav>
		<?php elseif ( ! empty( $atts['background_img_src'] ) ) : ?>
			<img 
				class="wsu-explore-panel__background__image" 
				src="<?php echo esc_url( $atts['background_img_src'] ); ?>" 
				/>
		<?php endif; ?>
	</div>
<?php endif; ?>
