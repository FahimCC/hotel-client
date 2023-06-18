import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Pages/Home';

import Main from '../layouts/Main';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AddRoom from '../pages/Dashboard/AddRoom';
import AllBookings from '../pages/Dashboard/AllBookings';
import AllRooms from '../pages/Dashboard/AllRooms';
import ManageBookings from '../pages/Dashboard/ManageBookings';
import ManageRooms from '../pages/Dashboard/ManageRooms';
import ManageUsers from '../pages/Dashboard/ManageUsers';
import OwnBookings from '../pages/Dashboard/OwnBookings';
import UpdateRoom from '../pages/Dashboard/UpdateRoom';
import HotelBook from '../pages/HotelBook';
import HotelList from '../pages/HotelList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminRoute from '../routes/AdminRoute';
import OwnerRoute from '../routes/OwnerRoute';
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
				path: '/hotel-list/:place/:checkIn/:checkOut',
				element: <HotelList />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/hotel-book/:id/:checkIn/:checkOut',
				element: (
					<PrivateRoute>
						<HotelBook />
					</PrivateRoute>
				),
			},
			{
				path: '/own-bookings-get/:email',
				element: <OwnBookings />,
			},
			{
				path: '/all-bookings',
				element: (
					<OwnerRoute>
						<AllBookings />
					</OwnerRoute>
				),
			},
			{
				path: '/add-room',
				element: (
					<OwnerRoute>
						<AddRoom />
					</OwnerRoute>
				),
			},
			{
				path: '/update-room/:id',
				element: (
					<PrivateRoute>
						<UpdateRoom />
					</PrivateRoute>
				),
			},
			{
				path: '/all-rooms',
				element: (
					<OwnerRoute>
						<AllRooms />
					</OwnerRoute>
				),
			},
			{
				path: '/manage-bookings',
				element: (
					<AdminRoute>
						<ManageBookings />
					</AdminRoute>
				),
			},
			{
				path: '/manage-rooms',
				element: (
					<AdminRoute>
						<ManageRooms />
					</AdminRoute>
				),
			},
			{
				path: '/manage-users',
				element: (
					<AdminRoute>
						<ManageUsers />
					</AdminRoute>
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
