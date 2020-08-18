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

const AudioNarrator = ( { attributes, setAttributes } ) => {

	return (
		<>
			<TextControl
				label="Narrator Name"
				value={attributes.narratorName}
				onChange={( narratorName ) => setAttributes( {narratorName} )}
				placeholder={'Enter narrator name.'}
			/>
			<TextControl
				label="Narrator Title"
				value={attributes.narratorTitle}
				onChange={( narratorTitle ) => setAttributes( {narratorTitle} )}
				placeholder={'Enter narrator title here'}
			/>
			<TextControl
				label="Audio URL"
				value={attributes.narratorAudioSrc}
				onChange={( url ) => setAttributes( { narratorAudioSrc:url } )}
				placeholder={'Enter audio url here.'}
			/>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ narratorThumbnail: media.url })}
					// allowedTypes={ALLOWED_MEDIA_TYPES}
					// value={mediaId}
					render={({ open }) => (
						<BaseControl label="Add Narrator Thumbnail">
							<Button isLink onClick={open}>Open Media Library</Button>
						</BaseControl>
					)}
				/>
			</MediaUploadCheck>
		</>
	)

}

export default AudioNarrator;