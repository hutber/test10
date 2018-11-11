import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

//Components
import TypographyComp from '../../components/shared/typography'

//Helpers
import { maxLength } from '../../helpers/validation'

//themes
import { appBar } from "../../themes";

//actions
import { removeIdea, editIdea } from '../../actions/ideas';

class component extends PureComponent {
	deleteIdea (ideaIndex) {
		this.props.dispatch(removeIdea(ideaIndex));
	};

	limitCharacters ({currentTarget}) {
		const values = maxLength(5)(currentTarget.value);
		console.info(values);
	};

	editField ({currentTarget}, index) {
		const editType = currentTarget.id.split('_')[0];
		this.props.dispatch(editIdea({
			ideaId: index,
			editText: currentTarget.value,
			editType
		}));
	}

	render() {
		const {ideas: {items}} = this.props;
		return (
			<Grid container spacing={8}>
				{items.map((item, index) => <Grid item xs={4}>
					<Paper key={`${item.title}_as`}>
						<TextField
							id={`title_${index}`}
							label="Title"
							defaultValue={item.title}
							margin="normal"
							variant="outlined"
							onBlur={(el) => {this.editField(el, index)}}
						/>
						<TextField
							id={`description_${index}`}
							label="Description"
							defaultValue={item.description}
							helperText="Limited to 140 Chars"
							margin="normal"
							variant="outlined"
							disabled={false}
							onBlur={(el) => {this.editField(el, index)}}
							onChange={this.limitCharacters}
						/>
						<TypographyComp variantType='body1'>
							{item.description}
						</TypographyComp>
						<TypographyComp variantType='overline'>
							{item.createdDate.toLocaleDateString("en-UK")}
						</TypographyComp>
						<IconButton color="inherit" onClick={() => {this.deleteIdea(index)}}>
							<DeleteIcon/>
						</IconButton>
					</Paper>
				</Grid>)}
			</Grid>
		);
	}
}

component.propTypes = {
	classes: PropTypes.object.isRequired,
};

const withStylesComponent = withStyles(appBar)(component);

function mapStateToProps(state){
	return {
		ideas: state.ideas
	}
}
export default connect(mapStateToProps)(withStylesComponent);
