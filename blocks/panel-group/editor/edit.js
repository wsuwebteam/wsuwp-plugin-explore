import { InnerBlocks } from '@wordpress/block-editor';
import Pin from '../../../assets/src/components/Pin/Pin-2';

const {
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	Button,
	BaseControl,
	TextControl,
} = wp.components;


const remove_pin = ( index, attributes, setAttributes ) => {

	let pins = attributes.pins;

	pins.splice(index, 1);

	setAttributes( { 'pins': pins } );

	toggle_render( attributes, setAttributes );

}

const toggle_render = ( attributes, setAttributes ) => {

	let render = ( attributes.toggle_render ) ? false : true;

	setAttributes( { 'toggle_render': render } );

}


const add_pin = ( attributes, setAttributes ) => {

	console.log( attributes );

	let pin = [['','','','']];

	let pins = attributes.pins;

	pins = pins.concat( pin );
	
	setAttributes( { 'pins': pins } );

}


const get_pin = ( pin, index, attributes, setAttributes ) => {

	let pins = attributes.pins;

		return (
			<div key={index} className={'wsu-comp-pin wsu-comp-pin-' + index }>
				<div className="wsu-comp-pin__controls">
					<fieldset>
						<legend>Pin: {pin[0]}</legend>
						<TextControl
							label="Label"
							value={pin[0]}
							placeholder={'Location Label'}
							className='wsu-comp-pin__input-label'
							onChange={ (value) => { 
								console.log(value); 
								pin[0] = value;
								pins[ index ] = pin;
								setAttributes( {'pins': pins } );
								toggle_render(attributes, setAttributes );
							} }
						/>
						<TextControl
							label="X:"
							value={ pin[1] }
							placeholder={'50'}
							className='wsu-comp-pin__input-x'
							onChange={ (value) => { 
								console.log(value); 
								pin[1]= value;
								pins[ index ] = pin;
								setAttributes( {'pins': pins } );
								toggle_render(attributes, setAttributes );
							} }
						/>
						<TextControl
							label="Y:"
							value={ pin[2] }
							placeholder={'50'}
							className='wsu-comp-pin__input-y'
							onChange={ (value) => { 
								console.log(value); 
								pin[2] = value;
								pins[ index ] = pin;
								setAttributes( {'pins': pins } );
								toggle_render(attributes, setAttributes );
							} }
						/>
						<TextControl
							label="Slide Index"
							value={ pin[3] }
							placeholder={'0'}
							className='wsu-comp-pin__input-slide'
							onChange={ (value) => { 
								console.log(value); 
								pin[3] = value;
								pins[ index ] = pin;
								setAttributes( {'pins': pins } );
								toggle_render(attributes, setAttributes );
							} }
						/>
						<Button isLink onClick={ (e) => { remove_pin( index, attributes, setAttributes ) } } >Remove Pin</Button>
					</fieldset>
				</div>
			</div>
		);

}


const panelGroupEdit = ( {className, attributes, setAttributes  } ) => {

	let map_style = {
		backgroundImage: 'url(' + attributes.map_src + ')', 
	}

	console.log( attributes.pins );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Map" initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ map_src: media.url })}
							// allowedTypes={ALLOWED_MEDIA_TYPES}
							// value={mediaId}
							render={({ open }) => (
								<BaseControl label="Replace Background Image">
									<Button isLink onClick={open}>Open Media Library</Button>
								</BaseControl>
							)}
						/>
					</MediaUploadCheck>
					{ attributes.pins.map( ( pin, index ) => get_pin( pin, index, attributes, setAttributes  ) ) }
					<Button isLink onClick={ (e) => { add_pin( attributes, setAttributes ) } } >Add Pin</Button>
				</PanelBody>
			</InspectorControls>
			<div className="wsu-explore-panel-group__wrapper">
				<div className="wsu-explore-panel-group">
					<div className="wsu-explore-panel-group__controls">
					</div>
					<div className="wsu-explore-panel-group__panels">
					<InnerBlocks 
						allowedBlocks={ [ 'wsuwp-explore/panel-image','wsuwp-explore/panel-start','wsuwp-explore/panel-slider','wsuwp-explore/panel-content' ] }
						template={ [ [ 'wsuwp-explore/panel-start', {} ] ] } 
					/>
					</div>
				</div>
			</div>
		</>
	);
};

export default panelGroupEdit;