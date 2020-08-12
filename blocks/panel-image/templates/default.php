<?php namespace WSUWP\Theme\Explore; ?>

<?php Templates::include( 'panel-wrapper-start', $atts ); ?>
	<?php Templates::include( 'panel-background', $atts ); ?>
	<div class="wsu-explore-panel__container">
		
	</div>
	<?php Block_Panel_Footer::render_block( $atts, $content, true ); ?>
<?php Templates::include( 'panel-wrapper-end', $atts ); ?>