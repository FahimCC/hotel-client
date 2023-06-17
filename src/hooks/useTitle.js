import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `Hotel | ${title}`;
	}, [title]);
};

export default useTitle;
