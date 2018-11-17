import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//thenes
import { layoutTheme } from '../../themes'

function FullWidthGrid(props) {
	const { classes, children } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						{children}
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(layoutTheme)(FullWidthGrid);
