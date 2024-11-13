import $api from "../../../http"
import {  GetFilterDataType } from "../../../types"
import { useQuery } from "react-query"
import { AccordionItem } from "../../acordion/Acordion"
import "rc-slider/assets/index.css"
import {  useFilterContext } from "../../../context/FilterContext"

import { CasinoPlayersFromContent } from "./CasinoPlayersFromContent"
import { RangeSlider } from "./RangeSlider"
import { ByLicenses } from "./ByLicenses"
import { VPNAllowed } from "./VPNAllowed"
import { YesNoDoubleCheckbox } from "./YesNoDoubleCheckbox"
import { ListCheckBox } from "./ListCheckBox"
import { WithdrawalLimits } from "./WithdrawalLimits"
import { MinimumDeposit } from "./MinimumDeposit"

const getDatasFilterCasino = async () => {
    const response = await $api.get("get-datas-filter-casino/")
    return response.data
}

export const CasinoFilterContent = () => {
    //@ts-ignore
    const { data: datasFilterCasino, isLoading: isLoadingDatasFilterCasino } =
        useQuery<GetFilterDataType>(
            "get-datas-filter-casino/",
            getDatasFilterCasino,
            {
                staleTime: Infinity,
            }
        )
    //@ts-ignore
    const { casinoFilters, setCasinoFilters } = useFilterContext()

    // const [localCasinoFilters, setLocalCasinoFilters] =
    //     useState<CasinoFilterBodyType>(casinoFilters)

    return (
        <div className={`item-form-filters__body`} >
            {/* <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "600px",
                    height: "100vh",
                    background: "white",
                    zIndex: 9999,
                }}
            >
                {JSON.stringify(casinoFilters).replace(/,/g, "\n")}
            </div> */}
            <div className="item-form-filters__filter form-filter">
                <AccordionItem
                    heading={
                        <h3 className="form-filter__title title-form-filter accordion--title--element">
                            <span className="title-form-filter__icon">
                                <svg>
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </span>
                            <span>Casinos Rank</span>
                            <span className="title-form-filter__count">1</span>
                        </h3>
                    }
                    content={
                        <RangeSlider
                            initState={casinoFilters.casino_rank}
                            field="casino_rank"
                            minmax={[0, 10]}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Casinos Likes</span>
                            <span className="title-form-filter__count">1</span>
                        </h3>
                    }
                    content={
                        <RangeSlider
                            initState={casinoFilters.casino_likes}
                            field="casino_likes"
                            minmax={[0, 10000]}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Casinos Players From</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <CasinoPlayersFromContent
                            countries={datasFilterCasino?.countries}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>By year of Established</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <RangeSlider
                        initState={casinoFilters.established}
                            field="established"
                            minmax={[
                                new Date().getFullYear() - 10,
                                new Date().getFullYear(),
                            ]}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>By Licenses</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ByLicenses
                            licenses={datasFilterCasino?.licenses}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>VPN Allowed</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <VPNAllowed
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Providers</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            field="game_providers"
                            placeholder="Search (Game Providers)"
                            list={datasFilterCasino?.game_providers}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Game Types</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            field="game_types"
                            placeholder="Search (Game Types)"
                            list={datasFilterCasino?.game_types}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Games</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            field="games"
                            placeholder="Search (Game)"
                            list={datasFilterCasino?.games}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Tournaments</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <YesNoDoubleCheckbox
                            field="tournaments"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Sportsbook</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <YesNoDoubleCheckbox
                            field="sportsbook"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Language (Website)</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.language}
                            field="language_website"
                            placeholder="Search (Language)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Language (Live chat)</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.language}
                            field="language_live_chat"
                            placeholder="Search (Language)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Payment Methods</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.payment_methods}
                            field="payment_methods"
                            placeholder="Search (Payment Methods)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Currencies</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.classic_currency}
                            field="accepted_currencies"
                            placeholder="Search (Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Crypto Currencies</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.crypto_currencies}
                            field="accepted_currencies"
                            placeholder="Search (Crypto Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Live Chat Competence</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            list={datasFilterCasino?.live_chat_competence.map(item => ({id: item.value as any, name: item.value}))}
                            field="accepted_currencies"
                            placeholder="Search (Crypto Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Withdrawal Limits</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <WithdrawalLimits
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Minimum Deposit</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <MinimumDeposit
                            label="Minimum Deposit"
                            field="min_deposit"
                            max={1000000}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Payout Speed</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            height={datasFilterCasino?.payout_speed?.length ? datasFilterCasino?.payout_speed?.length*40 : 260}
                            list={datasFilterCasino?.payout_speed}
                            field="payout_speed"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Minimum Wagering</span>
                            <span className="title-form-filter__count">1</span>
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
                        <MinimumDeposit
                            label="Minimum Wagering"
                            field="min_wager"
                            max={1000000}
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Bonus Hunt w. Active Bonus</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <YesNoDoubleCheckbox
                            field="bonus_hunt_with_active_bonus"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
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
                            <span>Casinos w. Social Bonuses</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <YesNoDoubleCheckbox
                            field="social_bonus"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
                    }
                />
            </div>
        </div>
    )
}
