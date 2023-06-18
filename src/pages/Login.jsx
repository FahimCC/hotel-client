/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../hooks/UseUser';
import useTitle from '../hooks/useTitle';
import SocialLogin from './Shared/SocialLogin';

const Login = () => {
	useTitle('Login');
	const { signIn } = useUser();

	const location = useLocation();
	const navigate = useNavigate();

	const from = location?.state?.from?.pathname || '/';

	const [togglePassword, setTogglePassword] = useState(false);
	const [err, setErr] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		signIn(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log('login: ', loggedUser, data.email, data.password);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'User Login Successful.',
					showConfirmButton: false,
					timer: 1500,
				});
				setErr('');
				navigate(from, { replace: true });
			})
			.catch(error => {
				setErr(error?.message);
				console.log(error);
			});
	};

	return (
		<div className='hero my-20'>
			<div className='hero-content '>
				<div className='card flex-shrink-0 w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-5'>
					<h1 className='text-3xl text-center font-medium'>Login</h1>
					<form onSubmit={handleSubmit(onSubmit)} className='card-body -my-4'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='email'
								{...register('email', { required: true })}
								className='input input-bordered'
							/>
							{errors.email?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Email is required
								</small>
							)}
						</div>
						<div className='form-control justify-center relative'>
							<span className='inline'>
								{togglePassword ? (
									<svg
										onClick={() => setTogglePassword(!togglePassword)}
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6 absolute right-2 top-[47px]'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
										/>
									</svg>
								) : (
									<svg
										onClick={() => setTogglePassword(!togglePassword)}
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-6 h-6 absolute right-2 top-[47px]'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								)}
							</span>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type={`${togglePassword ? 'text' : 'password'}`}
								placeholder='password'
								{...register('password', { required: true })}
								className='input input-bordered'
							/>
							{errors.password?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Password is required
								</small>
							)}
							<label className='label'>
								<p className='label-text-alt text-error'>{err}</p>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button
								type='submit'
								className='btn bg-First hover:bg-second text-white hover:bg-Second'
							>
								Login
							</button>
						</div>
					</form>
					<SocialLogin from={from} />
					<p className='text-center my-4'>
						Don't have an account?
						<Link to='/register' className='text-primary hover:underline pl-2 '>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
