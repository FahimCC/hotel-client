import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage';
import Home from '../Pages/Home';
import HotelList from '../Pages/HotelList';
import Main from '../layouts/Main';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AddRoom from '../pages/Dashboard/AddRoom';
import AllBookings from '../pages/Dashboard/AllBookings';
import AllRooms from '../pages/Dashboard/AllRooms';
import ManageBookings from '../pages/Dashboard/ManageBookings';
import ManageRooms from '../pages/Dashboard/ManagerRooms';
import ManageUsers from '../pages/Dashboard/ManagerUsers';
import MyBookings from '../pages/Dashboard/MyBookings';
import HotelBook from '../pages/HotelBook';
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
				path: '/my-bookings/:email',
				element: (
					<PrivateRoute>
						<MyBookings />
					</PrivateRoute>
				),
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
				path: '/all-room',
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
