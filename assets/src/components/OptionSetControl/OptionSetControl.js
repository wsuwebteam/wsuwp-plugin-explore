
const OptionControl = ( props ) => {

	return (
		<li className="wsuwp-explore-control__option-set__option" onClick={ (e) => { props.onChange( { 'type': props.option.value } ) } }>{props.option.label}</li>
	)

}


const OptionSetControl = ( props ) => {

	console.log( props );

	let activeClass = ( props.isActive ) ? 'active':'';

	return (
		<div className={"wsuwp-explore-control__option-set " + activeClass }>
			<ul className="wsuwp-explore-control__option-set__options">
			{props.options.map( (option, i ) => {     
				return (<OptionControl key={i} option={option} onChange={ props.onChange } />) 
			})}
			</ul>
		</div>
	);

}

export default OptionSetControl;