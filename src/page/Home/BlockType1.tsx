import MainSlider from "../../components/swiper/MainSlider"
import { sanitizeLink, shuffleArray } from "../../helper"
import { BlockTypeNumber, HomeDataBlock } from "../../types"
import { SeeAllButton } from "./SeeAllButton"

export default function BlockType1({
    data,
}: {
    data: HomeDataBlock | undefined
}) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType1)
        return <></>

    // const dataCard = !data.blocks_sequence_number ? shuffleArray(data?.items_block.data_cards) : data?.items_block.data_cards
    // .sort((a, b) => a.order - b.order)
    const dataCard = shuffleArray(data?.items_block.data_cards)
    return (
        <section aria-label="BlockTypeNumber.BlockType1" className="main-gamble__todays-hot todays-hot-gamble">
            <div className="todays-hot-gamble__container container">
                <div className="todays-hot-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon ibg--custom"  style={{width:'auto',height:'35px', paddingBottom:'10px'}}>
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
                                }
                                id={  data?.items_block?.category?.id}
                            />
                        </div>
                    </div>
                </div>
                <MainSlider
                    data={
                        dataCard.map((item) => ({
                            img: item?.bonus_info?.bonus_image,
                            raiting: item?.casino_info?.casino_rank,
                            likes: item?.bonus_info?.bonus_likes,
                            casinoName: item?.casino_info?.casino_name,
                            bonuseName: item?.bonus_info?.bonus_name,
                            playLink: item?.casino_info?.url_casino || item?.casino_info?.casino_affiliate_link ,
                            imageLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`,
                            casinoLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}?queryId=${item?.casino_info?.casino_id}`,
                            bonuseLink: `/casino/${sanitizeLink(item?.casino_info?.casino_name)}/bonuses/${sanitizeLink(item?.bonus_info?.bonus_name)}?queryId=${item?.bonus_info?.bonus_id}`
                        }))}
                />
            </div>
        </section>
    )
}
