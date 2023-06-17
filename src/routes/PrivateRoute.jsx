import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import useUser from '../hooks/UseUser';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useUser();
	const location = useLocation();

	if (loading) {
		return <Loader />;
	}
	if (user) {
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }}></Navigate>;
	}
};

export default PrivateRoute;
