import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const ManagerRooms = () => {
	useTitle('All Rooms');

	const [axiosSecure] = useAxiosSecure();

	const { data: rooms = [], refetch } = useQuery({
		queryKey: ['rooms'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/manage-rooms`);
			return res.data;
		},
	});

	const handleDelete = id => {
		axiosSecure.delete(`/manage-rooms/${id}`).then(res => {
			if (res.data.deletedCount > 0) {
				refetch();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: `Room has been deleted,.`,
					showConfirmButton: false,
					timer: 2000,
				});
			}
		});
	};

	return (
		<div className='container'>
			<h1 className='text-5xl text-center font-bubblegum clip my-10'>
				Manage Rooms
			</h1>
			<div className='overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>District Name</th>
							<th>Hotel Name</th>
							<th>ratings</th>
							<th>Description</th>
							<th>Two Bed Price</th>
							<th>Deluxe Room Price</th>
							<th>Penthouse Price</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{rooms?.map((room, index) => (
							<tr key={room._id} className='max-h-20'>
								<td>{index + 1}</td>
								<td>{room.districtName}</td>
								<td>{room.hotelName}</td>
								<td>{room.ratings}</td>
								<td>{room.description}</td>
								<td>{room.twoBedPrice}</td>
								<td>{room.deluxePrice}</td>
								<td>{room.penthousePrice}</td>
								<td className='flex justify-center items-center h-48 gap-2'>
									<Link to={`/update-room/${room._id}`}>
										<button className='btn btn-xs btn-secondary squeeze'>
											Update
										</button>
									</Link>
									<button
										onClick={() => handleDelete(room._id)}
										className='btn btn-xs btn-error squeeze'
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManagerRooms;
