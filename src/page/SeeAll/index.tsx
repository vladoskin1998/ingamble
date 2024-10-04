import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { Categories } from "../../components/categories/Categories"
import { PaginationPage } from "../../components/pagination/PaginationPage";
import { Default } from "../Dafault"
import { useLocation } from 'react-router-dom';
import star from "../../assets/img/icons/star.svg"
import like from "../../assets/img/icons/like.svg"
import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards02 from "../../assets/img/casino-cards/02.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"
import casinoCards06 from "../../assets/img/casino-cards/06.jpg"
import casinoCards07 from "../../assets/img/casino-cards/07.jpg"
import casinoCards08 from "../../assets/img/casino-cards/08.jpg"
import { useEffect, useState } from "react";
import './style.css'
interface CasinoData {
    key: number;
    name: string;
  }

const DataArray: CasinoData[] = [
    { key: 0, name: "Default" },
    { key: 22145678, name: "Today’s Hot" },
    { key: 23456789, name: "Fastest Payout Casinos" },
    { key: 34567890, name: "Fastest Withdrawal Casinos" },
    { key: 45678901, name: "Best Live Dealer Casinos" },
    { key: 56789012, name: "Explore The Best Crypto Casinos" },
    { key: 67890123, name: "Get Started with Powerful Welcome Bonus Packs" },
    { key: 78901234, name: "Great Live Casino Bonuses" },
    { key: 89012345, name: "Highest Max Bet Bonuses" },
    { key: 90123456, name: "Highroller Casino Bonuses" },
    { key: 11234567, name: "Low risk Bonuses" },
    { key: 22345678, name: "Low Wager Bonuses" },
    { key: 33456789, name: "New Bonuses" },
    { key: 44567890, name: "Newly Opened Casinos" },
    { key: 55678901, name: "Non Sticky Bonus" },
    { key: 66789012, name: "Popular Free/No Deposit Bonuses" },
    { key: 77890123, name: "Safest Casinos" },
    { key: 88901234, name: "The Best Casinos of 2024" },
    { key: 99012345, name: "Top Gainers Casinos" },
    { key: 10123456, name: "Top Reload Bonuses" },
    { key: 21234567, name: "VPN Friendly Casinos" },
    { key: 32345678, name: "Week’s Favourites Bonuses" },
    { key: 43456789, name: "What We Are Playing Now" }
  ];
  

export default function SeeAll() {

    const location = useLocation();
    const [key, setKey] = useState<number | string>(0);
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const queryKey = Number(queryParams.get('key')) || 0;
      setKey(queryKey);
    }, [location.search]);


    console.log(  DataArray.find(item => item.key === key)?.name);
    console.log(key);
    
    return (
        <Default>
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
                            ] || []
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
                            {
                                name:   DataArray.find(item => Number(item?.key) === key)?.name || 'not found',
                                link: "#",
                            },
                        ]}
                    />
                     <section className="see-all__main main-see-all">
                            <div className="main-see-all__container container">
                                <div className="main-see-all__top top">
                                    <div className="top__row">
                                        <div className="top__column">
                                            <div className="top__title-block">
                                                <h2 className="top__title">
                                                    {DataArray.find(item => item?.key === key)?.name}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-see-all__row">
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
                                    </div>
                                </div>
                                <PaginationPage/>
                            </div>
                        </section>
                </div>
            </main>
        </Default>
    )
}
