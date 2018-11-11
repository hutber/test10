import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';

//Themes
import { appBar } from '../../themes';

//actions
import { addNewIdea } from '../../actions/ideas'

class PrimarySearchAppBar extends PureComponent {
	handleAddIdeaToBoard = () => {
		this.props.dispatch(addNewIdea());
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.title} variant="h6" color="inherit" noWrap>
							Idea Board
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton color="inherit" onClick={this.handleAddIdeaToBoard}>
								<AddIcon />
							</IconButton>
							<IconButton color="inherit">
								<Badge badgeContent={this.props.ideas.length} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

const withStylesComponent = withStyles(appBar)(PrimarySearchAppBar);

function mapStateToProps (state){
	return {
		ideas: state.ideas.items
	}
}

export default connect(mapStateToProps)(withStylesComponent);
