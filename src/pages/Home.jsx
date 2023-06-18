import { BiHotel } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Home = () => {
	useTitle('Home');

	const navigate = useNavigate();

	const handleSearch = event => {
		event.preventDefault();

		const form = event.target;
		const place = form.place.value;
		const checkIn = form.checkIn.value;
		const checkOut = form.checkOut.value;

		console.log(place, checkIn, checkOut);

		navigate(`/hotel-list/${place}/${checkIn}/${checkOut}`);
	};

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
					<form
						onSubmit={handleSearch}
						className='flex flex-col md:flex-row justify-center items-center  gap-3 md:gap-10 border-2 px-4 py-1 w-fit bg-white rounded-lg border-Second -mt-6'
					>
						<div className='flex items-center text-base-400'>
							<select name='place' defaultValue='Where are you going?' className='select w-full max-w-xs' required>
								<option disabled >
									Where are you going?
								</option>
								<option value='Dhaka'>Dhaka</option>
								<option value='Chittagong'>Chittagong</option>
								<option value='Rajshahi'>Rajshahi</option>
								<option value='Khulna'>Khulna</option>
								<option value='Sylhet'>Sylhet</option>
								<option value='Mymensingh'>Mymensingh</option>
								<option value='Rangpur'>Rangpur</option>
								<option value='Basrishal'>Basrishal</option>
							</select>
							<BiHotel className='text-xl' />
						</div>
						<div>
							<input
								type='date'
								name='checkIn'
								placeholder='Check in'
								required
							/>
						</div>
						<div>
							<input
								type='date'
								name='checkOut'
								placeholder='Check out'
								required
							/>
						</div>
						<button
							type='submit'
							className='px-2 py-1 bg-First rounded-lg text-white squeeze'
						>
							Search
						</button>
					</form>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
					<div className='relative'>
						<img
							src='https://worldarchitecture.org/cdnimgfiles/extuploadc/s011-1-.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Dhaka
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://pbs.twimg.com/media/C7DI20ZUwAEcE9u.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Chittagong
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/6/66/Rajshahi_city_%283%29.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Rajshahi
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://i.pinimg.com/originals/49/e9/da/49e9daf4ed2ce6769340b2b82d48cd58.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Khulna
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://live.staticflickr.com/1622/26647920351_f6bd26dc51_b.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Sylhet
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://i.pinimg.com/736x/25/5c/79/255c792dbb3eebef32bf3f681c082efc.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Mymensingh
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/8/84/Rangpur_Areal.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Rangpur
							</h3>
						</div>
					</div>
					<div className='relative'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/7/78/Barisal_Launch_Terninal.jpg'
							className='rounded-lg object-cover w-full h-72'
							alt=''
						/>
						<div className='rounded-lg absolute top-0 left-0 right-0 bg-black bg-opacity-40 w-full h-72 flex items-center justify-center'>
							<h3 className='rounded-lg text-Second text-2xl md:text-4xl font-bold'>
								Basrishal
							</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
