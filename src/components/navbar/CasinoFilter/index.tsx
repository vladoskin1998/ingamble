import $api from "../../../http"
import { GetFilterDataType } from "../../../types"
import { useQuery } from "react-query"
import { AccordionItem } from "../../acordion/Acordion"
import "rc-slider/assets/index.css"
import { useFilterContext } from "../../../context/FilterContext"
//@ts-ignore
import { CasinoPlayersFromContent } from "./CasinoPlayersFromContent"
//@ts-ignore
import { ByLicenses } from "./ByLicenses"
import { RangeSlider } from "./RangeSlider"

import { VPNAllowed } from "./VPNAllowed"
import { YesNoDoubleCheckbox } from "./YesNoDoubleCheckbox"
import { ListCheckBox } from "./ListCheckBox"
import { WithdrawalLimits } from "./WithdrawalLimits"
import { MinimumDeposit } from "./MinimumDeposit"

const getHeight = (s: number | undefined) => {
    if (!s) return
    return s * 40 > 240 ? 240 : s * 40
}

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
        <div
            className={`item-form-filters__body custom-item-form-filters__body`}
        >
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
                        // <CasinoPlayersFromContent
                        //     initState={casinoFilters?.selected_countries}
                        //     countries={datasFilterCasino?.countries}
                        //     setLocalCasinoFilters={setCasinoFilters}
                        // />

                        <ListCheckBox
                            initState={casinoFilters.selected_countries}
                            field="selected_countries"
                            placeholder="Search (Country)"
                            list={datasFilterCasino?.countries}
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.countries?.length
                            )}
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
                        <ListCheckBox
                            initState={casinoFilters.licenses}
                            field="licenses"
                            placeholder="Search (License )"
                            list={datasFilterCasino?.licenses}
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.licenses?.length
                            )}
                        />

                        // <ByLicenses
                        //     licenses={datasFilterCasino?.licenses}
                        //     setLocalCasinoFilters={setCasinoFilters}
                        // />
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
                            initState={casinoFilters.vpn_usage}
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
                            initState={casinoFilters.game_providers}
                            field="game_providers"
                            placeholder="Search (Game Providers)"
                            list={datasFilterCasino?.game_providers}
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.game_providers?.length
                            )}
                        />
                    }
                />
            </div>
            <div className="item-form-filters__filter form-filter">
                <AccordionItem
                    // maxHg="260px"
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
                            initState={casinoFilters.game_types}
                            field="game_types"
                            placeholder="Search (Game Types)"
                            list={datasFilterCasino?.game_types}
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.game_types?.length
                            )}
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
                            initState={casinoFilters.games}
                            field="games"
                            placeholder="Search (Game)"
                            list={datasFilterCasino?.games}
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(datasFilterCasino?.games?.length)}
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
                            initState={casinoFilters.tournaments}
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
                            initState={casinoFilters.tournaments}
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
                            initState={casinoFilters.language_website}
                            list={datasFilterCasino?.language}
                            field="language_website"
                            placeholder="Search (Language)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.language?.length
                            )}
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
                            initState={casinoFilters.language_live_chat}
                            list={datasFilterCasino?.language}
                            field="language_live_chat"
                            placeholder="Search (Language)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.language?.length
                            )}
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
                            initState={casinoFilters.payment_methods}
                            list={datasFilterCasino?.payment_methods}
                            field="payment_methods"
                            placeholder="Search (Payment Methods)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.payment_methods?.length
                            )}
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
                            initState={casinoFilters.accepted_currencies}
                            list={datasFilterCasino?.classic_currency}
                            field="accepted_currencies"
                            placeholder="Search (Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.classic_currency?.length
                            )}
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
                            initState={casinoFilters.accepted_currencies}
                            list={datasFilterCasino?.crypto_currencies}
                            field="accepted_currencies"
                            placeholder="Search (Crypto Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.crypto_currencies?.length
                            )}
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
                            initState={casinoFilters.live_chat_competence}
                            list={datasFilterCasino?.live_chat_competence.map(
                                (item) => ({
                                    id: item.value as any,
                                    name: item.value,
                                })
                            )}
                            field="live_chat_competence"
                            placeholder="Search (Crypto Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.live_chat_competence?.length
                            )}
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
                            <span>Responsible Gambling</span>
                            <span className="title-form-filter__count"></span>
                        </h3>
                    }
                    content={
                        <ListCheckBox
                            initState={casinoFilters.casino_owner}
                            list={datasFilterCasino?.responsible_gambling.map(
                                (item) => ({
                                    id: item.value as any,
                                    name: item.value,
                                })
                            )}
                            field="casino_owner"
                            placeholder="Search (Crypto Currencies)"
                            setLocalCasinoFilters={setCasinoFilters}
                            height={getHeight(
                                datasFilterCasino?.responsible_gambling?.length
                            )}
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
                            initState={casinoFilters.withdrawal_limits}
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
                            initState={casinoFilters.min_deposit}
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
                            initState={casinoFilters.payout_speed}
                            height={
                                getHeight(
                                    datasFilterCasino?.payout_speed?.length
                                )
                                // datasFilterCasino?.payout_speed?.length
                                //     ? datasFilterCasino?.payout_speed?.length *
                                //       40
                                //     : 260
                            }
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
                            initState={casinoFilters.min_wager}
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
                            initState={casinoFilters.tournaments}
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
                            initState={casinoFilters.tournaments}
                            field="social_bonus"
                            setLocalCasinoFilters={setCasinoFilters}
                        />
                    }
                />
            </div>
        </div>
    )
}

// export type GetFilterDataType = {
//     live_chat_competence: {
//         value: string,
//         label: string
//     }[],
//     responsible_gambling: {
//         value: string,
//         label: string
//     }[],
//     licenses: {
//         id: number,
//         name: string,
//         image: string | null
//     }[],
//     game_types: {
//         id: number,
//         name: string,
//         image: string | null
//     }[],
//     game_providers: {
//         id: number,
//         name: string,
//         image: string | null
//     }[],
//     classic_currency: { id: number, symbol: string, name: string, name2: string | null, }[],
//     countries: { id: number, name: string, name2: string | null, code: string, image: string | null }[],
//     crypto_currencies: { id: number, symbol: string, name: string, name2: string | null, }[],
//     games: { id: number, name: string }[],
//     language: { id: number, name: string, image: string | null }[],
//     payment_methods: { id: number, name: string, image: string | null }[],
//     payout_speed: { id: number, name: string }[]
// }
