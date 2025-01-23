import MainSlider from '../../components/swiper/MainSlider'
import { initialBonusFilters, useFilterContext } from '../../context/FilterContext'
import { shuffleArray } from '../../helper'
import {  DataHomeItemsBlock, DataHomeItemsBlockTypeCategory, FooCategorySanitazeLinkType, HomeDataBlock } from '../../types'
import { SeeAllButton, SeeAllRoutes } from './SeeAllButton'

export default function BlockType1({ data }: { data: HomeDataBlock<DataHomeItemsBlock> }) {
    const { setBonusFilters } = useFilterContext()
    const fooCategorySanitazeLink = ({ type_category, slug, name }: { type_category: DataHomeItemsBlockTypeCategory; slug: string; name: string }): FooCategorySanitazeLinkType => {
        if (name === 'Non-Sticky Bonuses') {
            return {
                seeAllLink: '/filter-bonus',
                seeAllFoo: () => {
                    setBonusFilters({ ...initialBonusFilters, sticky: false })
                },
            }
        }
        return { seeAllLink: `/all-${SeeAllRoutes[type_category]}${slug ? `/${slug}` : ''}`, seeAllFoo: () => {} }
    }

    const { seeAllLink, seeAllFoo } = fooCategorySanitazeLink({
        name: data?.items_block?.category?.name,
        type_category: data.items_block.type_category,
        slug: data?.items_block?.category?.slug || '',
    })

    const dataCard = shuffleArray(data?.items_block.data_cards).slice(0, 8)
    return (
        <section aria-label="BlockTypeNumber.BlockType1" className="main-gamble__todays-hot todays-hot-gamble">
            <div className="todays-hot-gamble__container container">
                <div className="todays-hot-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {data.items_block.title_image && (
                                    <span className="top__title-icon ibg--custom ibg--custom-width-auto">
                                        <img src={data.items_block.title_image} alt="security" />
                                    </span>
                                )}
                                <h2 className="top__title">{data.items_block.block_title}</h2>
                            </div>
                            {data.items_block.subtitle && <div className="top__subtitle">{data.items_block.subtitle}</div>}
                        </div>
                        <div className="top__column">
                            <SeeAllButton seeAllLink={seeAllLink} seeAllFoo={seeAllFoo} />
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
