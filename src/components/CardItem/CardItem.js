import { NavLink } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../../API/Api';
import { Route, Routes } from 'react-router-dom';
import { Single } from '../../pages/Single/Single';

export const CardItem = ({
	id,
	language,
	title,
	release_date,
	image,
	vote_average,
	vote_count,
}) => {
	return (
		<>
			<li
				className="position-relative border rounded shadow"
				style={{ width: '30.8%', height: '500px' }}
			>
				<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-3">
					{id}
				</span>
				<img
					src={`${BASE_IMAGE_URL}${image}`}
					width={'100%'}
					height={'400'}
					alt={`${title} image`}
				/>
				<div className="px-4 pt-4 pb-4">
					<h3 className="fw-bold fs-4">{title}</h3>
					<p className="fw-bold">
						Release Date:
						<span className="fw-normal ms-2">{release_date}</span>
					</p>
					<div className="d-flex align-items-center">
						<div>
							<span>⭐</span>
							<span className="fw-bold">{vote_average}</span>
						</div>
						<div className="mx-3">
							<span>👁</span>
							<span>{vote_count}</span>
						</div>
						<div>
							<button className="d-inline-block btn btn-light fw-bold">
								{language}
							</button>
						</div>
					</div>
					<NavLink
						className="d-d-inline-block btn btn-success position-absolute mt-5"
						style={{ bottom: '20px' }}
						to={`/single/${id}`}
					>
						More Info
					</NavLink>
				</div>
			</li>
		</>
	);
};
