<div class="wsu-explore-narrator wsu-explore-audio-narrator">
	<div class="wsu-explore-audio-narrator__play-control">
  		<i class="wsu-icon wsu-i-pause wsu-explore-audio-narrator__play-button">Pause Audio</i>
		<i class="wsu-explore-icon explore-sound">Has Sound</i> 
	</div>
	<div class="wsu-explore-audio-narrator__profile">
		<div class="wsu-explore-audio-narrator__profile-image-frame">
			<img src="https://source.unsplash.com/collection/895539" class="wsu-explore-audio-narrator__profile-image-frame" />
		</div>
		<div class="wsu-explore-audio-narrator__profile-name">
			<?php echo esc_html( $atts['narrator_name'] ); ?>
		</div>
	</div>
	<audio controls class="wsu-explore-audio-narrator__player">
	<source src="<?php echo esc_url( $atts['narrator_audio_src'] ); ?>" type="audio/mpeg">
	</audio>
</div>