import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../API/Api';
import { CardItem } from '../../components/CardItem/CardItem';
import { Pagination } from '../../components/Pagination/Pagination';

export const Search = () => {
	const { searchQuery } = useParams();

	const [searchMovie, setSearchMovie] = useState({
		total_page: '',
		data: [],
	});

	const [pageCount, setPageCount] = useState();
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		axios
			.get('https:api.themoviedb.org/3/search/movie', {
				params: {
					api_key: 'e54293280fb6972fb1173c3454eb7b83',
					query: searchQuery,
					page: activePage,
				},
			})
			.then((res) =>
				setSearchMovie({
					total_page: res.data.total_pages,
					data: res.data.results,
				}),
			)
			.catch((error) => console.log(error));
	}, [searchQuery, activePage]);

	return (
		<div className="container">
			{searchMovie.data.length ? (
				<ul className="d-flex list-unstyled flex-wrap gap-5 pt-5">
					{searchMovie.data.map((item) => (
						<CardItem
							key={item.id}
							id={item.id}
							image={item?.backdrop_path}
							language={item.original_language}
							title={item.title}
							release_date={item.release_date}
							vote_average={item.vote_average}
							vote_count={item.vote_count}
						/>
					))}
				</ul>
			) : (
				''
			)}
			<Pagination
				pageCount={searchMovie.total_page}
				setActivePage={setActivePage}
				activePage={activePage}
			/>
		</div>
	);
};
