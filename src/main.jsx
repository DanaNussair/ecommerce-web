import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import LandingPage from './components/Landing/LandingPage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: 'registration',
				element: <Registration />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
