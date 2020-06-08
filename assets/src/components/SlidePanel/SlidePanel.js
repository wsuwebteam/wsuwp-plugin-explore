const SlidePanel = ( props ) => {

	let activeClass = ( props.isActive ) ? 'active':'';
	let positionClass = ( props.position ) ? 'slide-panel-position-' + props.position : 'slide-panel-position-below';
	let directionClass = ( props.slide ) ? 'slide-panel-direction-' + props.slide : 'slide-panel-direction-right';
	
	let wrapperClasses = [ activeClass, positionClass, directionClass ];


	return (

		<div className={"wsuwp-explore-control__slide-panel__wrapper " + wrapperClasses.join(' ') }>
			<div className="wsuwp-explore-control__slide-panel">
				<button className="wsuwp-explore-control__slide-panel__close"
				onClick={ props.onClose }
				><span class="wsu-icon wsu-i-x-close"></span>Close</button>
				{props.children}
			</div>
		</div>

	)


}

export default SlidePanel;