import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import save from './save';
import edit from './edit';

 
registerBlockType( 
	'wsuwp-explore/panel-group', 
	{
    	title: 'Explore Panel Group',
    	icon: 'universal-access-alt',
    	category: 'layout',
		attributes: {
			type: {
				type: 'string',
				default: '',
			},
			map_src: {
				type: 'string',
				default: '',
			},
			pins: {
				type: 'array',
				default: [ ['','','',''] ],
			},
			toggle_render: {
				type: 'boolean',
				default: false,
			}
		},
		edit,
		save
	} 
);