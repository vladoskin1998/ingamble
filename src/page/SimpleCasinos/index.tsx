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
import { lazy, useEffect, useState } from "react"
import $api from "../../http"
import { Link, useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { GeoLocationAllowdType, RewievCasinoDataResponse } from "../../types"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { useFilterContext } from "../../context/FilterContext"
import { cloacingLink, sanitizeLink, sanitizeNumberLike } from "../../helper"
import { COUNTRIES } from "../../helper/Country"
const  BottomInfo = lazy(() => import( "../../components/footer/BottomInfo"))
// import { sanitizeLink } from "../../helper"

const SafetyIndexRatingLevel = (n: number) => {
    if (n < 3) return "low"
    else if (n >= 3 && n < 7) return "medium"
    else return "high"
}

const getCurrentCasinosFetchData = async (queryId: string) => {
    const response = await $api.get(`get-data-casino/${queryId}/`)

    const headers = response.headers

    return { dataCurrentCasinos: response.data, headers }
}

export default function SimpleCasinos() {
    // document.title = "Review"

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const [openModal, setOpenModal] = useState(false)
    const [searchParams] = useSearchParams()
    const qid = searchParams.get("queryId")

    const [queryId, setQueryId] = useState<string>(qid || "")

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

    useEffect(() => {
        if (qid) {
            setQueryId(qid)
            window.scrollTo(0, 0)
        }
    }, [qid])

    const { data: Country } = useFilterContext()

    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: "",
        countryName: "",
        isAllowed: false,
        isLoadedGeo: false,
        countryImg: undefined,
    })

    useEffect(() => {
        if (data?.headers) {
            const countryCode = data?.headers?.["cf-ipcountry-code"]
            const countryName = data?.headers?.["cf-ipcountry"]

            const countryImg = (Country?.general?.countries || COUNTRIES)?.find(
                (it) => {
                    return (
                        it.code === countryCode ||
                        it.name.toLocaleLowerCase() ===
                            countryName.toLocaleLowerCase()
                    )
                }
            )?.flag_image

            const isAllowed = !data.dataCurrentCasinos?.blocked_countries?.find(
                (item) =>
                    item?.code?.toLocaleLowerCase() ===
                    countryCode?.toLocaleLowerCase()
            )

            // !data.dataBonus?.restriction_country?.country.find(
            //     (item) =>
            //         item?.code?.toLocaleLowerCase() ===
            //         countryCode?.toLocaleLowerCase()
            // )

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed,
                isLoadedGeo: true,
                countryImg,
            })
        }
    }, [data, Country])

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

     if (isLoading || !geoLocation.isLoadedGeo) return <LogoLoader />
    // if (isLoading) return <LogoLoader />
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
                        <section className={`review__casino-info casino-info   ${
                !geoLocation?.isAllowed && "casino-info_not-available"
            } `}>
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
                                                        {sanitizeNumberLike(data
                                                            ?.dataCurrentCasinos
                                                            ?.likes )}
                                                    </span>
                                                </div>
                                                <div className="content-casino-info__top">
                                                    <h2 className="content-casino-info__title">
                                                        {data
                                                            ?.dataCurrentCasinos
                                                            ?.name +
                                                            " Review" || 0}
                                                    </h2>
                                                </div>
                                                <div className="content-casino-info__country country-content-casino-info">
                                                    <div className="country-content-casino-info__info">
                                                        {geoLocation?.countryImg && (
                                                            <div className="country-content-casino-info__icon">
                                                                <img
                                                                    src={
                                                                        geoLocation?.countryImg
                                                                    }
                                                                    alt={
                                                                        geoLocation?.countryName
                                                                    }
                                                                />
                                                            </div>
                                                        )}
                                                        <div
                                                            className={`country-content-casino-info__text `}
                                                        >
                                                            {`${
                                                                geoLocation?.isAllowed
                                                                    ? "Accepts players from"
                                                                    : "Doesn’t accept players from"
                                                            } ${
                                                                geoLocation?.countryName
                                                            }`}
                                                        </div>
                                                    </div>
                                                    <a
                                                        // href={data?.dataCurrentCasinos?.link_tc || ''}
                                                        aria-label="Put your description here."
                                                        target="_blank"
                                                        className="main-get-bonus__btn main-get-bonus__btn_apply"
                                                    >
                                                        T&C Apply
                                                    </a>
                                                </div>
                                                <a
                                                    href={cloacingLink(
                                                        data?.dataCurrentCasinos
                                                            ?.url ||
                                                            data
                                                                ?.dataCurrentCasinos
                                                                ?.casino_affiliate_link
                                                    )}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        e.preventDefault()
                                                        window.open(
                                                            data
                                                                ?.dataCurrentCasinos
                                                                
                                                                ?.casino_affiliate_link ||
                                                                data
                                                                    ?.dataCurrentCasinos
                                                                    ?.url,
                                                            "_blank",
                                                            "noopener,noreferrer"
                                                        )
                                                    }}
                                                    className="main-get-bonus__btn main-get-bonus__btn_bonus"
                                                >
                                                    Visit Casino
                                                </a>
                                            </div>
                                            <div className="content-casino-info__features features-content-casino-info">
                                                <div className="features-content-casino-info__row">
                                                    <div className="features-content-casino-info__column">
                                                        <div
                                                            className={`features-content-casino-info__item item-features-content-casino-info item-features-content-casino-info_${SafetyIndexRatingLevel(
                                                                Number(
                                                                    data
                                                                        ?.dataCurrentCasinos
                                                                        ?.casino_rank
                                                                ) || 10
                                                            )}`}
                                                        >
                                                            <div className="item-features-content-casino-info__top">
                                                                <div className="item-features-content-casino-info__label">
                                                                    Safety Index
                                                                </div>
                                                            </div>
                                                            <div className="item-features-content-casino-info__body">
                                                                <div
                                                                    className={`item-features-content-casino-info__number 
                                                                   `}
                                                                >
                                                                    {
                                                                        data
                                                                            ?.dataCurrentCasinos
                                                                            ?.casino_rank
                                                                    }{" "}
                                                                    <span
                                                                        className={`item-features-content-casino-info__number-level`}
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
                                                                            4
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
                                                                        "Unlimited"}
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
                                                                        .min_value
                                                                        ? `${data?.dataCurrentCasinos?.min_dep[0].min_value}$`
                                                                        : "Unlimited"}
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
                                                                <div className="item-features-content-casino-info__value">
                                                                    Quick and
                                                                    Reliable
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
                                                <Link
                                                    to={`/casino/${sanitizeLink(
                                                        data?.dataCurrentCasinos
                                                            ?.name
                                                    )}/loyalty?queryId=${
                                                        data?.dataCurrentCasinos
                                                            ?.loyaltie_id
                                                    }`}
                                                    aria-label="Put your description here."
                                                    className="top__btn "
                                                    style={{ display: "flex" }}
                                                >
                                                    <span>View More</span>
                                                    <span className="top__btn-arrow">
                                                        <svg>
                                                            <use xlinkHref="#arrow"></use>
                                                        </svg>
                                                    </span>
                                                </Link>
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
                            Country={Country?.general?.countries}
                            handlerOpen={handlerOpen}
                            data={data?.dataCurrentCasinos}
                        />
                        <Harry
                            handlerOpen={handlerOpen}
                            data={data?.dataCurrentCasinos}
                        />
                        {/* <SpecialPromo /> */}
                        {/* <section className="review__iwild-casino-safety iwild-casino-safety">
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
                                                        Index rating of  {
                                                            data
                                                                ?.dataCurrentCasinos
                                                                ?.name
                                                        }. The Safety Index
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
                                                                {" "}neutral
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
                        </section> */}

                        <HighRankedCasinos />
                        <CheckMoreWhatSuitsYouBest />
                        <SubscribeForm />
                        <BottomInfo/>
                    </div>
                </main>
            </Wraper>
        </>
    )
}
