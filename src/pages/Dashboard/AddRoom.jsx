import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const AddRoom = () => {
	useTitle('Add Room');
	const [axiosSecure] = useAxiosSecure();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		// console.log(data);

		axiosSecure.post('/add-room', data).then(data => {
			console.log(data.data);
			if (data.data.insertedId) {
				reset();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your room has been stored',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};
	console.log(errors);
	return (
		<div className='container bg-white my-6'>
			<h1 className='text-5xl text-center font-bubblegum clip my-10'>
				Add Room
			</h1>
			<div className='bg-[#F3F3F3] rounded-lg lg:mx-20'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='p-5 md:p-10 space-y-5'
				>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>District Name*</span>
							</label>
							<input
								type='text'
								placeholder='District Name*'
								{...register('districtName', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Hotel Name*</span>
							</label>
							<input
								type='text'
								placeholder='Hotel Name*'
								{...register('hotelName', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Hotel Image*</span>
							</label>
							<input
								type='text'
								placeholder='Hotel Image*'
								{...register('image', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Two Bed Quantity*</span>
							</label>
							<input
								type='text'
								placeholder='Two Bed Quantity*'
								{...register('twoBedQuantity', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Deluxe Quantity*</span>
							</label>
							<input
								type='text'
								placeholder='Deluxe Quantity*'
								{...register('deluxeQuantity', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Penthouse Quantity*</span>
							</label>
							<input
								type='text'
								placeholder='Penthouse Quantity*'
								{...register('penthouseQuantity', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Ratings*</span>
							</label>
							<input
								type='text'
								placeholder='Ratings*'
								{...register('ratings', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Two Bed Price*</span>
							</label>
							<input
								type='text'
								placeholder='Two Bed Price*'
								{...register('twoBedPrice', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Deluxe Price*</span>
							</label>
							<input
								type='text'
								placeholder='Deluxe Price*'
								{...register('deluxePrice', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Penthouse Price*</span>
							</label>
							<input
								type='text'
								placeholder='Penthouse Price'
								{...register('penthousePrice', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Description</span>
						</label>
						<textarea
							{...register('description', { required: true })}
							className='textarea textarea-bordered h-24'
							placeholder='Description'
						></textarea>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn bg-[#B58130]'>
							Add Room
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddRoom;
