import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='bg-[#003173] text-white'>
			<div className='container'>
				<div className='navbar '>
					<div className='flex-1'>
						<Link to='/' className='text-4xl font-bubblegum flex gap-1 squeeze'>
							Hotel
						</Link>
					</div>
					<div className='flex-none'>
						<Link
							to='/login'
							className='text-sm md:text-base font-semibold px-2 py-1 md:px-3 md:py-2 border-2 border-white squeeze hover:border-dashed rounded-lg'
						>
							Login / Register
						</Link>
						<div className='dropdown dropdown-end'>
							<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img src='/images/stock/photo-1534528741775-53994a69daeb.jpg' />
								</div>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-sm dropdown-content mt-3 p-2 bg-base-100 shadow rounded-box w-52 text-black'
							>
								<li>
									<Link>Logout</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
