<?php namespace WSUWP\Theme\Explore; ?>

<?php Templates::include( 'panel-wrapper-start', $atts ); ?>
	<?php Templates::include( 'panel-background', $atts ); ?>
	<div class="wsu-explore-panel__container">
		<div class="wsu-explore-panel-start__title__wrapper">
			<h1 class="wsu-explore-panel-start__title"><?php echo esc_html( $atts['title'] ); ?></h1>
		</div>
		<button class="wsu-c-button wsu-explore-panel__next-slide">Explore</button>
		<div class="wsu-explore-panel-start__caption">
			<?php echo esc_html( $atts['caption'] ); ?>
		</div>
	</div>
<?php Templates::include( 'panel-wrapper-end', $atts ); ?>