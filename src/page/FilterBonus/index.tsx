import { useQuery } from 'react-query'
import { Categories } from '../../components/categories/Categories'
import { FilterHeaderList, makeListFilterHeader } from '../../components/filter-components/FilterHeaderList'
import { initialBonusFilters, initialCasinoFilters, useFilterContext } from '../../context/FilterContext'
import $api from '../../http'
import { BonusFilterBodyType, CasinoFilterBodyType, FilterBonusPostResponse, SeeAllBonus } from '../../types'
import { Wraper } from '../Wraper'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import like from '../../assets/img/icons/like.svg'
import { lazy, memo, useEffect, useState } from 'react'
import {  useAdaptiveBehavior } from '../../context/AppContext'
import star from '../../assets/img/icons/star.svg'
import { cloacingFetch, cloacingLink, COLORS_TAGS, filterEmptyValues, getTitleFilterCategories, sanitizeNumberLike } from '../../helper'
import { PaginationPage } from '../../components/pagination/PaginationPage'
import { debounce } from 'lodash'
import { LogoLoader } from '../../components/loader/LogoLoader'
import searchImg from '../../assets/img/icons/search-filter.svg'
import '../SeeAllBonus/style.css'
import { v4 as uuidv4 } from 'uuid'
import { Link, useParams } from 'react-router-dom'
import { NoResult } from '../../components/no-result'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import initializeAdaptiveBehavior from '../../helper/adaprive-bahavior'
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))
const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const countPageSize = window.innerWidth < 900 ? 10 :20

const debouncedFetchFilter = debounce((filters, fetchFunction) => fetchFunction(filters), 500)

const debouncedFetchPagination = debounce((filters, fetchFunction, setLoading, isMobile) => {
    if (!isMobile) {
        setLoading(true)
    }

    fetchFunction(filters).finally(() => setLoading(false))
})

const getFilteringBonusList = async (payload: BonusFilterBodyType, page: number) => {
    const body = filterEmptyValues(payload)
    const response = await $api.post(`filter/bonus/?page=${page}&page_size=${countPageSize}`, body)
    return response.data
}

export default function FilterBonus() {
    // // document.title = "Filter Bonus"

    const {  isShowPlayButton } = useAdaptiveBehavior()

    const { bonusFilters, setBonusFilters } = useFilterContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllBonus[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

    const [isDebouncedLoading, setIsDebouncedLoading] = useState(true)

    const { data, isLoading, refetch } = useQuery<FilterBonusPostResponse>(['filter/bonus', bonusFilters, currentPage], () => getFilteringBonusList(bonusFilters, currentPage), {
        keepPreviousData: true,
        enabled: false,
    })

        const { bonus_slug } = useParams()
    
        const [slug, setSlug] = useState<string>(bonus_slug || '')
    
        useEffect(() => {
            setSlug(bonus_slug || '')
        }, [bonus_slug])

    useEffect(() => {
        debouncedFetchPagination(bonusFilters, refetch, setIsDebouncedLoading, isMobile)
    }, [currentPage, refetch, setCurrentPage])

    useEffect(() => {
        setCurrentPage(1)
        debouncedFetchFilter(bonusFilters, refetch)
        if (!isMobile) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            })
        } else {
            setAllData([])
        }
    }, [bonusFilters, refetch])

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
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.results

    const clearAll = () => {
        setBonusFilters(initialBonusFilters)
    }

    const handlerClearOne = (v: string) => {
        const findedValueField = initialCasinoFilters[v as keyof CasinoFilterBodyType]
        setBonusFilters((s) => ({
            ...s,
            [v as keyof CasinoFilterBodyType]: findedValueField,
        }))
    }



    useEffect(() => {
        initializeAdaptiveBehavior()
  
    }, [isLoading])

       const title = getTitleFilterCategories({ slug, item: makeListFilterHeader(bonusFilters) })
    if (isDebouncedLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__casinos-filtered main-gamble casinos-filtered">
                <div className="main-gamble__body">
                    <Categories />
                    <BreadCrumb
                        path={[
                            {
                                name: 'Home',
                                link: '/',
                            },
                            {
                                name: 'Bonuses Filters',
                                link: '#',
                            },
                        ]}
                    />
                    <FilterHeaderList initList={bonusFilters} clearAll={clearAll} clearOne={(v) => handlerClearOne(v)} />

                    <section className="see-all__main main-see-all">
                        <div className="main-see-all__container container">
                            <div className="results-filter-scenarios__top top">
                                <div className="top__title-block">
                                    <span className="top__title-icon">
                                        <img src={searchImg} alt="search" />
                                    </span>
                                    <h2 className="top__title">{`${title} `}Results</h2>
                                </div>
                            </div>
                            <ListDisplayData displayedData={displayedData} isShowPlayButton={isShowPlayButton} />
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
                            {!displayedData?.length && !isLoading && <NoResult />}
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

const ListDisplayData = memo(({ displayedData, isShowPlayButton }: { displayedData: SeeAllBonus[] | undefined; isShowPlayButton: boolean}) => {
    return (
        <div className="main-see-all__row custom-main-see-all__row">
            {displayedData?.map((item) => (
                <div className="main-see-all__column">
                    <div className="slide-slider__item casino-card">
                        <div className="casino-card__top">
                            <div className="casino-card__image-block" style={{ padding: '0 8px 50.432% 8px' }}>
                                <Link rel="nofollow noopener" to={`/casino/${item.casino_slug}/bonuses/${item.bonus_slug}`} aria-label="Put your description here." className="casino-card__image see-all-custom__image-custom" key={uuidv4()}>
                                    <LazyCardImg img={item?.bonus_image} height="100%" width="100%" />
                                </Link>
                                {isShowPlayButton && (
                                    <a
                                        rel="nofollow noopener"
                                        href={cloacingLink(item?.casino_name)}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            e.preventDefault()
                                            cloacingFetch(item?.casino_affiliate_link)
                                            window.open(item?.casino_affiliate_link || item?.url_casino, '_blank', 'noopener,noreferrer')
                                        }}
                                        aria-label="Put your description here."
                                        className="casino-card__bnt"
                                    >
                                        Play
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="casino-card__content">
                            <div className="casino-card__tags tags-casino-card">
                                {item?.labels?.map((it, id) => (
                                    <div key={id} className={`tags-casino-card__item ${COLORS_TAGS[id % 4]}`}>
                                        <span className="tags-casino-card__item-label">{typeof it === 'string' ? it : it?.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="casino-card__info info-casino-card">
                                <div className="info-casino-card__stake">
                                    <Link rel="nofollow noopener" to={`/casino/${item.casino_slug}`} aria-label="Put your description here." className="info-casino-card__stake-link">
                                        {item?.casino_name}
                                    </Link>
                                    <div className="info-casino-card__stake-rating">
                                        <span className="info-casino-card__stake-rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="info-casino-card__stake__rating-number">{item?.casino_rank}</span>
                                    </div>
                                </div>
                                <div className="info-casino-card__likes">
                                    <span className="info-casino-card__likes-icon">
                                        <img src={like} alt="like" />
                                    </span>
                                    <span className="info-casino-card__likes-number">{sanitizeNumberLike(item?.bonus_likes)}</span>
                                </div>
                            </div>
                            <Link rel="nofollow noopener" to={`/casino/${item.casino_slug}/bonuses/${item.bonus_slug}`} aria-label="Put your description here." className="casino-card__name">
                                {item?.bonus_name}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
})
