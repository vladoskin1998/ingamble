import { Wraper } from "../Wraper"
import starIcon from "../../assets/img/icons/star.svg"
import likeIcon from "../../assets/img/icons/like.svg"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { Categories } from "../../components/categories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { CasinoBonuses } from "./CasinoBonuses"
// import { SpecialPromo } from "./SpecialPromo"
import { TabMain } from "./TabMain"
import { HighRankedCasinos } from "./HighRankedCasinos"
import { Harry } from "./Harry"
import { PopupReadMore } from "./PopupReadMore"
import { useEffect, useState } from "react"
import $api from "../../http"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { RewievCasinoDataResponse } from "../../types"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"

const SafetyIndexRatingLevel = (n: number, s?: string) => {
    if (n < 3 || s?.toLocaleLowerCase() === "medium") return "medium"
    else if (n < 7 || s?.toLocaleLowerCase() === "medium") return "low"
    else return "high"
}

const getCurrentCasinosFetchData = async (queryId: string) => {
    const response = await $api.get(`get-data-casino/${queryId}/`)

    const headers = response.headers

    return { dataCurrentCasinos: response.data, headers }
}

export default function SimpleCasinos() {
    document.title = "Review"

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const [openModal, setOpenModal] = useState(false)
    const [searchParams] = useSearchParams()
    const queryId = searchParams.get("queryId")

    const { data, isLoading } = useQuery<{
        dataCurrentCasinos: RewievCasinoDataResponse
        headers: any
    }>(
        ["get-data-casino", queryId],
        () => getCurrentCasinosFetchData(queryId!),
        {
            staleTime: Infinity,
            enabled: !!queryId,
        }
    )

    console.log(data)

    const handlerOpen = (s: boolean) => {
        setOpenModal(s)
    }

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [openModal])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading) return <LogoLoader />

    return (
        <>
            <PopupReadMore
                openModal={openModal}
                handlerOpen={handlerOpen}
                data={data?.dataCurrentCasinos}
            />

            <Wraper>
                <main className="gamble__review main-gamble review">
                    <div className="main-gamble__body">
                        <Categories />
                        <BreadCrumb
                            path={[
                                {
                                    name: "Home",
                                    link: "https://cryptogamblers.pro",
                                },
                                {
                                    name: "Gambling Hub",
                                    link: "https://cryptogamblers.pro/bonuses",
                                },
                                {
                                    name: "Review",
                                    link: "#",
                                },
                            ]}
                        />
                        <section className="review__casino-info casino-info">
                            <div className="casino-info__container container">
                                <div className="casino-info__body">
                                    <div className="casino-info__row">
                                        <div className="casino-info__main main-casino-info ">
                                            <div className="">
                                                <div className="main-casino-info__image ibg--custom">
                                                    <LazyCardImg
                                                        img={
                                                            data
                                                                ?.dataCurrentCasinos
                                                                ?.image || ""
                                                        }
                                                        height="100%"
                                                        width="100%"
                                                        imgLoading={"eager"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="casino-info__content content-casino-info">
                                            <div className="content-casino-info__main content-casino-info__main-adaptiv">
                                                <div
                                                    className="info-casino-card__likes name-main-casino-info__likes"
                                                    data-da="content-casino-info__top, 1, 992.98"
                                                >
                                                    <span className="info-casino-card__likes-icon">
                                                        <img
                                                            src={likeIcon}
                                                            alt="like"
                                                        />
                                                    </span>
                                                    <span className="info-casino-card__likes-number">
                                                        {data
                                                            ?.dataCurrentCasinos
                                                            ?.likes || 0}
                                                    </span>
                                                </div>
                                                <div className="content-casino-info__top">
                                                    <h2 className="content-casino-info__title">
                                                        {data
                                                            ?.dataCurrentCasinos
                                                            ?.name || 0}
                                                    </h2>
                                                </div>
                                                <div className="content-casino-info__country country-content-casino-info">
                                                    <div className="country-content-casino-info__info">
                                                        {/* <div className="country-content-casino-info__icon">
                                                            <img
                                                                src="/src/assets/img/icons/latvia-flag.svg"
                                                                alt="latvia"
                                                            />
                                                        </div> */}
                                                        <div className="country-content-casino-info__text">
                                                            Accepts players from{" "}
                                                            {
                                                                data?.headers?.[
                                                                    "cf-ipcountry"
                                                                ]
                                                            }
                                                        </div>
                                                    </div>
                                                    <a
                                                        href=""
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_apply"
                                                    >
                                                        T&C Apply
                                                    </a>
                                                </div>
                                                <a
                                                    href={
                                                        data?.dataCurrentCasinos
                                                            ?.url
                                                    }
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                >
                                                    Visit Casino
                                                </a>
                                            </div>
                                            <div className="content-casino-info__features features-content-casino-info">
                                                <div className="features-content-casino-info__row">
                                                    <div className="features-content-casino-info__column">
                                                        <div className="features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_high">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Safety Index
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div
                                                                    className={`item-features-content-casino-info__number 
                                                                    item-features-content-casino-info_${SafetyIndexRatingLevel(
                                                                        Number(
                                                                            data
                                                                                ?.dataCurrentCasinos
                                                                                ?.casino_rank
                                                                        ) || 10
                                                                    )}`}
                                                                >
                                                                    {
                                                                        data
                                                                            ?.dataCurrentCasinos
                                                                            ?.casino_rank
                                                                    }{" "}
                                                                    <span
                                                                        className={`item-features-content-casino-info__number-level`}
                                                                    >
                                                                        {SafetyIndexRatingLevel(
                                                                            Number(
                                                                                data
                                                                                    ?.dataCurrentCasinos
                                                                                    ?.casino_rank
                                                                            ) ||
                                                                                10
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="item-features-content-casino-info__rating">
                                                                    {Array(
                                                                        data
                                                                            ?.dataCurrentCasinos
                                                                            ?.stars ||
                                                                            5
                                                                    )
                                                                        .fill(0)
                                                                        .map(
                                                                            (
                                                                                st,
                                                                                sdi
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        sdi +
                                                                                        st
                                                                                    }
                                                                                    className="item-features-content-casino-info__star"
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            starIcon
                                                                                        }
                                                                                        alt="like"
                                                                                    />
                                                                                </div>
                                                                            )
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-content-casino-info__column">
                                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Withdrawal
                                                                    Limit
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    {data
                                                                        ?.dataCurrentCasinos
                                                                        ?.withdrawal_limit
                                                                        ?.monthly ||
                                                                        0}
                                                                </div>
                                                                <div className="item-features-content-casino-info__value">
                                                                    Monthly
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-content-casino-info__column">
                                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Min Dep
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div className="item-features-content-casino-info__number">
                                                                    {data
                                                                        ?.dataCurrentCasinos
                                                                        ?.min_dep[0]
                                                                        .min_value ||
                                                                        0}
                                                                    $
                                                                </div>
                                                                <div className="item-features-content-casino-info__value">
                                                                    To Activate
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="features-content-casino-info__column">
                                                        <div className="features-content-casino-info__item item-features-content-casino-info">
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Payout Speed
                                                                </div>
                                                            </div>

                                                            <div className="item-features-content-casino-info__body ">
                                                                <div className="item-features-content-casino-info__number">
                                                                    {
                                                                        data
                                                                            ?.dataCurrentCasinos
                                                                            ?.payout_speed
                                                                    }
                                                                </div>
                                                                <div
                                                                    className="item-features-content-casino-info__value"
                                                                    style={{
                                                                        opacity: 0,
                                                                    }}
                                                                >
                                                                    1
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <CasinoBonuses data={data?.dataCurrentCasinos} />
                        {data?.dataCurrentCasinos?.loyalty_program
                            ?.loyalty_keypoint?.length && (
                            <section className="review__loyalty loyalty-review">
                                <div className="loyalty-review__container container">
                                    <div className="loyalty-review__top top">
                                        <div className="top__row">
                                            <div className="top__column">
                                                <div className="top__title-block">
                                                    <h2 className="top__title">
                                                        Loyalty Keypoints
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="top__column">
                                                <a
                                                    href="/all-loyalties"
                                                    aria-label="Put your description here."
                                                    target="_blank"
                                                    className="top__btn"
                                                >
                                                    <span>View More</span>
                                                    <span className="top__btn-arrow">
                                                        <svg>
                                                            <use xlinkHref="#arrow"></use>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="loyalty-review__body">
                                        {data?.dataCurrentCasinos?.loyalty_program?.loyalty_keypoint
                                            ?.slice(0, 6)
                                            .map((lk) => (
                                                <div className="loyalty-review__column">
                                                    <div className="loyalty-review__item item-loyalty-review">
                                                        <div className="item-loyalty-review__image">
                                                            <LazyCardImg
                                                                img={
                                                                    lk?.image ||
                                                                    ""
                                                                }
                                                                height="100%"
                                                                width="100%"
                                                                imgLoading="eager"
                                                            />
                                                        </div>
                                                        <div className="item-loyalty-review__content">
                                                            <div className="item-loyalty-review__label">
                                                                {lk.text_1}
                                                            </div>
                                                            <div className="item-loyalty-review__value">
                                                                {lk.text_2}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </section>
                        )}
                        {/* <SpecialPromo /> */}
                        <section
                            className="review__iwild-review-mob iwild-review-mob"
                            id="review-iwild-casino-review"
                        >
                            <div className="iwild-review-mob__container container"></div>
                        </section>
                        <TabMain
                            handlerOpen={handlerOpen}
                            data={data?.dataCurrentCasinos}
                        />
                        <Harry
                            handlerOpen={handlerOpen}
                            data={data?.dataCurrentCasinos}
                        />
                        {/* <SpecialPromo /> */}
                        <section className="review__iwild-casino-safety iwild-casino-safety">
                            <div className="iwild-casino-safety__container container">
                                <div className="iwild-casino-safety__body">
                                    <div className="iwild-casino-safety__row">
                                        <div className="iwild-casino-safety__column iwild-casino-safety__column_main">
                                            <div className="iwild-casino-safety__item item-iwild-casino-safety">
                                                <h3 className="item-iwild-casino-safety__title">
                                                    Safety Index of{" "}
                                                    <span>
                                                        {
                                                            data
                                                                ?.dataCurrentCasinos
                                                                ?.name
                                                        }
                                                    </span>{" "}
                                                    explained
                                                </h3>
                                                <div className="item-iwild-casino-safety__text">
                                                    <p>
                                                        Take a look at the
                                                        explanation of factors
                                                        that we consider when
                                                        calculating the Safety
                                                        Index rating of Spinanga
                                                        Casino. The Safety Index
                                                        is the main metric we
                                                        use to describe the
                                                        trustworthiness,
                                                        fairness, and quality of
                                                        all online casinos in
                                                        our database.
                                                    </p>
                                                </div>
                                                <div className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_high">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div
                                                        className="index-item-iwild-casino-safety__value"
                                                        style={{
                                                            textTransform:
                                                                "capitalize",
                                                        }}
                                                    >
                                                        {SafetyIndexRatingLevel(
                                                            Number(
                                                                data
                                                                    ?.dataCurrentCasinos
                                                                    ?.casino_rank
                                                            ) || 10
                                                        )}
                                                    </div>
                                                </div>
                                                {/* <!-- <div
                                                    className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_medium">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div className="index-item-iwild-casino-safety__value">Medium</div>
                                                </div> -->
                                                <!-- <div
                                                    className="item-iwild-casino-safety__index index-item-iwild-casino-safety index-item-iwild-casino-safety_low">
                                                    <div className="index-item-iwild-casino-safety__bg"></div>
                                                    <div className="index-item-iwild-casino-safety__icon"></div>
                                                    <div className="index-item-iwild-casino-safety__label">
                                                        Safety Index:
                                                    </div>
                                                    <div className="index-item-iwild-casino-safety__value">Low</div>
                                                </div> --> */}
                                            </div>
                                        </div>
                                        <div className="iwild-casino-safety__column iwild-casino-safety__column_content">
                                            <div className="iwild-casino-safety__content content-iwild-casino-safety">
                                                <div className="content-iwild-casino-safety__row">
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                <span>
                                                                    Medium-sized
                                                                    casino
                                                                </span>
                                                                , based on our
                                                                research and
                                                                estimates
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                <span>
                                                                    Low value of
                                                                    withheld
                                                                    winnings
                                                                </span>{" "}
                                                                in player
                                                                complaints in
                                                                relation to the
                                                                casino's size
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                We consider the
                                                                casino's T&Cs to
                                                                be{" "}
                                                                <span>
                                                                    fair
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                We also
                                                                considered other
                                                                factors, which
                                                                had a
                                                                <span>
                                                                    neutral
                                                                    impact
                                                                </span>{" "}
                                                                on the casino's
                                                                Safety Index
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                Not found on any
                                                                relevant casino
                                                                blacklist
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-iwild-casino-safety__column">
                                                        <div className="content-iwild-casino-safety__item item-content-iwild-casino-safety">
                                                            <div className="item-content-iwild-casino-safety__text">
                                                                The Safety Index
                                                                of this casino
                                                                was calculated
                                                                based on our
                                                                research and
                                                                data collected
                                                                by our casino
                                                                review team.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <HighRankedCasinos />
                        <CheckMoreWhatSuitsYouBest />
                        <SubscribeForm />
                        <section className="review__bottom-info bottom-info-gamble">
                            <div className="bottom-info-gamble__container container">
                                <div className="bottom-info-gamble__row">
                                    <div className="bottom-info-gamble__column">
                                        <div className="bottom-info-gamble__item">
                                            <h2 className="bottom-info-gamble__title">
                                                inGamble - The most popular New
                                                Casino and Bonus listing and
                                                review website
                                            </h2>
                                            <div className="bottom-info-gamble__text">
                                                <p>
                                                    inGamble is a well-known and
                                                    respected brand within the
                                                    iGaming industry. We are the
                                                    most popular gambling
                                                    listing and review website.
                                                    New players owners always
                                                    look for opportunities to
                                                    list their projects on our
                                                    website. That ensures that
                                                    the information on our
                                                    platform is always
                                                    accessible and up to date.
                                                </p>
                                                <p>
                                                    Most of the cryptocurrencies
                                                    are listed on CoinMooner
                                                    even before they are listed
                                                    on CoinMarketCap &
                                                    CoinGecko.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-info-gamble__column">
                                        <div className="bottom-info-gamble__item">
                                            <h2 className="bottom-info-gamble__title">
                                                Find DeFi tokens that will
                                                generate huge profits
                                            </h2>
                                            <div className="bottom-info-gamble__text">
                                                <p>
                                                    CoinMooner became a platform
                                                    that makes cryptocurrencies
                                                    more accessible to the
                                                    public and provides
                                                    entertaining features,
                                                    developments, crypto-related
                                                    news, tutorials, and other
                                                    valuable materials. One of
                                                    the main goals is to stay
                                                    relevant and keep up with
                                                    the rapid growth of crypto.
                                                </p>
                                                <p>
                                                    To follow our ideology, we
                                                    developed state-of-the-art
                                                    mechanisms and features that
                                                    allow our visitors to
                                                    analyze the tokens. Our
                                                    visitors can use various
                                                    rankings, filtering options,
                                                    token contract audits,
                                                    charts, trading history, and
                                                    many other valuable options.
                                                    All of this combined brings
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
            </Wraper>
        </>
    )
}
