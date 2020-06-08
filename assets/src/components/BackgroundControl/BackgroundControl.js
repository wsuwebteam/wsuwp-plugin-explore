import React, { Component } from 'react';
import SlidePanel from '../SlidePanel/SlidePanel';
const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

class BackgroundControl extends Component {

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
			<div className="wsuwp-explore-control__background__wrapper">
				<button 
					className="wsuwp-explore-control__background"
					onClick={ ( e ) => this.togglePanel() }
					>
					<span className="wsu-icon wsu-i-settings"></span>Edit Background
				</button>
				<SlidePanel 
					isActive={this.state.active}
					onClose={ () => this.togglePanel() }
					>
					<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => this.props.onChange({ bgImgSrc: media.url } ) }
								// allowedTypes={ALLOWED_MEDIA_TYPES}
								// value={mediaId}
								render={({ open }) => (
									<BaseControl label="Replace Background Image">
										<Button isLink onClick={open}>Open Media Library</Button>
									</BaseControl>
								)}
							/>
						</MediaUploadCheck>
				</SlidePanel>
			</div>
		)

	}

}

export default BackgroundControl;