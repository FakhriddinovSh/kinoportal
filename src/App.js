import './app.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopRated } from './pages/Top-rated/TopRated';
import { Upcoming } from './pages/Upcoming/Upcoming';
import { Popular } from './pages/Popular/Popular';
import { Home } from './pages/Home/Home';
import { Single } from './pages/Single/Single';
import { Person } from './pages/Person/Person';
import { Search } from './pages/Search/Search';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/top-rated'} element={<TopRated />} />
				<Route path={'/popular'} element={<Popular />} />
				<Route path={'/upcoming'} element={<Upcoming />} />
				<Route path={'/single/:id'} element={<Single />} />
				<Route path={'/person/:id'} element={<Person />} />
				<Route path={'/search/:searchQuery'} element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
