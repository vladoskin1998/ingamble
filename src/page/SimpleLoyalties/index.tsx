import { Wraper } from "../Wraper"
import { Categories } from "../../components/categories/Categories"
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb"
import { LoyaltieCasinoInfo } from "./LoyaltieCasinoInfo"
import { LoyaltyRewnew } from "./LoyaltyRewnew"
import { LoyaltyText } from "./LoyaltyText"
import { HowToStartVipJorney } from "./HowToStartVipJorney"
import { HarryStyles } from "../SimpleBonus/HarryStyles"
import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import SubscribeForm from "../SimpleBonus/SubscribeForm"
import { LoyaltyAcordeon } from "./LoyaltyAcordeon"
import $api from "../../http"
import { useAdaptiveBehavior } from "../../context/AppContext"
import { useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import { GeoLocationAllowdType, LoyaltieProgramDataResponse } from "../../types"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { useEffect, useState } from "react"
import { HighRankSwiper } from "../SimpleBonus/HighRankSwiper"
import { useFilterContext } from "../../context/FilterContext"
import { SiblingBonus } from "../SimpleBonus/SiblingBonus"

const getCurrentLoyaltiesFetchData = async (queryId: string) => {
    const response = await $api.get(`get-data-loyalty-program/${queryId}/`)

    const headers = response.headers

    return { dataCurrentLoyaltie: response.data, headers }
}

export default function SimpleLoyalties() {
    document.title = " Loyaltie"
    const [queryId, setQueryId] = useState<string>('')
    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: "",
        countryName: "",
        isAllowed: true,
        isLoadedGeo: false,
        countryImg: undefined,
    })

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    const [searchParams] = useSearchParams()
    const qid = searchParams.get("queryId")

    

    console.log("queryId", queryId, qid);

   
    const { data: Country } = useFilterContext()
    const { data, isLoading } = useQuery<{
        dataCurrentLoyaltie: LoyaltieProgramDataResponse
        headers: any
    }>(
        ["get-data-casino", queryId],
        () => getCurrentLoyaltiesFetchData(queryId!),
        {
            keepPreviousData: true,
            enabled: !!queryId,
        }
    )

    useEffect(() => {
        if(qid){
            setQueryId(qid)
            window.scrollTo(0, 0);
        }
        
    }, [qid])
    

    useEffect(() => {
        if (data?.headers && Country?.general?.countries?.length) {
            const countryCode = data?.headers?.["cf-ipcountry-code"]
            const countryName = data?.headers?.["cf-ipcountry"]

            const countryImg = Country?.general?.countries?.find((it) => {
                return (
                    it.code === countryCode ||
                    it.name.toLocaleLowerCase() ===
                        countryName.toLocaleLowerCase()
                )
            })?.flag_image

            const isAllowed = true

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
    }, [Country])

    useEffect(() => {
    
            initializeAdaptiveBehavior()
       
      
    }, [isLoading])

    // if (isLoading || !geoLocation.isLoadedGeo) return <LogoLoader />
    if (isLoading ) return <LogoLoader />
    return (
        <Wraper>
            <main className="gamble__loyaltie main-gamble loyaltie" >
                <div className="main-gamble__body">
                    <Categories />
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
                                name: "Casino Name",
                                link: "https://cryptogamblers.pro/casino/iwild-casino",
                            },
                            {
                                name: "Bonuses",
                                link: "https://cryptogamblers.pro/casino/iwild-casino/bonuses",
                            },
                            {
                                name: "Bonus Type",
                                link: "#",
                            },
                        ]}
                    />
                    <LoyaltieCasinoInfo
                        data={data?.dataCurrentLoyaltie}
                        geoLocation={geoLocation}
                    />
                    {data?.dataCurrentLoyaltie?.loyalty_keypoint.length && (
                        <LoyaltyRewnew
                            loyalty_subtype={
                                data?.dataCurrentLoyaltie.loyalty_keypoint
                            }
                        />
                    )}
                    
                     
                        <LoyaltyAcordeon data={data?.dataCurrentLoyaltie} /> 
                     
                    
                  
                    <LoyaltyText data={data?.dataCurrentLoyaltie} />
                    <HowToStartVipJorney
                        casino_affiliate_link={
                            data?.dataCurrentLoyaltie?.casino_affiliate_link ||
                            data?.dataCurrentLoyaltie.url_casino
                        }
                        casino_name={data?.dataCurrentLoyaltie?.casino_name}
                        likes={data?.dataCurrentLoyaltie?.likes}
                        queryId={data?.dataCurrentLoyaltie?.casino_id}
                        link_tc={data?.dataCurrentLoyaltie?.link_tc || ""}
                    />
                    <SiblingBonus
                        casinoName={data?.dataCurrentLoyaltie?.casino_name}
                        sibling_bonuses={
                            data?.dataCurrentLoyaltie.sibling_bonuses
                        }
                        casino_rank={data?.dataCurrentLoyaltie?.casino_rank}
                        casino_affiliate_link={
                            data?.dataCurrentLoyaltie.casino_affiliate_link ||
                            data?.dataCurrentLoyaltie?.url_casino
                        }
                        casino_id={data?.dataCurrentLoyaltie?.casino_id}
                    />
                    <HighRankSwiper
                        casinoName={
                            data?.dataCurrentLoyaltie?.casino_name || ""
                        }
                    />
                    <HarryStyles />
                    <CheckMoreWhatSuitsYouBest />
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
