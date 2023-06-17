import { TbCurrencyTaka } from 'react-icons/tb';

const HotelBook = () => {
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
					<h1 className='text-4xl font-semibold mb-5'>Hotel Name</h1>
					<p className='text-justify '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim,
						aperiam voluptatibus accusamus dolorem hic dolore consequatur
						voluptas, nisi velit culpa est tempora ex nam aspernatur quia esse
						optio animi ad facilis. Quibusdam blanditiis, quis voluptatem,
						quidem ipsam ut, illo rerum labore sunt perferendis laborum pariatur
						nam quo expedita deleniti!
					</p>
				</div>
				<form className='bg-base-100 rounded-lg px-6 py-2 w-1/4 border-2'>
					<h1 className='text-lg font-semibold my-3 ml-1 text-center'>
						Select Room
					</h1>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Two Bed Room</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>5000</span>
								</span>
							</span>
							<input
								type='radio'
								name='radio-10'
								className='radio checked:bg-First'
								checked
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Deluxe Room</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>6000</span>
								</span>
							</span>
							<input
								type='radio'
								name='radio-10'
								className='radio checked:bg-First'
								checked
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='font-bubblegum flex h-12 items-center font-bold border-2 border-Second text-Second px-2 py-1 rounded-lg w-fit'>
								<span>Penthouse Apartment</span>
								<span className='flex h-12 items-center'>
									<TbCurrencyTaka className='inline text-xl' />
									<span>7000</span>
								</span>
							</span>
							<input
								type='radio'
								name='radio-10'
								className='radio checked:bg-First'
								checked
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
