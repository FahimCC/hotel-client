import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const OwnBookings = () => {
	useTitle('Own Bookings');

	const { email } = useParams();

	const { data: bookings = [], refetch } = useQuery({
		queryKey: ['email', email],
		queryFn: async () => {
			const res = await axios.get(
				`https://hotel-server-fahimcc.vercel.app/own-bookings-get/${email}`
			);
			console.log(res.data);
			return res.data;
		},
	});

	console.log(bookings);

	const handleCancel = id => {
		axios
			.patch(`https://hotel-server-fahimcc.vercel.app/own-bookings-patch/${id}`)
			.then(res => {
				console.log(res.data);
				if (res.data.modifiedCount > 0) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your booking has been canceled',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div className='container'>
			<h1 className='text-5xl text-center font-bubblegum clip my-10'>
				Own Bookings
			</h1>
			<div className='overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>Hotel Image</th>
							<th>Hotel Name</th>
							<th>Room</th>
							<th>Price</th>
							<th>Check In</th>
							<th>Check Out</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{bookings?.map((booking, index) => (
							<tr key={booking._id}>
								<td>{index + 1}</td>
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={booking.image}
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
								</td>
								<td>{booking.name}</td>
								<td>{booking.room}</td>
								<td>{booking.price}</td>
								<td>{booking.checkIn}</td>
								<td>{booking.checkOut}</td>
								<td className='flex flex-wrap h-20 items-center justify-center gap-1 '>
									{booking.status === 'Booked' ? (
										<button
											onClick={() => handleCancel(booking._id)}
											className='btn btn-xs btn-error squeeze'
										>
											Booking Cancel
										</button>
									) : (
										<button className='btn btn-xs btn-error squeeze' disabled>
											Canceled
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OwnBookings;
