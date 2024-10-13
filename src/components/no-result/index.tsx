import './style.css'

export const NoResult = () => {
    return (
        <main className="gamble__casinos-filtered main-gamble no-results">
            <div className="main-gamble__body">
                <section className="no-results__main main-no-results">
                    <div className="main-no-results__container container">
                        <div className="main-no-results__top top">
                            <div className="top__title-block">
                                <span className="top__title-icon">
                                    <img
                                        src="img/icons/search-filter.svg"
                                        alt="search"
                                    />
                                </span>
                                <h2 className="top__title">Results</h2>
                            </div>
                        </div>
                        <div className="main-no-results__body">
                            <div className="main-no-results__content">
                                <div className="main-no-results__image">
                                    <img
                                        src="img/no-results.png"
                                        alt="no-results"
                                    />
                                </div>
                                <div className="main-no-results__info">
                                    <h1 className="main-no-results__title">
                                        No results found
                                    </h1>
                                    <div className="main-no-results__subtitle">
                                        Sorry, there are not results for:{" "}
                                        <span className="main-no-results__subtitle-value">
                                            GG Cool epic game
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
