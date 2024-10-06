import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const RadioButton = forwardRef(
	({ name, onChange, listOfValues, defaultValue, register, required }, ref) => {
		return (
			<div>
				<label className="font-bold text-violet-500">{name}</label>
				{listOfValues.map((option, index) => (
					<div key={index} className="flex gap-2">
						<input
							type="radio"
							id={option.label}
							name={name}
							value={option.value}
							onChange={onChange}
							defaultChecked={defaultValue === option.value}
							ref={ref}
							{...register(name, {
								required: required && 'This field is required',
							})}
						/>
						<label htmlFor={option.label}>{option.label}</label>
					</div>
				))}
			</div>
		);
	},
);

RadioButton.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	listOfValues: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	defaultValue: PropTypes.string,
	register: PropTypes.func,
	required: PropTypes.bool,
};

export default RadioButton;
