import { Api, BASE_IMAGE_URL } from '../../API/Api';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Single } from '../Single/Single';

export const Person = () => {
	const { id } = useParams();

	const [person, setPerson] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [actorMovies, setActorMovies] = useState([]);

	const getMovies = async (movieId) => {
		const data = await Api.getPerson(movieId);
		setPerson(data.data);
	};

	const getActorsMovies = async (movieId) => {
		const data = await Api.getActorsMovies(movieId);
		setActorMovies(data.data.cast);
	};

	useEffect(() => {
		getMovies(id);
		getActorsMovies(id);
	}, [id]);

	console.log(actorMovies);

	return (
		<div className="container pt-3 d-flex">
			<div className="border d-inline-block rounded h-auto p-3 shadow position-fixed bg-white">
				<span className="position-absolute badge bg-danger rounded-pill end-0">
					{person.id}
				</span>
				<img
					width="300"
					height="300"
					src={`${BASE_IMAGE_URL}${person.profile_path}`}
					alt="User image"
				/>

				<h2>{person.name}</h2>
				<p className="m-0 fw-bold">
					Place of Birth:{' '}
					<span className="fw-normal">{person.place_of_birth}</span>
				</p>
				<p className="m-0 fw-bold">
					Popularity:{' '}
					<span className="fw-normal">{person.popularity}</span>
				</p>
				<p className="m-0 fw-bold">
					Known Department:{' '}
					<span className="fw-normal">
						{person.known_for_department}
					</span>
				</p>
			</div>
			<div style={{ marginLeft: '440px' }}>
				<p>{person.biography}</p>

				<div>
					<p>Movies: </p>
					<ul className="list-unstyled d-flex flex-wrap">
						{actorMovies.map((item) => (
							<li>
								<NavLink to={`/single/${item.id}`}>
									<img
										width={'100'}
										height={'100'}
										src={`${BASE_IMAGE_URL}${item.backdrop_path}`}
										alt=""
									/>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
