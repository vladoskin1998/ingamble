import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { Categories } from "../../components/categories/Categories"
import { PaginationPage } from "../../components/pagination/PaginationPage"
import { Wraper } from "../Wraper"

import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import { useEffect, useState } from "react"
import "./style.css"
import $api from "../../http"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { useAdaptiveBehavior } from "../../context/AppContext"
import {
    SeeAllBonus as SeeAllBonusType,
    SeeAllBonusResponse,
    AllCategoriesHomeDataResponse,
} from "../../types"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { COLORS_TAGS, sanitizeLink } from "../../helper"
import { useParams } from "react-router-dom";

const getAllBonusFetchData = async (page: number, queryId: string) => {
    const response = await $api.get(
        `get-see-all-bonus-category/${queryId}/?page=${page}&page_size=${countPageSize}`
    )
    return response.data
}

const getDataHomePageCategories = async () => {
    const response = await $api.get("get-data-home-page-categories/");
    return response.data 
};

const countPageSize = 60

export default function SeeAllBonus() {
    // document.title = "All Bonus"

    const [currentPage, setCurrentPage] = useState(1)
    const [allData, setAllData] = useState<SeeAllBonusType[]>([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900)
    const [queryId, setQueryId] = useState("")
    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const { bonus_categories } = useParams<{ bonus_categories: string }>();

    const { data: dataCategories} = useQuery< AllCategoriesHomeDataResponse >(
        "get-data-home-page-categories/",
        getDataHomePageCategories,
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    );
    
    useEffect(() => {
        const el = dataCategories?.bonus_categories.find(item => sanitizeLink(item.name) === bonus_categories)
        if (el) {
            document.title = `All Bonuses | ${el?.name}`
            setQueryId(String(el.id))
        }
    }, [bonus_categories, dataCategories])



    const { data, isLoading } = useQuery<SeeAllBonusResponse>(
        ["get-see-all-bonus-category/", currentPage, queryId],
        () => getAllBonusFetchData(currentPage, queryId),
        {
            keepPreviousData: true,
            enabled: !!queryId,
        }
    )

  

    useEffect(() => {
        if (data?.bonuses?.results && isMobile ) {
            setAllData((s) => {
                const combinedData = [...s, ...data?.bonuses?.results]

                const uniqueData = combinedData?.reduce((acc, item) => {
                    if (!acc.some((el) => el.bonus_id === item.bonus_id)) {
                        acc.push(item)
                    }
                    return acc
                }, [] as SeeAllBonusType[])

                return uniqueData
            })
        }
        if (!allData.length && data?.bonuses?.results){
            setAllData(data?.bonuses?.results)
        }
    }, [data])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const displayedData = isMobile ? allData : data?.bonuses.results
    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading || !queryId) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__see-all main-gamble see-all">
                <div className="main-gamble__body">
                    <Categories
                        category={[
                            { name: "All" },
                            { name: "Hot Events" },
                            { name: "Best Cash Back Casinos" },
                            { name: "Highest RTP Slots" },
                            { name: "No Deposit Bonuses" },
                            { name: "VPN Allowed Casinos" },
                        ]}
                    />
                    <BreadCrumb
                        path={[
                            {
                                name: "Home",
                                link: "https://cryptogamblers.pro",
                            },
                            {
                                name: "All Bonuses",
                                link: "https://cryptogamblers.pro/bonuses",
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
                                            <h2 className="top__title">
                                                {data?.category_name}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-see-all__row custom-main-see-all__row">
                                {displayedData?.map((item) => (
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    style={{padding: "0 8px 50.432% 8px"}}
                                                    className="casino-card__image-block"
                                                >
                                                    <div className="casino-card__image see-all-custom__image-custom">
                                                        <LazyCardImg
                                                            img={
                                                                item.bonus_image
                                                            }
                                                            width="100%"
                                                        />
                                                    </div>
                                                    <a
                                                        href={
                                                            item.casino_affiliate_link
                                                        }
                                                        target="_blank"
                                                        aria-label="Put your description here."
                                                        className="casino-card__bnt"
                                                    >
                                                        Play
                                                    </a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    {item.labels.map(
                                                        (it, id) => (
                                                            <div
                                                                className={`tags-casino-card__item ${
                                                                    COLORS_TAGS[
                                                                        id % 4
                                                                    ]
                                                                }`}
                                                            >
                                                                <span className="tags-casino-card__item-label">
                                                                    {typeof it === "string" ? it : it.name}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="info-casino-card__stake-link"
                                                        >
                                                            {item?.casino_name}
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img
                                                                    src={star}
                                                                    alt="star"
                                                                />
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                {
                                                                    item.casino_rank
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                            <img
                                                                src={like}
                                                                alt="like"
                                                            />
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            {item.bonus_likes}
                                                        </span>
                                                    </div>
                                                </div>
                                                <a
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="casino-card__name"
                                                >
                                                    {item.bonus_name}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <PaginationPage
                                countElem={data?.bonuses.count}
                                currentPage={currentPage}
                                countPageElem={countPageSize}
                                setCurrentPage={(s) => {
                                    setCurrentPage(s)
                                    if (!isMobile) {
                                        window.scrollTo({
                                            behavior: "smooth",
                                            top: 0,
                                        })
                                    }
                                }}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </Wraper>
    )
}
