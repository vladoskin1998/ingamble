import MainSlider from '../../components/swiper/MainSlider'
import { shuffleArray } from '../../helper'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { SeeAllButton } from './SeeAllButton'

export default function BlockType1({ data }: { data: HomeDataBlock | undefined }) {
    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType1) return <></>

    // const dataCard = !data.blocks_sequence_number ? shuffleArray(data?.items_block.data_cards) : data?.items_block.data_cards
    // .sort((a, b) => a.order - b.order)
    const dataCard = shuffleArray(data?.items_block.data_cards).slice(0, 8)
    return (
        <section aria-label="BlockTypeNumber.BlockType1" className="main-gamble__todays-hot todays-hot-gamble">
            <div className="todays-hot-gamble__container container">
                <div className="todays-hot-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon ibg--custom ">
                                        <img src={data.items_block.title_image} alt="security" />
                                    </span>
                                )}
                                <h2 className="top__title">{data.items_block.block_title}</h2>
                            </div>
                            {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                        </div>
                        <div className="top__column">
                            <SeeAllButton type_category={data?.items_block?.type_category} slug={data?.items_block?.category?.slug || ''} />
                        </div>
                    </div>
                </div>
                <MainSlider
                    data={dataCard.map((item) => ({
                        img: item?.bonus_info?.bonus_image,
                        raiting: item?.casino_info?.casino_rank,
                        likes: item?.bonus_info?.bonus_likes,
                        casinoName: item?.casino_info?.casino_name,
                        bonuseName: item?.bonus_info?.bonus_name,
                        playLink: item?.casino_info?.casino_affiliate_link || item?.casino_info?.url_casino,
                        imageLink: `/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`,
                        casinoLink: `/casino/${item?.casino_info?.casino_slug}`,
                        bonuseLink: `/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`,
                    }))}
                />
            </div>
        </section>
    )
}
