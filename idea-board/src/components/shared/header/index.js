import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
	const { copy, componentType = 'h1', variantType = 'h1', alignProp = 'center' } = props;

	return (
		<Typography component={componentType} variant={variantType} gutterBottom align={alignProp}>
			{copy}
		</Typography>
	);
}

Header.propTypes = {
	copy: PropTypes.string.isRequired,
	componentType: PropTypes.string,
	variantType: PropTypes.string,
	alignProp: PropTypes.string,
};
