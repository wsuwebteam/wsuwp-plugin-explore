import React, { Component } from 'react';
import ReactDOM from "react-dom";

const { TextControl } = wp.components;


class Pin extends Component {

	constructor( props ) {

		super(props);

		this.state = {
			index: props.index,
			label: props.label,
			position_x:props.position.x,
			position_y:props.position.y,
			slide: props.slide,
		}

	}


	return_pin() {
		this.props.onChange( 
			{ 
				label: this.state.label, 
				position: { 
					x:this.state.position_x, 
					y:this.state.position_y
				}, 
				slide:this.state.slide 
			},
			this.state.index
		);
	}

	



	render() {

		let active = ( this.state.active ) ? 'active' : 'inactive';

		return (
			<div 
				className={'wsu-comp-pin is-' + active } 
				onClick={ (e) => { this.setState( { active : true } )}}
				style={{ left: this.props.position.x + '%', top: this.props.position.y + '%' }}
				>
				<div className="wsu-comp-pin__controls">
					<fieldset>
						<legend>Pin: {this.props.label}</legend>
						<TextControl
							label="Label"
							value={this.state.label}
							placeholder={'Location Label'}
							className='wsu-comp-pin__input-label'
							onChange={ (value) => { console.log( value ); this.setState( { label : value } ); this.return_pin() } }
						/>
						<TextControl
							label="X:"
							value={ this.props.position.x }
							placeholder={'50'}
							className='wsu-comp-pin__input-x'
							onChange={ (value) => { this.setState( { position_x : value } ); this.return_pin() } }
						/>
						<TextControl
							label="Y:"
							value={this.props.position.x}
							placeholder={'50'}
							className='wsu-comp-pin__input-y'
							onChange={ (value) => { this.setState( { position_y : value } ); this.return_pin() } }
						/>
					</fieldset>
				</div>
			</div>
		)
	}

}

export default Pin;
