import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../hooks/UseUser';
import useTitle from '../hooks/useTitle';
import SocialLogin from './Shared/SocialLogin';

const Register = () => {
	useTitle('Register');
	const { createUser, logOut, updateUserProfile } = useUser();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);

		createUser(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log('register: ', loggedUser, data.name, data.image);

				updateUserProfile(data.name, data.image)
					.then(() => {
						axios
							.post('http://localhost:4000/users', {
								name: data.name,
								email: data.email,
								image: data.image,
							})
							.then(data => {
								if (data.data.insertedId) {
									reset();
									Swal.fire({
										position: 'top-end',
										icon: 'success',
										title: 'Registration Successful.Please Login...',
										showConfirmButton: false,
										timer: 2500,
									});

									logOut()
										.then(() => {})
										.catch(error => console.log(error));

									navigate('/login', { replace: true });
									// navigate(from, { replace: true });
								}
							});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	};

	const handleRegister = () => {
		Swal.fire({
			position: 'center',
			icon: 'info',
			title: 'Please Wait...',
			showConfirmButton: false,
			timer: 3000,
		});
	};

	return (
		<div className='hero my-2'>
			<div className='hero-content '>
				<div className='card w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-4'>
					<h1 className='text-3xl text-center font-medium'>Register</h1>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='card-body -my-6 w-full'
					>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='name'
								{...register('name', { required: true })}
								className='input input-bordered'
							/>
							{errors.name?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Name is required
								</small>
							)}
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Image</span>
							</label>
							<input
								type='text'
								placeholder='image url'
								className='input input-bordered'
								{...register('image', { required: true })}
							/>
							{errors.image?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Photo is required
								</small>
							)}
						</div>
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
								<small className='text-error mt-1  text-xs'>
									Email is required
								</small>
							)}
						</div>
						<div className='form-control justify-center relative'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='password'
								{...register('password', {
									required: true,
									minLength: 6,
									pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
								})}
								className='input input-bordered'
							/>
							{errors.password?.type === 'required' && (
								<small className='text-error mt-1 text-xs'>
									Password is required
								</small>
							)}
							{errors.password?.type === 'minLength' && (
								<small className='text-error mt-1 text-xs'>
									Password must be 6 characters
								</small>
							)}
							{errors.password?.type === 'pattern' && (
								<small className='text-error mt-1 text-xs'>
									Password must be contains at least one uppercase and one
									special character.
								</small>
							)}
						</div>
						<div className='form-control justify-center relative'>
							<label className='label'>
								<span className='label-text'>Confirm Password</span>
							</label>
							<input
								type='password'
								placeholder='confirm password'
								{...register('confirmPassword', {
									required: true,
									validate: value => {
										if (watch('password') !== value) {
											// watch('password');
											return 'Your passwords do no match';
										}
									},
								})}
								className='input input-bordered'
							/>
							{errors.confirmPassword?.message && (
								<small className='text-error mt-1 text-xs'>
									{errors.confirmPassword?.message}
								</small>
							)}
						</div>
						<div className='form-control mt-6'>
							<button
								onClick={handleRegister}
								type='submit'
								className='btn bg-First hover:bg-second text-white hover:bg-Second'
							>
								Register
							</button>
						</div>
					</form>
					<SocialLogin from={from} />
					<p className='text-center my-4'>
						Already registered?
						<Link to='/login' className='text-primary hover:underline pl-2'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
