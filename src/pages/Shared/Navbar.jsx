import { Link } from 'react-router-dom';
import useUser from '../../hooks/UseUser';
import useAdmin from '../../hooks/useAdmin';
import useOwner from '../../hooks/useOwner';

const Navbar = () => {
	const { user, logOut } = useUser();
	const { isAdmin } = useAdmin();
	const { isOwner } = useOwner();

	const navigationBar = (
		<>
			<li>
				<Link to='/' className=' hover:text-Second focus:text-Second'>
					Home
				</Link>
			</li>
			<li>
				<Link to='/about' className=' hover:text-Second focus:text-Second'>
					About
				</Link>
			</li>
			<li>
				<Link to='/contact' className=' hover:text-Second focus:text-Second'>
					Contact
				</Link>
			</li>
			{user && (
				<li tabIndex={0}>
					<details>
						<summary className=' hover:text-Second focus:text-Second'>
							{isAdmin
								? 'Admin Dashboard'
								: isOwner
								? 'Owner Dashboard'
								: 'Client Dashboard'}
						</summary>
						<ul className='p-2 z-10'>
							{isOwner ? (
								<>
									<li>
										<Link
											to='/all-bookings'
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											All Bookings
										</Link>
									</li>
									<li>
										<Link
											to='/add-room'
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											Add Room
										</Link>
									</li>
									<li>
										<Link
											to='/all-rooms'
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											All Rooms
										</Link>
									</li>
								</>
							) : isAdmin ? (
								<>
									<li>
										<Link
											to={`/manage-users`}
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											Manage Users
										</Link>
									</li>
									<li>
										<Link
											to='/manage-rooms'
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											Manage Rooms
										</Link>
									</li>
									<li>
										<Link
											to='/manage-bookings'
											className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
										>
											Manage Bookings
										</Link>
									</li>
								</>
							) : (
								<li>
									<Link
										to={`/own-bookings-get/${user?.email}`}
										className=' text-black hover:text-Second focus:text-Second hover:bg-transparent'
									>
										Own Bookings
									</Link>
								</li>
							)}
						</ul>
					</details>
				</li>
			)}
		</>
	);
	return (
		<div className='bg-[#003173] text-white'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-start '>
						<div className='dropdown'>
							<label tabIndex={0} className=' -ml-6 btn btn-ghost lg:hidden '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold z-10'
							>
								{navigationBar}
							</ul>
						</div>
						<Link
							to='/'
							className='hidden lg:block text-4xl font-bubblegum squeeze'
						>
							Hotel
						</Link>
					</div>
					<Link
						to='/'
						className='lg:hidden block navbar-center text-4xl font-bubblegum squeeze'
					>
						Hotel
					</Link>
					<div className='navbar-center hidden lg:flex '>
						<ul className='menu menu-horizontal px-1 text-lg font-semibold'>
							{navigationBar}
						</ul>
					</div>
					<div className='navbar-end'>
						{!user ? (
							<Link
								to='/login'
								className='text-sm md:text-base font-semibold px-2 py-1 md:px-3 md:py-2 border-2 border-white squeeze hover:border-dashed hover:text-Second hover:border-Second rounded-lg'
							>
								Login / Register
							</Link>
						) : (
							<>
								<div className='dropdown dropdown-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-circle avatar'
									>
										<div className='w-10 rounded-full'>
											<img src={user.photoURL} />
										</div>
									</label>
									<ul
										tabIndex={0}
										className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10'
									>
										<li>
											<Link
												onClick={() => logOut()}
												className='text-black hover:text-Second focus:text-Second hover:bg-transparent'
											>
												Logout
											</Link>
										</li>
									</ul>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
