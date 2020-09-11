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


const ImageUploadControl = ( { attributes, setAttributes } ) => {

	attributes.imageFocalPoint = attributes.hasOwnProperty('imageFocalPoint') ? attributes.imageFocalPoint : '';
	attributes.imageDimensions = attributes.hasOwnProperty('imageDimensions') ? attributes.imageDimensions : { width: 1070, height: 500 };
	attributes.imageSrc = attributes.hasOwnProperty('imageSrc') ? attributes.imageSrc: '';


	return (

		<>
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
		</>
	)
}

export default ImageUploadControl;