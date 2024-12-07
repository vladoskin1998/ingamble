

import "swiper/css"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import $api from "../../http"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { GeoLocationAllowdType, GetDataBonusResponse } from "../../types"
import { BonusSubType } from "./BonusSubType"
import { Categories } from "../../components/categories/Categories"
import { LastUpdate } from "./LastUpdate"
import { Wraper } from "../Wraper"
import { useAdaptiveBehavior } from "../../context/AppContext"
import SubscribeForm from "./SubscribeForm"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { HeaderSimpleBonus } from "./HeaderSimpleBonus"
import { HowToGetBonus } from "./HowToGetBonus"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import { HarryStyles } from "./HarryStyles"
import { useSearchParams } from "react-router-dom"
import { HighRankSwiper } from "./HighRankSwiper"
import { useFilterContext } from "../../context/FilterContext"



const getBonusDataFetch = async ({queryId}:{queryId:string | null}) => {
    const response = await $api.get(`get-data-bonus/${queryId}/`)
    const headers = response.headers

    return { dataBonus: response.data, headers }
}

export default function SimpleBonus() {
    document.title = "Simple Bonus"
    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const {data: Country} = useFilterContext()

    const [searchParams] = useSearchParams()
    const queryId = searchParams.get("queryId")

    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: "",
        countryName: "",
        isAllowed: true,
        isLoadedGeo: false,
        countryImg: undefined
    })

    const { data, isLoading } = useQuery<{
        dataBonus: GetDataBonusResponse
        headers: any
    }>(["get-data-bonus", queryId,], () => getBonusDataFetch({queryId}), {
        keepPreviousData: true,
        enabled: !!queryId,
    })

    useEffect(() => {
        if (data?.headers && Country?.general?.countries?.length) {
            const headers = data?.headers
            const countryCode = headers?.["cf-ipcountry-code"]
            const countryName = headers?.["cf-ipcountry"]
            
            const countryImg = Country?.general?.countries?.find(
                it => {
                    
                    return it.code ===  countryCode || it.name.toLocaleLowerCase() === countryName.toLocaleLowerCase() }
            )?.flag_image;
            
  
            const isAllowed = !data.dataBonus?.restriction_country?.country.find(
                (item) =>
                    item?.code?.toLocaleLowerCase() ===
                    countryCode?.toLocaleLowerCase()
            )

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed,
                isLoadedGeo: true,
                 countryImg
            })
        }
        initializeAdaptiveBehavior()

        // const newUrl = `/casino/${data?.dataBonus?.casino_name
        //     .replace(/\s/g, "-")
        //     .toLocaleLowerCase()}/bonuses/${data?.dataBonus?.bonus_type
        //     .replace(/\s/g, "-")
        //     .toLocaleLowerCase()}`f

        // window.history.pushState({}, "", newUrl)
    }, [data, Country])

    console.log(geoLocation);
    

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [geoLocation])

    if (isLoading || !geoLocation.isLoadedGeo) return <LogoLoader />

    return (
        <Wraper>
            <main className="gamble__simple-bonus main-gamble simple-bonus">
                <div className="main-gamble__body">
                    <Categories
                       
                    />

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
                           
                        </>
                    )}
                    <HighRankSwiper />
                    {geoLocation.isAllowed && (
                        <>
                            <HarryStyles />
                            <CheckMoreWhatSuitsYouBest />
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
        </Wraper>
    )
}
