import { Rating } from '@smastrom/react-rating';
import { BiHotel } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const HotelList = () => {
	return (
		<>
			<div className='bg-First'>
				<div className='container'>
					<h1 className='text-white text-5xl text-center font-semibold py-14'>
						Find Your Best Place To Stay
					</h1>
				</div>
			</div>
			<div className='container'>
				<div className='flex justify-center'>
					<form className='flex flex-col md:flex-row justify-center items-center  gap-3 md:gap-10 border-2 px-4 py-1 w-fit bg-white rounded-lg border-Second -mt-6'>
						<div className='flex items-center text-base-400'>
							<select className='select w-full max-w-xs'>
								<option disabled selected>
									Where are you going?
								</option>
								<option>Dhaka</option>
								<option>Chittagong</option>
								<option>Rajshahi</option>
								<option>Khulna</option>
								<option>Sylhet</option>
								<option>Mymensingh</option>
								<option>Rangpur</option>
								<option>Basrishal</option>
							</select>
							<BiHotel className='text-xl' />
						</div>
						<div>
							<input type='date' placeholder='Check in' />
						</div>
						<div>
							<input type='date' placeholder='Check out' />
						</div>
						<button
							type='submit'
							className='px-2 py-1 bg-First rounded-lg text-white squeeze'
						>
							Modify Search
						</button>
					</form>
				</div>
				<div className='my-20'>
					<div className='card lg:card-side bg-base-100 border-2 shadow-xl p-5 md:px-10 gap-8'>
						<figure className='w-full lg:w-2/5 lg:h-96 rounded-lg'>
							<img
								className='rounded-lg w-full h-full'
								src='https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h'
								alt='Food'
							/>
						</figure>
						<div className='w-full lg:w-3/5 px-0 py-0'>
							<div className='text-2xl font-bold h-20 flex flex-wrap md:flex-nowrap justify-between items-center'>
								<div>Hotel Name</div>
								<div className=''>
									<Rating style={{ maxWidth: 150 }} value={3.5} readOnly />
								</div>
							</div>
							<p>
								<strong>Address: </strong>Lorem, ipsum dolor.
							</p>
							<div className='flex flex-wrap md:flex-nowrap gap-2 my-5'>
								<p className='border-2 border-First rounded-lg w-fit min-h-fit px-2 py-1 text-First font-medium font-bubblegum text-lg '>
									Free Airport Taxi
								</p>
								<p className='border-2 border-First rounded-lg w-fit min-h-fit px-2 py-1 text-First font-medium font-bubblegum text-lg'>
									World Class Service
								</p>
							</div>
							<p className='text-sm md:text-base text-justify'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Consequatur doloremque itaque nostrum nobis tempore, veritatis
								tempora dolorem iusto. Saepe fugiat deleniti dicta! Voluptatem
								fuga, ipsa ea eaque a dolore molestiae nemo enim fugit,
								explicabo nulla dolores unde nisi? Beatae cupiditate expedita
								distinctio nobis maxime esse perspiciatis praesentium at tempore
								fuga!
							</p>
							<div className='flex justify-end mt-5'>
								<Link to={`/hotel-book`}>
									<button className='btn bg-First text-white hover:bg-Second mx-end'>
										Availability
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HotelList;
