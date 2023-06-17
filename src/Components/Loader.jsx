import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
	return (
		<div className='flex justify-center items-center w-full h-[calc(100vh-136px)]'>
			<HashLoader color='#003173' size={150} />
		</div>
	);
};

export default Loader;
