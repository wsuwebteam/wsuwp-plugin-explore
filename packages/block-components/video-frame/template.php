<div class="wsu-explore-video-frame">
	<iframe 
		class="wsu-explore-video-frame__video wsu-explore-video" 
		src="<?php echo esc_url( $atts['video_src'] ); ?>" 
		frameborder="0" 
		allow="fullscreen<?php if ( ! empty( $atts['is_360'] ) ) : ?>; gyroscope; accelerometer<?php endif; ?>" 
		frameborder="0" 
		webkitallowfullscreen="" 
		mozallowfullscreen="" 
		allowfullscreen="">
	</iframe>
	<nav class="wsu-explore-video-frame__control">
		<span class="wsu-icon wsu-i-pause wsu-explore-video-frame__pause-control"></span>
		Video
	</nav>
</div>
