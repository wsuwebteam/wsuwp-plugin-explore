<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sequence Proof of Concept</title>

	<!-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> -->
	<!-- <link rel="stylesheet" href="https://cdn.web.wsu.edu/designsystem/1.x/assets/css/wsu-design-system-containers.css"> -->
	<link rel="stylesheet" href="https://cdn.web.wsu.edu/designsystem/1.x/build/dist/wsu-design-system.bundle.dist.css">
	<link rel="stylesheet" href="https://cdn.web.wsu.edu/designsystem/1.x/wsu-icons/dist/wsu-icons.bundle.css">

	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/node_modules/normalize.css/normalize.css'; ?>">
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/style.css?version=' . rand() . ''; ?>">

</head>
<body>

	<div class="wsu-c-content">

		<!-- Global -->
			<div class="timeline">
				<?php
				$number_of_slides = 10; // TODO Dynamically set value based on number of slides on page
				$data_progress = (1 / $number_of_slides) * 100;
				?>
				<div class="timeline-progress" data-progress="<?php echo $data_progress;?>"></div>
			</div>

			<div class="story-controls">
				<button type="button" class="seq-prev" aria-label="Go to previous slide">
					<div class="wsu-icon wsu-i-arrow-left"></div>
					<div class="story-controls_label">Prev</div>
				</button>
				<button type="button" class="seq-next" aria-label="Go to next slide">
					<div class="wsu-icon wsu-i-arrow-right"></div>
					<div class="story-controls_label">Next</div>
				</button>
			</div>

			<!-- Multimedia Controls -->
			<div class="multimedia-controls">
				<div class="play-audio">
					<span class="wsu-icon wsu-i-play"></span>
				</div>
				<span class="wsu-icon wsu-i-discussion"></span>
			</div>
			<!-- Multimedia Controls End -->
		<!-- Global End -->

		<!-- Sequence Start -->
		<div id="sequence">
			<ul class="seq-canvas wsu-c-content">

				<?php include_once(__DIR__ . '/slide-types/slide-hero.php'); ?>

				<?php include_once(__DIR__ . '/slide-types/slide.php'); ?>

				<?php include_once(__DIR__ . '/slide-types/slide-columns.php'); ?>

				<?php include_once(__DIR__ . '/slide-types/slide-gallery.php'); ?>

			</ul>
		</div>
	</div>

	<script src="<?php echo get_stylesheet_directory_uri() . '/node_modules/sequencejs/scripts/imagesloaded.pkgd.min.js'; ?>"></script>
	<script src="<?php echo get_stylesheet_directory_uri() . '/node_modules/sequencejs/scripts/hammer.min.js'; ?>"></script>
	<script src="<?php echo get_stylesheet_directory_uri() . '/node_modules/sequencejs/scripts/sequence.min.js'; ?>"></script>
	<script src="<?php echo get_stylesheet_directory_uri() . '/node_modules/swiper/js/swiper.min.js'; ?>"></script>
	<script src="<?php echo get_stylesheet_directory_uri() . '/script.js'; ?>"></script>

</body>
</html>
