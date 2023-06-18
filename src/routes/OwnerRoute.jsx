import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import useUser from '../hooks/UseUser';
import useAdmin from '../hooks/useAdmin';

const OwnerRoute = ({ children }) => {
	const { user, loading } = useUser();
	const { isOwner, isOwnerLoading } = useAdmin();
	const location = useLocation();

	if (loading || isOwnerLoading) {
		return <Loader />;
	}

	if (user && isOwner) {
		return children;
	}
	return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default OwnerRoute;
