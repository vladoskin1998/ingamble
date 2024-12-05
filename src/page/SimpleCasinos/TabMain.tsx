import { useEffect, useRef, useState } from "react"
import closeIcon from "../../assets/img/icons/close.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { CasinoReview } from "./CasinoReview"
import { RewievCasinoDataResponse } from "../../types"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import gift from '../../assets/img/icons/gift.svg'
enum TabType {
    General = "General",
    Payment = "Payment",
    Languages = "Languages",
    Providers = "Providers",
    Types = "Types",
    Tools = "Tools",
}

const initStateOpenModal = {
    paymantPopup: false,
    languagePopup: false,
    providerPopup: false,
    typePopup: false,
    toolPopup: false,
}

export const TabMain = ({
    handlerOpen,
    data
}: {
    handlerOpen: (s: boolean) => void
    data: undefined | RewievCasinoDataResponse
}) => {

    const {lastUpdate} = useAdaptiveBehavior()
    const [activeTab, setActiveTab] = useState<TabType>(TabType.General)
    const [openModal, setOpenModal] = useState(initStateOpenModal)


    const modalRefs = {
        paymantPopup: useRef<HTMLDivElement | null>(null),
        languagePopup: useRef<HTMLDivElement | null>(null),
        providerPopup: useRef<HTMLDivElement | null>(null),
        typePopup: useRef<HTMLDivElement | null>(null),
        toolPopup: useRef<HTMLDivElement | null>(null),
      };
    

      const handleClickOutside = (event: MouseEvent): void => {
        console.log("handleClickOutside");
        
        Object.keys(modalRefs).forEach((key) => {
            //@ts-ignore
          const ref = modalRefs[key as keyof ModalState]?.current as any;
          if (ref && !ref.contains(event.target as Node)) {
            setOpenModal(prevState => ({
              ...prevState,
              [key]: false
            }));
          }
        });
      };
    
      useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


    return (
        <>
        <section className="review__iwild-review-mob iwild-review-mob item-iwild-review_main-read-mob">
            <div className="iwild-review-mob__container container">
            <CasinoReview handlerOpen={handlerOpen} data={data}/>
            </div>
        </section>
        <section className="review__info info-review tabs-container">
            <div className="info-review__tabs tabs">
                <div className="tabs__container container">
                    <div className="tabs__slider">
                        <div className="tabs__swiper info-review__tabs__swiper swiper">
                            <Swiper
                                className="tabs__wrapper swiper-wrapper"
                                slidesPerView="auto"
                                spaceBetween={40}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 24,
                                    },
                                    480.98: {
                                        spaceBetween: 40,
                                    },
                                    1920: {
                                        spaceBetween: 40,
                                    },
                                }}
                            >
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.General &&
                                            "active"
                                        }`}
                                        data-filter="General"
                                        onClick={() =>
                                            setActiveTab(TabType.General)
                                        }
                                    >
                                        General Information
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.Payment &&
                                            "active"
                                        }`}
                                        data-filter="Payment"
                                        onClick={() =>
                                            setActiveTab(TabType.Payment)
                                        }
                                    >
                                        Payment Methods
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.Languages &&
                                            "active"
                                        }`}
                                        data-filter="Languages"
                                        onClick={() =>
                                            setActiveTab(TabType.Languages)
                                        }
                                    >
                                        Languages
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.Providers &&
                                            "active"
                                        }`}
                                        data-filter="Providers"
                                        onClick={() =>
                                            setActiveTab(TabType.Providers)
                                        }
                                    >
                                        Game Providers
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.Types &&
                                            "active"
                                        }`}
                                        data-filter="Types"
                                        onClick={() =>
                                            setActiveTab(TabType.Types)
                                        }
                                    >
                                        Game Types
                                    </button>
                                </SwiperSlide>
                                <SwiperSlide className="tabs__slide slide-tabs swiper-slide">
                                    <button
                                        className={`slide-tabs__btn ${
                                            activeTab === TabType.Tools &&
                                            "active"
                                        }`}
                                        data-filter="Tools"
                                        onClick={() =>
                                            setActiveTab(TabType.Tools)
                                        }
                                    >
                                        Responsible Game Tools
                                    </button>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-review__container container">
                <div className="info-review__row">
                    <div className="info-review__body">
                        <div
                            className={`info-review__block block-info-review block-info-review_general tabs-block ${
                                activeTab === TabType.General && "active"
                            }`}
                            data-filter="General"
                            id="review-general-information"
                        >
                            <div className="block-info-review__top top-block-info-review">
                                <div className="top-block-info-review__title">
                                    General Information
                                </div>
                                <div className="top-block-info-review__date date-top-block-info-review">
                                    <div className="date-top-block-info-review__label">
                                        Last update:
                                    </div>
                                    <div className="date-top-block-info-review__value">
                                       {lastUpdate}
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__row">
                                <div className="block-info-review__column">
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Owner
                                        </div>
                                        <div className="item-block-info-review__value">
                                            {data?.owner}
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            License
                                        </div>
                                        <div className="item-block-info-review__value">
                                            {data?.licenses?.[0].name}
                                            {/* <span className="item-block-info-review__flag" >
                                                <img
                                                    src="/src/assets/img/flags/curacao.svg"
                                                    alt="curacao"
                                                />
                                            </span> */}
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Established In
                                        </div>
                                        <div className="item-block-info-review__value">
                                            {data?.established }
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            VPN Allowed
                                        </div>
                                        <div className={`item-block-info-review__value item-block-info-review__value_${data?.vpn_usage ? "yes" : 'no'}`}>
                                            {data?.vpn_usage ? "Yes" : 'No'}
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Fast Payout
                                        </div>
                                        <div className={`item-block-info-review__value item-block-info-review__value_${data?.payout_speed.toLocaleLowerCase()}`}>
                                            {data?.payout_speed}
                                        </div>
                                        {/* <!-- <div
                                    className="item-block-info-review__value item-block-info-review__value_low">
                                    Low
                                </div> -->
                                <!-- <div
                                    className="item-block-info-review__value item-block-info-review__value_high">
                                    High
                                </div> --> */}
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Minimal Wagering
                                        </div>
                                        <div className="item-block-info-review__value">
                                            {data?.min_wagering?.min_value || 1}X
                                        </div>
                                    </div>
                                </div>
                                <div className="block-info-review__column">
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Bonus Hunt Allowed
                                            <span className="item-content-bonus-information__info">
                                                <span className="item-content-bonus-information__info-icon info-icon">
                                                    <svg>
                                                        <use xlinkHref="#info"></use>
                                                    </svg>
                                                </span>
                                                <span className="item-content-bonus-information__info-text">
                                                    Bonus Hunt - Means that
                                                    <br /> person who plays this
                                                    casino
                                                    <br />
                                                    with active bonus can stop
                                                    it
                                                    <br /> and play again later.
                                                </span>
                                            </span>
                                        </div>
                                        <div className={`item-block-info-review__value item-block-info-review__value_${data?.bonus_hunt_with_active_bonus ? "yes" : 'no'}`}>
                                            {data?.bonus_hunt_with_active_bonus ? "Yes" : 'No'}
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Sportsbook
                                        </div>
                                        <div className={`item-block-info-review__value item-block-info-review__value_${data?.sportsbook ? "yes" : 'no'}`}>
                                            {data?.sportsbook ? "Yes" : 'No'}
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Withdrawal Limits
                                        </div>
                                        <div className="item-block-info-review__label-more">
                                            <div className="item-block-info-review__label-more-item">
                                                <div className="item-block-info-review__sublabel">
                                                    Daily
                                                </div>
                                                <div className="item-block-info-review__value">
                                                    {data?.withdrawal_limit.daily.toLocaleString("en-US") || "-"}
                                                </div>
                                            </div>
                                            <div className="item-block-info-review__label-more-item">
                                                <div className="item-block-info-review__sublabel">
                                                    Weekly
                                                </div>
                                                <div className="item-block-info-review__value">
                                                {data?.withdrawal_limit.weekly.toLocaleString("en-US") || "-"}
                                                </div>
                                            </div>
                                            <div className="item-block-info-review__label-more-item">
                                                <div className="item-block-info-review__sublabel">
                                                    Monthly
                                                </div>
                                                <div className="item-block-info-review__value">
                                                {data?.withdrawal_limit.monthly.toLocaleString("en-US") || "-"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__item item-block-info-review">
                                        <div className="item-block-info-review__label">
                                            Minimal Deposit
                                        </div>
                                        <div className="item-block-info-review__value">
                                            {data?.min_dep?.[0].min_value}$
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`info-review__block block-info-review block-info-review_payment tabs-block ${
                                activeTab === TabType.Payment && "active"
                            }`}
                            data-filter="Payment"
                        >
                            <div className="block-info-review__top top-block-info-review" >
                                <div className="top-block-info-review__title">
                                    Payment Methods
                                </div>
                                <button
                                     onClick={() =>
                                        setOpenModal(() => ({
                                            ...initStateOpenModal,
                                            paymantPopup:
                                                true,
                                        }))
                                    }
                                    aria-label="Put your description here."
                                    className="item-content-bonus-information__link info-popup-open"
                                >
                                    Show All (36)
                                     {/* {"("}{data?.payment_methods?.length}{")"} */}
                                </button>
                                <div
                                    className={`block-info-review__popup popup-item-content-bonus-information  ${
                                       openModal.paymantPopup && "active"
                                    }`}
                                    ref={modalRefs.paymantPopup}
                                >
                                    <div className="popup-item-content-bonus-information__body"  >
                                        <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                            <div className="top-popup-item-content-bonus-information__title">
                                                All Payment Methods
                                                <div className="top-popup-item-content-bonus-information__number">
                                                    (36)
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setOpenModal((s) => ({
                                                        ...s,
                                                        paymantPopup:
                                                            false,
                                                    }))
                                                }
                                                aria-label="Put your description here."
                                                className="top-popup-item-content-bonus-information__btn-close info-popup-close"
                                            >
                                                <img
                                                    src={closeIcon}
                                                    alt="close"
                                                />
                                            </button>
                                        </div>
                                        <div className="popup-item-content-bonus-information__content">
                                            <div className="block-info-review__elements">
                                                <div className="block-info-review__elements-row">
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/01.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/02.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/03.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/04.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/05.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/06.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/07.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/08.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/09.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/10.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/11.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/12.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/13.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/14.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/15.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/16.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/17.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/18.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/19.png"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/20.png"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/21.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/22.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/23.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/24.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/25.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/26.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/27.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/28.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/29.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/30.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/31.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/32.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/33.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/34.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/35.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__image">
                                                                <img
                                                                    src="/src/assets/img/info-review/payment/36.svg"
                                                                    alt="payment-img"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__elements">
                                <div className="block-info-review__elements-row">
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/01.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/02.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/03.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/04.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/05.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/06.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/07.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/08.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/09.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/10.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/11.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/12.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/13.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/14.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/15.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/16.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/17.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/18.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/19.png"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/20.png"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/21.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/22.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/23.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/24.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/25.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/26.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/27.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/28.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/29.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/30.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/31.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/32.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/33.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/34.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/35.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__image">
                                                <img
                                                    src="/src/assets/img/info-review/payment/36.svg"
                                                    alt="payment-img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`info-review__block block-info-review block-info-review_languages tabs-block ${
                                activeTab === TabType.Languages && "active"
                            }`}
                            data-filter="Languages"
                        >
                            <div className="block-info-review__top top-block-info-review">
                                <div className="top-block-info-review__title">
                                    Languages
                                </div>
                                <button
                                      onClick={() =>
                                        setOpenModal(() => ({
                                            ...initStateOpenModal,
                                            languagePopup:
                                                true,
                                        }))
                                    }
                                    aria-label="Put your description here."
                                    className="item-content-bonus-information__link info-popup-open"
                                >
                                    Show All {`(${data?.language_website.length})`}
                                </button>
                                <div
                                    className={`block-info-review__popup popup-item-content-bonus-information ${
                                        openModal.languagePopup && "active"
                                    }`}
                                    ref={modalRefs.languagePopup}
                                >
                                    <div className="popup-item-content-bonus-information__body">
                                        <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                            <div className="top-popup-item-content-bonus-information__title">
                                                All Languages
                                                <div className="top-popup-item-content-bonus-information__number">
                                                {`(${data?.language_website.length})`}
                                                </div>
                                            </div>
                                            <button
                                               onClick={() =>
                                                setOpenModal((s) => ({
                                                    ...s,
                                                    languagePopup:
                                                        false,
                                                }))
                                            }
                                                aria-label="Put your description here."
                                                className="top-popup-item-content-bonus-information__btn-close info-popup-close"
                                            >
                                                <img
                                                    src={closeIcon}
                                                    alt="close"
                                                />
                                            </button>
                                        </div>
                                        <div className="popup-item-content-bonus-information__content">
                                            <div className="block-info-review__elements">
                                                <div className="block-info-review__elements-row">
                                                    {
                                                        data?.language_website.map(lw => <div className="block-info-review__elements-column">
                                                            <div className="block-info-review__element element-block-info-review">
                                                                <div className="element-block-info-review__icon">
                                                                        <LazyCardImg
                                                                            img={lw?.image ||  ''}
                                                                             size='small'
                                                                             height="auto"
                                                                             width="100%"
                                                                        />
                                                                </div>
                                                                <div className="element-block-info-review__value">
                                                                    {lw.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        )
                                                    }
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__elements">
                                <div className="block-info-review__elements-row">
                                    {
                                          
                                            data?.language_website.map(lw =>     <div className="block-info-review__elements-column">
                                                <div className="block-info-review__element element-block-info-review">
                                                    <div className="element-block-info-review__icon">
                                                    <LazyCardImg
                                                                            img={lw?.image ||  ''}
                                                                            height="auto"
                                                                            size='small'
                                                                        />
                                                    </div>
                                                    <div className="element-block-info-review__value">
                                                    {lw.name}
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                    
                                      
                                    }
                                
                               
                                </div>
                            </div>
                        </div>

                        <div
                            className={`info-review__block block-info-review block-info-review_providers tabs-block ${
                                activeTab === TabType.Providers && "active"
                            }`}
                            data-filter="Providers"
                        >
                            <div className="block-info-review__top top-block-info-review">
                                <div className="top-block-info-review__title">
                                    Game Providers
                                </div>
                                <button
                                    onClick={() =>
                                        setOpenModal(() => ({
                                            ...initStateOpenModal,
                                            providerPopup:
                                                true,
                                        }))
                                    }
                                    aria-label="Put your description here."
                                    className="item-content-bonus-information__link info-popup-open"
                                >
                                    Show All {`(${data?.game_providers.length})`}
                                </button>
                                <div
                                    className={`block-info-review__popup popup-item-content-bonus-information ${
                                        openModal.providerPopup && "active"
                                    }`}
                                    ref={modalRefs.providerPopup}
                                >
                                    <div className="popup-item-content-bonus-information__body">
                                        <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                            <div className="top-popup-item-content-bonus-information__title">
                                                All Game Providers
                                                <div className="top-popup-item-content-bonus-information__number">
                                                {`(${data?.game_providers.length})`}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setOpenModal((s) => ({
                                                        ...s,
                                                        providerPopup:
                                                            false,
                                                    }))
                                                }
                                                className="top-popup-item-content-bonus-information__btn-close info-popup-close"
                                            >
                                                <img
                                                    src={closeIcon}
                                                    alt="close"
                                                />
                                            </button>
                                        </div>
                                        <div className="popup-item-content-bonus-information__content">
                                            <div className="block-info-review__elements">
                                                <div className="block-info-review__elements-row">
                                                    {
                                                        data?.game_providers.map(gp =>  <div className="block-info-review__elements-column">
                                                            <div className="block-info-review__element element-block-info-review">
                                                                <div className="element-block-info-review__image ibg--custom ibg--bg ibg-center">
                                                                    <LazyCardImg
                                                                        img={gp?.image || ''}
                                                                        size="medium"
                                                                        height="auto"
                                                                        width="100%"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__elements">
                                <div className="block-info-review__elements-row">

                                {
                                                        data?.game_providers.map(gp =>  <div className="block-info-review__elements-column">
                                                            <div className="block-info-review__element element-block-info-review">
                                                                <div className="element-block-info-review__image ibg--custom ibg--bg ibg-center">
                                                                    <LazyCardImg
                                                                        img={gp?.image || ''}
                                                                        size="medium"
                                                                        height="auto"
                                                                        width="100%"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                   
                          
                                </div>
                            </div>
                        </div>

                        <div
                            className={`info-review__block block-info-review block-info-review_types tabs-block ${
                                activeTab === TabType.Types && "active"
                            }`}
                            data-filter="Types"
                        >
                            <div className="block-info-review__top top-block-info-review">
                                <div className="top-block-info-review__title">
                                    Game Types
                                </div>
                                <button
                                   onClick={() =>
                                    setOpenModal(() => ({
                                        ...initStateOpenModal,
                                        typePopup:
                                            true,
                                    }))
                                }
                                    className="item-content-bonus-information__link info-popup-open"
                                >
                                    Show All    {`(${data?.game_types.length})`}
                                </button>
                                <div
                                    className={`block-info-review__popup popup-item-content-bonus-information ${
                                        openModal.typePopup && "active"
                                    }`}
                                    ref={modalRefs.typePopup}
                                >
                                    <div className="popup-item-content-bonus-information__body" >
                                        <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                            <div className="top-popup-item-content-bonus-information__title">
                                                All Game Types
                                                <div className="top-popup-item-content-bonus-information__number">
                                                    (14)
                                                </div>
                                            </div>
                                            <button
                                               onClick={() =>
                                                setOpenModal((s) => ({
                                                    ...s,
                                                    typePopup:
                                                        false,
                                                }))
                                            }
                                                className="top-popup-item-content-bonus-information__btn-close info-popup-close"
                                            >
                                                <img
                                                    src={closeIcon}
                                                    alt="close"
                                                />
                                            </button>
                                        </div>
                                        <div className="popup-item-content-bonus-information__content">
                                            <div className="block-info-review__elements">
                                                <div className="block-info-review__elements-row">
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/01.svg"
                                                                    alt="Slots"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Slots
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/03.svg"
                                                                    alt="Blackjack"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Blackjack
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/05.svg"
                                                                    alt="Video Poker"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Video Poker
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/02.svg"
                                                                    alt="Roulette"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Roulette
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/04.svg"
                                                                    alt="Betting"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Betting
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/09.svg"
                                                                    alt="Live Games"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Live Games
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/06.svg"
                                                                    alt="Bingo"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Bingo
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/07.svg"
                                                                    alt="Baccarat"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Baccarat
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/08.svg"
                                                                    alt="Jackpot Games"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Jackpot Games
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/10.svg"
                                                                    alt="Keno"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Keno
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/11.svg"
                                                                    alt="Dice Games"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Dice Games
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/12.svg"
                                                                    alt="eSports Betting"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                eSports Betting
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/13.svg"
                                                                    alt="Scratch Cards"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Scratch Cards
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            aria-label="Put your description here."
                                                            className="block-info-review__element element-block-info-review"
                                                        >
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/games/14.svg"
                                                                    alt="Crash Games"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Crash Games
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__elements">
                                <div className="block-info-review__elements-row">
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/01.svg"
                                                    alt="Slots"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Slots
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/03.svg"
                                                    alt="Blackjack"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Blackjack
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/05.svg"
                                                    alt="Video Poker"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Video Poker
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/02.svg"
                                                    alt="Roulette"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Roulette
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/04.svg"
                                                    alt="Betting"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Betting
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/09.svg"
                                                    alt="Live Games"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Live Games
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/06.svg"
                                                    alt="Bingo"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Bingo
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/07.svg"
                                                    alt="Baccarat"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Baccarat
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/08.svg"
                                                    alt="Jackpot Games"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Jackpot Games
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/10.svg"
                                                    alt="Keno"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Keno
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/11.svg"
                                                    alt="Dice Games"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Dice Games
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/12.svg"
                                                    alt="eSports Betting"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                eSports Betting
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/13.svg"
                                                    alt="Scratch Cards"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Scratch Cards
                                            </div>
                                        </a>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <a
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="block-info-review__element element-block-info-review"
                                        >
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/games/14.svg"
                                                    alt="Crash Games"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Crash Games
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`info-review__block block-info-review block-info-review_tools tabs-block ${
                                activeTab === TabType.Tools && "active"
                            }`}
                            data-filter="Tools"
                            
                        >
                            <div className="block-info-review__top top-block-info-review">
                                <div className="top-block-info-review__title"  >
                                    Responsible Game Tools
                                </div>
                                <button
                                    onClick={() =>
                                        setOpenModal(() => ({
                                            ...initStateOpenModal,
                                            toolPopup:
                                                true,
                                        }))
                                    }
                                    className="item-content-bonus-information__link info-popup-open"
                                >
                                    Show All (11)
                                </button>
                                <div
                                    className={`block-info-review__popup popup-item-content-bonus-information ${
                                        openModal.toolPopup && "active"
                                    }`}
                                    ref={modalRefs.toolPopup}
                                >
                                    <div className="popup-item-content-bonus-information__body" >
                                        <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                            <div className="top-popup-item-content-bonus-information__title">
                                                Responsible Game Tools
                                                <div className="top-popup-item-content-bonus-information__number">
                                                    (11)
                                                </div>
                                            </div>
                                            <button
                                                 onClick={() =>
                                                    setOpenModal((s) => ({
                                                        ...s,
                                                        toolPopup:
                                                            false,
                                                    }))
                                                }
                                                className="top-popup-item-content-bonus-information__btn-close info-popup-close"
                                            >
                                                <img
                                                    src={closeIcon}
                                                    alt="close"
                                                />
                                            </button>
                                        </div>
                                        <div className="popup-item-content-bonus-information__content">
                                            <div className="block-info-review__elements">
                                                <div className="block-info-review__elements-row">
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Deposit Limit
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Cool Off
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Wager Limit
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Reality Check
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Loss Limit
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Self-Assessment
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Session Limit
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Withdrawal Lock
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Self-Exclusion
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Very Interesting
                                                                Point
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="block-info-review__elements-column">
                                                        <div className="block-info-review__element element-block-info-review">
                                                            <div className="element-block-info-review__icon">
                                                                <img
                                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                                    alt="check"
                                                                />
                                                            </div>
                                                            <div className="element-block-info-review__value">
                                                                Coolstory Info
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-info-review__elements">
                                <div className="block-info-review__elements-row">
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Deposit Limit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Cool Off
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Wager Limit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Reality Check
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Loss Limit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Self-Assessment
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Session Limit
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Withdrawal Lock
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Self-Exclusion
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Very Interesting Point
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-info-review__elements-column">
                                        <div className="block-info-review__element element-block-info-review">
                                            <div className="element-block-info-review__icon">
                                                <img
                                                    src="/src/assets/img/icons/info-review-check.svg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="element-block-info-review__value">
                                                Coolstory Info
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-review__bonus bonus-info-review">
                        <div className="bonus-info-review__image-block">
                            <div className="bonus-info-review__image ibg--custom">
                                                <LazyCardImg
                                                    img={data?.bonuses.find(ssb => ssb.special_side_bar )?.bonus_image || ''}
                                                />
                            </div>
                            {/* <a
                                href="https://www.youtube.com/watch?v=IBcwhaYP6Uk"
                                data-fancybox="gallery-20"
                                data-caption="Caption"
                                className="bonus-info-review__btn-play casino-card__btn-play"
                            ></a> */}
                        </div>
                        <div className="bonus-info-review__content">
                            <h2 className="bonus-info-review__title">
                                {data?.bonuses.find(ssb => ssb.special_side_bar )?.name || ''}
                            </h2>
                            <a
                                href={data?.url}
                                aria-label="Put your description here."
                                target="_blank"
                                className="bonus-info-review__btn main-get-bonus__btn main-get-bonus__btn_bonus"
                            >
                                <span>
                                    <img
                                        src={gift}
                                        alt="gift"
                                    />
                                </span>
                                Take Bonus
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
