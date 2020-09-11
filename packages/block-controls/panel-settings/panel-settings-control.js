const {
	ToggleControl,
	TextControl,
} = wp.components;

const PanelSettingsControl = ( { attributes, setAttributes } ) => {

	return (
		<>
			<ToggleControl
				label="Auto Advance"
				checked={ attributes.autoAdvance }
				onChange={ ( autoAdvance ) => setAttributes( { autoAdvance } ) }
			/>
			<TextControl
				label="Advance After (ms)"
				value={attributes.delay}
				onChange={(delay) => setAttributes({ delay })}
				placeholder={'Delay till advance.'}
			/>
			<TextControl
				label="Delay After Audio (ms)"
				value={attributes.delayAudio}
				onChange={(delayAudio) => setAttributes({ delayAudio })}
				placeholder={'Delay after audio.'}
			/>
		</>
	)
	
}

export default PanelSettingsControl;