import star from '../../assets/img/icons/star.svg'
import { Wraper } from '../Wraper'
import { Categories } from '../../components/categories/Categories'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { PaginationPage } from '../../components/pagination/PaginationPage'
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
import $api from '../../http'
import { useQuery } from 'react-query'
import { SeeAllEssentialCasinoResponse, SeeAllEssentialLoyaltyCasino } from '../../types'
import { LazyCardImg } from '../../components/lazy-img/LazyCardImg'
import './style.css'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { lazy, useEffect, useState } from 'react'
import { cloacingFetch, cloacingLink, sanitizeLink } from '../../helper'
import { Link } from 'react-router-dom'
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))

const countPageSize = 10

export default function SeeAllEssentialsLoyalty() {
    // document.title = "All Essentials Loyalty"

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllEssentialLoyaltyCasino[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const getAllEssentialsLoyalty = async (page: number): Promise<SeeAllEssentialCasinoResponse> => {
        const response = await $api.get(`get-see-all-loyalties/?page=${page}&page_size=${countPageSize}`)
        return response.data
    }

    const { data, isLoading } = useQuery(['get-see-all-loyalties', currentPage], () => getAllEssentialsLoyalty(currentPage), {
        keepPreviousData: true,
    })

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    useEffect(() => {
        if (data?.results) {
            setAllData((s) => [...s, ...data?.results])
        }
    }, [data])

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

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    const displayedData = isMobile ? allData : data?.results

    if (isLoading) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main">
                <div className="main-gamble__body">
                    <Categories />
                    <BreadCrumb
                        path={[
                            {
                                name: 'Home',
                                link: 'https://cryptogamblers.pro',
                            },
                            {
                                name: 'Gambling Hub',
                                link: 'https://cryptogamblers.pro/bonuses',
                            },
                            {
                                name: 'Essential VIP Loyalty Programs',
                                link: '#',
                            },
                        ]}
                    />
                    <section className="loyaltie-programs__main main-loyaltie-programs">
                        <div className="main-loyaltie-programs__container container">
                            <div className="main-loyaltie-programs__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            <h2 className="top__title">Essential VIP Loyalty Programs</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-loyaltie-programs__items loyaltie-programs__items">
                                {displayedData?.map((item) => (
                                    <div className="loyaltie-programs__item item-loyaltie-programs">
                                        <div className="item-loyaltie-programs__row">
                                            <div className="item-loyaltie-programs__main">
                                                <Link to={`/casino/${sanitizeLink(item.casino_name)}?queryId=${item.casino_id}`} className="item-loyaltie-programs__image loyalty-img-custom">
                                                    <LazyCardImg img={item?.casino_image || ''} width="100%" />
                                                </Link>
                                            </div>
                                            <div className="item-loyaltie-programs__content content-item-loyaltie-programs">
                                                <div className="content-item-loyaltie-programs__top top-content-item-loyaltie-programs">
                                                    <h2 className="top-content-item-loyaltie-programs__name">{item.casino_name}</h2>
                                                    <div className="info-casino-card__stake-rating">
                                                        <span className="info-casino-card__stake-rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="info-casino-card__stake__rating-number">{item.casino_rank}</span>
                                                    </div>
                                                </div>
                                                <div className="content-item-loyaltie-programs__features features-essential-programs-gamble">
                                                    {item.loyalty_program.loyalty_keypoint.map((it) => (
                                                        <div className="features-essential-programs-gamble__column">
                                                            <div className="features-essential-programs-gamble__item">
                                                                <div className="features-essential-programs-gamble__icon ">
                                                                    <LazyCardImg img={it?.image || ''} width="100%" size="medium" />
                                                                </div>
                                                                <div className="features-essential-programs-gamble__info">
                                                                    <div className="features-essential-programs-gamble__name">{it.text_1}</div>
                                                                    <div className="features-essential-programs-gamble__text">{it.text_2}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="features-essential-programs-gamble__column features-essential-programs-gamble__column_rating">
                                                        <div className="features-essential-programs-gamble__item features-essential-programs-gamble__item_rating">
                                                            <div className="item-essential-programs-gamble__rating">
                                                                <div className="item-essential-programs-gamble__rating-number">
                                                                    {parseInt(String(item?.loyalty_program?.loyalty_rank), 10)}
                                                                    /10
                                                                </div>
                                                                <div className="item-essential-programs-gamble__rating-body">
                                                                    <div className="item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble">
                                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                                                                            <div
                                                                                className={`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${level} ${
                                                                                    level <= (Number(item?.loyalty_program?.loyalty_rank) || 10) && 'full'
                                                                                }`}
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
                                                            href={cloacingLink(item?.casino_name)}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                e.preventDefault()
                                                                cloacingFetch(item?.casino_affiliate_link)
                                                                window.open(item?.casino_affiliate_link || item?.url_casino, '_blank', 'noopener,noreferrer')
                                                            }}
                                                            className="bottom-content-item-loyaltie-programs__btn-view"
                                                        >
                                                            Visit Casino
                                                        </a>
                                                        <Link
                                                            to={`/casino/${sanitizeLink(item.casino_name)}/loyalty?queryId=${item?.loyalty_program?.id}`}
                                                            aria-label="Put your description here."
                                                            className="bottom-content-item-loyaltie-programs__btn-more"
                                                        >
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
