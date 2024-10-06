import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '../Shared/Button';
import FormField from '../Shared/FormFields/FormField';
import { FORM_OPTIONS } from './constants';

function Registration() {
	const navigate = useNavigate();
	const { register, handleSubmit, watch, errors } = useForm();

	return (
		<div className="flex flex-col gap-2 w-1/2">
			<div className="flex">
				<Button label="Back" variant="secondary" onClick={() => navigate(-1)} />
			</div>
			<div>
				<h1>Registration Form</h1>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(() => {})}>
					{FORM_OPTIONS.map((option) => (
						<FormField
							key={option.id}
							option={option}
							{...register(option.name)}
						/>
					))}
					<Button label="Register" variant="primary" onClick={() => {}} />
				</form>
			</div>
		</div>
	);
}

export default Registration;
