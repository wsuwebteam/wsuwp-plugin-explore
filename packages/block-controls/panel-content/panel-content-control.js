const {
	TextControl,
} = wp.components;

const PanelContentControl = ( { attributes, setAttributes } ) => {

	return (
		<>
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
			<TextControl
				label="Label"
				value={attributes.label}
				onChange={(label) => setAttributes({ label })}
				placeholder={'Enter slide label here.'}
			/>
		</>
	)
	
}

export default PanelContentControl;