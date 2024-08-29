import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import arrowYellowIcon from "../../assets/img/icons/arrow-yellow.svg"
import closeIcon from "../../assets/img/icons/close.svg"
import slotsIcon from "../../assets/img/games/01.svg"
import { GetDataBonusResponse } from "../../types"
import moment from "moment"

export const BonusInformation = ({
    data,
}: {
    data: GetDataBonusResponse | undefined
}) => {
    const [BonusInfoIsOpen, setIsBonusInfoOpen] = useState({
        BonusGeneralInfo: true,
        FreeSpins: true,
        Restrictions: true,
        StakeCasinoReloadBonus: false,
        WageringInfo: true,
        WageringContribution: false,
        SpecialNotes: false,
    })

    const [overflow, setOverflow] = useState({
        Restrictions: true,
        WageringInfo: true,
    })

    const [openModal, setOpenModal] = useState({
        BonusRestrictionGames: false,
        ProviderRestrictions: false,
        CountryRestrictions: false,
    })
    console.log(openModal)
    useEffect(() => {
        if (BonusInfoIsOpen.Restrictions) {
            setTimeout(() => {
                setOverflow((s) => ({ ...s, Restrictions: true }))
            }, 1300)
        } else {
            setOverflow((s) => ({ ...s, Restrictions: false }))
        }

        if (BonusInfoIsOpen.WageringInfo) {
            setTimeout(() => {
                setOverflow((s) => ({ ...s, WageringInfo: true }))
            }, 1300)
        } else {
            setOverflow((s) => ({ ...s, WageringInfo: false }))
        }
    }, [BonusInfoIsOpen])
    return (
        <div className="bonus-information__body">
            <div className="bonus-information__row">
                <div className="bonus-information__column">
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_bonus-general-info">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.BonusGeneralInfo && "active"
                            }`}
                        >
                            <div className="top-item-bonus-information__title">
                                Bonus General Info
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        BonusGeneralInfo: !s.BonusGeneralInfo,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>
                        <div
                            className={`content-bonus-information  ${
                                !BonusInfoIsOpen.BonusGeneralInfo && "active"
                            }`}
                        >
                            <div className="content-bonus-information__items">
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Total Bonus amount:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.bonus_amount?.[0]?.value}{" "}
                                        {data?.bonus_amount?.[0]?.symbol.symbol}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Max bet:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {`${data?.max_bet?.[0].value || 0} ${
                                            data?.max_bet?.[0].symbol.symbol ||
                                            "EUR"
                                        }`}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Min dep:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {` ${data?.bonus_min_dep?.[0]?.min_value}  ${data?.bonus_min_dep?.[0]?.symbol?.name}` ||
                                            "0€"}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus Max win:
                                        <span className="item-content-bonus-information__info">
                                            <span className="item-content-bonus-information__info-icon info-icon">
                                                <svg>
                                                    <use xlinkHref="#info"></use>
                                                </svg>
                                            </span>
                                            <span className="item-content-bonus-information__info-text">
                                                Text field,{" "}
                                                <span>with poyasnenie</span>
                                                <br />
                                                what is it, kogda navodish
                                                <br />
                                                mishkoy.
                                            </span>
                                        </span>
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {`${
                                            data?.bonus_max_win?.[0]
                                                ?.max_value || 0
                                        } ${
                                            data?.bonus_max_win?.[0]?.symbol
                                                ?.symbol || ""
                                        }`}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Daily availability:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.day_of_week
                                            .reduce(
                                                (prev, state) =>
                                                    prev + ", " + state.day,
                                                ""
                                            )
                                            .slice(2)}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus expiration:
                                        <span className="item-content-bonus-information__info">
                                            <span className="item-content-bonus-information__info-icon info-icon">
                                                <svg>
                                                    <use xlinkHref="#info"></use>
                                                </svg>
                                            </span>
                                            <span className="item-content-bonus-information__info-text">
                                                Text field,{" "}
                                                <span>with poyasnenie</span>
                                                <br />
                                                what is it, kogda navodish
                                                <br />
                                                mishkoy.
                                            </span>
                                        </span>
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.bonus_expiration.days || 0} days
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus period:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {`${moment(
                                            data?.promotion_period.start_date
                                        ).format("DD.MM.YYYY")} - ${moment(
                                            data?.promotion_period.end_date
                                        ).format("DD.MM.YYYY")}`}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Sticky:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.sticky ? "Yes" : "No"}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information item-content-bonus-information-last-child">
                                    <div className="item-content-bonus-information__label">
                                        Bonus Terms:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        <a
                                            rel="nofollow noopener"
                                            href=""
                                            target="_blank"
                                            aria-label="Put your description here."
                                            className="item-content-bonus-information__link"
                                        >
                                            Casino bonus terms
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_wagering-info">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.WageringInfo && "active"
                            } `}
                        >
                            <div className="top-item-bonus-information__title">
                                Wagering Info
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        WageringInfo: !s.WageringInfo,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>
                        <div
                            className={`content-bonus-information  ${
                                !BonusInfoIsOpen.WageringInfo && "active"
                            } ${overflow.WageringInfo && "visiable"}`}
                        >
                            <div className="content-bonus-information__items">
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Wagering:
                                        <span className="item-content-bonus-information__info">
                                            <span className="item-content-bonus-information__info-icon info-icon">
                                                <svg>
                                                    <use xlinkHref="#info"></use>
                                                </svg>
                                            </span>
                                            <span className="item-content-bonus-information__info-text">
                                                Text field,{" "}
                                                <span>with poyasnenie</span>
                                                <br />
                                                what is it, kogda navodish
                                                <br />
                                                mishkoy.
                                            </span>
                                        </span>
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {`${
                                            data?.wagering_bonus_plus_deposit
                                                ?.bonus_plus_deposit ||
                                            data?.wagering_bonus_plus_deposit
                                                ?.bonus_only ||
                                            0
                                        }x ${
                                            data?.wagering_bonus_plus_deposit
                                                ?.bonus_plus_deposit
                                                ? "Bonus + Deposit"
                                                : "Bonus Only"
                                        }`}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus Max win:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        <div className="item-content-bonus-information__status status-item-content-bonus-information status-item-content-bonus-information_low">
                                            <span className="status-item-content-bonus-information__label">
                                                Low
                                            </span>
                                            <span className="status-item-content-bonus-information__panel"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus Max win:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        <div className="item-content-bonus-information__status status-item-content-bonus-information status-item-content-bonus-information_medium">
                                            <span className="status-item-content-bonus-information__label">
                                                Medium
                                            </span>
                                            <span className="status-item-content-bonus-information__panel"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-content-bonus-information-wrap">
                                    <div className="content-bonus-information__item item-content-bonus-information">
                                        <div className="item-content-bonus-information__label">
                                            Bonus Max win:
                                        </div>
                                        <div className="item-content-bonus-information__value">
                                            <div className="item-content-bonus-information__status status-item-content-bonus-information status-item-content-bonus-information_quick">
                                                <span className="status-item-content-bonus-information__label">
                                                    Quick
                                                </span>
                                                <span className="status-item-content-bonus-information__panel"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_wagering-contribution">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.WageringContribution && "active"
                            }`}
                        >
                            <div className="top-item-bonus-information__title">
                                Wagering Contribution
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        WageringContribution:
                                            !s.WageringContribution,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>

                        <div
                            className={`content-bonus-information  ${
                                !BonusInfoIsOpen.WageringContribution &&
                                "active"
                            }`}
                        >
                            <div className="content-bonus-information__items">
                                {data?.wagering_contribution
                                    ?.sort((a, b) => b.value - a.value)
                                    .map((item) => (
                                        <div className="content-bonus-information__item item-content-bonus-information">
                                            <div className="item-content-bonus-information__label">
                                                {item.description}
                                            </div>
                                            <div className="item-content-bonus-information__value">
                                                {item.value + "%"}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    {data?.special_note?.description && (
                        <div className="bonus-information__item  item-bonus-information item-bonus-information_special-notes">
                            <div
                                className={`item-bonus-information__top top-item-bonus-information ${
                                    BonusInfoIsOpen.SpecialNotes && "active"
                                }`}
                            >
                                <div className="top-item-bonus-information__title">
                                    Special Notes
                                </div>
                                <div
                                    className="top-item-bonus-information__icon"
                                    onClick={() =>
                                        setIsBonusInfoOpen((s) => ({
                                            ...s,
                                            SpecialNotes: !s.SpecialNotes,
                                        }))
                                    }
                                >
                                    <img
                                        src={arrowYellowIcon}
                                        alt="arrowYellowIcon"
                                    />
                                </div>
                            </div>

                            <div
                                className={`content-bonus-information  ${
                                    !BonusInfoIsOpen.SpecialNotes && "active"
                                }`}
                            >
                                <div className="content-bonus-information__items ">
                                    <div className="content-bonus-information__item item-content-bonus-information item-content-bonus-information-last-child">
                                        <div className="item-content-bonus-information__text">
                                            <p>
                                                {
                                                    data?.special_note
                                                        ?.description
                                                }
                                                {/* <span>
                                                This bonus offer is exclusively
                                                for German players.
                                            </span>{" "}
                                            It is important to highlight that
                                            this bonus is subject to
                                            verification. Players accessing the
                                            bonus with a German IP address but
                                            lacking a German passport may have
                                            the bonus revoked. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bonus-information__column">
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_free-spins">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.FreeSpins && "active"
                            }`}
                        >
                            <div className="top-item-bonus-information__title">
                                Free Spins
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        FreeSpins: !s.FreeSpins,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>

                        <div
                            className={`content-bonus-information  ${
                                !BonusInfoIsOpen.FreeSpins && "active"
                            }`}
                        >
                            <div className="content-bonus-information__items">
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Free spin amount:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.free_spin_amount?.value || 0}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Spin value:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        $ {data?.one_spin?.value || 0}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus slot:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.bonus_slot?.game?.[0]?.name ||
                                            ""}
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information item-content-bonus-information-last-child">
                                    <div className="item-content-bonus-information__label">
                                        Wager for free spins:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.wager?.value || 0}x
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_restrictions">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.Restrictions && "active"
                            }`}
                        >
                            <div className="top-item-bonus-information__title">
                                Restrictions
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        Restrictions: !s.Restrictions,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>
                        <div
                            className={` content-bonus-information  ${
                                !BonusInfoIsOpen.Restrictions && "active"
                            } ${overflow.Restrictions && "visiable"}`}
                        >
                            <div className="content-bonus-information__items">
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Bonus restriction games:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.restriction_game?.game
                                            ?.reduce(
                                                (prev, state) =>
                                                    prev + ", " + state.name,
                                                ""
                                            )
                                            .slice(2, 20)}{" "}
                                        ...
                                        <button
                                            onClick={() =>
                                                setOpenModal((s) => ({
                                                    ...s,
                                                    BonusRestrictionGames: true,
                                                }))
                                            }
                                            aria-label="Put your description here."
                                            className="item-content-bonus-information__link info-popup-open"
                                        >
                                            See all
                                        </button>
                                        <div
                                            className={`item-content-bonus-information__popup popup-item-content-bonus-information ${
                                                openModal.BonusRestrictionGames &&
                                                "active"
                                            }`}
                                        >
                                            <div className="popup-item-content-bonus-information__body">
                                                <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                                    <div className="top-popup-item-content-bonus-information__title">
                                                        All Bonus Restriction
                                                        Games
                                                        <div className="top-popup-item-content-bonus-information__number">
                                                            {`(${
                                                                data
                                                                    ?.restriction_game
                                                                    ?.game
                                                                    ?.length ||
                                                                0
                                                            })`}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            setOpenModal(
                                                                (s) => ({
                                                                    ...s,
                                                                    BonusRestrictionGames:
                                                                        false,
                                                                })
                                                            )
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
                                                    <div className="popup-item-content-bonus-information__row">
                                                        {data?.restriction_game?.game?.map(
                                                            (item) => (
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href=""
                                                                    target="_blank"
                                                                    aria-label="Put your description here."
                                                                    className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information popup-item-content-bonus-information__column"
                                                                >
                                                                    <span className="game-popup-item-content-bonus-information__icon">
                                                                        {/* <LazyLoadImage
                                                                            src={
                                                                                item?.image ||
                                                                                slotsIcon
                                                                            }
                                                                            alt="Slots"
                                                                            effect="blur"
                                                                        /> */}
                                                                    </span>
                                                                    <span className="game-popup-item-content-bonus-information__name">
                                                                        {item.name ||
                                                                            "slot"}
                                                                    </span>
                                                                </a>
                                                            )
                                                        )}
                                                        {/* <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            slotsIcon
                                                                        }
                                                                        alt="Slots"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Slots
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            blackjackIcon
                                                                        }
                                                                        alt="Blackjack"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Blackjack
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            videoPokerIcon
                                                                        }
                                                                        alt="Video Poker"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Video Poker
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            baccaratIcon
                                                                        }
                                                                        alt="Baccarat"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Baccarat
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            liveGamesIcon
                                                                        }
                                                                        alt="Live Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Live Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            diceGamesIcon
                                                                        }
                                                                        alt="Dice Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Dice Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            scratchCardsIcon
                                                                        }
                                                                        alt="Scratch Cards"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Scratch
                                                                    Cards
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            rouletteIcon
                                                                        }
                                                                        alt="Roulette"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Roulette
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bettingIcon
                                                                        }
                                                                        alt="Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bingoIcon
                                                                        }
                                                                        alt="Bingo"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Bingo
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            jackpotGamesIcon
                                                                        }
                                                                        alt="Jackpot Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Jackpot
                                                                    Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            kenoIcon
                                                                        }
                                                                        alt="Keno"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Keno
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            esportsBettingIcon
                                                                        }
                                                                        alt="eSports Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    eSports
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            crashGamesIcon
                                                                        }
                                                                        alt="Crash Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Crash Games
                                                                </span>
                                                            </a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Provider restrictions:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.game_providers
                                            ?.reduce(
                                                (prev, state) =>
                                                    prev + ", " + state.name,
                                                ""
                                            )
                                            .slice(2, 20)}{" "}
                                        ...
                                        <button
                                            onClick={() =>
                                                setOpenModal((s) => ({
                                                    ...s,
                                                    ProviderRestrictions: true,
                                                }))
                                            }
                                            aria-label="Put your description here."
                                            className="item-content-bonus-information__link info-popup-open"
                                        >
                                            See all
                                        </button>
                                        <div
                                            className={`item-content-bonus-information__popup popup-item-content-bonus-information ${
                                                openModal.ProviderRestrictions &&
                                                "active"
                                            }`}
                                        >
                                            <div className="popup-item-content-bonus-information__body">
                                                <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                                    <div className="top-popup-item-content-bonus-information__title">
                                                        All Provider
                                                        Restrictions
                                                        <div className="top-popup-item-content-bonus-information__number">
                                                            {`(${
                                                                data
                                                                    ?.game_providers
                                                                    ?.length ||
                                                                0
                                                            })`}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            setOpenModal(
                                                                (s) => ({
                                                                    ...s,
                                                                    ProviderRestrictions:
                                                                        false,
                                                                })
                                                            )
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
                                                    <div className="popup-item-content-bonus-information__row">
                                                        {data?.game_providers?.map(
                                                            (item) => (
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href=""
                                                                    target="_blank"
                                                                    aria-label="Put your description here."
                                                                    className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information popup-item-content-bonus-information__column"
                                                                >
                                                                    <span className="game-popup-item-content-bonus-information__icon">
                                                                        <LazyLoadImage
                                                                            src={
                                                                                item?.image ||
                                                                                slotsIcon
                                                                            }
                                                                            alt="Slots"
                                                                            effect="blur"
                                                                        />
                                                                    </span>
                                                                    <span className="game-popup-item-content-bonus-information__name">
                                                                        {item.name ||
                                                                            "slot"}
                                                                    </span>
                                                                </a>
                                                            )
                                                        )}
                                                        {/* <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            slotsIcon
                                                                        }
                                                                        alt="Slots"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Slots
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            blackjackIcon
                                                                        }
                                                                        alt="Blackjack"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Blackjack
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            videoPokerIcon
                                                                        }
                                                                        alt="Video Poker"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Video Poker
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            baccaratIcon
                                                                        }
                                                                        alt="Baccarat"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Baccarat
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            liveGamesIcon
                                                                        }
                                                                        alt="Live Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Live Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            diceGamesIcon
                                                                        }
                                                                        alt="Dice Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Dice Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            scratchCardsIcon
                                                                        }
                                                                        alt="Scratch Cards"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Scratch
                                                                    Cards
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            rouletteIcon
                                                                        }
                                                                        alt="Roulette"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Roulette
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bettingIcon
                                                                        }
                                                                        alt="Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bingoIcon
                                                                        }
                                                                        alt="Bingo"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Bingo
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            jackpotGamesIcon
                                                                        }
                                                                        alt="Jackpot Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Jackpot
                                                                    Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            kenoIcon
                                                                        }
                                                                        alt="Keno"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Keno
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            esportsBettingIcon
                                                                        }
                                                                        alt="eSports Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    eSports
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            crashGamesIcon
                                                                        }
                                                                        alt="Crash Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Crash Games
                                                                </span>
                                                            </a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-bonus-information__item item-content-bonus-information">
                                    <div className="item-content-bonus-information__label">
                                        Country restrictions:
                                    </div>
                                    <div className="item-content-bonus-information__value">
                                        {data?.restriction_country?.country
                                            ?.reduce(
                                                (prev, state) =>
                                                    prev + ", " + state.name,
                                                ""
                                            )
                                            .slice(2, 20)}{" "}
                                        ...
                                        <button
                                            onClick={() =>
                                                setOpenModal((s) => ({
                                                    ...s,
                                                    CountryRestrictions: true,
                                                }))
                                            }
                                            aria-label="Put your description here."
                                            className="item-content-bonus-information__link info-popup-open"
                                        >
                                            See all
                                        </button>
                                        <div
                                            className={`item-content-bonus-information__popup popup-item-content-bonus-information ${
                                                openModal.CountryRestrictions &&
                                                "active"
                                            }`}
                                        >
                                            <div className="popup-item-content-bonus-information__body">
                                                <div className="popup-item-content-bonus-information__top top-popup-item-content-bonus-information">
                                                    <div className="top-popup-item-content-bonus-information__title">
                                                        All Country Restrictions
                                                        <div className="top-popup-item-content-bonus-information__number">
                                                            {`(${
                                                                data
                                                                    ?.restriction_country
                                                                    ?.country
                                                                    ?.length ||
                                                                0
                                                            })`}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            setOpenModal(
                                                                (s) => ({
                                                                    ...s,
                                                                    CountryRestrictions:
                                                                        false,
                                                                })
                                                            )
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
                                                    <div className="popup-item-content-bonus-information__row">
                                                        {data?.restriction_country?.country?.map(
                                                            (item) => (
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href=""
                                                                    target="_blank"
                                                                    aria-label="Put your description here."
                                                                    className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information popup-item-content-bonus-information__column"
                                                                >
                                                                    <span className="game-popup-item-content-bonus-information__icon">
                                                                        {/* <LazyLoadImage
                                                                        src={
                                                                            item?.image || slotsIcon
                                                                        }
                                                                        alt="Slots"
                                                                        effect="blur"
                                                                    /> */}
                                                                    </span>
                                                                    <span className="game-popup-item-content-bonus-information__name">
                                                                        {item.name ||
                                                                            "slot"}
                                                                    </span>
                                                                </a>
                                                            )
                                                        )}
                                                        {/* <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            slotsIcon
                                                                        }
                                                                        alt="Slots"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Slots
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            blackjackIcon
                                                                        }
                                                                        alt="Blackjack"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Blackjack
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            videoPokerIcon
                                                                        }
                                                                        alt="Video Poker"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Video Poker
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            baccaratIcon
                                                                        }
                                                                        alt="Baccarat"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Baccarat
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            liveGamesIcon
                                                                        }
                                                                        alt="Live Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Live Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            diceGamesIcon
                                                                        }
                                                                        alt="Dice Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Dice Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            scratchCardsIcon
                                                                        }
                                                                        alt="Scratch Cards"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Scratch
                                                                    Cards
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="popup-item-content-bonus-information__column">
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            rouletteIcon
                                                                        }
                                                                        alt="Roulette"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Roulette
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bettingIcon
                                                                        }
                                                                        alt="Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            bingoIcon
                                                                        }
                                                                        alt="Bingo"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Bingo
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            jackpotGamesIcon
                                                                        }
                                                                        alt="Jackpot Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Jackpot
                                                                    Games
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            kenoIcon
                                                                        }
                                                                        alt="Keno"
                                                                        effect="blur"
                                                                    />
                                                                </span>

                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Keno
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            esportsBettingIcon
                                                                        }
                                                                        alt="eSports Betting"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    eSports
                                                                    Betting
                                                                </span>
                                                            </a>
                                                            <a rel="nofollow noopener"
                                                                href=""
                                                                target="_blank"
                                                                aria-label="Put your description here."
                                                                className="popup-item-content-bonus-information__game game-popup-item-content-bonus-information"
                                                            >
                                                                <span className="game-popup-item-content-bonus-information__icon">
                                                                    <LazyLoadImage
                                                                        src={
                                                                            crashGamesIcon
                                                                        }
                                                                        alt="Crash Games"
                                                                        effect="blur"
                                                                    />
                                                                </span>
                                                                <span className="game-popup-item-content-bonus-information__name">
                                                                    Crash Games
                                                                </span>
                                                            </a>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-content-bonus-information-wrap">
                                    <div className="content-bonus-information__item item-content-bonus-information">
                                        <div className="item-content-bonus-information__label">
                                            RTP restriction:
                                        </div>
                                        <div className="item-content-bonus-information__value">
                                            {data?.restriction_rtp_game} %
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bonus-information__item  item-bonus-information item-bonus-information_stake-casino-reload-bonus">
                        <div
                            className={`item-bonus-information__top top-item-bonus-information ${
                                BonusInfoIsOpen.StakeCasinoReloadBonus &&
                                "active"
                            }`}
                        >
                            <div className="top-item-bonus-information__title">
                                Stake Casino Reload Bonus
                            </div>
                            <div
                                className="top-item-bonus-information__icon"
                                onClick={() =>
                                    setIsBonusInfoOpen((s) => ({
                                        ...s,
                                        StakeCasinoReloadBonus:
                                            !s.StakeCasinoReloadBonus,
                                    }))
                                }
                            >
                                <img
                                    src={arrowYellowIcon}
                                    alt="arrowYellowIcon"
                                />
                            </div>
                        </div>

                        <div
                            className={`content-bonus-information  ${
                                !BonusInfoIsOpen.StakeCasinoReloadBonus &&
                                "active"
                            }`}
                        >
                            <div className="content-bonus-information__items">
                                <div className="content-bonus-information__item item-content-bonus-information item-content-bonus-information-last-child">
                                    <div className="item-content-bonus-information__text">
                                        {data?.description}
                                        {/* <p>
                                            Little intro Get on first deposit at
                                            stake casino Stake casino offers on
                                            your first deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit.
                                        </p>
                                        <p>
                                            Little intro Get on first deposit at
                                            stake casino Stake casino offers on
                                            your first deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit.Little intro Get
                                            on first deposit at stake casino.
                                            Stake casino offers on your first
                                            deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit. Little intro Get
                                            on first deposit at stake casino
                                            Stake casino offers on your first
                                            deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit.
                                        </p>
                                        <p>
                                            Little intro Get on first deposit at
                                            stake casino Stake casino offers on
                                            your first deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit. Little intro Get
                                            on first deposit at stake casino
                                            Stake casino offers on your first
                                            deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit.Little intro Get
                                            on first deposit at stake casino.
                                        </p>
                                        <p>
                                            Stake casino offers on your first
                                            deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit. Little intro Get
                                            on first deposit at stake casino
                                            Stake casino offers on your first
                                            deposit this and that for
                                            registration and your first deposit.
                                            this and that for registration and
                                            your first deposit...
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
