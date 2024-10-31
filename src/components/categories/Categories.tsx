
import { Swiper, SwiperSlide } from "swiper/react"

export const Categories = ({ category }: { category: { name: string, link?:string }[] }) => {
    return (
        <div className="simple-bonus__filter-tags filter-tags-gamble">
            <div className="filter-tags-gamble__container container">
                <Swiper slidesPerView="auto" spaceBetween={10}>
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
