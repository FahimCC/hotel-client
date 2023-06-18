import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useTitle from '../../hooks/useTitle';

const ManagerUsers = () => {
	useTitle('Manage Users');

	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users`);
			return res.data;
		},
	});
	const handleAdmin = user => {
		axiosSecure
			.patch(`https://hotel-server-fahimcc.vercel.app/users/admin/${user._id}`)
			.then(data => {
				if (data.data.modifiedCount > 0) {
					refetch();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div className='container'>
			<h1 className='text-5xl text-center font-bubblegum clip my-10'>
				Manage Users
			</h1>
			<div className='min-h-fit  h-[500px] overflow-y-auto overflow-x-auto rounded-lg'>
				<table className='table '>
					{/* head */}
					<thead>
						<tr className='bg-base-200 text-base'>
							<th>#</th>
							<th>User Image</th>
							<th>User Name</th>
							<th>User Email</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user, index) => (
							<tr key={user._id}>
								<td>{index + 1}</td>
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={user.image}
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
								</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td className='flex justify-center items-center h-20'>
									{user.role === 'client' ? (
										<button
											onClick={() => handleAdmin(user)}
											className='btn btn-xs btn-success squeeze'
										>
											Make Admin
										</button>
									) : user.role === 'admin' ? (
										<button className='btn btn-xs btn-success squeeze' disabled>
											Admin
										</button>
									) : (
										<button className='btn btn-xs btn-success squeeze' disabled>
											Owner
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

export default ManagerUsers;
