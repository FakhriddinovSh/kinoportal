import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Api, BASE_IMAGE_URL } from '../../API/Api';
import { SingleMovieItem } from '../../components/SingleMovieItem/SingleMovieItem';

export const Single = () => {
	const { id } = useParams();

	const [singleMovie, setSingleMovie] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});
	const [actors, setActors] = useState([]);
	const [similar, setSimilar] = useState([]);

	const getMovies = async (movieId) => {
		const data = await Api.getSingleMovies(movieId);
		setSingleMovie({
			isLoading: false,
			data: data.data,
			isError: false,
		});
	};

	const getMovieActors = async (movieId) => {
		const data = await Api.getSingleMoviesActors(movieId);
		setActors(data.data);
	};

	const getSimilarMovie = async (movieId) => {
		const data = await Api.getSimilarMovie(movieId);
		setSimilar(data.data.results);
	};

	useEffect(() => {
		getMovies(id);
		getMovieActors(id);
		getSimilarMovie(id);
	}, [id]);

	console.log(similar);

	return (
		<div
			style={{
				width: '100%',
				height: 'auto',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundImage: `url(${BASE_IMAGE_URL}${singleMovie.data.backdrop_path})`,
			}}
		>
			<div className="container">
				{singleMovie.isLoading ? <h2>Loading...</h2> : ''}
				{singleMovie.isError ? <h2>Error...</h2> : ''}
				<NavLink
					className="d-inline-block text-decoration-none text-white pt-5"
					to={'/'}
				>
					🔙 Back
				</NavLink>
				<div className="d-flex">
					<div>
						<ul className="gap-5 list-unstyled m-0 pt-5">
							<SingleMovieItem
								key={singleMovie.data.id}
								id={singleMovie.data.id}
								image={singleMovie.data.backdrop_path}
								language={singleMovie.data.original_language}
								title={singleMovie.data.title}
								release_date={singleMovie.data.release_date}
								vote_average={singleMovie.data.vote_average}
								vote_count={singleMovie.data.vote_count}
								genres={singleMovie?.data?.genres?.map(
									(item) => item.name,
								)}
								budget={singleMovie.data?.budget}
								overview={singleMovie.data?.overview}
							/>
						</ul>
						<a
							className="btn btn-success"
							href={`https://www.imdb.com/title/${singleMovie.data.imdb_id}`}
						>
							View Trailer
						</a>
					</div>

					<div>
						{actors?.cast?.length ? (
							<ul
								className="list-unstyled d-flex flex-wrap"
								style={{ width: '400px' }}
							>
								{actors.cast.map((item) => (
									<li className="text-white">
										<NavLink to={`/person/${item.id}`}>
											<img
												src={`${BASE_IMAGE_URL}${item?.profile_path}`}
												width="50"
												height="50"
												alt="no image"
											/>
										</NavLink>
									</li>
								))}
							</ul>
						) : (
							''
						)}
					</div>
				</div>
				<div>
					<p className="fw-bold fs-3">Similar movies</p>
					<ul className="d-flex list-unstyled flex-wrap">
						{similar.map((item) => (
							<li>
								<img
									width="100px"
									height="100px"
									src={`${BASE_IMAGE_URL}${item.backdrop_path}`}
									alt=""
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
