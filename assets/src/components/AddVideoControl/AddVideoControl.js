import React, { Component } from 'react';
import SlidePanel from '../SlidePanel/SlidePanel';

const { TextControl } = wp.components;


class AddVideoControl extends Component {

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
			<div class="wsuwp-explore-control__add-audio__wrapper">
				<button 
					className="wsuwp-explore-control__add-audio"
					onClick={ ( e ) => this.togglePanel() }
					>
					<span className="wsu-icon wsu-i-play-circle"></span>Add Video
				</button>
				<SlidePanel 
					position="above"
					slide="left"
					isActive={this.state.active}
					onClose={ () => this.togglePanel() }
					>
						<TextControl
						label="WebM URL"
						value={this.props.videoSrcWebm}
						onChange={(content) => this.props.onChange({ videoSrcWebm:content })}
						placeholder={'Enter video URL here.'}
					/>
					<TextControl
						label="Vimeo (MP4) Video URL"
						value={this.props.videoSrcMp4}
						onChange={(content) => this.props.onChange({ videoSrcMp4:content })}
						placeholder={'Enter video URL here.'}
					/>
				</SlidePanel>
			</div>
		)

	}

}

export default AddVideoControl;