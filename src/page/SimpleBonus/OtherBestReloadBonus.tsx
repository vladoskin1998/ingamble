import MainSlider from "../../components/swiper/MainSlider"
import $api from "../../http"
import { useQuery } from "react-query"
import {

    BonusInRankRangeResponse,

} from "../../types"
import { COLORS_TAGS, sanitizeLink } from "../../helper"

import { Link } from "react-router-dom"



const getFilteringBonusList = async () => {
    const response = await $api.get(`bonuses-in-rank-range/`)
    return response.data
}

//@ts-ignore
export const OtherBestReloadBonus = ({ casinoName }: { casinoName?: string }) => {
   

    const { data: BonusDataHigh } = useQuery<BonusInRankRangeResponse[]>(
        ["bonuses-in-rank-range/"],
        () => getFilteringBonusList(),
        {
            keepPreviousData: true,
            staleTime: Infinity,
        }
    )

  

    return (
        <>
           
            <section className="simple-bonus__more-stake more-staket-simple-bonus">
                <div className="more-staket-simple-bonus__container container">
                    <div className="more-staket-simple-bonus__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">
                                        Other Best Bonuses
                                    </h2>
                                </div>
                            </div>
                            <div className="top__column">
                                <Link
                                    rel="nofollow noopener"
                                    to="/all-bonuses"
                                    aria-label="Put your description here."
                                    className="top__btn"
                                >
                                    <span>See All</span>
                                    <span className="top__btn-arrow">
                                        <svg>
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <MainSlider
                        data={BonusDataHigh?.map((b) => ({
                            img: b?.bonus_image || "",
                            raiting: b?.casino_rank,
                            likes: b?.bonus_likes,
                            casinoName: b?.casino_name,
                            bonuseName: b?.bonus_name,
                            imageLink: `/casino/${sanitizeLink(
                                b?.casino_name
                            )}/bonuses/${sanitizeLink(b?.bonus_name)}?queryId=${
                                b?.bonus_id
                            }`,
                            playLink: b.casino_affiliate_link || b.url_casino,
                            casinoLink: `/casino/${sanitizeLink(
                                b?.casino_name
                            )}?queryId=${b?.casino_id}`,
                            bonuseLink:  b?.bonus_type === null ? '' : `/casino/${sanitizeLink(
                                b?.casino_name
                            )}/bonuses/${sanitizeLink(b?.bonus_name)}?queryId=${
                                b?.bonus_id
                            }` ,
                            tags: (
                                <>
                                    {typeof b !== "string"
                                        ? b?.labels.map((l, ct) => (
                                              <div
                                                  className={`tags-casino-card__item ${
                                                      COLORS_TAGS[ct % 4]
                                                  }`}
                                              >
                                                  <span className="tags-casino-card__item-label">
                                                      {typeof l !== "string" &&
                                                      "name" in l
                                                          ? l?.name
                                                          : ""}
                                                  </span>
                                              </div>
                                          ))
                                        : []}
                                </>
                            ),
                        }))}
                    />
                </div>
            </section>

        </>
    )
}
