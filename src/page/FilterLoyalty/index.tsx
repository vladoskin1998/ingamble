import { lazy, memo, useEffect, useState } from 'react'
import { Categories } from '../../components/categories/Categories'
import { FilterHeaderList } from '../../components/filter-components/FilterHeaderList'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { initialLoyaltiesFilters, useFilterContext } from '../../context/FilterContext'
import { Wraper } from '../Wraper'
import { FilterLoyaltiesPostResponse, LoyaltiesFilterBodyType, SeeAllEssentialLoyaltyCasino } from '../../types'
import { useQuery } from 'react-query'
import { cloacingFetch, cloacingLink, filterEmptyValues, sanitizeLink } from '../../helper'
import $api from '../../http'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { debounce } from 'lodash'
import { PaginationPage } from '../../components/pagination/PaginationPage'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import star from '../../assets/img/icons/star.svg'
import '../SeeAllEssentialsLoyalty/style.css'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { NoResult } from '../../components/no-result'
import searchImg from '../../assets/img/icons/search-filter.svg'

const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))
const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const countPageSize = 15

const debouncedFetchFilter = debounce((filters, fetchFunction) => fetchFunction(filters), 700)

const debouncedFetchPagination = debounce((filters, fetchFunction, setLoading, isMobile) => {
    if (!isMobile) {
        setLoading(true)
    }

    fetchFunction(filters).finally(() => setLoading(false))
})

const getFilteringLoyaltiesList = async (payload: LoyaltiesFilterBodyType, page: number) => {
    const body = filterEmptyValues(payload)
    const response = await $api.post(`filter/loyalty/?page=${page}&page_size=${countPageSize}`, body)
    return response.data
}

export default function FilterLoyalty() {
    // // document.title = "Filter Loyalties"

    const { initializeAdaptiveBehavior, isSidebarActive } = useAdaptiveBehavior()
    const { loyaltiesFilters, setLoyaltiesFilters } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllEssentialLoyaltyCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    //filter/loyalty/?page_size=100

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)
    //FilterLoyaltiesPostResponse
    const { data, isLoading, refetch } = useQuery<FilterLoyaltiesPostResponse>(['filter/loyalty', loyaltiesFilters, currentPage], () => getFilteringLoyaltiesList(loyaltiesFilters, currentPage), {
        keepPreviousData: true,
        enabled: false,
    })

    useEffect(() => {
        debouncedFetchPagination(loyaltiesFilters, refetch, setIsDebouncedLoading, isMobile)
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        setCurrentPage(1)
        debouncedFetchFilter(loyaltiesFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            })
        } else {
            setAllData([])
        }
    }, [loyaltiesFilters, refetch])

    useEffect(() => {
        if (isMobile && !data?.results) {
            setAllData([])
            return
        }
        if (isMobile && currentPage === 1 && data?.results) {
            setAllData(data?.results)
            return
        }
        if (isMobile) {
            setAllData((s) => {
                const combinedData = [...s, ...(data?.results || [])]
                return combinedData
            })
            return
        }
    }, [data])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading, isSidebarActive])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.results

    const clearAll = () => {
        setLoyaltiesFilters(initialLoyaltiesFilters)
    }

    const handlerClearOne = (v: string) => {
        const findedValueField = initialLoyaltiesFilters[v as keyof LoyaltiesFilterBodyType]
        setLoyaltiesFilters((s) => ({
            ...s,
            [v as keyof LoyaltiesFilterBodyType]: findedValueField,
        }))
    }

    if (isDebouncedLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main">
                <div className="main-gamble__body">
                    <Categories />
                    <FilterHeaderList initList={loyaltiesFilters} clearAll={clearAll} clearOne={(v) => handlerClearOne(v)} />
                    <section className="loyaltie-programs__main main-loyaltie-programs">
                        <div className="main-loyaltie-programs__container container">
                            <div className="results-filter-scenarios__top top">
                                <div className="top__title-block">
                                    <span className="top__title-icon">
                                        <img src={searchImg} alt="search" />
                                    </span>
                                    <h2 className="top__title">Results</h2>
                                </div>
                            </div>
                            
                                <>
                                    <LisDisplayedData displayedData={displayedData} />

                                    <PaginationPage
                                        countElem={data?.count}
                                        currentPage={currentPage}
                                        countPageElem={countPageSize}
                                        setCurrentPage={(s) => {
                                            setCurrentPage(s)
                                            if (!isMobile) {
                                                window.scrollTo({
                                                    behavior: 'smooth',
                                                    top: 0,
                                                })
                                            }
                                        }}
                                    />
                                </>
                              {!displayedData?.length && isLoading && <NoResult />}
                        </div>
                    </section>
                    <CheckMoreWhatSuitsYouBest />
                    <SubscribeForm />
                    <BottomInfo />
                </div>
            </main>
        </Wraper>
    )
}

const LisDisplayedData = memo(({ displayedData }: { displayedData: SeeAllEssentialLoyaltyCasino[] | undefined }) => {
    return (
        <div className="main-loyaltie-programs__items loyaltie-programs__items">
            {displayedData?.map((item) => (
                <div className="loyaltie-programs__item item-loyaltie-programs">
                    <div className="item-loyaltie-programs__row">
                        <div className="item-loyaltie-programs__main">
                            <Link rel="nofollow noopener" to={`/casino/${sanitizeLink(item.casino_name)}?queryId=${item.casino_id}`} className="item-loyaltie-programs__image loyalty-img-custom " key={uuidv4()}>
                                <LazyCardImg img={item?.casino_image || ''} height="100%" width="100%" />
                            </Link>
                        </div>
                        <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                            <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                <h2 className="top-content-item-loyaltie-programs__name">{item?.casino_name}</h2>
                                <div className="info-casino-card__stake-rating">
                                    <span className="info-casino-card__stake-rating-icon">
                                        <img src={star} alt="star" />
                                    </span>
                                    <span className="info-casino-card__stake__rating-number">{item?.casino_rank}</span>
                                </div>
                            </div>
                            <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                {item?.loyalty_program?.loyalty_keypoint.map((it) => (
                                    <div className="features-essential-programs-gamble__column">
                                        <div className="features-essential-programs-gamble__item">
                                            <div className="features-essential-programs-gamble__icon">
                                                <LazyCardImg img={it?.image || ''} width="100%" size="medium" />
                                            </div>
                                            <div className="features-essential-programs-gamble__info">
                                                <div className="features-essential-programs-gamble__name">{it?.text_1}</div>
                                                <div className="features-essential-programs-gamble__text">{it?.text_2}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                    <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                        <div className="item-essential-programs-gamble__rating">
                                            <div className="item-essential-programs-gamble__rating-number">
                                                {item?.loyalty_program?.count_levels || 10}
                                                /10
                                            </div>
                                            <div className="item-essential-programs-gamble__rating-body">
                                                <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                                                        <div
                                                            className={`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${level} ${level <= (item?.loyalty_program?.count_levels || 10) && 'full'}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                                <div className="item-essential-programs-gamble__rating-text">{item?.loyalty_program?.loyalty_level_description || 'Excellent'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs">
                                <div className="bottom-content-item-loyaltie-programs__btns">
                                    <a
                                        target="_blank"
                                        href={cloacingLink(item?.casino_name)}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            e.preventDefault()
                                            cloacingFetch(item?.casino_affiliate_link)
                                            window.open(item?.casino_affiliate_link || item?.url_casino, '_blank', 'noopener,noreferrer')
                                        }}
                                        aria-label="Put your description here."
                                        className="bottom-content-item-loyaltie-programs__btn-view"
                                    >
                                        Visit Casino
                                    </a>
                                    <Link to={`/casino/${sanitizeLink(item.casino_name)}/loyalty?queryId=${item?.loyalty_program?.id}`} aria-label="Put your description here." className="bottom-content-item-loyaltie-programs__btn-more">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
})
