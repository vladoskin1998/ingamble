import { Swiper, SwiperSlide } from 'swiper/react'
import { useAdaptiveBehavior } from '../../context/AppContext'



import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {  DataHomeItemsBlockCategoryType, DataHomeItemsBlockEnumCategory, FormatedCategoryType } from '../../types'
import { useFilterContext } from '../../context/FilterContext'



export const Categories = ({ type_category = DataHomeItemsBlockEnumCategory.all_category as DataHomeItemsBlockCategoryType }: { type_category?: DataHomeItemsBlockCategoryType }) => {
    
    const location = useLocation()

    const { isSidebarActive, setSidebarActive, category } = useAdaptiveBehavior()

    const listCategory = type_category === (DataHomeItemsBlockEnumCategory.all_category as DataHomeItemsBlockCategoryType) ? category : category.filter((item) => item.categoryType === type_category)

    if (!listCategory) {
        return <></>
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480)
        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return (
        <div className=" filter-tags-gamble main-gamble__filter-tags categorie--tags">
            <div className="filter-tags-gamble__container container" style={{ display: 'flex' }}>
                <div
                    className="filter-tags-gamble__slide slide-filter-tags-gamble slide-filter-tags-gamble_first slide-filter-tags-gamble_mob "
                    style={{ marginRight: '4px' }}
                    onClick={() => {
                        setSidebarActive(!isSidebarActive)
                    }}
                >
                    <button className="title-filters-sidebar-gamble__btn filter-open" style={{ display: 'block', padding: '12px' }}>
                        <span className="title-filters-sidebar-gamble__btn-icon_main">
                            <svg>
                                <use xlinkHref="#filter"></use>
                            </svg>
                        </span>
                    </button>
                </div>
                <Swiper
                    slidesPerView="auto"
                    breakpoints={{
                        320: {
                            spaceBetween: 4,
                        },
                        1650.98: {
                            spaceBetween: 8,
                        },
                        1920: {
                            spaceBetween: 8,
                        },
                    }}
                    spaceBetween={8}
                    style={{ margin: 0 }}
                >
                    {/* {CristmasCategory && (
                            <SwiperSlide style={{ width: 'auto' }} key={0}>
                                <Link rel="nofollow noopener" to={CristmasCategory?.link || '/'} aria-label="Put your description here." className="slide-filter-tags-gamble__btn">
                                    {CristmasCategory?.name}
                                </Link>
                            </SwiperSlide>
                        )} */}

                    {isMobile && (
                        <>
                            {location.pathname !== '/bonuses' && (
                                <SwiperSlide key={1} style={{ width: 'auto' }}>
                                    <Link rel="nofollow noopener" to={'/bonuses'} aria-label="Put your description here." className="slide-filter-tags-gamble__btn">
                                        Bonuses
                                    </Link>
                                </SwiperSlide>
                            )}

                            {location.pathname !== '/casinos' && (
                                <SwiperSlide key={3} style={{ width: 'auto' }}>
                                    <Link rel="nofollow noopener" to={'casinos '} aria-label="Put your description here." className="slide-filter-tags-gamble__btn">
                                        Casinos
                                    </Link>
                                </SwiperSlide>
                            )}
                            {location.pathname !== '/all-loyalties' && (
                                <SwiperSlide key={2} style={{ width: 'auto' }}>
                                    <Link rel="nofollow noopener" to={'/all-loyalties'} aria-label="Put your description here." className="slide-filter-tags-gamble__btn">
                                        Loyalty
                                    </Link>
                                </SwiperSlide>
                            )}
                        </>
                    )}
                    {listCategory.map((item, index) => (
                        <SwiperSlide key={index + 10} style={{ width: 'auto' }}>
                            <ItemCategory item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


const ItemCategory = ({ item }: { item: FormatedCategoryType }) => {
    const { fooCategorySanitazeLink } = useFilterContext()

    const { seeAllLink, seeAllFoo } = fooCategorySanitazeLink({
        type_category: item.categoryType,
        slug: item.slug,
    })

    return (
        <Link rel="nofollow noopener" to={seeAllLink} onClick={seeAllFoo} aria-label="Put your description here." className="slide-filter-tags-gamble__btn">
            {item?.name}
        </Link>
    )
}