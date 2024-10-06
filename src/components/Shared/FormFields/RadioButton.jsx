import PropTypes from 'prop-types';

function RadioButton({ name, onChange, listOfValues }) {
	return (
		<div>
			<label className="font-bold text-violet-500">{name}</label>
			{listOfValues.map((option, index) => (
				<div key={index} className="flex gap-2">
					<input
						type="radio"
						id={option}
						name={name}
						value={option}
						onChange={onChange}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
		</div>
	);
}

RadioButton.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	listOfValues: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		}),
	),
};

export default RadioButton;
