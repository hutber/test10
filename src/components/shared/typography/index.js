import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function TypographyComp(props) {
	const { children, componentType = 'h1', variantType = 'h1', alignProp = 'center' } = props;

	return (
		<Typography component={componentType} variant={variantType} gutterBottom align={alignProp}>
			{children}
		</Typography>
	);
}

TypographyComp.propTypes = {
	componentType: PropTypes.string,
	variantType: PropTypes.string,
	alignProp: PropTypes.string,
};
