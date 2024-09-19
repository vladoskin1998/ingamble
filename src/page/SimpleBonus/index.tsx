import { LazyLoadImage } from "react-lazy-load-image-component"
// import mainImg from "../../assets/img/casino-info/main-img.jpg"
// import stakeLogo from "../../assets/img/casino-logo/stake.svg"
// import starIcon from "../../assets/img/icons/star.svg"
// import likeIcon from "../../assets/img/icons/like.svg"
// import latviaFlag from "../../assets/img/icons/latvia-flag.svg"
import casinoCards09 from "../../assets/img/casino-cards/09.jpg"
import casinoCards03 from "../../assets/img/casino-cards/03.jpg"
import casinoCards07 from "../../assets/img/casino-cards/07.jpg"
import casinoCards01 from "../../assets/img/casino-cards/01.jpg"
import casinoCards04 from "../../assets/img/casino-cards/04.jpg"

import harryStyles from "../../assets/img/casino-person/01.png"
import searchFilterIcon from "../../assets/img/icons/search-filter.svg"

import "swiper/css"
import { useQuery } from "react-query"
import {
    lazy,
    useEffect,
    useState,

    //   useState
} from "react"
//import { FAKEDATAGETBONUCE } from "../../http/fakedata/getDataBonuce"
import $api from "../../http"

import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { GeoLocationAllowdType, GetDataBonusResponse } from "../../types"
import { SimpleBonusEssentialPrograms } from "./SimpleBonusEssentialPrograms"
import { BonusSubType } from "./BonusSubType"
import { Categories } from "../../components/catogories/Categories"

import { LastUpdate } from "./LastUpdate"
import { Default } from "../Dafault"
import { useAdaptiveBehavior } from "../../Layout"

import { SubscribeForm } from "./SubscribeForm"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { HeaderSimpleBonus } from "./HeaderSimpleBonus"
import { HowToGetBonus } from "./HowToGetBonus"
import MainSlider from "../../components/swiper/MainSlider"

const LazyFlag = lazy(() => import("react-world-flags"))

const getBonusDataFetch = async () => {
    const response = await $api.get("get-data-bonus/8/")
    const headers = response.headers

    return { dataBonus: response.data, headers }
}

export const SimpleBonus = () => {
    document.title = "Simple Bonus"
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } =
        useAdaptiveBehavior()

    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: "LV",
        countryName: "Latvia",
        isAllowed: false,
        isLoadedGeo: false,
    })

    const { data, isLoading } = useQuery<{
        dataBonus: GetDataBonusResponse
        headers: any
    }>("get-data-bonus", getBonusDataFetch, {
        keepPreviousData: true,
    })

    useEffect(() => {
        if (data?.headers) {
            const headers = data?.headers
            const countryCode = headers?.["cf-ipcountry-code"]
            const countryName = headers?.["cf-ipcountry"]
            const isAllowed = !data.dataBonus.restriction_country.country.find(
                (item) =>
                    item.code?.toLocaleLowerCase() ===
                    countryCode?.toLocaleLowerCase()
            )

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed,
                isLoadedGeo: true,
            })
        }
        initializeAdaptiveBehavior()

        const newUrl = `/casino/${data?.dataBonus?.casino_name
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}/bonuses/${data?.dataBonus?.bonus_type
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}`

        window.history.pushState({}, "", newUrl)
    }, [data])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [geoLocation])

    if (isLoading && geoLocation.isLoadedGeo) return <LogoLoader />

    return (
        <Default>
            <main className="gamble__simple-bonus main-gamble simple-bonus">
                <div className="main-gamble__body">
                    <Categories category={data?.dataBonus?.category || []} />

                    <BreadCrumb
                        path={[
                            {
                                name: "Home",
                                link: "https://cryptogamblers.pro",
                            },
                            {
                                name: "Casino Bonuses",
                                link: "https://cryptogamblers.pro/bonuses",
                            },
                            {
                                name:
                                    data?.dataBonus?.casino_name ||
                                    "Casino Name",
                                link: "https://cryptogamblers.pro/casino/iwild-casino",
                            },
                            {
                                name: "Bonuses",
                                link: "https://cryptogamblers.pro/casino/iwild-casino/bonuses",
                            },
                            {
                                name:
                                    data?.dataBonus?.bonus_type || "Bonus Type",
                                link: "#",
                            },
                        ]}
                    />
                    <HeaderSimpleBonus
                        data={data?.dataBonus}
                        geoLocation={geoLocation}
                    />
                    {geoLocation.isAllowed && (
                        <>
                            <BonusSubType
                                bonus_subtype={
                                    data?.dataBonus?.bonus_subtype || []
                                }
                            />
                            <LastUpdate data={data?.dataBonus} />
                            <HowToGetBonus data={data?.dataBonus} />
                            <section className="simple-bonus__more-stake more-staket-simple-bonus">
                                <div className="more-staket-simple-bonus__container container">
                                    <div className="more-staket-simple-bonus__top top">
                                        <div className="top__row">
                                            <div className="top__column">
                                                <div className="top__title-block">
                                                    <h2 className="top__title">
                                                        {`More ${data?.dataBonus.casino_name.replace(
                                                            /casino/i,
                                                            ""
                                                        )} Casino Bonuses`}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="top__column">
                                                <a
                                                    rel="nofollow noopener"
                                                    href=""
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="top__btn"
                                                >
                                                    <span>See All</span>
                                                    <span className="top__btn-arrow">
                                                        <svg>
                                                            <use xlinkHref="#arrow"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <MainSlider
                                        key={"1wqf12231"}
                                        data={[
                                            {
                                                img: casinoCards09,
                                                raiting: "4.8",
                                                likes: "34k",
                                                nameCasino: "Stake Casino",
                                                comment:
                                                    "New Year Bet Race - $30,000 Rocket...",
                                                tags: (
                                                    <>
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                            <span className="tags-casino-card__item-label">
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                10€
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                img: casinoCards01,
                                                raiting: "4.8",
                                                likes: "34k",
                                                nameCasino: "Stake Casino",
                                                comment:
                                                    "New Year Bet Race - $30,000 Rocket...",
                                                tags: (
                                                    <>
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                            <span className="tags-casino-card__item-label">
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                10€
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                img: casinoCards04,
                                                raiting: "4.8",
                                                likes: "34k",
                                                nameCasino: "Stake Casino",
                                                comment:
                                                    " Big Fat Race to $100 Moon coins",
                                                tags: (
                                                    <>
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                            <span className="tags-casino-card__item-label">
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                10€
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                img: casinoCards07,
                                                raiting: "4.8",
                                                likes: "34k",
                                                nameCasino: "Stake Casino",
                                                comment:
                                                    "New Year Bet Race - $30,000 Rocket...",
                                                tags: (
                                                    <>
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                            <span className="tags-casino-card__item-label">
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                10€
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                img: casinoCards07,
                                                raiting: "4.8",
                                                likes: "34k",
                                                nameCasino: "Stake Casino",
                                                comment:
                                                    " Big Fat Race to $100 Moon coins",
                                                tags: (
                                                    <>
                                                        <div className="tags-casino-card__item tags-casino-card__item_green">
                                                            <span className="tags-casino-card__item-label">
                                                                WR:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                4.0x
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                            <span className="tags-casino-card__item-label">
                                                                Min Dep:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                10€
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                            <span className="tags-casino-card__item-label">
                                                                Max bet:
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                €5
                                                            </span>
                                                        </div>
                                                        <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                            <span className="tags-casino-card__item-label">
                                                                <svg>
                                                                    <use xlinkHref="#check-grass"></use>
                                                                </svg>
                                                            </span>
                                                            <span className="tags-casino-card__item-value">
                                                                Safe
                                                            </span>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                        ]}
                                    />
                                </div>
                            </section>
                        </>
                    )}
                    <section className="simple-bonus__more-stake more-staket-simple-bonus">
                        <div className="more-staket-simple-bonus__container container">
                            <div className="more-staket-simple-bonus__top top">
                                <div className="top__row">
                                    <div className="top__column">
                                        <div className="top__title-block">
                                            {geoLocation.isAllowed ? (
                                                <h2 className="top__title">
                                                    Other Best Reload bonuses
                                                </h2>
                                            ) : (
                                                <>
                                                    <span
                                                        className="top__title-icon"
                                                        style={{
                                                            borderRadius: "4px",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <LazyFlag
                                                            code={
                                                                geoLocation.countryCode
                                                            }
                                                            height={20}
                                                        />
                                                    </span>
                                                    <h2 className="top__title">
                                                        Bonuses available in{" "}
                                                        {
                                                            geoLocation.countryName
                                                        }
                                                    </h2>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="top__column">
                                        <a
                                            rel="nofollow noopener"
                                            href=""
                                            aria-label="Put your description here."
                                            target="_blank"
                                            className="top__btn"
                                        >
                                            <span>See All</span>
                                            <span className="top__btn-arrow">
                                                <svg>
                                                    <use xlinkHref="#arrow"></use>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <MainSlider
                                key={"112231"}
                                data={[
                                    {
                                        img: "/src/assets/img/casino-cards/09.jpg",
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10€
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        €5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards03,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10€
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        €5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards07,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10€
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        €5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards01,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            "New Year Bet Race - $30,000 Rocket...",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10€
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        €5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                    {
                                        img: casinoCards04,
                                        raiting: "4.8",
                                        likes: "34k",
                                        nameCasino: "Stake Casino",
                                        comment:
                                            " Big Fat Race to $100 Moon coins",
                                        tags: (
                                            <>
                                                <div className="tags-casino-card__item tags-casino-card__item_green">
                                                    <span className="tags-casino-card__item-label">
                                                        WR:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        4.0x
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_blue">
                                                    <span className="tags-casino-card__item-label">
                                                        Min Dep:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        10€
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_purple">
                                                    <span className="tags-casino-card__item-label">
                                                        Max bet:
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        €5
                                                    </span>
                                                </div>
                                                <div className="tags-casino-card__item tags-casino-card__item_grass">
                                                    <span className="tags-casino-card__item-label">
                                                        <svg>
                                                            <use xlinkHref="#check-grass"></use>
                                                        </svg>
                                                    </span>
                                                    <span className="tags-casino-card__item-value">
                                                        Safe
                                                    </span>
                                                </div>
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </section>

                    <SimpleBonusEssentialPrograms />
                    {geoLocation.isAllowed && (
                        <>
                            <section className="simple-bonus__casino-person simple-bonus__casino-person_desktop casino-person">
                                <div className="casino-person__container container">
                                    <div className="casino-person__body">
                                        <div className="casino-person__row">
                                            <div className="casino-person__info info-casino-person">
                                                <div className="info-casino-person__img">
                                                    <LazyLoadImage
                                                        src={harryStyles}
                                                        alt="HARRY STYLES"
                                                    />
                                                </div>
                                                <div className="info-casino-person__content">
                                                    <h3 className="info-casino-person__name h3">
                                                        HARRY STYLES
                                                    </h3>
                                                    <div className="info-casino-person__position">
                                                        Content Maker, Chief
                                                        Marketing at Lerio
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="casino-person__socials">
                                                <div className="socials-top-footer__items">
                                                    <div className="socials-top-footer__item">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="socials-top-footer__link"
                                                            rel="noreferrer"
                                                        >
                                                            <svg>
                                                                <use xlinkHref="#x"></use>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="socials-top-footer__item">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="socials-top-footer__link"
                                                            rel="noreferrer"
                                                        >
                                                            <svg>
                                                                <use xlinkHref="#facebook"></use>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="socials-top-footer__item">
                                                        <a
                                                            href=""
                                                            aria-label="Put your description here."
                                                            target="_blank"
                                                            className="socials-top-footer__link"
                                                            rel="noreferrer"
                                                        >
                                                            <svg>
                                                                <use xlinkHref="#linkedin"></use>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="casino-person__waves">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="main-gamble__bottom-filter-tags bottom-filter-tags">
                                <div className="bottom-filter-tags__container container">
                                    <div className="bottom-filter-tags__top top">
                                        <div className="top__title-block">
                                            <span className="top__title-icon">
                                                <LazyLoadImage
                                                    src={searchFilterIcon}
                                                    alt="search"
                                                />
                                            </span>
                                            <h2 className="top__title">
                                                Check more what suits You Best
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="bottom-filter-tags__row">
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Best Welcome Bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Reload bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Low wager bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Bonus buy bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Non-sticky bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Low risk
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Safest
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Highest RTP Slots
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Best Live Casinos
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Highest RTP Slots
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Safest
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Low wager bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Best Welcome Bonuses
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Low risk
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_non-mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Highest RTP Slots
                                            </a>
                                        </div>
                                        <div className="bottom-filter-tags__column bottom-filter-tags__column_mob">
                                            <a
                                                rel="nofollow noopener"
                                                href=""
                                                aria-label="Put your description here."
                                                className="bottom-filter-tags__btn slide-filter-tags-gamble__btn"
                                            >
                                                Reload bonuses
                                            </a>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setSidebarActive(!isSidebarActive)
                                        }
                                        className="bottom-filter-tags__btn-filter"
                                    >
                                        <span>
                                            <svg>
                                                <use xlinkHref="#filter"></use>
                                            </svg>
                                        </span>
                                        Filter What You need
                                    </button>
                                </div>
                            </section>{" "}
                        </>
                    )}
                    <SubscribeForm />
                    <section className="main-gamble__bottom-info bottom-info-gamble">
                        <div className="bottom-info-gamble__container container">
                            <div className="bottom-info-gamble__row">
                                <div className="bottom-info-gamble__column">
                                    <div className="bottom-info-gamble__item">
                                        <h2 className="bottom-info-gamble__title">
                                            inGamble - The most popular New
                                            Casino and Bonus listing and review
                                            website
                                        </h2>
                                        <div className="bottom-info-gamble__text">
                                            <p>
                                                inGamble is a well-known and
                                                respected brand within the
                                                iGaming industry. We are the
                                                most popular gambling listing
                                                and review website. New players
                                                owners always look for
                                                opportunities to list their
                                                projects on our website. That
                                                ensures that the information on
                                                our platform is always
                                                accessible and up to date.
                                            </p>
                                            <p>
                                                Most of the cryptocurrencies are
                                                listed on CoinMooner even before
                                                they are listed on CoinMarketCap
                                                & CoinGecko.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-info-gamble__column">
                                    <div className="bottom-info-gamble__item">
                                        <h2 className="bottom-info-gamble__title">
                                            Find DeFi tokens that will generate
                                            huge profits
                                        </h2>
                                        <div className="bottom-info-gamble__text">
                                            <p>
                                                CoinMooner became a platform
                                                that makes cryptocurrencies more
                                                accessible to the public and
                                                provides entertaining features,
                                                developments, crypto-related
                                                news, tutorials, and other
                                                valuable materials. One of the
                                                main goals is to stay relevant
                                                and keep up with the rapid
                                                growth of crypto.
                                            </p>
                                            <p>
                                                To follow our ideology, we
                                                developed state-of-the-art
                                                mechanisms and features that
                                                allow our visitors to analyze
                                                the tokens. Our visitors can use
                                                various rankings, filtering
                                                options, token contract audits,
                                                charts, trading history, and
                                                many other valuable options. All
                                                of this combined brings
                                                consistent results!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Default>
    )
}
