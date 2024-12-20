import MainSlider from "../../components/swiper/MainSlider"
import { COLORS_TAGS, sanitizeLink } from "../../helper"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { SeeAllButton } from "./SeeAllButton"

export default function BlockType8({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType8)
        return <></>
    return (
        <section  aria-label="BlockTypeNumber.BlockType8" className="main-gamble__low-wager-bonuses low-wager-bonuses-gamble ">
            <div className="low-wager-bonuses-gamble__container container">
                <div className="low-wager-bonuses-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon">
                                        <img
                                            src={data.items_block.title_image}
                                            alt="security"
                                        />
                                    </span>
                                )}
                                <h2 className="top__title">
                                    {data.items_block.block_title}
                                </h2>
                            </div>
                            {data.items_block.subtitle && (
                                <div className="top__subtitle">
                                    {data.items_block.subtitle}
                                </div>
                            )}
                        </div>
                        <div className="top__column">
                            <SeeAllButton
                                type_category={data.items_block.type_category}
                                parameter={
                                    data?.items_block?.category?.name || ""
                                } id={  data?.items_block?.category?.id}
                            />
                        </div>
                    </div>
                </div>
                <MainSlider
                    data={data.items_block.data_cards
                        .sort((a, b) => a.order - b.order)
                        .map((item) => ({
                            playLink: item?.casino_info?.casino_affiliate_link ||
                            item?.casino_info
                            ?.url_casino,
                            img: item.bonus_info.bonus_image,
                            raiting: item.casino_info.casino_rank,
                            likes: item.bonus_info.bonus_likes,
                            casinoName: item.casino_info.casino_name,
                            bonuseName: item.bonus_info.bonus_name,
                            imageLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`,
                            casinoLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`,
                            bonuseLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`,
                            tags: (
                                <>
                                    {item?.bonus_info?.labels?.length ? (
                                        item?.bonus_info?.labels.map(
                                            (item, index) => (
                                                <div
                                                    className={`tags-casino-card__item ${
                                                        COLORS_TAGS[index % 4]
                                                    }`}
                                                >
                                                    <span className="tags-casino-card__item-label">
                                                        {item}
                                                    </span>
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ),
                        }))}
                />
            </div>
        </section>
    )
}
