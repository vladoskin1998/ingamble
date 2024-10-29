import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { Categories } from "../../components/categories/Categories"
import { PaginationPage } from "../../components/pagination/PaginationPage";
import { Wraper } from "../Wraper"
import { useSearchParams } from 'react-router-dom';
import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import { useEffect, useState } from "react";
import './style.css'
import $api from "../../http";
import { useQuery } from "react-query";
import { LogoLoader } from "../../components/loader/LogoLoader";
import { useAdaptiveBehavior } from "../../context/AppContext";
import { SeeAllBonusResponse } from "../../types";
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg";
import { COLORS_TAGS } from "../../helper";


export default function SeeAllBonus() {
    const [searchParams] = useSearchParams()
    const [queryId, setQueryId ] = useState("")
    const { initializeAdaptiveBehavior } =
        useAdaptiveBehavior()
        
    useEffect(() => {
        const id = searchParams.get("id")
        if (id) {
            setQueryId(id)
        }
    }, [searchParams])

    const getAllBonusFetchData = async () => {
        const response = await $api.get(`get-see-all-bonus-category/${queryId}/`)
        return response.data
    }

    const { data, isLoading } = useQuery<SeeAllBonusResponse>("get-see-all-bonus-category/", getAllBonusFetchData, {
        keepPreviousData: true,
        enabled: !!queryId,  
    })


    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading || !queryId) return <LogoLoader />
    
    return (
        <Wraper>
            <main className="gamble__see-all main-gamble see-all">
                <div className="main-gamble__body">
                    <Categories
                        category={
                            [
                                { name: "All" },
                                { name: "Hot Events" },
                                { name: "Best Cash Back Casinos" },
                                { name: "Highest RTP Slots" },
                                { name: "No Deposit Bonuses" },
                                { name: "VPN Allowed Casinos" },
                            ]
                        }
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
                                <div className="main-see-all__row">
                                    {
                                        data?.bonuses.map(item =>   <div className="main-see-all__column">
                                            <div className="slide-slider__item casino-card">
                                                <div className="casino-card__top">
                                                    <a href="" aria-label="Put your description here." target="_blank"
                                                        className="casino-card__image-block">
                                                        <div className="casino-card__image ibg">
                                                            <LazyCardImg img={item.bonus_image} />
                                                        </div>
                                                        <a href={item.casino_affiliate_link} target="_blank" aria-label="Put your description here."
                                                            className="casino-card__bnt">Play</a>
                                                    </a>
                                                </div>
                                                <div className="casino-card__content">
                                                    <div className="casino-card__tags tags-casino-card">
                                                        {
                                                            item.labels.map((it,id) =>  <div
                                                                className={`tags-casino-card__item ${
                                                                    COLORS_TAGS[
                                                                        id %
                                                                            4
                                                                    ]
                                                                }`}
                                                            >
                                                                <span className="tags-casino-card__item-label">
                                                                    {
                                                                        it
                                                                    }
                                                                </span>
                                                            </div>)
                                                        }
                                                     
                                                    </div>
                                                    <div className="casino-card__info info-casino-card">
                                                        <div className="info-casino-card__stake">
                                                            <a href="" aria-label="Put your description here."
                                                                target="_blank" className="info-casino-card__stake-link">
                                                                Stake Casino
                                                            </a>
                                                            <div className="info-casino-card__stake-rating">
                                                                <span className="info-casino-card__stake-rating-icon">
                                                                    <img src={star} alt="star"/>
                                                                </span>
                                                                <span className="info-casino-card__stake__rating-number">
                                                                   {item.casino_rank}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="info-casino-card__likes">
                                                            <span className="info-casino-card__likes-icon">
                                                               <img src={like} alt="like"/>
                                                            </span>
                                                            <span className="info-casino-card__likes-number">
                                                                {item.bonus_likes}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a href="" aria-label="Put your description here." target="_blank"
                                                        className="casino-card__name">
                                                        {item.bonus_name}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                   {/*   <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards08} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Crazy Cash Bomb Winnings $1,000
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                   <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards02} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards07} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards06} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards01} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    New Year Bet Race - $30,000 Rocket Launcher With 10x Scope
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards04} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards07} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards01} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    New Year Bet Race - $30,000 Rocket Launcher With 10x Scope
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards02} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards06} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards06} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards01} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    New Year Bet Race - $30,000 Rocket Launcher With 10x Scope
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards08} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Crazy Cash Bomb Winnings $1,000
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards07} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards04} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards01} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    New Year Bet Race - $30,000 Rocket Launcher With 10x Scope
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards02} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards07} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards04} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Big Fat Race to $100 Moon coins
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-see-all__column">
                                        <div className="slide-slider__item casino-card">
                                            <div className="casino-card__top">
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__image-block">
                                                    <div className="casino-card__image ibg">
                                                        <img src={casinoCards08} alt="casino-card-img" />
                                                    </div>
                                                    <a href="" target="_blank" aria-label="Put your description here."
                                                        className="casino-card__bnt">Play</a>
                                                </a>
                                            </div>
                                            <div className="casino-card__content">
                                                <div className="casino-card__tags tags-casino-card">
                                                    <div className="tags-casino-card__item tags-casino-card__item_green">
                                                        <span className="tags-casino-card__item-label">WR:</span>
                                                        <span className="tags-casino-card__item-value">4.0x</span>
                                                    </div>
                                                    <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                        <span className="tags-casino-card__item-label">Min
                                                            Dep:</span>
                                                        <span className="tags-casino-card__item-value">€10</span>
                                                    </div>
                                                </div>
                                                <div className="casino-card__info info-casino-card">
                                                    <div className="info-casino-card__stake">
                                                        <a href="" aria-label="Put your description here."
                                                            target="_blank" className="info-casino-card__stake-link">
                                                            Stake Casino
                                                        </a>
                                                        <div className="info-casino-card__stake-rating">
                                                            <span className="info-casino-card__stake-rating-icon">
                                                                <img src={star} alt="star"/>
                                                            </span>
                                                            <span className="info-casino-card__stake__rating-number">
                                                                4.8
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-casino-card__likes">
                                                        <span className="info-casino-card__likes-icon">
                                                           <img src={like} alt="like"/>
                                                        </span>
                                                        <span className="info-casino-card__likes-number">
                                                            34K
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="" aria-label="Put your description here." target="_blank"
                                                    className="casino-card__name">
                                                    Crazy Cash Bomb Winnings $1,000
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <PaginationPage/>
                            </div>
                        </section>
                </div>
            </main>
        </Wraper>
    )
}
