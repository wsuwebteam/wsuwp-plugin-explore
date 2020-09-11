const { __ } = wp.i18n;

const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
	ToggleControl
} = wp.components;

import '../../../assets/src/scss/partials/_editor-panel.scss';
import './style.scss';

import {AudioNarrator } from '../../../packages/block-components/index';

import PanelCaption from '../../../assets/src/components/PanelCaption/panel-caption';
import { 
	PanelContentControl,
	PanelSettingsControl
} from '../../../packages/block-controls';

const PanelSlider = ( {className, attributes, setAttributes  } ) => {

	return ( 
		<>
			<InspectorControls>
				<PanelBody title="General" initialOpen={false}>
					<PanelContentControl
						attributes={attributes}
						setAttributes={setAttributes}
					/>
				</PanelBody>
				<PanelBody title="Panel Settings" initialOpen={false}>
					<PanelSettingsControl
						attributes={attributes}
						setAttributes={setAttributes}
					/>
				</PanelBody>
				<PanelBody title="Inner Slide Settings" initialOpen={false}>
					<ToggleControl
						label="Auto Rotate"
						checked={ attributes.auto }
						onChange={ ( value ) => setAttributes( {auto: ( value ) ? 1 : 0 })}
					/>
					<ToggleControl
						label="Auto Play"
						checked={ attributes.play }
						onChange={ ( value ) => setAttributes( {play: ( value ) ? 1 : 0 })}
					/>
					<TextControl
						label="Timing"
						value={attributes.timing}
						onChange={(timing) => setAttributes({ timing })}
						placeholder={'Comma separated list in milliseconds.'}
					/>
				</PanelBody>
				<PanelBody title="Background" initialOpen={false}>
					<TextControl
						label="Title"
						value={attributes.backgroundImgTitle}
						onChange={(backgroundImgTitle) => setAttributes({ backgroundImgTitle })}
						placeholder={'Enter image title text here.'}
					/>
					<TextControl
						label="Caption"
						value={attributes.backgroundCaption}
						onChange={(backgroundCaption) => setAttributes({ backgroundCaption })}
						placeholder={'Enter image caption text here.'}
					/>
					{ attributes.backgroundImgSrc &&
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the background to resize around."
						>
							<FocalPointPicker
								url={attributes.backgroundImgSrc}
								dimensions={attributes.backgroundImgDimensions}
								value={attributes.backgroundImgFocalPoint}
								onChange={(focalPoint) => setAttributes({ backgroundImgFocalPoint: focalPoint })}
							/>
						</BaseControl>
					}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ backgroundImgSrc: media.url })}
							// allowedTypes={ALLOWED_MEDIA_TYPES}
							// value={mediaId}
							render={({ open }) => (
								<BaseControl label="Replace Background Image">
									<Button isLink onClick={open}>Open Media Library</Button>
								</BaseControl>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title="Narration" initialOpen={false}>
					<AudioNarrator attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
			</InspectorControls>
			<div className="wsu-explore-panel__wrapper wsu-explore-panel--image" >
				<div 
					className="wsu-explore-panel__background"
					style={{ backgroundImage: "url(" + attributes.backgroundImgSrc + ")", backgroundPositionX: (attributes.backgroundImgFocalPoint.x * 100) + '%', backgroundPositionY: (attributes.backgroundImgFocalPoint.y * 100) + '%' }}
					></div>
				<div className="wsu-explore-panel__container">
					<div className="wsu-explore-panel-image__wrapper">
						<span className="wsu-explore-panel__slider-title">{attributes.title}</span>
						<InnerBlocks 
							allowedBlocks={ [ 'wsuwp-explore/panel-slide' ] }
							
						/>
					</div>
				</div> 
			</div>
		</>
	)
}

export default PanelSlider;