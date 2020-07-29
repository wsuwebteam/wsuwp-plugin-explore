<?php namespace WSUWP\Theme\Explore; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sequence Proof of Concept</title>
	<link rel='stylesheet' id='wsu_design_system_normalize-css'  href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css?ver=0.6.0' type='text/css' media='all' />
	<link rel="stylesheet" href="https://cdn.web.wsu.edu/designsystem/1.x/build/dist/wsu-design-system.bundle.dist.css">
	<link rel="stylesheet" href="https://cdn.web.wsu.edu/designsystem/1.x/wsu-icons/dist/wsu-icons.bundle.css">
	<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
	<link rel="stylesheet" href="<?php echo Explore::get('url') . '/assets/dist/public.css?v=' . filemtime( Explore::get('directory') . '/assets/dist/public.css' ); ?>">
	<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
	<script src="https://player.vimeo.com/api/player.js"></script>
</head>
<body>
<?php if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
		the_content();
	}
} ?>
<script src="<?php echo Explore::get('url'); ?>/assets/dist/public.js?v=<?php echo filemtime( Explore::get('directory') . '/assets/dist/public.css' ); ?>"></script>
</body>
</html>