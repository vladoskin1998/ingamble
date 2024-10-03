import { lazy, useEffect } from "react"
import { Default } from "../Dafault"

import { useAdaptiveBehavior } from "../../Layout"

import { Categories } from "../../components/catogories/Categories"
import { BlockType2 } from "./BlockType2"
import { BlockType6 } from "./BlockType6"
import { TopGainersCasinos } from "./TopGainersCasinos"
import { BlockType4 } from "./BlockType4"
import { BlockType7 } from "./BlockType7"
import { BlockType5 } from "./BlockType5"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"
import { LowWagerBonus } from "./LowWagerBonus"
import { VPNFriendlyCasinos } from "./VPNFriendlyCasinos"
import MoreBonusesForYourChoise from "./MoreBonusesForYourChoise"
import { WhatWeArePlayingNow } from "./WhatWeArePlayingNow"
import PopularFree from "./PopularFree"
import { GreatLiveCasinoBonuses } from "./GreatLiveCasinoBonuses"
import { FastestPayoutCasinos } from "./FastestPayoutCasinos"
import { BlockType1 } from "./BlockType1"
import $api from "../../http"
import { useQuery } from "react-query"
import { LogoLoader } from "../../components/loader/LogoLoader"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { BlockType9 } from "./BlockType9"

const SubscribeForm = lazy(() => import("../SimpleBonus/SubscribeForm"))
const BlockType7Mobile = lazy(() => import("./BlockType7Mobile"))

const TopReloadBonuses = lazy(() => import("./TopReloadBonuses"))
const NonStickyBonus = lazy(() => import("./NonStickyBonus"))

const NewlyOpenedCasinos = lazy(() => import("./NewlyOpenedCasinos"))

const ExploreTheBestCryptoCasinos = lazy(
    () => import("./ExploreTheBestCryptoCasinos")
)

const WeeksFavoiritesBonuses = lazy(() => import("./WeeksFavoiritesBonuses"))

const TheBestCasinosYear = lazy(() => import("./TheBestCasinosYear"))

const FastestWithdrawalCasinos = lazy(
    () => import("./FastestWithdrawalCasinos")
)
const BlockType2Mobile = lazy(() => import("./BlockType2Mobile"))
const HighrollerCasinoBonuses = lazy(() => import("./HighrollerCasinoBonuses"))

const GetStartedWithPowerfulWelcomeBonusPacks = lazy(
    () => import("./GetStartedWithPowerfulWelcomeBonusPacks")
)

const getHomeDataFetch = async () => {
    const response = await $api.get("get-data-home-page/")
    const headers = response.headers

    return { dataHome: response.data, headers }
}

export const Home = () => {
    document.title = "Home"
    //@ts-ignore
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } =
        useAdaptiveBehavior()

    const { data, isLoading } = useQuery<{
        dataHome: { data_blocks: HomeDataBlock[] }
        headers: any
    }>("get-data-home-page/ ", getHomeDataFetch, {
        keepPreviousData: true,
    })

    console.log(data)

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    // https://adm.incasinowetrust.com/api/v1/get-data-home-page
    // https://adm.incasinowetrust.com/api/v1/get-data-home-page/

    if (isLoading) return <LogoLoader />
    return (
        <Default>
            <main className="gamble__main main-gamble">
                <div className="main-gamble__body">
                    <Categories
                        category={
                            [
                                { name: "All" },
                                { name: "Hot Events" },
                                { name: "Best Cash Back Casinos" },
                                { name: "Highest RTP Slots" },
                                { name: "No Deposit Bonuses" },
                                { name: "VPN Allowed Casinos" },
                            ] || []
                        }
                    />
                    <BlockType1
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType1
                        )}
                    />
                    <FastestPayoutCasinos />
                    <BlockType9
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType9
                        )}
                    />

                    <BlockType2
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType2
                        )}
                    />
                    <div className="main-gamble__different-casino-bg main-gamble__baner-block">
                        <WhatWeArePlayingNow />
                    </div>
                    <BlockType6   data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType6
                        )}/>
                    <FastestWithdrawalCasinos />
                    <WeeksFavoiritesBonuses />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <LowWagerBonus isShowSubtitle={false} />
                    </div>

                    <TheBestCasinosYear />

                    <PopularFree />

                    <BlockType2Mobile
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType2
                        )}
                    />
                    <HighrollerCasinoBonuses />
                    <NewlyOpenedCasinos />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <WhatWeArePlayingNow />
                    </div>

                    <ExploreTheBestCryptoCasinos />
                    <GetStartedWithPowerfulWelcomeBonusPacks />

                    <TopGainersCasinos />

                    <BlockType4    data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType4
                        )}/>
                    <LowWagerBonus isShowSubtitle={true} />
                    <VPNFriendlyCasinos />
                    <BlockType7 data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType7
                        )}/>
                    <NonStickyBonus />
                    <TopReloadBonuses />
                    <BlockType7Mobile  data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType7
                        )}/>
                    <div>
                        <GreatLiveCasinoBonuses />
                    </div>
                    <BlockType5 data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType5
                        )}/>
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
        </Default>
    )
}
