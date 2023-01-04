import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = (setData) => {
	const navigate = useNavigate();

	const [inputVal, setInputVal] = useState('');

	useEffect(() => {
		if (inputVal.trim().length) {
			navigate('/search/' + inputVal);
		} else {
			navigate('/');
		}
	}, [inputVal]);

	return (
		<header className="py-4 bg-secondary">
			<div className="container">
				<div className="d-flex align-items-center justify-content-between">
					<Link
						className="text-decoration-none text-dark fs-2"
						to={'/'}
					>
						Uzmovie.com
					</Link>

					<nav>
						<ul className="d-flex list-unstyled gap-5 fs-4 m-0">
							<li>
								<Link
									className="text-decoration-none text-dark py-4"
									to={'/'}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="text-decoration-none text-dark py-4"
									to={'/popular'}
								>
									Popular Movies
								</Link>
							</li>
							<li>
								<Link
									className="text-decoration-none text-dark py-4"
									to={'/top-rated'}
								>
									Top-rated Movies
								</Link>
							</li>
							<li>
								<Link
									className="text-decoration-none text-dark py-4"
									to={'/upcoming'}
								>
									Upcoming Movies
								</Link>
							</li>
						</ul>
					</nav>

					<form>
						<input
							onKeyUp={(evt) => setInputVal(evt.target.value)}
							className="form-control"
							type="search"
							placeholder="Search Movie"
							name="user_search"
						/>
					</form>
				</div>
			</div>
		</header>
	);
};
