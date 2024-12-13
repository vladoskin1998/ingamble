import { lazy, useEffect } from "react"
import { Wraper } from "../Wraper"

import { useAdaptiveBehavior } from "../../context/AppContext"

import { Categories } from "../../components/categories/Categories"

import BlockType1 from "./BlockType1"

// const BlockType2 = lazy(() => import("./BlockType2"))
import BlockType2Mobile from "./BlockType2Mobile"

// const BlockType3 = lazy(() => import("./BlockType3"))
import BlockType3Mobile from "./BlockType3Mobile"

// const BlockType4 = lazy(() => import("./BlockType4"))
import BlockType4Mobile from "./BlockType4Mobile"

// const BlockType5 = lazy(() => import("./BlockType5"))
import BlockType5Mobile from "./BlockType5Mobile"

import BlockType6 from "./BlockType6"

// const BlockType7 = lazy(() => import("./BlockType7"))
import BlockType7Mobile from "./BlockType7Mobile"

import BlockType9 from "./BlockType9"
import BlockType8 from "./BlockType8"

import MoreBonusesForYourChoise from "./MoreBonusesForYourChoise"
import $api from "../../http"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import {

    BlockTypeNumber,
    HomeDataBlock,
    HomeDataBlockMobile,
} from "../../types"

import { CheckMoreWhatSuitsYouBest } from "../../components/categories/CheckMoreWhatSuitsYouBest"
import BlockType2 from "./BlockType2"
import BlockType3 from "./BlockType3"
import BlockType4 from "./BlockType4"
import BlockType7 from "./BlockType7"
import BlockType5 from "./BlockType5"
import BlockMType2M from "./BlockMType2M"
import BlockMType3M from "./BlockMType3M"

const SubscribeForm = lazy(() => import("../SimpleBonus/SubscribeForm"))
// const BlockType7Mobile = lazy(() => import("./BlockType7Mobile"))
// const TopReloadBonuses = lazy(() => import("./TopReloadBonuses"))
// const NonStickyBonus = lazy(() => import("./NonStickyBonus"))
// const NewlyOpenedCasinos = lazy(() => import("./NewlyOpenedCasinos"))
// const ExploreTheBestCryptoCasinos = lazy(
//     () => import("./ExploreTheBestCryptoCasinos")
// )
// const WeeksFavoiritesBonuses = lazy(() => import("./WeeksFavoiritesBonuses"))
// const TheBestCasinosYear = lazy(() => import("./TheBestCasinosYear"))
// const FastestWithdrawalCasinos = lazy(
//     () => import("./FastestWithdrawalCasinos")
// )
// const HighrollerCasinoBonuses = lazy(() => import("./HighrollerCasinoBonuses"))
// const GetStartedWithPowerfulWelcomeBonusPacks = lazy(
//     () => import("./GetStartedWithPowerfulWelcomeBonusPacks")
// )


const getHomeDataFetch = async () => {
    const response = await $api.get("get-data-home-page/")
    const headers = response.headers

    return {
        dataHome: response?.data?.data_blocks?.sort(
            (a: any, b: any) =>
                a?.blocks_sequence_number - b?.blocks_sequence_number
        ),
        dataHomeMobile: response?.data?.data_blocks_m?.sort(
            (a: any, b: any) =>
                a?.blocks_sequence_number - b?.blocks_sequence_number
        ),
        headers,
    }
}



const renderBlock = (block: any) => {
   

    switch (block.items_block.type_block) {
        case BlockTypeNumber.BlockType1:
            return <BlockType1 data={block} />
        case BlockTypeNumber.BlockType9:
            return <BlockType9 data={block} />
        case BlockTypeNumber.BlockType6:
            return <BlockType6 data={block} />
        case BlockTypeNumber.BlockType8:
            return <BlockType8 data={block} />
        case BlockTypeNumber.BlockType2:
            return (
                <>
                    <BlockType2 data={block} />
                    <BlockType2Mobile data={block} />
                </>
            )

        case BlockTypeNumber.BlockType3:
            return (
                <>
                    <BlockType3 data={block} />
                    <BlockType3Mobile data={block} />
                </>
            )
        case BlockTypeNumber.BlockType4:
            return (
                <>
                    <BlockType4 data={block} />
                    <BlockType4Mobile data={block} />
                </>
            )
        case BlockTypeNumber.BlockType7:
            return (
                <>
                    <BlockType7 data={block} />
                    <BlockType7Mobile data={block} />
                </>
            )
        case BlockTypeNumber.BlockType5:
            return (
                <>
                    <BlockType5 data={block} />
                    <BlockType5Mobile data={block} />
                </>
            )

        case BlockTypeNumber.BlockType2M:
            return <BlockMType2M data={block} />
        case BlockTypeNumber.BlockType3M:
            return <BlockMType3M data={block} />
        default:
            return null
    }
}

export default function Home ()  {
    document.title = "Home"
    //@ts-ignore
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } =
        useAdaptiveBehavior()

    const { data, isLoading } = useQuery<{
        dataHome: { data_blocks: HomeDataBlock[] }[]
        dataHomeMobile: { data_blocks_m: HomeDataBlockMobile[] }[]
        headers: any
    }>("get-data-home-page/ ", getHomeDataFetch, {
        keepPreviousData: true,
        staleTime: Infinity,
    })

  

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading ) return <LogoLoader />
    return (
        <Wraper>
            <main className="gamble__main main-gamble">
                <div className="main-gamble__body">
                    <Categories  />
                    <div className="home--main--pc">
                    {data?.dataHome?.map((block) => renderBlock(block))}
                    </div>
                    <div className="home--main--mob">
                    {data?.dataHomeMobile?.map((block) => renderBlock(block))}

                    </div>
               
                    {/* <FastestPayoutCasinos /> */}

                    {/* <div className="main-gamble__different-casino-bg main-gamble__baner-block">
                        <WhatWeArePlayingNow />
                    </div> */}

                    {/* <FastestWithdrawalCasinos />
                    <WeeksFavoiritesBonuses /> */}

                    {/* <TheBestCasinosYear /> */}

                    {/* <PopularFree /> */}

                    {/* <HighrollerCasinoBonuses />
                    <NewlyOpenedCasinos />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <WhatWeArePlayingNow />
                    </div> */}

                    {/* <ExploreTheBestCryptoCasinos />
                    <GetStartedWithPowerfulWelcomeBonusPacks /> */}

                    {/* <VPNFriendlyCasinos /> */}
                    {/* <NonStickyBonus />
                    <TopReloadBonuses /> */}
                    {/* <BlockType7Mobile
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType7
                        )}
                    /> */}

                    {/* <GreatLiveCasinoBonuses /> */}

                    <MoreBonusesForYourChoise />
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
