import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const InputField = forwardRef(
	(
		{
			name,
			value,
			defaultValue,
			onChange,
			type = 'text',
			maxLength = 50,
			minLength = 1,
			min,
			required = false,
			register,
		},
		ref,
	) => {
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
					required={required}
					onChange={onChange}
					className="border-2 border-violet-500 rounded-md p-1"
					ref={ref}
					{...register(name, {
						required: required && 'This field is required',
						min: {
							value: min,
							message: `Value cannot be less than ${min}`,
						},
						maxLength: {
							value: maxLength,
							message: 'Too many characters',
						},
						minLength: {
							value: minLength,
							message: 'Too few characters',
						},
					})}
				/>
			</div>
		);
	},
);

InputField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	defaultValue: PropTypes.string,
	maxLength: PropTypes.number,
	minLength: PropTypes.number,
	min: PropTypes.number,
	required: PropTypes.bool,
	register: PropTypes.func,
};

export default InputField;
