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
	BaseControl,
	ToggleControl
} = wp.components;

import '../../../assets/src/scss/partials/_editor-panel.scss';
import './style.scss';

const PanelStart = ( {className, attributes, setAttributes  } ) => {

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter title text here.'}
					/>
					<TextControl
						label="Caption"
						value={attributes.caption}
						onChange={(caption) => setAttributes({ caption })}
						placeholder={'Enter caption text here.'}
					/>
				</PanelBody>
				<PanelBody title="Panel Settings" initialOpen={false}>
					<ToggleControl
						label="Show Loading Screen"
						checked={ attributes.showLoading }
						onChange={ ( showLoading ) => setAttributes( { showLoading } ) }
					/>
				</PanelBody>
				<PanelBody title="Background" initialOpen={false}>
					<TextControl
						label="Background Video"
						value={attributes.backgroundVideoSrc}
						onChange={(backgroundVideoSrc) => setAttributes({ backgroundVideoSrc })}
						placeholder={'Vimeo URL.'}
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
			</InspectorControls>
			<div className="wsu-explore-panel__wrapper wsu-explore-panel--start" >
				<div 
					className="wsu-explore-panel__background"
					style={{ backgroundImage: "url(" + attributes.backgroundImgSrc + ")", backgroundPositionX: (attributes.backgroundImgFocalPoint.x * 100) + '%', backgroundPositionY: (attributes.backgroundImgFocalPoint.y * 100) + '%' }}
					></div>
				<div className="wsu-explore-panel__container">
					<div className="wsu-explore-panel-start__wrapper">
						<span className="wsu-icon wsu-i-play-circle"></span>
						<div className="wsu-explore-panel-start__title">
							<RichText
								tagName="h1"
								value={attributes.title}
								onChange={(title) => setAttributes({ title })}
								allowedFormats={[]}
								placeholder="Enter title text here"
							/>
						</div>
						<div className="wsu-explore-panel-start__caption">
							<RichText
								tagName="div"
								value={attributes.caption}
								onChange={(caption) => setAttributes({ caption })}
								allowedFormats={[]}
								placeholder="Enter caption text here"
							/>
						</div>
					</div>
				</div> 
			</div>
		</>
	)
}

export default PanelStart;