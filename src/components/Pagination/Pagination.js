import ReactPaginate from 'react-paginate';

export const Pagination = ({ pageCount, setActivePage, activePage }) => {
	return (
		<ReactPaginate
			className="pagination justify-content-center mt-5 gap-3"
			forcePage={activePage === 1 ? 0 : activePage - 1}
			pageCount={pageCount}
			previousLabel="Prev"
			nextLabel="Next"
			previousLinkClassName="btn btn-primary"
			nextLinkClassName="btn btn-primary"
			pageClassName="page-item"
			pageLinkClassName="page-link"
			activeClassName="active"
			onPageChange={(data) => setActivePage(data.selected + 1)}
		/>
	);
};
