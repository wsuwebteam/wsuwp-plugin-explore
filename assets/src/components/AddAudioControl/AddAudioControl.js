import React, { Component } from 'react';
import SlidePanel from '../SlidePanel/SlidePanel';

const { TextControl } = wp.components;


class AddAudioControl extends Component {

	constructor( props ) {

		super(props);

		this.state = {
			active: false,
		}

	}

	togglePanel() {

		let isActive = ( this.state.active ) ? false : true;
		this.setState( { active: isActive } );

	}


	render() {

		return (
			<div class="wsuwp-explore-control__add-video__wrapper">
				<button 
					className="wsuwp-explore-control__add-video"
					onClick={ ( e ) => this.togglePanel() }
					>
					<span className="wsu-icon wsu-i-play"></span>Add Audio
				</button>
				<SlidePanel 
					position="above"
					slide="left"
					isActive={this.state.active}
					onClose={ () => this.togglePanel() }
					>
					<TextControl
						label="Audio File URL"
						value={this.props.audioSrc}
						onChange={(content) => this.props.onChange({ audioSrc:content })}
						placeholder={'Enter audio url here.'}
						/>
				</SlidePanel>
			</div>
		)

	}

}

export default AddAudioControl;