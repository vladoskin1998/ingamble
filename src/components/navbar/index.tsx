import logoIcon from '../../assets/img/logo-icon.svg'

import clearAll from '../../assets/img/icons/clear-all.svg'
import {  useLayoutEffect, useMemo, useState } from 'react'
import { AccordionItem } from '../acordion/Acordion'

import { RouteToNextFilter, useFilterContext } from '../../context/FilterContext'
import { Link } from 'react-router-dom'

import { makeListFilterHeader } from '../filter-components/FilterHeaderList'
import { BonusFilterBodyType, CasinoFilterBodyType, LoyaltiesFilterBodyType } from '../../types'
import CasinoFilterContent from './CasinoFilter'
import BonusFilter from './BonusFilter'
import LoyaltiesFilter from './LoyaltiesFilter'
import { useAdaptiveBehavior, useHandlerSidebarActive } from '../../context/AppContext'
// import initializeAdaptiveBehavior from '../../helper/adaprive-bahavior'

type DefaultOpenType = 'casinos' | 'bonuses' | 'loyalties' | 'slots' | ''

const LengthApplyFilter = ({
    currentRouteFilter,
    casinoFilters,
    bonusFilters,
    loyaltiesFilters,
}: {
    currentRouteFilter: RouteToNextFilter
    casinoFilters: CasinoFilterBodyType
    bonusFilters: BonusFilterBodyType
    loyaltiesFilters: LoyaltiesFilterBodyType
}) => {
    if (currentRouteFilter === RouteToNextFilter.BONUS) {
        const bl = makeListFilterHeader(bonusFilters).length
        return bl ? `(${bl})` : ''
    }

    if (currentRouteFilter === RouteToNextFilter.CASINOS) {
        const cl = makeListFilterHeader(casinoFilters).length
        return cl ? `(${cl})` : ''
    }

    if (currentRouteFilter === RouteToNextFilter.LOYALTIES) {
        const ll = makeListFilterHeader(loyaltiesFilters).length
        return ll ? `(${ll})` : ''
    }

    return ''
}

const Navbar = () => {
    const { isSidebarActive } = useAdaptiveBehavior()
        const { handlerSidebarActive } = useHandlerSidebarActive()
    const [isGambleBodyHidden, setGambleBodyHidden] = useState(false)
    const [isDefaultOpen, setIsDefaultOpen] = useState<DefaultOpenType>('')

    const { casinoFilters, bonusFilters, loyaltiesFilters, currentRouteFilter, handlerCurrentRouteFilter, handlerClearAllFilters, data } = useFilterContext()

    useLayoutEffect(() => {
        const sidebarGamble = document.querySelector('.sidebar-gamble') as HTMLElement

        const header = document.querySelector('.header') as HTMLElement
        const footer = document.querySelector('.footer') as HTMLElement
        const main = document.querySelector('main') as HTMLElement

        if (sidebarGamble) {
            sidebarGamble.classList.toggle('active', isSidebarActive)
        }
        // if (gambleBody && window.innerWidth <= 650.98) {
        //     gambleBody.classList.toggle("hide", isGambleBodyHidden)
        // }

        if (header && window.innerWidth > 650.98) {
            header?.classList.toggle('resize', isSidebarActive)
        }
        if (footer && window.innerWidth > 650.98) {
            footer?.classList.toggle('resize', isSidebarActive)
        }
        if (main && window.innerWidth > 650.98) {
            main?.classList.toggle('resize', isSidebarActive)
        }
        if (!isSidebarActive) {
            setIsDefaultOpen(() => '')
        }
        // initializeAdaptiveBehavior()
    }, [isSidebarActive, isGambleBodyHidden])

    const handleFilterOpenBtnClick = (event: React.MouseEvent, s: DefaultOpenType) => {
        setIsDefaultOpen(s)
        event.preventDefault()
        event.stopPropagation()

        if (document.documentElement.clientWidth > 650.98) {
            handlerSidebarActive(true)
        } else {
            handlerSidebarActive(true)
            setGambleBodyHidden(true)
        }
    }

    const handleFilterOpenDeleteClick = (event: React.MouseEvent) => {
        event.preventDefault()
        handlerSidebarActive(false)
        setGambleBodyHidden(false)
    }

    const randomKey = useMemo(() => Math.random().toString(36).substring(2, 9), [isSidebarActive])

    let datasFilter = data

    return (
        <aside className="gamble__sidebar sidebar-gamble">
            <div className="sidebar-gamble__top top-sidebar-gamble" data-da="mobile-header__top, 0, 650.98">
                <Link rel="nofollow noopener" to="/" className="top-sidebar-gamble__logo">
                    <img alt={'logo-icon'} src={logoIcon} />
                </Link>
            </div>
            <div className="sidebar-gamble__filters filters-sidebar-gamble">
                <div className="filters-sidebar-gamble__title title-filters-sidebar-gamble">
                    <button onClick={() => handlerSidebarActive(!isSidebarActive)} aria-label="Put your description here." className="title-filters-sidebar-gamble__btn" data-da="header__row-mobile1, 1, 650.98">
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
                    <h2 className="title-filters-sidebar-gamble__text">Filters</h2>
                    <button onClick={handleFilterOpenDeleteClick} aria-label="Put your description here." className="title-filters-sidebar-gamble__btn-delete">
                        <span className="title-filters-sidebar-gamble__btn-delete-icon_close">
                            <svg>
                                <use xlinkHref="#delete"></use>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="filters-sidebar-gamble__form form-filters">
                    <div className="form-filters__items-block">
                        <div className="form-filters__items">
                            <div
                                className={`form-filters__item item-form-filters`}
                                style={{
                                    zIndex: 12,
                                    position: 'relative',
                                    backgroundColor: '#171719',
                                }}
                                onClick={() => handlerCurrentRouteFilter(RouteToNextFilter.CASINOS)}
                            >
                                <AccordionItem
                                    defaultOpen={isDefaultOpen === 'casinos'}
                                    key={randomKey}
                                    heading={
                                        <div className={`item-form-filters__title title-item-form-filters  accordion--title--element`}>
                                            <span
                                                className="title-item-form-filters__icon"
                                                onClick={(e) => {
                                                    handleFilterOpenBtnClick(e, 'casinos')
                                                    handlerCurrentRouteFilter(RouteToNextFilter.CASINOS)
                                                }}
                                            >
                                                <svg>
                                                    <use xlinkHref="#casinos"></use>
                                                </svg>
                                            </span>
                                            <span className="title-item-form-filters__icon-name">Casinos</span>
                                            <h2 className="title-item-form-filters__text">Casinos</h2>
                                            <span className="title-item-form-filters__arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    }
                                    content={
                                        <CasinoFilterContent
                                            datasFilterCasino={
                                                datasFilter
                                                    ? {
                                                          ...datasFilter.casino,
                                                          ...datasFilter.general,
                                                      }
                                                    : undefined
                                            }
                                        />
                                    }
                                />
                            </div>
                            <div
                                className={`form-filters__item item-form-filters`}
                                style={{
                                    zIndex: 11,
                                    position: 'relative',
                                    backgroundColor: '#171719',
                                }}
                                onClick={() => handlerCurrentRouteFilter(RouteToNextFilter.BONUS)}
                            >
                                <AccordionItem
                                    defaultOpen={isDefaultOpen === 'bonuses'}
                                    key={randomKey}
                                    heading={
                                        <div className={`item-form-filters__title title-item-form-filters accordion--title--element`}>
                                            <span
                                                className="title-item-form-filters__icon"
                                                onClick={(e) => {
                                                    handleFilterOpenBtnClick(e, 'bonuses')
                                                    handlerCurrentRouteFilter(RouteToNextFilter.BONUS)
                                                }}
                                            >
                                                <svg>
                                                    <use xlinkHref="#bonuses"></use>
                                                </svg>
                                            </span>
                                            <span className="title-item-form-filters__icon-name">Bonuses</span>
                                            <h2 className="title-item-form-filters__text">Bonuses</h2>
                                            <span className="title-item-form-filters__arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    }
                                    content={
                                        <BonusFilter
                                            datasFilterBonus={
                                                datasFilter
                                                    ? {
                                                          ...datasFilter.bonus,
                                                          ...datasFilter.general,
                                                      }
                                                    : undefined
                                            }
                                        />
                                    }
                                />
                            </div>
                            <div
                                className={`form-filters__item item-form-filters `}
                                style={{
                                    zIndex: 10,
                                    backgroundColor: '#171719',
                                    position: 'relative',
                                }}
                                onClick={() => handlerCurrentRouteFilter(RouteToNextFilter.LOYALTIES)}
                            >
                                <AccordionItem
                                    defaultOpen={isDefaultOpen === 'loyalties'}
                                    key={randomKey}
                                    heading={
                                        <div className="item-form-filters__title title-item-form-filters accordion--title--element">
                                            <span
                                                className="title-item-form-filters__icon"
                                                onClick={(e) => {
                                                    handleFilterOpenBtnClick(e, 'loyalties')
                                                    handlerCurrentRouteFilter(RouteToNextFilter.LOYALTIES)
                                                }}
                                            >
                                                <svg>
                                                    <use xlinkHref="#loyalties"></use>
                                                </svg>
                                            </span>
                                            <span className="title-item-form-filters__icon-name">Loyalties</span>
                                            <h2 className="title-item-form-filters__text">Loyalties</h2>
                                            <span className="title-item-form-filters__arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    }
                                    content={<LoyaltiesFilter />}
                                />
                            </div>
                            {/* <div
                                className={`form-filters__item item-form-filters `}
                            >
                                <AccordionItem
                                    key={randomKey}
                                    defaultOpen={isDefaultOpen === "slots"}
                                    heading={
                                        <div className="item-form-filters__title title-item-form-filters accordion--title--element">
                                            <span
                                                className="title-item-form-filters__icon"
                                                onClick={(e) =>
                                                    handleFilterOpenBtnClick(
                                                        e,
                                                        "slots"
                                                    )
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
                            </div> */}
                        </div>
                    </div>
                    <div className="form-filters__bottom bottom-form-filters">
                        <div className="bottom-form-filters__row">
                            <div className="bottom-form-filters__column">
                                <button onClick={handlerClearAllFilters} className="bottom-form-filters__btn bottom-form-filters__btn_reset">
                                    <span className="bottom-form-filters__btn-icon">
                                        <img alt={'clear-all.svg'} src={clearAll} width={20} height={20} loading="lazy" />
                                    </span>
                                    <span>Clear All</span>
                                </button>
                            </div>
                            <div className="bottom-form-filters__column">
                                <Link
                                    onClick={() => handlerSidebarActive(false)}
                                    to={currentRouteFilter === RouteToNextFilter.DEFAULT ? '/' + currentRouteFilter : `/filter-${currentRouteFilter}`}
                                    className="bottom-form-filters__btn bottom-form-filters__btn_submit"
                                >
                                    <span>{`Apply Filters ${LengthApplyFilter({
                                        currentRouteFilter,
                                        casinoFilters,
                                        bonusFilters,
                                        loyaltiesFilters,
                                    })}`}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Navbar
