import { lazy, useEffect } from "react"
import { Default } from "../Dafault"


import { useAdaptiveBehavior } from "../../Layout"
import { SimpleBonusEssentialPrograms } from "../SimpleBonus/SimpleBonusEssentialPrograms"

import { Categories } from "../../components/catogories/Categories"
import { SafestCasinos } from "./SafestCasinos"
import { NewBonus } from "./NewBonus"
import { TopGainersCasinos } from "./TopGainersCasinos"
import { HighestMaxBetBonuses } from "./HighestMaxBetBonuses"
import { LowRiskBonuses } from "./LowRiskBonuses"
import { BestLiveDealerCasinos } from "./BestLiveDealerCasinos"
import { CheckMoreWhatSuitsYouBest } from "../SimpleBonus/CheckMoreWhatSuitsYouBest"
import { LowWagerBonus } from "./LowWagerBonus"
import { VPNFriendlyCasinos } from "./VPNFriendlyCasinos"
import MoreBonusesForYourChoise from "./MoreBonusesForYourChoise"
import { WhatWeArePlayingNow } from "./WhatWeArePlayingNow"
import PopularFree from "./PopularFree"
import { GreatLiveCasinoBonuses } from "./GreatLiveCasinoBonuses"
import { FastestPayoutCasinos } from "./FastestPayoutCasinos"
import { TodaysHot } from "./TodaysHot"


const SubscribeForm = lazy(() => import("../SimpleBonus/SubscribeForm"))
const LowRiskBonusesMobile = lazy(() => import("./LowRiskBonusesMobile"))

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
const SafestCasinosMobile = lazy(() => import("./SafestCasinosMobile"))
const HighrollerCasinoBonuses = lazy(() => import("./HighrollerCasinoBonuses"))

const GetStartedWithPowerfulWelcomeBonusPacks = lazy(
    () => import("./GetStartedWithPowerfulWelcomeBonusPacks")
)

export const Home = () => {
    document.title = "Home"
    //@ts-ignore
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } =
        useAdaptiveBehavior()

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [])

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
                    <TodaysHot/>
                    <FastestPayoutCasinos />
                    <SimpleBonusEssentialPrograms
                        title={"Essential Loyatly Programs"}
                    />

                    <SafestCasinos />
                    <div className="main-gamble__different-casino-bg main-gamble__baner-block">
                        <WhatWeArePlayingNow />
                    </div>
                    <NewBonus />
                    <FastestWithdrawalCasinos />
                    <WeeksFavoiritesBonuses />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <LowWagerBonus isShowSubtitle={false} />
                    </div>

                    <TheBestCasinosYear />

                    <PopularFree />

                    <SafestCasinosMobile />
                    <HighrollerCasinoBonuses />
                    <NewlyOpenedCasinos />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <WhatWeArePlayingNow />
                    </div>

                    <ExploreTheBestCryptoCasinos />
                    <GetStartedWithPowerfulWelcomeBonusPacks />

                    <TopGainersCasinos />

                    <HighestMaxBetBonuses />
                    <LowWagerBonus isShowSubtitle={true} />
                    <VPNFriendlyCasinos />
                    <LowRiskBonuses />
                    <NonStickyBonus />
                    <TopReloadBonuses />
                    <LowRiskBonusesMobile />
                    <div>
                        <GreatLiveCasinoBonuses />{" "}
                    </div>
                    <BestLiveDealerCasinos />
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
