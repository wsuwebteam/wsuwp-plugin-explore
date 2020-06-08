<li class="step step2 pattern pattern--crimson content-gallery"> <!-- Fallback image goes here -->

	<!-- Video Background -->
	<!-- <video class="video-background" src="https://player.vimeo.com/external/402335381.hd.mp4?s=98f7c4d31e2f995c8e4c2bc32051d023185c3390&profile_id=175" autoplay="autoplay" loop="loop" muted=""></video> -->
	<!-- Video Background End -->

	<?php
	function random_number() {
		return rand(100, 999);
	}
	?>

	<!-- Content Overlay -->
	<div class="content row row--vac">
		<div class="gallery">
			<div class="gallery-screen">
				<img id="screen-image" src="https://s3.wp.wsu.edu/uploads/sites/1621/2017/07/img-1280x720-29.jpg" alt="">
			</div>
			<div class="gallery-item-container">
				<div class="gallery-item">
					<img src="https://s3.wp.wsu.edu/uploads/sites/1621/2017/07/img-1280x720-29.jpg" alt="">
				</div>
				<div class="gallery-item">
					<img src="https://s3.wp.wsu.edu/uploads/sites/1621/2017/07/img-1280x720-28.jpg" alt="">
				</div>
				<div class="gallery-item">
					<img src="https://s3.wp.wsu.edu/uploads/sites/1621/2017/07/img-1280x720-26.jpg" alt="">
				</div>
				<div class="gallery-item">
					<img src="https://s3.wp.wsu.edu/uploads/sites/1621/2017/07/img-1280x720-25.jpg" alt="">
				</div>
			</div>
		</div>
	</div>
	<!-- Content Overlay End -->

	<!-- Talking Head Video -->
	<div class="talking-head-container">
		<video loop="loop" muted="" autoplay="autoplay">
			<source src="<?php echo get_stylesheet_directory_uri() . '/videos/video_5.webm'; ?>">
		</video>
	</div>
	<!-- Talking Head Video End -->

	<!-- Hidden Assets -->
	<!-- <audio class="audio-overlay" src="<?php // echo get_stylesheet_directory_uri() . '/videos/Broke_For_Free_-_01_-_Night_Owl.mp3'; ?>" controls autoplay="false"></audio> -->
	<!-- Hidden Assets End -->

</li>
