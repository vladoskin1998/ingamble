import MainSlider from "../../components/swiper/MainSlider"
import { BlockTypeNumber, HomeDataBlock } from "../../types"

export const BlockType1 = ({ data }: { data: HomeDataBlock | undefined }) => {
    if(!data || data.items_block.type_block !== BlockTypeNumber.BlockType1) return <></>
    return (
        <section className="main-gamble__todays-hot todays-hot-gamble">
            <div className="todays-hot-gamble__container container">
                <div className="todays-hot-gamble__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                {
                                    data?.items_block.title_image && <span className="top__title-icon">
                                    <img src={data?.items_block.title_image || ''} alt="Today’s Hot" />
                                </span>
                                }
                                
                                <h2 className="top__title">
                                    {data?.items_block.block_title}
                                </h2>
                            </div>
                        </div>
                        <div className="top__column">
                            <a
                                href="/see-all?key=22145678"
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
                    data={data?.items_block.data_cards.filter(item => item.casino_info.casino_image).map((item) => ({
                        img: item?.casino_info?.casino_image,
                        raiting: item?.casino_info?.casino_rank,
                        likes: item?.bonus_info?.bonus_likes,
                        nameCasino: item?.casino_info?.casino_name,
                        comment: item?.bonus_info?.bonus_name,
                        link: item?.casino_info?.casino_affiliate_link,
                    }))}
                />
            </div>
        </section>
    )
}
