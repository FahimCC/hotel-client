import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Pages/Home';
import HotelList from '../Pages/HotelList';
import Main from '../layouts/Main';
import HotelBook from '../pages/HotelBook';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../routes/PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/hotel-list',
				element: <HotelList />,
			},
			{
				path: '/hotel-book',
				element: (
					<PrivateRoute>
						<HotelBook />
					</PrivateRoute>
				),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default router;
