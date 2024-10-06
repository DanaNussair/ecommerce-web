import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import InputField from './InputField';
import Dropdown from './Dropdown';
import RadioButton from './RadioButton';

const FormField = forwardRef(
	({ option: { fieldType, ...rest }, ...props }, ref) => {
		switch (fieldType) {
			case 'TEXT':
				return <InputField {...rest} {...props} ref={ref} />;
			case 'EMAIL':
				return <InputField {...rest} {...props} type="email" ref={ref} />;
			case 'PASSWORD':
				return <InputField {...rest} {...props} type="password" ref={ref} />;
			case 'NUMBER':
				return <InputField {...rest} {...props} type="number" ref={ref} />;
			case 'LIST':
				return <Dropdown {...rest} {...props} ref={ref} />;
			case 'RADIO':
				return <RadioButton {...rest} {...props} ref={ref} />;
			default:
				return null;
		}
	},
);

FormField.propTypes = {
	option: PropTypes.shape({
		fieldType: PropTypes.string.isRequired,
		label: PropTypes.string,
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
		onChange: PropTypes.func,
		type: PropTypes.string,
		listOfValues: PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.string,
				label: PropTypes.string,
			}),
		),
	}).isRequired,
};

export default FormField;
