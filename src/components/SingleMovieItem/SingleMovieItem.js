export const SingleMovieItem = ({
	id,
	language,
	title,
	release_date,
	image,
	vote_average,
	vote_count,
	genres,
	budget,
	overview,
}) => {
	return (
		<li
			className="position-relative border rounded shadow bg-white"
			style={{ width: '30.8%', height: 'auto' }}
		>
			<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-3">
				{id}
			</span>
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
				</div>
				<p className="d-block fw-bold mt-4">
					Language: <span className="fw-normal">{language}</span>
				</p>
				<p className="d-block fw-bold mt-4">
					Genres: <span className="fw-normal">{genres}</span>
				</p>
				<p className="d-block fw-bold mt-4">
					Budget: <span className="fw-normal">{budget}</span>
				</p>
				<p className="d-block fw-bold mt-4">
					Overview: <span className="fw-normal">{overview}</span>
				</p>
			</div>
		</li>
	);
};

export const genreSpan = () => {
	return <span></span>;
};
