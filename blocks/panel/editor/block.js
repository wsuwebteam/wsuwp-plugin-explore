import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import save from './save';
import edit from './edit';

 
registerBlockType( 
	'wsuwp-explore/panel', 
	{
    	title: 'Explore Panel',
    	icon: 'universal-access-alt',
		category: 'layout',
		attributes: {
			bg_video_src: {
				type: 'string',
				default: '',
			},
			bg_video_is_360: {
				type: 'boolean',
				default: false,
			},
			img_src: {
				type: 'string',
				default: '',
			},
			img_focal_point: {
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			img_dimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
			img_caption: {
				type: 'string',
				default: ''
			},
			title: {
				type: 'string',
				default: '',
			},
			subtitle: {
				type: 'string',
				default: '',
			},
			type: {
				type: 'string',
				default: '',
			},
			url: {
				type: 'string',
				default: '',
			},
			button_text: {
				type: 'string',
				default: '',
			},
			caption_text: {
				type: 'string',
				default: '',
			},
			audio_src: {
				type: 'string',
				default: '',
			},
			webm_video_src: {
				type: 'string',
				default: '',
			},
			vimeo_video_src: {
				type: 'string',
				default: '',
			}
		},
		edit,
		save
	} 
);