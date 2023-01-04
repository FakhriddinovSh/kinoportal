import { useEffect, useState } from 'react';
import { Api } from '../../API/Api';
import { CardItem } from '../../components/CardItem/CardItem';
import { Header } from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination/Pagination';

export const Upcoming = () => {
	const [movies, setMovie] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [pageCount, setPageCount] = useState();
	const [activePage, setActivePage] = useState(1);

	const getMovies = async () => {
		const data = await Api.getUpcomingMovies(activePage);
		setPageCount(data.data.total_pages);
		setMovie({
			isLoading: false,
			data: data.data.results,
			isError: false,
		});
	};

	useEffect(() => {
		getMovies(activePage);
	}, [activePage]);

	return (
		<>
			{movies.isLoading ? <h1>Loading...</h1> : ''}
			{movies.isError ? <h1>Error occured...</h1> : ''}
			{movies.data ? (
				<div className="container">
					<ul className="d-flex flex-wrap gap-5 list-unstyled m-0 pt-5">
						{movies.data.map((item) => (
							<CardItem
								key={item?.id}
								id={item?.id}
								image={item?.backdrop_path}
								language={item?.original_language}
								title={item?.title}
								release_date={item?.release_date}
								vote_average={item?.vote_average}
								vote_count={item?.vote_count}
							/>
						))}
					</ul>
				</div>
			) : (
				''
			)}
			<Pagination
				pageCount={pageCount}
				setActivePage={setActivePage}
				activePage={activePage}
			/>
		</>
	);
};
