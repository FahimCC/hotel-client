import { Link } from 'react-router-dom';
import google from '../../assets/google.png';

const SocialLogin = ({ from }) => {
	const handleGoogleLogin = () => {
		//TODO social login
	};
	return (
		<>
			<div className='divider px-8'>OR</div>
			<Link
				onClick={handleGoogleLogin}
				className='border-2 hover:border-primary mt-2 mx-8 h-10 flex justify-center items-center px-3 py-1 rounded-lg squeeze'
			>
				<img className='w-11 h-8' src={google} alt='' />
				<span className='-ml-1'>Continue with Google</span>
			</Link>
		</>
	);
};

export default SocialLogin;
