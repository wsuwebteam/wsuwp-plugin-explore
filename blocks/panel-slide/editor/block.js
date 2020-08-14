import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
// import save from './save';
import edit from './edit';

 
registerBlockType( 
	'wsuwp-explore/panel-slide',
	{
    	title: 'Panel Slide',
    	icon: 'universal-access-alt',
		category: 'layout',
		attributes: {
			
			title: {
				type: 'string',
				default: '',
			},
			backgroundCaption: {
				type: 'string',
				default: '',
			},
			imageSrc: {
				type: 'string',
				default: '',
			},
			imageFocalPoint: { 
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			imageDimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
			videoSrc: {
				type: 'string',
				default: '',
			},
			videoTitle: {
				type: 'bool',
				default: false,
			},
			is360: {
				type: 'bool',
				default: false,
			},
			thumbnailImageSrc: {
				type: 'string',
				default: '',
			},
		},
		edit,
	} 
);