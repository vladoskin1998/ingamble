import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { Categories } from '../../components/categories/Categories'
import { PaginationPage } from '../../components/pagination/PaginationPage'
import { Wraper } from '../Wraper'

import star from '../../assets/img/icons/star.svg'
import like from '../../assets/img/icons/like.svg'
import { lazy, useEffect, useState } from 'react'
import './style.css'
import $api from '../../http'
import { useQuery } from 'react-query'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { SeeAllBonus as SeeAllBonusType, SeeAllBonusResponse } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import { cloacingFetch, cloacingLink, COLORS_TAGS, sanitizeLink, sanitizeNumberLike } from '../../helper'
import { Link, useSearchParams } from 'react-router-dom'
import { NoResult } from '../../components/no-result'
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))

const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))

const getAllBonusFetchData = async (page: number, queryId: string | null) => {
    const response = await $api.get(`get-see-all-bonus-category${queryId ? '/' + queryId : ''}/?page=${page}&page_size=${countPageSize}`)
    return response.data
}

const countPageSize = 20

export default function SeeAllBonus() {
    // // document.title = "All Bonus"

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllBonusType[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const { initializeAdaptiveBehavior, category } = useAdaptiveBehavior()

    const [searchParams] = useSearchParams()
    const qid = searchParams.get('queryId')

    const [queryId, setQueryId] = useState<string>(qid || '')

    useEffect(() => {
        setQueryId(qid || '')
        window.scrollTo(0, 0)
    }, [qid])

    const { data, isLoading } = useQuery<SeeAllBonusResponse>(['get-see-all-bonus-category/', currentPage, queryId], () => getAllBonusFetchData(currentPage, queryId), {
        keepPreviousData: true,
    })

    useEffect(() => {
        if (isMobile && !data?.bonuses?.results) {
            setAllData([])
            return
        }
        if (isMobile && currentPage === 1 && data?.bonuses?.results) {
            setAllData(data?.bonuses?.results)
            return
        }
        if (isMobile) {
            setAllData((s) => {
                const combinedData = [...s, ...(data?.bonuses?.results || [])]
                return combinedData
            })
            return
        }
    }, [data, queryId])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.bonuses?.results

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__see-all main-gamble see-all">
                <div className="main-gamble__body">
                    <Categories />
                    <BreadCrumb
                        path={[
                            {
                                name: 'Home',
                                link: 'https://cryptogamblers.pro',
                            },
                            {
                                name: 'All Bonuses',
                                link: 'https://cryptogamblers.pro/bonuses',
                            },
                            // {
                            //     name:   DataArray.find(item => Number(item?.key) === key)?.name || 'not found',
                            //     link: "#",
                            // },
                        ]}
                    />
                    <section className="see-all__main main-see-all">
                        <div className="main-see-all__container container">
                            <div className="main-see-all__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">{queryId ? data?.category_name || category?.find((item) => item?.bonus_id === Number(queryId))?.name : 'All Bonuses'}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-see-all__row custom-main-see-all__row">
                                {displayedData?.map((item) => (
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <div
                                                    style={{
                                                        padding: '0 8px 50.432% 8px',
                                                    }}
                                                    className="casino-card__image-block"
                                                >
                                                    <Link to={`/casino/${sanitizeLink(item.casino_name)}/bonuses/${sanitizeLink(item.bonus_name)}?queryId=${item.bonus_id}`} className="casino-card__image see-all-custom__image-custom">
                                                        <LazyCardImg img={item.bonus_image} width="100%" />
                                                    </Link>
                                                    <a
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
                                                </div>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    {item.labels.map((it, id) => (
                                                        <div className={`tags-casino-card__item ${COLORS_TAGS[id % 4]}`}>
                                                            <span className="tags-casino-card__item-label">{typeof it === 'string' ? it : it.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <Link to={`/casino/${sanitizeLink(item?.casino_name)}?queryId=${item?.casino_id}`} aria-label="Put your description here." className="info-casino-card__stake-link">
                                                            {item?.casino_name}
                                                        </Link>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star" />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">{item.casino_rank}</span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img src={like} alt="like" />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">{sanitizeNumberLike(item?.bonus_likes)}</span>
                                                    </div>
                                                </div>
                                                <Link to={`/casino/${sanitizeLink(item.casino_name)}/bonuses/${sanitizeLink(item.bonus_name)}?queryId=${item.bonus_id}`} className="casino-card__name">
                                                    {item.bonus_name}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <PaginationPage
                                countElem={data?.bonuses?.count}
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
