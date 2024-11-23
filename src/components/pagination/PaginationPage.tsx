import ReactPaginate from "react-paginate"
import "./style.css"

export const PaginationPage = ({
    currentPage = 1,
    setCurrentPage = () => {},
    countElem = 30,
    countPageElem = 5,
}: {
    currentPage?: number
    countElem?: number
    setCurrentPage?: (n: number) => void
    countPageElem?: number
}) => {

    console.log(currentPage,countElem,currentPage,);
    
    const totalPages = Math.ceil(countElem / countPageElem)
    
    const handlePageChange = (selectedItem: { selected: number }) => {
        const newPage = selectedItem.selected + 1
        
        setCurrentPage(newPage)
    }
    
    console.log(countElem, "===",countPageElem);
    
 

    return (
        <>
        {
            countElem <= currentPage || <button
            onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages)
                    setCurrentPage(currentPage + 1)
            }}
            className="main-loyaltie-programs__btn-more"
        >
            Show More
        </button>
        }
            
            <ReactPaginate
                previousLabel={
                    <button>
                        <svg>
                            <use xlinkHref="#arrow-btn"></use>
                        </svg>
                    </button>
                }
                nextLabel={
                    <button>
                        <svg>
                            <use xlinkHref="#arrow-btn"></use>
                        </svg>
                    </button>
                }
                breakLabel="..."
                breakClassName="pages-pagination__page-numbers dots"
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="main-loyaltie-programs__pagination pagination"
                pageClassName="pages-pagination__page-numbers"
                pageLinkClassName="pagination__link"
                previousClassName="pagination__btn pagination__btn_prev"
                nextClassName="pagination__btn pagination__btn_next"
                activeClassName="current"
                forcePage={currentPage - 1} 
            />
        </>
    )
}
