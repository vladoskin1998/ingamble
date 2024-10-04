import MainSlider from "../../components/swiper/MainSlider"
import { BlockTypeNumber, HomeDataBlock } from "../../types"

const colors_tags = [
    "tags-casino-card__item_blue",
    "tags-casino-card__item_green",
    "tags-casino-card__item_purple",
    "tags-casino-card__item_grass",
]

export const BlockType8 = ({ data }: { data: HomeDataBlock | undefined }) => {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType8)
        return <></>
    return (
        <section className="main-gamble__low-wager-bonuses low-wager-bonuses-gamble ">
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
                            <a
                                href="/see-all?key=22345678"
                                aria-label="Put your description here."
                                target="_blank"
                                className="top__btn"
                            >
                                <span>See All</span>
                                <span className="top__btn-arrow">
                                    <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <MainSlider
                    data={data.items_block.data_cards
                        .sort((a, b) => a.order - b.order)
                        .map((item) => ({
                            link: item.casino_info.casino_affiliate_link,
                            img: item.casino_info.casino_image,
                            raiting: item.casino_info.casino_rank,
                            likes: item.bonus_info.bonus_likes,
                            nameCasino: item.casino_info.casino_name,
                            comment: item.bonus_info.bonus_name,
                            tags: (
                                <>
                                    {item?.bonus_info?.labels?.length ? (
                                        item?.bonus_info?.labels.map(
                                            (item, index) => (
                                                <div
                                                    className={`tags-casino-card__item ${
                                                        colors_tags[index % 4]
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
