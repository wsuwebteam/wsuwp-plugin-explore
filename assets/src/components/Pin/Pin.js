import React, { Component } from 'react';
import ReactDOM from "react-dom";

const { TextControl } = wp.components;


const Pin = ( props ) => {

		let pin_data = { 
			label: props.label, 
			position: { 
				x:props.position.x, 
				y:props.position.y
			}, 
			slide:props.slide 
		};


		return (
			<div className='wsu-comp-pin'>
				<div className="wsu-comp-pin__controls">
					<fieldset>
						<legend>Pin: {props.label}</legend>
						<TextControl
							label="Label"
							value={props.label}
							placeholder={'Location Label'}
							className='wsu-comp-pin__input-label'
							onChange={ (value) => { console.log(value); pin_data.label = value; props.onChange( pin_data, props.index ) } }
						/>
						<TextControl
							label="X:"
							value={ props.position.x }
							placeholder={'50'}
							className='wsu-comp-pin__input-x'
							onChange={ (value) => { pin_data.position.x = value; props.onChange( pin_data, props.index ) } }
						/>
						<TextControl
							label="Y:"
							value={props.position.x}
							placeholder={'50'}
							className='wsu-comp-pin__input-y'
							onChange={ (value) => { pin_data.position.y = value; props.onChange( pin_data, props.index ) } }
						/>
					</fieldset>
				</div>
			</div>
		)
	}

export default Pin;
