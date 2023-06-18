import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import useUser from '../hooks/UseUser';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
	const { user, loading } = useUser();
	const { isAdmin, isAdminLoading } = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <Loader />;
	}

	if (user && isAdmin) {
		return children;
	}
	return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
