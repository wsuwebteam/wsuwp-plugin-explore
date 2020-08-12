<div class="wsu-explore-panel-group__map__wrapper">
	<div class="wsu-explore-panel-group__map">
		<img src="<?php echo esc_url( $atts['map_src'] ); ?>" />
		<?php foreach( $atts['pins'] as $pin ) : ?>
		<button  
			class="wsu-explore-panel-group__map__pin" 
			data-slide="<?php echo esc_html( $pin[3] ); ?>"
			style="top:<?php echo esc_html( $pin[1] ); ?>%;left:<?php echo esc_html( $pin[2] ); ?>%"
			><span class="wsu-icon wsu-i-map-location"></span>
			<?php echo esc_html( $pin[0] ); ?>
		</button>
		<?php endforeach; ?>
	</div>
</div>