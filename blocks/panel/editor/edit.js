import { InnerBlocks } from '@wordpress/block-editor';
import OptionSetControl from '../../../assets/src/components/OptionSetControl/OptionSetControl';
import BackgroundControl from '../../../assets/src/components/BackgroundControl/BackgroundControl';
import AddAudioControl from '../../../assets/src/components/AddAudioControl/AddAudioControl';
import AddVideoControl from '../../../assets/src/components/AddVideoControl/AddVideoControl';


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

const getPanelType = ( props ) => {

	let panel = {
		allowedBlocks: [],
		template:[],
		templateLock:'',
	};

	switch ( props.type ) {

		case 'intro':
			panel.allowedBlocks=[ 'wsuwp-explore/panel-subtitle','wsuwp-explore/panel-title','panel-caption' ];
			panel.template = [];
			panel.templateLock = 'All';
			break;
		case 'slide':
			panel.allowedBlocks=[ 'wsuwp-explore/panel-slide-group' ];
			panel.template = [
				[ 'wsuwp-explore/panel-slide-group', {} ]
			];
			panel.templateLock = 'All';
			break;

		case 'content':
			panel.allowedBlocks=[ 'wsuwp-explore/panel-content' ];
			panel.template = [
				[ 'wsuwp-explore/panel-content', {} ],
			];
			panel.templateLock = 'All';
			break;

		case 'gallery':
			panel.allowedBlocks=[ 'wsuwp-explore/image-gallery' ];
			panel.template = [
				[ 'wsuwp-explore/image-gallery', {} ],
			];
			panel.templateLock = 'All';
			break;

	}

	return panel;

}

const panelOptionsActive = ( attributes ) =>  {

	return ( attributes.type ) ? true : false;

}

const panelEdit = ( {className, attributes, setAttributes  } ) => {

	console.log( attributes );

	let panel = getPanelType( attributes );

	let panelOptions = [
		{
			label:'Intro Panel',
			value:'intro',
			icon: '',
		},
		/*{
			label:'Slide Panel',
			value:'slide',
			icon: '',
		},
		{
			label:'Gallery Panel',
			value:'gallery',
			icon: '',
		},
		{
			label:'Content Panel',
			value:'content',
			icon: '',
		},*/
	];

	let panelStyle = {
		backgroundImage: 'url(' + attributes.img_src + ')', 
	}

	return (
		<>
		{
				<InspectorControls>
					<PanelBody title="General">
						<TextControl
							label="Title"
							value={attributes.title}
							onChange={(title) => setAttributes({ title })}
							placeholder={'Enter title text here.'}
						/>

						<TextControl
							label="Subtitle"
							value={attributes.subtitle}
							onChange={(subtitle) => setAttributes({ subtitle })}
							placeholder={'Enter subtitle text here.'}
						/>

						<TextControl
							label="Image Caption"
							value={attributes.img_caption}
							onChange={(img_caption) => setAttributes({ img_caption })}
							placeholder={'Enter image caption text here.'}
						/>

						<TextControl
							label="Button Text"
							value={attributes.button_text}
							onChange={(button_text) => setAttributes({ button_text })}
							placeholder={'Enter button text here.'}
						/>

						<BaseControl label="Button Link Destination">
							<URLInput
								id="bannerButtonLink"
								className={'wsu-c-block__banner__editor__content__link'}
								value={attributes.url}
								onChange={(url, post) => setAttributes({ url })}
								placeholder={'Button Link'}
								isFullWidth
							/>
						</BaseControl>

						<SelectControl
							label="Display Style"
							value=''
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'San Juan', value: 'san-juan' },
								{ label: 'Olympic', value: 'olympic' }
							]}
						/>
					</PanelBody>
					<PanelBody title="Narration" initialOpen={false}>
						<TextControl
							label="Vimeo Video URL"
							value={attributes.vimeo_video_src}
							onChange={(url) => setAttributes({ "vimeo_video_src":url })}
							placeholder={'Enter button text here.'}
						/>
						<TextControl
							label="WebM Video URL"
							value={attributes.webm_video_src}
							onChange={(url) => setAttributes({ "webm_video_src":url })}
							placeholder={'Enter button text here.'}
						/>
						<TextControl
							label="Audio URL"
							value={attributes.audio_src}
							onChange={(url) => setAttributes({ "audio_src":url })}
							placeholder={'Enter button text here.'}
						/>
					</PanelBody>

					<PanelBody title="Background" initialOpen={false}>
						<TextControl
							label="Vimeo Video URL"
							value={attributes.bg_video_src}
							onChange={(url) => setAttributes({ "bg_video_src":url })}
							placeholder={'Enter button text here.'}
						/>
						<ToggleControl
							label={'360 Video'}
							checked={ attributes.bg_video_is_360 }
							onChange={ ( value ) =>
								setAttributes( { 'bg_video_is_360': value } )
							}
						/>
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the background to resize around."
						>
							<FocalPointPicker
								url={attributes.img_src}
								dimensions={attributes.img_dimensions}
								value={attributes.img_focal_point}
								onChange={(focalPoint) => setAttributes({ img_focal_point: focalPoint })}
							/>
						</BaseControl>

						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ img_src: media.url })}
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
			}
			<div className="wsuwp-explore-panel__wrapper wsuwp-admin-editor" style={ panelStyle } >
				<div className={"wsuwp-explore-panel wsuwp-explore-panel--" + attributes.type }>
					<header className="wsuwp-explore-panel__header">
						<div className="wsuwp-explore-panel__control__wrapper">
						</div>
					</header>
					<section className="wsuwp-explore-panel__content">
						<InnerBlocks 
							allowedBlocks={ panel.allowedBlocks }
							template={ panel.template }
							templateLock={ panel.templateLock }
						/>
					</section>
					<footer className="wsuwp-explore-panel__footer">
						<div class="wsuwp-explore-panel__media-options">
						</div>
					</footer>
				</div>
				<OptionSetControl
					isActive={ ( attributes.type ) ? false : true }
					options={ panelOptions }
					onChange={ setAttributes }
				/>
			</div>
		</>
	);
};

export default panelEdit;