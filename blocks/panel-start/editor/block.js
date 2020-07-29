import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
// import save from './save';
import edit from './edit';

 
registerBlockType( 
	'wsuwp-explore/panel-start',
	{
    	title: 'Start Panel',
    	icon: 'universal-access-alt',
		category: 'layout',
		attributes: {
			
			title: {
				type: 'string',
				default: '',
			},
			caption: {
				type: 'string',
				default: '',
			},
			backgroundCaption: {
				type: 'string',
				default: '',
			},
			backgroundImgCaptionUrl: {
				type: 'string',
				default: '',
			},
			backgroundImgSrc: {
				type: 'string',
				default: '',
			},
			backgroundImgFocalPoint: { 
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			backgroundImgDimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
			backgroundVideoSrc: {
				type: 'string',
				default: '',
			},
		},
		edit,
	} 
);