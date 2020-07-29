const { __ } = wp.i18n;

const {
	RichText,
} = wp.blockEditor;

const PanelCaption = ( props ) => {

	return (
		<div className="wsu-explore-panel-caption">
			<h2 className="wsu-explore-panel-caption__title">
				<RichText
					tagName="div"
					value={props.title}
					onChange={(title) => props.onTitleChange( title )}
					allowedFormats={[]}
					placeholder={'Enter caption text here.'}
				/></h2>
			<div className="wsu-explore-panel-caption__caption">
				<RichText
					tagName="div"
					value={props.caption}
					onChange={(caption) => props.onCaptionChange( caption )}
					allowedFormats={[]}
					placeholder={'Enter caption text here.'}
				/>
			</div>
		</div>
	)

}

PanelCaption.defaultProps = {
	title:'',
	caption:'',
	className:'',
}


export default PanelCaption;