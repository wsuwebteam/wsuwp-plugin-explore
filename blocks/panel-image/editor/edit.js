const { __ } = wp.i18n;

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

import '../../../assets/src/scss/partials/_editor-panel.scss';
import './style.scss';

import PanelCaption from '../../../assets/src/components/PanelCaption/panel-caption';

const PanelImage = ( {className, attributes, setAttributes  } ) => {

	return ( 
		<>
			<InspectorControls>
			<PanelBody title="General" initialOpen={false}>
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter image title text here.'}
					/>
					<TextControl
						label="Caption"
						value={attributes.caption}
						onChange={(caption) => setAttributes({ caption })}
						placeholder={'Enter image caption text here.'}
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
						<TextControl
							label="Narrator Name"
							value={attributes.narratorName}
							onChange={( narratorName ) => setAttributes( {narratorName} )}
							placeholder={'Enter audio url here.'}
						/>
						<TextControl
							label="Audio URL"
							value={attributes.narratorAudioSrc}
							onChange={( url ) => setAttributes( { narratorAudioSrc:url } )}
							placeholder={'Enter audio url here.'}
						/>
						<TextControl
							label="Narration Caption"
							value={attributes.narrationCaption}
							onChange={( narrationCaption ) => setAttributes( { narrationCaption } )}
							placeholder={'Enter audio url here.'}
						/>
					</PanelBody>
			</InspectorControls>
			<div className="wsu-explore-panel__wrapper wsu-explore-panel--image" >
				<div 
					className="wsu-explore-panel__background"
					style={{ backgroundImage: "url(" + attributes.backgroundImgSrc + ")", backgroundPositionX: (attributes.backgroundImgFocalPoint.x * 100) + '%', backgroundPositionY: (attributes.backgroundImgFocalPoint.y * 100) + '%' }}
					></div>
				<div className="wsu-explore-panel__container">
					<div className="wsu-explore-panel-image__wrapper">
						<PanelCaption
							title={attributes.backgroundImgTitle}
							caption={attributes.backgroundImgCaption}
							onTitleChange={ ( title ) => { setAttributes( { 'backgroundImgTitle':title} );console.log( title ) } }
							onCaptionChange={ ( caption ) => setAttributes( { 'backgroundImgCaption':caption} ) }
						/>
					</div>
				</div> 
			</div>
		</>
	)
}

export default PanelImage;