import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const ManageBookings = () => {
	useTitle('Manage Bookings');

	const [axiosSecure] = useAxiosSecure();

	const { data: bookings = [], refetch } = useQuery({
		queryKey: ['bookings'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/all-bookings`);
			return res.data;
		},
	});

	console.log(bookings);

	const handleCancel = id => {
		axiosSecure.patch(`/my-booking/${id}`).then(res => {
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
				Manage Bookings
			</h1>
			<div className='min-h-fit  h-[500px] overflow-y-auto overflow-x-auto rounded-lg'>
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
							<th>Status</th>
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
								<td className='btn btn-sm btn-outline my-5 text-black' disabled>
									{booking.status}
								</td>
								<td className=''>
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

export default ManageBookings;
