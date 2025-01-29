
import { useInView } from 'react-intersection-observer'
import MainSlider from '../../components/swiper/MainSlider'

import { COLORS_TAGS, shuffleArray } from '../../helper'
import {  DataHomeItemsBlock, HomeDataBlock } from '../../types'
import { SeeAllButton,  } from './SeeAllButton'
import { useMemo } from 'react'


export default function BlockType8({ data, initialInView = false, isAutoPlay = false }: { data: HomeDataBlock<DataHomeItemsBlock>; initialInView?: boolean; isAutoPlay?: boolean }) {
    const dataCard = useMemo(() => {
        return shuffleArray(data?.items_block.data_cards).slice(0, 8)
    }, [data?.items_block.data_cards])

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView,
    })

    return (
        <section ref={ref} aria-label="BlockTypeNumber.BlockType8" className="main-gamble__low-wager-bonuses low-wager-bonuses-gamble ">
            {inView && (
                <div className="low-wager-bonuses-gamble__container container">
                    <div className="low-wager-bonuses-gamble__top top">
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
                                <SeeAllButton type_category={data.items_block.type_category} slug={data?.items_block?.category?.slug} />
                            </div>
                        </div>
                    </div>
                    <MainSlider
                    isAutoPlay={isAutoPlay}
                        data={dataCard?.slice(0, 8)?.map((item) => ({
                            playLink: item?.casino_info?.casino_affiliate_link || item?.casino_info?.url_casino,
                            img: item.bonus_info.bonus_image,
                            raiting: item.casino_info.casino_rank,
                            likes: item.bonus_info.bonus_likes,
                            casinoName: item.casino_info.casino_name,
                            bonuseName: item.bonus_info.bonus_name,
                            imageLink: `/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`,
                            casinoLink: `/casino/${item?.casino_info?.casino_slug}`,
                            bonuseLink: `/casino/${item?.casino_info?.casino_slug}/bonuses/${item?.bonus_info?.bonus_slug}`,
                            tags: (
                                <>
                                    {item?.bonus_info?.labels?.length ? (
                                        item?.bonus_info?.labels.map((item, cindex) => (
                                            <div key={cindex} className={`tags-casino-card__item ${COLORS_TAGS[cindex % 4]}`}>
                                                <span className="tags-casino-card__item-label">{item}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ),
                        }))}
                    />
                </div>
            )}
        </section>
    )
}
