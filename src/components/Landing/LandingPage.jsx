import { useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';

function LandingPage() {
	const navigate = useNavigate();

	return (
		<div>
			<h1 className="font-bold py-3 text-center">Landing Page</h1>
			<div className="flex flex-row gap-3">
				<Button label="Register" onClick={() => navigate('/registration')} />
				<Button
					label="Login"
					variant="secondary"
					onClick={() => navigate('/login')}
				/>
			</div>
		</div>
	);
}

export default LandingPage;
