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
import { removeIdea } from '../../actions/ideas';

class component extends PureComponent {
	deleteIdea = (ideaIndex) => {
		this.props.dispatch(removeIdea(ideaIndex));
	};

	limitCharacters = ({currentTarget}) => {
		return maxLength(5)(currentTarget.value);
	}

	render() {
		const {ideas} = this.props;
		return (
			<Grid container spacing={8}>
				{ideas.map((item, index) => <Grid item xs={4}>
					<Paper key={`${item.title}_as`}>
						<TextField
							id={`title_${index}`}
							label="Title"
							defaultValue={item.title}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							id={`description_${index}`}
							label="Description"
							defaultValue={item.description}
							helperText="Limited to 140 Chars"
							margin="normal"
							variant="outlined"
							disabled={false}
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
		ideas: state.ideas.items
	}
}
export default connect(mapStateToProps)(withStylesComponent);
