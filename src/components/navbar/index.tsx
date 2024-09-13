import { LazyLoadImage } from "react-lazy-load-image-component"
import logoIcon from "../../assets/img/logo-icon.svg"
import english from "../../assets/img/flags/english.svg"
import ukraine from "../../assets/img/flags/ukraine.svg"
import latvia from "../../assets/img/icons/latvia-flag.svg"
import russian from "../../assets/img/flags/russian.svg"
import spanish from "../../assets/img/flags/spanish.svg"
import german from "../../assets/img/flags/german.svg"
import french from "../../assets/img/flags/french.svg"
import italian from "../../assets/img/flags/italian.svg"
import slovak from "../../assets/img/flags/slovak.svg"
import us from "../../assets/img/flags/us.svg"
import egypt from "../../assets/img/flags/egypt.svg"
import israel from "../../assets/img/flags/israel.svg"
import india from "../../assets/img/flags/india.svg"
import indonesia from "../../assets/img/flags/indonesia.svg"
import yemen from "../../assets/img/flags/yemen.svg"
import isleOfMan from "../../assets/img/flags/isle-of-man.svg"
import malta from "../../assets/img/flags/malta.svg"
import gibralatar from "../../assets/img/flags/gibralatar.svg"
import jersey from "../../assets/img/flags/jersey.svg"
import clearAll from "../../assets/img/icons/clear-all.svg"
import { useLayoutEffect, useState } from "react"
import { AccordionItem } from "../acordion/Acordion"

export const Navbar = ({
    isSidebarActive,
    setSidebarActive,
}: {
    isSidebarActive: boolean
    setSidebarActive: (s: boolean) => void
}) => {
    const [] = useState(false)
    const [isGambleBodyHidden, setGambleBodyHidden] = useState(false)

    useLayoutEffect(() => {
        const sidebarGamble = document.querySelector(
            ".sidebar-gamble"
        ) as HTMLElement

        const header = document.querySelector(".header") as HTMLElement
        const footer = document.querySelector(".footer") as HTMLElement
        const main = document.querySelector("main") as HTMLElement

        if (sidebarGamble) {
            sidebarGamble.classList.toggle("active", isSidebarActive)
        }
        // if (gambleBody && window.innerWidth <= 650.98) {
        //     gambleBody.classList.toggle("hide", isGambleBodyHidden)
        // }

        if (header && window.innerWidth > 650.98) {
            header?.classList.toggle("resize", isSidebarActive)
        }
        if (footer && window.innerWidth > 650.98) {
            footer?.classList.toggle("resize", isSidebarActive)
        }
        if (main && window.innerWidth > 650.98) {
            main?.classList.toggle("resize", isSidebarActive)
        }
    }, [isSidebarActive, isGambleBodyHidden])

    const handleFilterOpenBtnClick = (event: React.MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        if (document.documentElement.clientWidth > 650.98) {
            setSidebarActive(!isSidebarActive)
        } else {
            setSidebarActive(true)
            setGambleBodyHidden(true)
        }
    }

    const handleFilterOpenDeleteClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setSidebarActive(false)
        setGambleBodyHidden(false)
    }

    return (
        <>
            <aside className="gamble__sidebar sidebar-gamble">
                <div
                    className="sidebar-gamble__top top-sidebar-gamble"
                    data-da="mobile-header__top, 0, 650.98"
                >
                    <a
                        rel="nofollow noopener"
                        href=""
                        target="_blank"
                        className="top-sidebar-gamble__logo"
                    >
                        <LazyLoadImage alt={"logo-icon"} src={logoIcon} />
                    </a>
                </div>
                <div className="sidebar-gamble__filters filters-sidebar-gamble">
                    <div className="filters-sidebar-gamble__title title-filters-sidebar-gamble">
                        <button
                            onClick={handleFilterOpenBtnClick}
                            aria-label="Put your description here."
                            className="title-filters-sidebar-gamble__btn"
                            data-da="header__row-mobile1, 1, 650.98"
                        >
                            <span className="title-filters-sidebar-gamble__btn-icon_main">
                                <svg>
                                    <use xlinkHref="#filter"></use>
                                </svg>
                            </span>
                            <span className="title-filters-sidebar-gamble__btn-icon_close">
                                <svg>
                                    <use xlinkHref="#delete"></use>
                                </svg>
                            </span>
                        </button>
                        <h2 className="title-filters-sidebar-gamble__text">
                            Filters
                        </h2>
                        <button
                            onClick={handleFilterOpenDeleteClick}
                            aria-label="Put your description here."
                            className="title-filters-sidebar-gamble__btn-delete"
                        >
                            <span className="title-filters-sidebar-gamble__btn-delete-icon_close">
                                <svg>
                                    <use xlinkHref="#delete"></use>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <form
                        action="#"
                        className="filters-sidebar-gamble__form form-filters"
                    >
                        <div className="form-filters__items-block">
                            <div className="form-filters__items">
                                <div
                                    className={`form-filters__item item-form-filters`}
                                >
                                    <AccordionItem
                                        heading={
                                            <div
                                                className={`item-form-filters__title title-item-form-filters  accordion--title--element`}
                                            >
                                                <span
                                                    className="title-item-form-filters__icon"
                                                    onClick={
                                                        handleFilterOpenBtnClick
                                                    }
                                                >
                                                    <svg>
                                                        <use xlinkHref="#casinos"></use>
                                                    </svg>
                                                </span>
                                                <span className="title-item-form-filters__icon-name">
                                                    Casinos
                                                </span>
                                                <h2 className="title-item-form-filters__text">
                                                    Casinos
                                                </h2>
                                                <span className="title-item-form-filters__arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        }
                                        content={
                                            <div
                                                className={`item-form-filters__body`}
                                            >
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Casinos Rank
                                                                </span>
                                                                <span className="title-form-filter__count">
                                                                    1
                                                                </span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__range range-form-filter range-form-filter_few">
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_min"
                                                                                value="1"
                                                                            />
                                                                        </div>
                                                                        <div className="range-form-filter__separetor">
                                                                            to
                                                                        </div>
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_max"
                                                                                value="4"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            type="range"
                                                                            name="form[]"
                                                                            className="input-range__min"
                                                                            min="1"
                                                                            max="10"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="range"
                                                                            name="form[]"
                                                                            className="input-range__max"
                                                                            min="1"
                                                                            max="10"
                                                                            value="4"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Casinos
                                                                    
                                                                    Players From
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__your-country your-country-form-filter">
                                                                        <div className="your-country-form-filter__text">
                                                                            Is
                                                                            this
                                                                            your
                                                                            country
                                                                            of
                                                                            residence?
                                                                        </div>
                                                                        <div className="your-country-form-filter__row">
                                                                            <div className="your-country-form-filter__country">
                                                                                <span className="flag">
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "ukraine"
                                                                                        }
                                                                                        src={
                                                                                            ukraine
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Ukraine
                                                                                </span>
                                                                            </div>
                                                                            <a
                                                                                rel="nofollow noopener"
                                                                                href=""
                                                                                aria-label="Put your description here."
                                                                                className="your-country-form-filter__btn"
                                                                            >
                                                                                Change
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Country)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="form-filter__radio radio-form-filter">
                                                                        <div className="radio-form-filter__items radio-form-filter__items_flags">
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromUkraine"
                                                                                    checked
                                                                                    type="radio"
                                                                                    value="Ukraine"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromUkraine"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "ukraine"
                                                                                            }
                                                                                            src={
                                                                                                ukraine
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        Ukraine
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    169
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromUnitedStates"
                                                                                    type="radio"
                                                                                    value="United States"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromUnitedStates"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/us.svg" loading="lazy"
                                                                width="20" height="20" alt="us"> */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "us"
                                                                                            }
                                                                                            src={
                                                                                                us
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        United
                                                                                        States
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    154
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromEgypt"
                                                                                    type="radio"
                                                                                    value="Egypt"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromEgypt"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/egypt.svg" loading="lazy"
                                                                width="20" height="20" alt="egypt" > */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "egypt"
                                                                                            }
                                                                                            src={
                                                                                                egypt
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        Egypt
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    97
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromIsrael"
                                                                                    type="radio"
                                                                                    value="Israel"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromIsrael"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/israel.svg" loading="lazy"
                                                                width="20" height="20" alt="israel"> */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "israel"
                                                                                            }
                                                                                            src={
                                                                                                israel
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        Israel
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    155
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromIndonesia"
                                                                                    type="radio"
                                                                                    value="Indonesia"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromIndonesia"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/israel.svg" loading="lazy"
                                                                width="20" height="20" alt="israel"> */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "indonesia"
                                                                                            }
                                                                                            src={
                                                                                                indonesia
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        Indonesia
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    84
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromIndia"
                                                                                    type="radio"
                                                                                    value="India"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromIndia"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/india.svg" loading="lazy"
                                                                width="20" height="20" alt="india"> */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "india"
                                                                                            }
                                                                                            src={
                                                                                                india
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        India
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    52
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromYemen"
                                                                                    type="radio"
                                                                                    value="Yemen"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromYemen"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "yemen"
                                                                                            }
                                                                                            src={
                                                                                                yemen
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                        {/* <img src="img/flags/yemen.svg" loading="lazy"
                                                                width="20" height="20" alt="yemen"> */}
                                                                                    </span>
                                                                                    <span>
                                                                                        Yemen
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    150
                                                                                </span>
                                                                            </div>
                                                                            <div className="radio-form-filter__item">
                                                                                <input
                                                                                    id="formFilterPlayersFromEnglish"
                                                                                    type="radio"
                                                                                    value="English"
                                                                                    name="formFilterPlayersFrom"
                                                                                    className="radio-form-filter__input form-filter__input"
                                                                                />
                                                                                <label
                                                                                    htmlFor="formFilterPlayersFromEnglish"
                                                                                    className="radio-form-filter__label"
                                                                                >
                                                                                    <span className="flag">
                                                                                        {/* <img src="img/flags/english.svg" loading="lazy"
                                                                width="20" height="20" alt="english"> */}
                                                                                        <LazyLoadImage
                                                                                            alt={
                                                                                                "english"
                                                                                            }
                                                                                            src={
                                                                                                english
                                                                                            }
                                                                                            width={
                                                                                                20
                                                                                            }
                                                                                            height={
                                                                                                20
                                                                                            }
                                                                                        />
                                                                                    </span>
                                                                                    <span>
                                                                                        English
                                                                                    </span>
                                                                                </label>
                                                                                <span className="number">
                                                                                    150
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    By year of
                                                                    Established
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__range range-form-filter range-form-filter_few">
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="number"
                                                                                className="field__input field__input_min"
                                                                                value="2001"
                                                                            />
                                                                        </div>
                                                                        <div className="range-form-filter__separetor">
                                                                            to
                                                                        </div>
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="number"
                                                                                className="field__input field__input_max"
                                                                                value="2010"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__min"
                                                                            min="2001"
                                                                            max="2025"
                                                                            value="2001"
                                                                        />
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__max"
                                                                            min="2001"
                                                                            max="2025"
                                                                            value="2010"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    By Licenses
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (License)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items checkbox-form-filter__items_flags">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseUkraine"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Ukraine (KRAIL)"
                                                                                name="formFilterLicenseUkraine"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseUkraine"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "ukraine"
                                                                                        }
                                                                                        src={
                                                                                            ukraine
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                    {/* <img src="img/flags/ukraine.svg" loading="lazy"
                                                                  width="20" height="20" alt="ukraine"> */}
                                                                                </span>
                                                                                <span>
                                                                                    Ukraine
                                                                                    (KRAIL)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                5
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseLatvia"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Latvia (IAUI)"
                                                                                name="formFilterLicenseLatvia"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseLatvia"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/latvia.svg" loading="lazy"
                                                                  width="20" height="20" alt="latvia"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "latvia"
                                                                                        }
                                                                                        src={
                                                                                            latvia
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Latvia
                                                                                    (IAUI)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                13
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseAlderrney"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Alderrney (AGCC)"
                                                                                name="formFilterLicenseAlderrney"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseAlderrney"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/latvia.svg" loading="lazy"
                                                                  width="20" height="20" alt="latvia"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "latvia"
                                                                                        }
                                                                                        src={
                                                                                            latvia
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Alderrney
                                                                                    (AGCC)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                11
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseIsleofMan"
                                                                                type="checkbox"
                                                                                value="Isle of Man (IOMGSC)"
                                                                                name="formFilterLicenseIsleofMan"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseIsleofMan"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/isle-of-man.svg" loading="lazy"
                                                                  width="20" height="20" alt="isle-of-man"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "isle-of-man"
                                                                                        }
                                                                                        src={
                                                                                            isleOfMan
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Isle
                                                                                    of
                                                                                    Man
                                                                                    (IOMGSC)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                27
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseMalta"
                                                                                type="checkbox"
                                                                                value="Malta (MGA)"
                                                                                name="formFilterLicenseMalta"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseMalta"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/malta.svg" loading="lazy"
                                                                  width="20" height="20" alt="malta"> */}

                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "malta"
                                                                                        }
                                                                                        src={
                                                                                            malta
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Malta
                                                                                    (MGA)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                1
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseGibralatar"
                                                                                type="checkbox"
                                                                                value="Gibralatar (GLA)"
                                                                                name="formFilterLicenseGibralatar"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseGibralatar"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/gibralatar.svg" loading="lazy"
                                                                  width="20" height="20" alt="gibralatar"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "gibralatar"
                                                                                        }
                                                                                        src={
                                                                                            gibralatar
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Gibralatar
                                                                                    (GLA)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                8
                                                                            </span>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLicenseJersey"
                                                                                type="checkbox"
                                                                                value="Jersey (JGC)"
                                                                                name="formFilterLicenseJersey"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLicenseJersey"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/jersey.svg" loading="lazy"
                                                                  width="20" height="20" alt="jersey"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "jersey"
                                                                                        }
                                                                                        src={
                                                                                            jersey
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Jersey
                                                                                    (JGC)
                                                                                </span>
                                                                            </label>
                                                                            <span className="number">
                                                                                5
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>

                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    VPN Allowed
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterVPNAllowed"
                                                                                checked
                                                                                type="radio"
                                                                                value="Allowed"
                                                                                name="formFilterVPN"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterVPNAllowed"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Allowed
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterVPNNotAllowed"
                                                                                type="radio"
                                                                                value="Not Allowed"
                                                                                name="formFilterVPN"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterVPNNotAllowed"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Not
                                                                                    Allowed
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Providers
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Provider)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders100Plus"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="100Plus"
                                                                                name="formFilterProviders100Plus"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders100Plus"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    100Plus
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders1GameHub"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="1GameHub"
                                                                                name="formFilterProviders1GameHub"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders1GameHub"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    1GameHub
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders1Gaming"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="1 Gaming"
                                                                                name="formFilterProviders1Gaming"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders1Gaming"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    1
                                                                                    Gaming
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders1spin4win"
                                                                                type="checkbox"
                                                                                value="1spin4win"
                                                                                name="formFilterProviders1spin4win"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders1spin4win"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    1spin4win
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders1X2Gaming"
                                                                                type="checkbox"
                                                                                value="1X2 Gaming"
                                                                                name="formFilterProviders1X2Gaming"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders1X2Gaming"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    1X2
                                                                                    Gaming
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders2By2Gaming"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="2By2 Gaming"
                                                                                name="formFilterProviders2By2Gaming"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders2By2Gaming"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    2By2
                                                                                    Gaming
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterProviders2Winpower"
                                                                                type="checkbox"
                                                                                value="2Winpower"
                                                                                name="formFilterProviders2Winpower"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterProviders2Winpower"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    2Winpower
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Game Types
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="checkbox-form-filter__items">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesSlots"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Slots"
                                                                                name="formFilterGameTypesSlots"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesSlots"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Slots
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesRoulette"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Roulette"
                                                                                name="formFilterGameTypesRoulette"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesRoulette"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Roulette
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBlackjack"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Blackjack"
                                                                                name="formFilterGameTypesBlackjack"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBlackjack"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Blackjack
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBetting"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Betting"
                                                                                name="formFilterGameTypesBetting"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBetting"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Betting
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesVideoPoker"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Video Poker"
                                                                                name="formFilterGameTypesVideoPoker"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesVideoPoker"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Video
                                                                                    Poker
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBingo"
                                                                                type="checkbox"
                                                                                value="Bingo"
                                                                                name="formFilterGameTypesBingo"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBingo"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Bingo
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBaccarat"
                                                                                type="checkbox"
                                                                                value="Baccarat"
                                                                                name="formFilterGameTypesBaccarat"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBaccarat"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Baccarat
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBingo1"
                                                                                type="checkbox"
                                                                                value="Bingo1"
                                                                                name="formFilterGameTypesBingo1"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBingo1"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Bingo1
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGameTypesBaccarat1"
                                                                                type="checkbox"
                                                                                value="Baccarat1"
                                                                                name="formFilterGameTypesBaccarat1"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGameTypesBaccarat1"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Baccarat1
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Games
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Games)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGamesSweetBonanza"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Sweet Bonanza"
                                                                                name="formFilterGamesSweetBonanza"
                                                                                className="checkbox-form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGamesSweetBonanza"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Sweet
                                                                                    Bonanza
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGamesSweetBomg"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Sweet Bomg"
                                                                                name="formFilterGamesSweetBomg"
                                                                                className="checkbox-form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGamesSweetBomg"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Sweet
                                                                                    Bomg
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterGamesSweetBob"
                                                                                type="checkbox"
                                                                                value="Sweet Bob"
                                                                                name="formFilterGamesSweetBob"
                                                                                className="checkbox-form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterGamesSweetBob"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Sweet
                                                                                    Bob
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Tournaments
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterTournamentsYes"
                                                                                checked
                                                                                type="radio"
                                                                                value="Yes"
                                                                                name="formFilterTournaments"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterTournamentsYes"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Yes
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterTournamentsNo"
                                                                                type="radio"
                                                                                value="No"
                                                                                name="formFilterTournaments"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterTournamentsNo"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    No
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Sportsbook
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterSportsbookYes"
                                                                                checked
                                                                                type="radio"
                                                                                value="Yes"
                                                                                name="formFilterSportsbook"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterSportsbookYes"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Yes
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterSportsbookNo"
                                                                                type="radio"
                                                                                value="No"
                                                                                name="formFilterSportsbook"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterSportsbookNo"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    No
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Language
                                                                    (Website)
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Language)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items checkbox-form-filter__items_flags">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteEnglish"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="English"
                                                                                name="formFilterLanguageWebsiteEnglish"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteEnglish"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/english.svg" loading="lazy"
                                                            width="20" height="20" alt="english"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "english"
                                                                                        }
                                                                                        src={
                                                                                            english
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    English
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteSpanish"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Spanish"
                                                                                name="formFilterLanguageWebsiteSpanish"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteSpanish"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/spanish.svg" loading="lazy"
                                                            width="20" height="20" alt="spanish"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "spanish"
                                                                                        }
                                                                                        src={
                                                                                            spanish
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Spanish
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteRussian"
                                                                                type="checkbox"
                                                                                value="Russian"
                                                                                name="formFilterLanguageWebsiteRussian"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteRussian"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/russian.svg" loading="lazy"
                                                            width="20" height="20" alt="russian"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "russian"
                                                                                        }
                                                                                        src={
                                                                                            russian
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Russian
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteGerman"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="German"
                                                                                name="formFilterLanguageWebsiteGerman"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteGerman"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/german.svg" loading="lazy"
                                                            width="20" height="20" alt="german"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "german"
                                                                                        }
                                                                                        src={
                                                                                            german
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    German
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteFrench"
                                                                                type="checkbox"
                                                                                value="French"
                                                                                name="formFilterLanguageWebsiteFrench"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteFrench"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/french.svg" loading="lazy"
                                                            width="20" height="20" alt="french"> */}

                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "french"
                                                                                        }
                                                                                        src={
                                                                                            french
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    French
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteItalian"
                                                                                type="checkbox"
                                                                                value="Italian"
                                                                                name="formFilterLanguageWebsiteItalian"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteItalian"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/italian.svg" loading="lazy"
                                                            width="20" height="20" alt="italian"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "italian"
                                                                                        }
                                                                                        src={
                                                                                            italian
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Italian
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteSlovak"
                                                                                type="checkbox"
                                                                                value="Slovak"
                                                                                name="formFilterLanguageWebsiteSlovak"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteSlovak"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/slovak.svg" loading="lazy"
                                                            width="20" height="20" alt="slovak"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "slovak"
                                                                                        }
                                                                                        src={
                                                                                            slovak
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Slovak
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageWebsiteEgypt"
                                                                                type="checkbox"
                                                                                value="Egypt"
                                                                                name="formFilterLanguageWebsiteEgypt"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageWebsiteEgypt"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/egypt.svg" loading="lazy"
                                                            width="20" height="20" alt="egypt"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "egypt"
                                                                                        }
                                                                                        src={
                                                                                            egypt
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Egypt
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Language
                                                                    (Live chat)
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Language)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items checkbox-form-filter__items_flags">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatEnglish"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="English"
                                                                                name="formFilterLanguageLivechatEnglish"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatEnglish"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/english.svg" loading="lazy"
                                                            width="20" height="20" alt="english"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "english"
                                                                                        }
                                                                                        src={
                                                                                            english
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    English
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatSpanish"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Spanish"
                                                                                name="formFilterLanguageLivechatSpanish"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatSpanish"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/spanish.svg" loading="lazy"
                                                            width="20" height="20" alt="spanish"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "spanish"
                                                                                        }
                                                                                        src={
                                                                                            spanish
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Spanish
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatRussian"
                                                                                type="checkbox"
                                                                                value="Russian"
                                                                                name="formFilterLanguageLivechatRussian"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatRussian"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/russian.svg" loading="lazy"
                                                            width="20" height="20" alt="russian"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "russian"
                                                                                        }
                                                                                        src={
                                                                                            russian
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Russian
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatGerman"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="German"
                                                                                name="formFilterLanguageLivechatGerman"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatGerman"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/german.svg" loading="lazy"
                                                            width="20" height="20" alt="german"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "german"
                                                                                        }
                                                                                        src={
                                                                                            german
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    German
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatFrench"
                                                                                type="checkbox"
                                                                                value="French"
                                                                                name="formFilterLanguageLivechatFrench"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatFrench"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/french.svg" loading="lazy"
                                                            width="20" height="20" alt="french"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "french"
                                                                                        }
                                                                                        src={
                                                                                            french
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    French
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatItalian"
                                                                                type="checkbox"
                                                                                value="Italian"
                                                                                name="formFilterLanguageLivechatItalian"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatItalian"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/italian.svg" loading="lazy"
                                                            width="20" height="20" alt="italian"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "italian"
                                                                                        }
                                                                                        src={
                                                                                            italian
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Italian
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatSlovak"
                                                                                type="checkbox"
                                                                                value="Slovak"
                                                                                name="formFilterLanguageLivechatSlovak"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatSlovak"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/slovak.svg" loading="lazy"
                                                            width="20" height="20" alt="slovak"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "slovak"
                                                                                        }
                                                                                        src={
                                                                                            slovak
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Slovak
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterLanguageLivechatEgypt"
                                                                                type="checkbox"
                                                                                value="Egypt"
                                                                                name="formFilterLanguageLivechatEgypt"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterLanguageLivechatEgypt"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span className="flag">
                                                                                    {/* <img src="img/flags/egypt.svg" loading="lazy"
                                                            width="20" height="20" alt="egypt"> */}
                                                                                    <LazyLoadImage
                                                                                        alt={
                                                                                            "egypt"
                                                                                        }
                                                                                        src={
                                                                                            egypt
                                                                                        }
                                                                                        width={
                                                                                            20
                                                                                        }
                                                                                        height={
                                                                                            20
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                                <span>
                                                                                    Egypt
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Payment
                                                                    Methods
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Payment Method)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsVisaMastercard"
                                                                                checked
                                                                                type="radio"
                                                                                value="Visa/Master card"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsVisaMastercard"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Visa/Master
                                                                                    card
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsSkrill"
                                                                                type="radio"
                                                                                value="Skrill"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsSkrill"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Skrill
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsPaypal"
                                                                                type="radio"
                                                                                value="Paypal"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsPaypal"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Paypal
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsGooglepay"
                                                                                type="radio"
                                                                                value="Google pay"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsGooglepay"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Google
                                                                                    pay
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsApplepay"
                                                                                type="radio"
                                                                                value="Apple pay"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsApplepay"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Apple
                                                                                    pay
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsZimpler"
                                                                                type="radio"
                                                                                value="Zimpler"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsZimpler"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Zimpler
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPaymentMethodsNeoSurf"
                                                                                type="radio"
                                                                                value="NeoSurf"
                                                                                name="formFilterPaymentMethods"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPaymentMethodsNeoSurf"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    NeoSurf
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Currencies
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Currency)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesUSD"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="USD"
                                                                                name="formFilterCurrenciesUSD"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesUSD"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    USD
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesCAD"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="CAD"
                                                                                name="formFilterCurrenciesCAD"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesCAD"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    CAD
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesEUR"
                                                                                type="checkbox"
                                                                                value="EUR"
                                                                                name="formFilterCurrenciesEUR"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesEUR"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    EUR
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesGBP"
                                                                                type="checkbox"
                                                                                value="GBP"
                                                                                name="formFilterCurrenciesGBP"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesGBP"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    GBP
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesADA"
                                                                                type="checkbox"
                                                                                value="ADA"
                                                                                name="formFilterCurrenciesADA"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesADA"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    ADA
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesADK"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="ADK"
                                                                                name="formFilterCurrenciesADK"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesADK"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    ADK
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCurrenciesAED"
                                                                                type="checkbox"
                                                                                value="AED"
                                                                                name="formFilterCurrenciesAED"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCurrenciesAED"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    AED
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Crypto
                                                                    Currencies
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__checkbox checkbox-form-filter">
                                                                    <div className="form-filter__search-block">
                                                                        <span className="form-filter__search-icon">
                                                                            <svg>
                                                                                <use xlinkHref="#search"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <input
                                                                            placeholder="Search (Crypto Currency)"
                                                                            type="text"
                                                                            className="form-filter__search-input"
                                                                        />
                                                                    </div>
                                                                    <div className="checkbox-form-filter__items">
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesBitcoin"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Bitcoin"
                                                                                name="formFilterCryptoCurrenciesBitcoin"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesBitcoin"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Bitcoin
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesEthereum"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Ethereum"
                                                                                name="formFilterCryptoCurrenciesEthereum"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesEthereum"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Ethereum
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesRipple"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Ripple"
                                                                                name="formFilterCryptoCurrenciesRipple"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesRipple"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Ripple
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesLitecoin"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Lite coin"
                                                                                name="formFilterCryptoCurrenciesLitecoin"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesLitecoin"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Lite
                                                                                    coin
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesDogeCoin"
                                                                                type="checkbox"
                                                                                value="Doge Coin"
                                                                                name="formFilterCryptoCurrenciesDogeCoin"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesDogeCoin"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Doge
                                                                                    Coin
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesTether"
                                                                                checked
                                                                                type="checkbox"
                                                                                value="Tether"
                                                                                name="formFilterCryptoCurrenciesTether"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesTether"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Tether
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="checkbox-form-filter__item">
                                                                            <input
                                                                                id="formFilterCryptoCurrenciesZcash"
                                                                                type="checkbox"
                                                                                value="Zcash"
                                                                                name="formFilterCryptoCurrenciesZcash"
                                                                                className="checkbox-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCryptoCurrenciesZcash"
                                                                                className="checkbox-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Zcash
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Withdrawal
                                                                    Limits
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__range range-form-filter range-form-filter_only">
                                                                    <div className="range-form-filter__label">
                                                                        Daily
                                                                        Limits
                                                                    </div>
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_only"
                                                                                value="1000"
                                                                            />
                                                                            <span className="field__icon">
                                                                                €
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__only"
                                                                            min="1"
                                                                            max="10000"
                                                                            value="1000"
                                                                        />
                                                                    </div>
                                                                    <div className="range-form-filter__min-max">
                                                                        <span className="range-form-filter__min">
                                                                            € 1
                                                                        </span>
                                                                        <span className="range-form-filter__max">
                                                                            €
                                                                            10,000
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-filter__range range-form-filter range-form-filter_only">
                                                                    <div className="range-form-filter__label">
                                                                        Weekly
                                                                        Limits
                                                                    </div>
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_only"
                                                                                value="10000"
                                                                            />
                                                                            <span className="field__icon">
                                                                                €
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__only"
                                                                            min="1"
                                                                            max="100000"
                                                                            value="10000"
                                                                        />
                                                                    </div>
                                                                    <div className="range-form-filter__min-max">
                                                                        <span className="range-form-filter__min">
                                                                            € 1
                                                                        </span>
                                                                        <span className="range-form-filter__max">
                                                                            €
                                                                            100,000
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-filter__range range-form-filter range-form-filter_only">
                                                                    <div className="range-form-filter__label">
                                                                        Year
                                                                        Limits
                                                                    </div>
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_only"
                                                                                value="10000000"
                                                                            />
                                                                            <span className="field__icon">
                                                                                €
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__only"
                                                                            min="1"
                                                                            max="100000000"
                                                                            value="10000000"
                                                                        />
                                                                    </div>
                                                                    <div className="range-form-filter__min-max">
                                                                        <span className="range-form-filter__min">
                                                                            € 1
                                                                        </span>
                                                                        <span className="range-form-filter__max">
                                                                            €
                                                                            100,000,000
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Minimum
                                                                    Deposit
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__range range-form-filter range-form-filter_only">
                                                                    <div className="range-form-filter__label">
                                                                        Minimum
                                                                        Depost
                                                                    </div>
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_only"
                                                                                value="10000"
                                                                            />
                                                                            <span className="field__icon">
                                                                                €
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__only"
                                                                            min="1"
                                                                            max="100000"
                                                                            value="10000"
                                                                        />
                                                                    </div>
                                                                    <div className="range-form-filter__min-max">
                                                                        <span className="range-form-filter__min">
                                                                            € 1
                                                                        </span>
                                                                        <span className="range-form-filter__max">
                                                                            €
                                                                            100,000
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Payout Speed
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPayoutSpeedFast"
                                                                                checked
                                                                                type="radio"
                                                                                value="Fast"
                                                                                name="formFilterPayoutSpeed"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPayoutSpeedFast"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Fast
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPayoutSpeedMedium"
                                                                                type="radio"
                                                                                value="Medium"
                                                                                name="formFilterPayoutSpeed"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPayoutSpeedMedium"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Medium
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterPayoutSpeedSlow"
                                                                                type="radio"
                                                                                value="Slow"
                                                                                name="formFilterPayoutSpeed"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterPayoutSpeedSlow"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Slow
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Minimum
                                                                    Wagering
                                                                </span>
                                                                <span className="title-form-filter__count">
                                                                    1
                                                                </span>
                                                                <a
                                                                    rel="nofollow noopener"
                                                                    href=""
                                                                    aria-label="Put your description here."
                                                                    className="title-form-filter__info-icon info-info"
                                                                >
                                                                    <svg>
                                                                        <use xlinkHref="#info"></use>
                                                                    </svg>
                                                                </a>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__range range-form-filter range-form-filter_only">
                                                                    <div className="range-form-filter__label">
                                                                        Minimum
                                                                        Depost
                                                                    </div>
                                                                    <div className="range-form-filter__top">
                                                                        <div className="range-form-filter__field field">
                                                                            <input
                                                                                type="text"
                                                                                className="field__input field__input_only"
                                                                                value="1"
                                                                            />
                                                                            <span className="field__icon">
                                                                                X
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="range-form-filter__slider slider-range">
                                                                        <div className="slider-range__progress"></div>
                                                                    </div>
                                                                    <div className="range-form-filter__input input-range">
                                                                        <input
                                                                            name="form[]"
                                                                            type="range"
                                                                            className="input-range__only"
                                                                            min="1"
                                                                            max="5"
                                                                            value="1"
                                                                        />
                                                                    </div>
                                                                    <div className="range-form-filter__min-max">
                                                                        <span className="range-form-filter__min">
                                                                            1X
                                                                        </span>
                                                                        <span className="range-form-filter__max">
                                                                            5X
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Bonus Hunt
                                                                    w. Active
                                                                    Bonus
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterBonusHuntActiveBonusYes"
                                                                                checked
                                                                                type="radio"
                                                                                value="Yes"
                                                                                name="formFilterBonusHuntActiveBonus"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterBonusHuntActiveBonusYes"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Yes
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterBonusHuntActiveBonusNo"
                                                                                type="radio"
                                                                                value="No"
                                                                                name="formFilterBonusHuntActiveBonus"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterBonusHuntActiveBonusNo"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    No
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                                <div className="item-form-filters__filter form-filter">
                                                    <AccordionItem
                                                        heading={
                                                            <h3 className="form-filter__title title-form-filter accordion--title--element">
                                                                <span className="title-form-filter__icon">
                                                                    <svg>
                                                                        <use xlinkHref="#arrow"></use>
                                                                    </svg>
                                                                </span>
                                                                <span>
                                                                    Casinos w.
                                                                    Social
                                                                    Bonuses
                                                                </span>
                                                                <span className="title-form-filter__count"></span>
                                                            </h3>
                                                        }
                                                        content={
                                                            <div className="form-filter__body">
                                                                <div className="form-filter__radio radio-form-filter">
                                                                    <div className="radio-form-filter__items">
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterCasinosSocialBonusesYes"
                                                                                checked
                                                                                type="radio"
                                                                                value="Yes"
                                                                                name="formFilterCasinosSocialBonuses"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCasinosSocialBonusesYes"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    Yes
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-form-filter__item">
                                                                            <input
                                                                                id="formFilterCasinosSocialBonusesNo"
                                                                                type="radio"
                                                                                value="No"
                                                                                name="formFilterCasinosSocialBonuses"
                                                                                className="radio-form-filter__input form-filter__input"
                                                                            />
                                                                            <label
                                                                                htmlFor="formFilterCasinosSocialBonusesNo"
                                                                                className="radio-form-filter__label"
                                                                            >
                                                                                <span>
                                                                                    No
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                                <div
                                    className={`form-filters__item item-form-filters`}
                                >
                                    <AccordionItem
                                        heading={
                                            <div
                                                className={`item-form-filters__title title-item-form-filters accordion--title--element`}
                                            >
                                                <span
                                                    className="title-item-form-filters__icon"
                                                    onClick={
                                                        handleFilterOpenBtnClick
                                                    }
                                                >
                                                    <svg>
                                                        <use xlinkHref="#bonuses"></use>
                                                    </svg>
                                                </span>
                                                <span className="title-item-form-filters__icon-name">
                                                    Bonuses
                                                </span>
                                                <h2 className="title-item-form-filters__text">
                                                    Bonuses
                                                </h2>
                                                <span className="title-item-form-filters__arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        }
                                        content={
                                            <div className="item-form-filters__body"></div>
                                        }
                                    />
                                </div>
                                <div
                                    className={`form-filters__item item-form-filters `}
                                >
                                    <AccordionItem
                                        heading={
                                            <div className="item-form-filters__title title-item-form-filters accordion--title--element">
                                                <span
                                                    className="title-item-form-filters__icon"
                                                    onClick={
                                                        handleFilterOpenBtnClick
                                                    }
                                                >
                                                    <svg>
                                                        <use xlinkHref="#loyalties"></use>
                                                    </svg>
                                                </span>
                                                <span className="title-item-form-filters__icon-name">
                                                    Loyalties
                                                </span>
                                                <h2 className="title-item-form-filters__text">
                                                    Loyalties
                                                </h2>
                                                <span className="title-item-form-filters__arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        }
                                        content={
                                            <div className="item-form-filters__body"></div>
                                        }
                                    />
                                </div>
                                <div
                                    className={`form-filters__item item-form-filters `}
                                >
                                    <AccordionItem
                                        heading={
                                            <div className="item-form-filters__title title-item-form-filters accordion--title--element">
                                                <span
                                                    className="title-item-form-filters__icon"
                                                    onClick={
                                                        handleFilterOpenBtnClick
                                                    }
                                                >
                                                    <svg>
                                                        <use xlinkHref="#slots"></use>
                                                    </svg>
                                                </span>
                                                <span className="title-item-form-filters__icon-name">
                                                    Slots
                                                </span>
                                                <h2 className="title-item-form-filters__text">
                                                    Slots
                                                </h2>
                                                <span className="title-item-form-filters__arrow">
                                                    <svg>
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                        }
                                        content={
                                            <div className="item-form-filters__body"></div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-filters__bottom bottom-form-filters">
                            <div className="bottom-form-filters__row">
                                <div className="bottom-form-filters__column">
                                    <button
                                        type="reset"
                                        className="bottom-form-filters__btn bottom-form-filters__btn_reset"
                                    >
                                        <span className="bottom-form-filters__btn-icon">
                                            <LazyLoadImage
                                                alt={"clear-all.svg"}
                                                src={clearAll}
                                                width={20}
                                                height={20}
                                            />
                                            {/* <img src="img/icons/clear-all.svg" alt="clear-all"> */}
                                        </span>
                                        <span>Clear All</span>
                                    </button>
                                </div>
                                <div className="bottom-form-filters__column">
                                    <button
                                        type="submit"
                                        className="bottom-form-filters__btn bottom-form-filters__btn_submit"
                                    >
                                        <span>Apply Filters</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </aside>
        </>
    )
}
