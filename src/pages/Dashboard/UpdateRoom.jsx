import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const UpdateRoom = () => {
	useTitle('Update Room');
	const [axiosSecure] = useAxiosSecure();

	const { id } = useParams();
	const navigate = useNavigate();

	const { data: room = {} } = useQuery({
		queryKey: ['room', id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/update-room-get/${id}`);
			return res.data;
		},
	});

	console.log(room);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		// console.log(data);

		if (!data.image) {
			data.hotelImage = room?.hotelImage;
		}
		if (!data.twoBedAvailable) {
			data.twoBedAvailable = room?.twoBedAvailable;
		}
		if (!data.deluxeAvailable) {
			data.deluxeAvailable = room?.deluxeAvailable;
		}
		if (!data.penthouseAvailable) {
			data.penthouseAvailable = room?.penthouseAvailable;
		}
		if (!data.ratings) {
			data.ratings = room?.ratings;
		}
		if (!data.twoBedPrice) {
			data.twoBedPrice = room?.twoBedPrice;
		}
		if (!data.deluxePrice) {
			data.deluxePrice = room?.deluxePrice;
		}
		if (!data.penthousePrice) {
			data.penthousePrice = room?.penthousePrice;
		}
		if (!data.description) {
			data.description = room?.description;
		}

		axiosSecure.patch(`/update-room-patch/${id}`, data).then(data => {
			console.log(data.data);
			if (data.data.modifiedCount > 0) {
				reset();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Your room has been updated',
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
				Update Room
			</h1>
			<div className='bg-[#F3F3F3] rounded-lg lg:mx-20'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='p-5 md:p-10 space-y-5'
				>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Hotel Image*</span>
							</label>
							<input
								type='text'
								placeholder='Hotel Image*'
								defaultValue={room?.hotelImage}
								{...register('hotelImage', { required: true })}
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
								defaultValue={room.twoBedAvailable}
								{...register('twoBedAvailable', { required: true })}
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
								defaultValue={room.deluxeAvailable}
								{...register('deluxeAvailable', { required: true })}
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
								defaultValue={room.penthouseAvailable}
								{...register('penthouseAvailable', { required: true })}
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
								defaultValue={room.ratings}
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
								defaultValue={room.twoBedPrice}
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
								defaultValue={room.deluxePrice}
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
								defaultValue={room.penthousePrice}
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
							defaultValue={room.description}
							className='textarea textarea-bordered h-24'
							placeholder='Description'
						></textarea>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn bg-[#B58130]'>
							Update Room
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateRoom;
