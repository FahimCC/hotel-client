import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
	const user = useContext(AuthContext);
	return user;
};

export default useUser;
