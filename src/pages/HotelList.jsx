import { Rating } from '@smastrom/react-rating';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { BiHotel } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useTitle from '../hooks/useTitle';

const HotelList = () => {
	useTitle('Hotel List');
	const [axiosSecure] = useAxiosSecure();
	const { place, checkIn, checkOut } = useParams();
	const [district, setDistrict] = useState(place);

	const handleModifySearch = event => {
		event.preventDefault();

		const form = event.target;
		const place = form.place.value;
		const checkIn = form.checkIn.value;
		const checkOut = form.checkOut.value;
		setDistrict(place);

		console.log(place, checkIn, checkOut);
	};

	const { data: hotelList = [] } = useQuery({
		queryKey: ['hotelList', district],
		queryFn: async () => {
			const res = await axios.get(`/hotel-list/${district}`);
			return res.data;
		},
	});

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
						onSubmit={handleModifySearch}
						className='flex flex-col md:flex-row justify-center items-center  gap-3 md:gap-10 border-2 px-4 py-1 w-fit bg-white rounded-lg border-Second -mt-6'
					>
						<div className='flex items-center text-base-400'>
							<select
								defaultValue={place}
								name='place'
								className='select w-full max-w-xs'
							>
								{/* <option disabled selected>Where are you going?</option> */}
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
								defaultValue={checkIn}
								placeholder='Check in'
							/>
						</div>
						<div>
							<input
								type='date'
								name='checkOut'
								defaultValue={checkOut}
								placeholder='Check out'
							/>
						</div>
						<button
							type='submit'
							className='px-2 py-1 bg-First rounded-lg text-white squeeze'
						>
							Modify Search
						</button>
					</form>
				</div>
				<div className='my-20 space-y-6'>
					{hotelList?.map(hotel => (
						<div
							key={hotel._id}
							className='card lg:card-side bg-base-100 border-2 shadow-xl p-5 md:px-10 gap-8'
						>
							<figure className='w-full lg:w-2/5 lg:h-96 rounded-lg'>
								<img
									className='rounded-lg w-full h-full'
									src={hotel.hotelImage}
									alt='Food'
								/>
							</figure>
							<div className='w-full lg:w-3/5 px-0 py-0'>
								<div className='text-2xl font-bold h-20 flex flex-wrap md:flex-nowrap justify-between items-center'>
									<div>{hotel.hotelName}</div>
									<div className=''>
										<Rating
											style={{ maxWidth: 150 }}
											value={hotel.ratings}
											readOnly
										/>
									</div>
								</div>
								<p>
									<strong>Address: </strong>
									{hotel.address}
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
									{hotel.description}
								</p>
								<div className='flex justify-end mt-5'>
									<Link to={`/hotel-book/${hotel._id}/${checkIn}/${checkOut}`}>
										<button className='btn bg-First text-white hover:bg-Second mx-end'>
											Availability
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HotelList;
