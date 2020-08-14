<div class="wsu-explore-narrator wsu-explore-audio-narrator">
	<div class="wsu-explore-audio-narrator__play-control">
  		<i class="wsu-icon wsu-i-pause wsu-explore-audio-narrator__play-button">Pause Audio</i>
		<i class="wsu-explore-icon explore-sound">Has Sound</i> 
	</div>
	<div class="wsu-explore-audio-narrator__profile">
		<?php if ( ! empty( $atts['narrator_thumbnail'] ) ) : ?>
		<div class="wsu-explore-audio-narrator__profile-image-frame">
			<img src="<?php echo esc_url( $atts['narrator_thumbnail'] ); ?>" class="wsu-explore-audio-narrator__profile-image-frame" />
		</div>
		<?php endif; ?>
		<div class="wsu-explore-audio-narrator__profile-name">
			<?php echo esc_html( $atts['narrator_name'] ); ?>
			<span class="wsu-explore-audio-narrator__profile-title"><?php echo esc_html( $atts['narrator_title'] ); ?></span>
		</div>
	</div>
	<audio controls class="wsu-explore-audio-narrator__player">
	<source src="<?php echo esc_url( $atts['narrator_audio_src'] ); ?>" type="audio/mpeg">
	</audio>
</div>