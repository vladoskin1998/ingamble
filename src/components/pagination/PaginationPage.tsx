import './style.css'

export const PaginationPage = () => {
    return (
        <>
            <a
                href=""
                target="_blank"
                aria-label="Put your description here."
                className="main-loyaltie-programs__btn-more"
            >
                Show More
            </a>
            <div className="main-loyaltie-programs__pagination pagination">
                <a href="" className="pagination__btn pagination__btn_prev">
                    <svg>
                        <use xlinkHref="#arrow-btn"></use>
                    </svg>
                </a>
                <div className="pagination__pages pages-pagination">
                    <span className="pages-pagination__page-numbers current">
                        1
                    </span>
                    <a href="" className="pages-pagination__page-numbers">
                        2
                    </a>
                    <a href="" className="pages-pagination__page-numbers">
                        3
                    </a>
                    <span className="pages-pagination__page-numbers dots">
                        ...
                    </span>
                    <a href="" className="pages-pagination__page-numbers">
                        9
                    </a>
                    <a href="" className="pages-pagination__page-numbers">
                        10
                    </a>
                    <a href="" className="pages-pagination__page-numbers">
                        11
                    </a>
                </div>
                <a href="" className="pagination__btn pagination__btn_next">
                    <svg>
                        <use xlinkHref="#arrow-btn"></use>
                    </svg>
                </a>
            </div>
        </>
    )
}
