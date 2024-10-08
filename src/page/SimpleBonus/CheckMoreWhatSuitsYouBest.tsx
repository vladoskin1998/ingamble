import { LazyLoadImage } from "react-lazy-load-image-component"
import { useAdaptiveBehavior } from "../../context/AppContext"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"
export const CheckMoreWhatSuitsYouBest = () => {

    const { isSidebarActive, setSidebarActive } =
    useAdaptiveBehavior()
  return (
    <section className="main-gamble__bottom-filter-tags bottom-filter-tags check-bottom-filter-tags">
    <div className="bottom-filter-tags__container container">
        <div className="bottom-filter-tags__top top">
            <div className="top__title-block">
                <span className="top__title-icon">
                    <LazyLoadImage
                        src={searchFilterIcon}
                        alt="search"
                    />
                </span>
                <h2 className="top__title">
                    Check more what suits You Best
                </h2>
            </div>
        </div>
        <div className="bottom-filter-tags__row">
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Best Welcome Bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Reload bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Low wager bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Bonus buy bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Non-sticky bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Low risk
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Safest
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Highest RTP Slots
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Best Live Casinos
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Highest RTP Slots
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Safest
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Low wager bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Best Welcome Bonuses
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Low risk
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Highest RTP Slots
                </a>
            </div>
            <div className="bottom-filter-tags__column bottom-filter-tags__column_mob">
                <a
                    rel="nofollow noopener"
                    href=""
                    aria-label="Put your description here."
                    className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                >
                    Reload bonuses
                </a>
            </div>
        </div>
        <button
            onClick={() =>
                setSidebarActive(!isSidebarActive)
            }
            className="bottom-filter-tags__btn-filter"
        >
            <span>
                <svg>
                    <use xlinkHref="#filter"></use>
                </svg>
            </span>
            Filter What You need
        </button>
    </div>
</section>
  )
}
