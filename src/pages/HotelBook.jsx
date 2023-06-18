import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../hooks/UseUser';
import useTitle from '../hooks/useTitle';

const HotelBook = () => {
	useTitle('Booking');
	const { id, checkIn, checkOut } = useParams();
	const { user } = useUser();
	const [selectedOption, setSelectedOption] = useState('twoBed');
	const navigate = useNavigate();

	const { data: hotel = {} } = useQuery({
		queryKey: ['hotelBook', id],
		queryFn: async () => {
			const res = await axios.get(`/hotel-book/${id}`);
			return res.data;
		},
	});

	const handleOptionChange = event => {
		setSelectedOption(event.target.value);
	};

	console.log(checkIn, checkOut);

	const handleReserve = event => {
		event.preventDefault();
		const roomType =
			selectedOption === 'twoBed'
				? 'Two Bed Room'
				: selectedOption === 'deluxe'
				? 'Deluxe Room'
				: 'Penthouse Apartment';

		axios
			.post(`http://localhost:5000/booking-collection`, {
				email: user?.email,
				room: roomType,
				image: hotel.hotelImage,
				name: hotel.hotelName,
				checkIn,
				checkOut,
				price:
					selectedOption === 'twoBed'
						? hotel.twoBedPrice
						: selectedOption === 'deluxe'
						? hotel.deluxePrice
						: hotel.penthousePrice,
			})
			.then(res => {
				if (res.data.insertedId) {
					Swal.fire({
						title: `Successfully Reserved ${roomType}`,
					});
					navigate('/');
				}
			});
	};
	return (
		<div className='container my-20'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
				<img
					className='h-[300px] w-full'
					src='https://images.trvl-media.com/lodging/20000000/19830000/19822700/19822661/79ed42aa.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium'
					alt=''
				/>
				<img
					className='h-[300px] w-full'
					src='https://hotelxtoronto.com/_novaimg/4430803-1346123_501_466_3890_2121_2200_1200.rc.jpg'
					alt=''
				/>
				<img
					className='h-[300px] w-full'
					src='https://images.trvl-media.com/lodging/20000000/19830000/19822700/19822661/9e4450c4.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium'
					alt=''
				/>
				<img
					className='h-[300px] w-full'
					src='https://photos.hotelbeds.com/giata/original/61/615522/615522a_hb_ro_026.jpg'
					alt=''
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-10 my-10 '>
				<div className='w-3/4'>
					<h1 className='text-4xl font-semibold mb-5'>{hotel.hotelName}</h1>
					<p className='text-justify '>{hotel.description}</p>
				</div>
				<form
					onSubmit={handleReserve}
					className='bg-base-100 rounded-lg px-6 py-2 w-1/4 border-2'
				>
					<h1 className='text-lg font-semibold my-3 ml-1 text-center'>
						Select Room
					</h1>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Two Bed Room</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>{hotel.twoBedPrice}</span>
								</span>
							</span>
							<input
								type='radio'
								value='twoBed'
								checked={selectedOption === 'twoBed'}
								onChange={handleOptionChange}
								className='radio checked:bg-First'
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Deluxe Room</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>{hotel.deluxePrice}</span>
								</span>
							</span>
							<input
								type='radio'
								value='deluxe'
								checked={selectedOption === 'deluxe'}
								onChange={handleOptionChange}
								className='radio checked:bg-First'
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Penthouse Apartment</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>{hotel.penthousePrice}</span>
								</span>
							</span>
							<input
								type='radio'
								value='penthouse'
								checked={selectedOption === 'penthouse'}
								onChange={handleOptionChange}
								className='radio checked:bg-First'
							/>
						</label>
					</div>
					<div className='flex justify-center font-bubblegum my-5'>
						<button
							type='submit'
							className='btn bg-First text-white hover:bg-Second'
						>
							Reserve Now!
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default HotelBook;
