import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import save from './save';
import edit from './edit';

import { 
	panelContentAtts,
	panelSettingsAtts
} from '../../../packages/block-controls';

 
registerBlockType( 
	'wsuwp-explore/panel-slider', 
	{
    	title: 'Slideshow Panel',
    	icon: 'universal-access-alt',
		category: 'layout',
		attributes: {
			...panelContentAtts,
			...panelSettingsAtts,
			backgroundImgTitle: {
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
			narratorAudioSrc: {
				type: 'string',
				default: '',
			},
			narrationCaption: {
				type: 'string',
				default: '',
			},
			narratorName: {
				type: 'string',
				default: '',
			},
			narratorThumbnail: {
				type: 'string',
				default: '',
			},
			narratorTitle: {
				type: 'string',
				default: '',
			},
			timing: {
				type: 'string',
				default: '',
			},
			play: {
				type: 'number',
				default: 0,
			},
			auto: {
				type: 'number',
				default: 1,
			},
		},
		edit,
		save
	} 
);