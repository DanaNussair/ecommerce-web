import PropTypes from 'prop-types';
import InputField from './InputField';
import Dropdown from './Dropdown';
import RadioButton from './RadioButton';

function FormField({ option: { fieldType, ...rest } }) {
	switch (fieldType) {
		case 'TEXT':
			return <InputField {...rest} />;
		case 'EMAIL':
			return <InputField {...rest} type="email" />;
		case 'PASSWORD':
			return <InputField {...rest} type="password" />;
		case 'NUMBER':
			return <InputField {...rest} type="number" />;
		case 'LIST':
			return <Dropdown {...rest} />;
		case 'RADIO':
			return <RadioButton {...rest} />;
		default:
			return null;
	}
}

FormField.propTypes = {
	option: PropTypes.objectOf({
		fieldType: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string,
		value: PropTypes.string,
		onChange: PropTypes.func,
		type: PropTypes.string,
		options: PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.string,
				label: PropTypes.string,
			}),
		),
	}),
};

export default FormField;
