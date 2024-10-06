import PropTypes from 'prop-types';

function Dropdown({ name, defaultValue, onChange, listOfValues, required }) {
	return (
		<div>
			<label htmlFor={name} className="font-bold text-violet-500">
				{name}
			</label>
			<select
				className="border-2 border-violet-500 rounded-md p-1 w-full dropdown"
				onChange={onChange}
				required={required}
			>
				{listOfValues.map((option, index) => (
					<option
						key={index}
						value={option.value}
						selected={defaultValue == option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

Dropdown.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	defaultValue: PropTypes.string,
	required: PropTypes.bool,
	listOfValues: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
};

export default Dropdown;
