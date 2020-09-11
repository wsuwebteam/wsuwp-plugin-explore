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

import './style.scss';


const PanelSlide = ( {className, attributes, setAttributes  } ) => {

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
				</PanelBody>
				<PanelBody title="Background Image" initialOpen={false}>
					{ attributes.imageSrc &&
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the background to resize around."
						>
							<FocalPointPicker
								url={attributes.imageSrc}
								dimensions={attributes.imageDimensions}
								value={attributes.imageFocalPoint}
								onChange={(focalPoint) => setAttributes({ imageFocalPoint: focalPoint })}
							/>
						</BaseControl>
					}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ imageSrc: media.url })}
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
				<PanelBody title="Background Video" initialOpen={false}>
					<TextControl
						label="Video URL (Vimeo)"
						value={attributes.videoSrc}
						onChange={(videoSrc) => setAttributes({ videoSrc })}
						placeholder={'Enter video url here.'}
					/>
					<TextControl
						label="Video Title"
						value={attributes.videoTitle}
						onChange={(videoTitle) => setAttributes({ videoTitle })}
						placeholder={'Enter video title here.'}
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ thumbnailImageSrc: media.url })}
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
			<div 
				className="wsu-explore-block wsu-explore-block-slide"
				style={ {backgroundImage:'url('+attributes.imageSrc+')'}}
				>

			</div>
		</>
	)
}

export default PanelSlide;