import PropTypes from 'prop-types';

function Button({ label, onClick, disabled, variant = 'primary' }) {
	let buttonStyle =
		'py-1 px-3 font-semibold text-md rounded-full text-center shadow-md cursor-pointer focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75';

	switch (variant) {
		case 'primary':
			buttonStyle = `${buttonStyle} bg-violet-500 text-white hover:bg-violet-700`;
			break;
		case 'secondary':
			buttonStyle = `${buttonStyle} bg-white text-violet-500 border-violet-500 border-2 hover:bg-violet-100`;
			break;
		default:
			buttonStyle = `${buttonStyle} bg-violet-500 text-white hover:bg-violet-700`;
	}

	return (
		<div className={buttonStyle} disabled={disabled} onClick={onClick}>
			{label}
		</div>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
