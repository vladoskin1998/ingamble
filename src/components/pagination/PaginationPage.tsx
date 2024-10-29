import './style.css'
import { useMemo } from 'react';

export const PaginationPage = ({
    currentPage = 1,
    setCurrentPage = () => {},
    countElem = 30,
    countPageElem = 4,
    //@ts-ignore 
    link='',
}: {
    currentPage?: number,
    countElem?: number,
    setCurrentPage?: (n:number) => void,
    countPageElem?: number,
    link?:string,
}) => {
    const totalPages = Math.ceil(countElem / countPageElem);

    const pages = useMemo(() => {
        const maxVisiblePages = 6;
        const pagesArr: (number | string)[] = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pagesArr.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 3; i++) pagesArr.push(i);
                pagesArr.push('...');
                for (let i = totalPages - 2; i <= totalPages; i++) pagesArr.push(i);
            } else if (currentPage >= totalPages - 2) {
                pagesArr.push(1);
                pagesArr.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) pagesArr.push(i);
            } else {
                pagesArr.push(1);
                pagesArr.push('...');
                pagesArr.push(currentPage - 1, currentPage, currentPage + 1);
                pagesArr.push('...');
                for (let i = totalPages - 2; i <= totalPages; i++) pagesArr.push(i);
            }
        }

        return pagesArr;
    }, [currentPage, totalPages]);

    const handlePageClick = (page: number | string) => {
        if (typeof page === 'number' && page !== currentPage) {
            setCurrentPage(page)
        }
    };

    return (
        <>
            <button
                 onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageClick(currentPage + 1);
                }}
                className="main-loyaltie-programs__btn-more"
            >
                Show More
            </button>
            <div className="main-loyaltie-programs__pagination pagination">
                <button
                    className="pagination__btn pagination__btn_prev"
                    onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageClick(currentPage - 1);
                    }}
                >
                    <svg>
                        <use xlinkHref="#arrow-btn"></use>
                    </svg>
                </button>
                <div className="pagination__pages pages-pagination">
                    {pages.map((page, index) =>
                        page === '...' ? (
                            <span key={index} className="pages-pagination__page-numbers dots">
                                ...
                            </span>
                        ) : (
                            <button
                                key={index}
                              
                                className={`pages-pagination__page-numbers ${
                                    page === currentPage ? 'current' : ''
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageClick(page);
                                }}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
                <button
                    className="pagination__btn pagination__btn_next"
                    onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageClick(currentPage + 1);
                    }}
                >
                    <svg>
                        <use xlinkHref="#arrow-btn"></use>
                    </svg>
                </button>
            </div>
        </>
    );
};
