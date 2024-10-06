import { useNavigate } from 'react-router-dom';
import { useForm, useFormState, useWatch } from 'react-hook-form';

import Button from '../Shared/Button';
import FormField from '../Shared/FormFields/FormField';
import { FORM_OPTIONS } from './constants';
import { registerUser } from '../Api/User';

function Registration() {
	const navigate = useNavigate();
	const { register, handleSubmit, control } = useForm({
		mode: 'all',
	});

	const { errors } = useFormState({ control });
	useWatch({ control });

	const onSubmit = async (data) => {
		const response = await registerUser({
			name: data.Name,
			email: data.Email,
			password: data.Password,
			gender: data.Gender,
			role: data.Role,
			age: data.Age,
		});

		if (response.error) {
			console.error(response.error);
			return;
		} else {
			console.log('User registered successfully');
			navigate('/login');
		}
	};

	const displayErrors = () => {
		if (Object.keys(errors).length === 0) return null;
		return (
			<div className="text-red-600">
				<p>Errors:</p>
				{FORM_OPTIONS.map((option) => (
					<div key={option.id}>
						{errors[option.name] && (
							<p>
								{option.name}: {errors[option.name]?.message}
							</p>
						)}
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="flex flex-col gap-2 w-1/2">
			<div className="flex">
				<Button label="Back" variant="secondary" onClick={() => navigate(-1)} />
			</div>
			<div>
				<h1>Registration Form</h1>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
					{FORM_OPTIONS.map((option) => (
						<FormField key={option.id} option={option} register={register} />
					))}
					{displayErrors()}
					<Button type="submit" label="Register" variant="primary" />
				</form>
			</div>
		</div>
	);
}

export default Registration;
