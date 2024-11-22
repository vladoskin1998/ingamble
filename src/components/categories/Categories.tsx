import { Swiper, SwiperSlide } from "swiper/react"
import { useAdaptiveBehavior } from "../../context/AppContext";

export const Categories = ({
    category,
}: {
    category: { name: string; link?: string }[]
}) => {

    const { isSidebarActive, setSidebarActive } = useAdaptiveBehavior()

    return (
        <div className="simple-bonus__filter-tags filter-tags-gamble">
            <div className="filter-tags-gamble__container container" style={{display:'flex'}}>
                <div
                    className="filter-tags-gamble__slide slide-filter-tags-gamble slide-filter-tags-gamble_first slide-filter-tags-gamble_mob "
                    style={{marginRight: "10px"}}
                    onClick={() => {setSidebarActive(!isSidebarActive)}}
                >
                    <button
                        className="title-filters-sidebar-gamble__btn filter-open"
                        style={{display:"block",     padding: "12px"}}
                    >
                        <span className="title-filters-sidebar-gamble__btn-icon_main">
                            <svg>
                                <use xlinkHref="#filter"></use>
                            </svg>
                        </span>
                       
                    </button>
                </div>
                <Swiper slidesPerView="auto" spaceBetween={10} style={{margin: 0}}>
                    {category?.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <a
                                rel="nofollow noopener"
                                target="_blank"
                                href={item?.link || "/"}
                                aria-label="Put your description here."
                                className="slide-filter-tags-gamble__btn"
                            >
                                {item?.name}
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
