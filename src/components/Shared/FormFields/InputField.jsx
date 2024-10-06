import PropTypes from 'prop-types';

function InputField({
	name,
	value,
	defaultValue,
	onChange,
	type = 'text',
	maxLength = 50,
	minLength = 1,
	required = false,
}) {
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="font-bold text-violet-500">
				{name}
			</label>
			<input
				type={type}
				name={name}
				value={value}
				defaultValue={defaultValue}
				maxLength={maxLength}
				minLength={minLength}
				onChange={onChange}
				required={required}
				className="border-2 border-violet-500 rounded-md p-1"
			/>
		</div>
	);
}

InputField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	defaultValue: PropTypes.string,
	maxLength: PropTypes.number,
	minLength: PropTypes.number,
	required: PropTypes.bool,
};

export default InputField;
