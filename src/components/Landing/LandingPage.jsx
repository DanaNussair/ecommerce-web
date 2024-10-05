import Button from '../Shared/Button';

function LandingPage() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="font-bold py-3">Landing Page</h1>
			<div className="flex flex-row gap-3">
				<Button label="Register" />
				<Button label="Login" variant="secondary" />
			</div>
		</div>
	);
}

export default LandingPage;
