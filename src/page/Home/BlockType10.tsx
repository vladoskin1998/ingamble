import star from '../../assets/img/icons/star.svg'
import girl2 from '../../assets/img/girls/02.png'
import bg03 from '../../assets/img/bg/03.jpg'
import bg01 from '../../assets/img/bg/01.webp'
import bg04 from '../../assets/img/bg/04.jpg'
import bg02 from '../../assets/img/bg/02.jpg'
import bg05 from '../../assets/img/bg/05.jpg'
import bg06 from '../../assets/img/bg/06.jpg'
import { BlockTypeNumber, HomeDataBlock } from '../../types'
import { SeeAllButton } from './SeeAllButton'

const fullYear = new Date().getFullYear()
export default function BlockType10 ({ data }: { data: HomeDataBlock | undefined }) {

    if (!data || data.items_block.type_block !== BlockTypeNumber.BlockType10) return <></>
    return (
        <>
            <div className="main-gamble__best-casinos-2024 best-casinos-2024-gamble">
                <div className="best-casinos-2024-gamble__container container">
                    <div className="best-casinos-2024-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">The Best Casinos of {fullYear}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="best-casinos-2024-gamble__body">
                        <div className="best-casinos-2024-gamble__bg ibg--custom">
                            <img src={bg01} alt="bg" loading="lazy" />
                        </div>
                        <div className="best-casinos-2024-gamble__waves">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="best-casinos-2024-gamble__girl">
                            <img src={girl2} alt="girl" />
                        </div>
                        <div className="best-casinos-2024-gamble__slider slider-best-casinos-2024-gamble">
                           <div className="low-wager-bonuses-gamble__top top">
                                              <div className="top__row">
                                                  <div className="top__column">
                                                      <div className="top__title-block">
                                                          {data.items_block.title_image && (
                                                              <span className="top__title-icon">
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
                            <div className="slider-best-casinos-2024-gamble__body">
                                <div className="slider-best-casinos-2024-gamble__swiper swiper">
                                    <div className="slider-best-casinos-2024-gamble__wrapper swiper-wrapper">
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/30bet.png" alt="30Bet" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        30Bet
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/playamo.png" alt="Playamo" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        Playamo
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/bc-game.png" alt="BC.Game" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        BC.Game
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/fairspin.png" alt="Fairspin" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        Fairspin
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/vavada.png" alt="Vavada" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        Vavada
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/casino-vibes.png" alt="CasinoVibes" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        CasinoVibes
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/lucky-block.png" alt="Lucky Block" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        Lucky Block
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/playamo.png" alt="Playamo" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        Playamo
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider-best-casinos-2024-gamble__slide slide-slider-best-casinos-2024-gamble swiper-slide">
                                            <div className="slide-slider-best-casinos-2024-gamble__item different-casino-medium">
                                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__image-block">
                                                    <span className="different-casino-medium__image ibg">
                                                        <img src="img/different-casino/30bet.png" alt="30Bet" />
                                                    </span>
                                                </a>
                                                <div className="different-casino-medium__content">
                                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-medium__name">
                                                        30Bet
                                                    </a>
                                                    <div className="different-casino-medium__rating">
                                                        <span className="different-casino-medium__rating-icon">
                                                            <img src={star} alt="star" />
                                                        </span>
                                                        <span className="different-casino-medium__rationg-number">5.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-gamble__best-casinos-2024-2 best-casinos-2024-2-gamble">
                <div className="best-casinos-2024-2-gamble__container container">
                    <div className="best-casinos-2024-2-gamble__top top">
                        <div className="top__row">
                            <div className="top__column">
                                <div className="top__title-block">
                                    <h2 className="top__title">The Best Casinos of 2024</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="best-casinos-2024-2-gamble__row">
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_small">
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg03} alt="bg" />
                                </div>
                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg">
                                        <img src="img/different-casino/30bet.png" alt="30bet" />
                                    </span>
                                </a>
                                <div className="different-casino-big__content">
                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__name">
                                        30 Bet Casino
                                    </a>
                                    <div className="different-casino-big__info">
                                        <span className="different-casino-big__info-link">Sportsbook</span>
                                        <span className="different-casino-big__info-link">VPN Friendly</span>
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number">5.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg04} alt="bg" />
                                </div>
                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg">
                                        <img src="img/different-casino/playamo.png" alt="Playamo" />
                                    </span>
                                </a>
                                <div className="different-casino-big__content">
                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__name">
                                        Playamo
                                    </a>
                                    <div className="different-casino-big__info">
                                        <span className="different-casino-big__info-link">Sportsbook</span>
                                        <span className="different-casino-big__info-link">VPN Friendly</span>
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number">5.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_big">
                            <div className="best-casinos-2024-2-gamble__bg ibg--custom">
                                <img src={bg02} alt="bg" />
                            </div>
                            <div className="best-casinos-2024-2-gamble__waves">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="best-casinos-2024-2-gamble__girl">
                                <img src={girl2} alt="girl" />
                            </div>
                            <div className="best-casinos-2024-2-gamble__content">
                                <div className="best-casinos-2024-2-gamble__text">
                                    <span>The Best</span>
                                    Casinos of 2024
                                </div>
                                <a href="" aria-label="Put your description here." target="_blank" className="best-casinos-2024-2-gamble__btn">
                                    See All
                                </a>
                            </div>
                        </div>
                        <div className="best-casinos-2024-2-gamble__column best-casinos-2024-2-gamble__column_small">
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg05} alt="bg" />
                                </div>
                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg">
                                        <img src="img/different-casino/casino-vibes.png" alt="Casino Vibes" />
                                    </span>
                                </a>
                                <div className="different-casino-big__content">
                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__name">
                                        Casino Vibes
                                    </a>
                                    <div className="different-casino-big__info">
                                        <span className="different-casino-big__info-link">Sportsbook</span>
                                        <span className="different-casino-big__info-link">VPN Friendly</span>
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number">5.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="best-casinos-2024-2-gamble__item different-casino-big">
                                <div className="different-casino-big__bg ibg--custom">
                                    <img src={bg06} alt="bg" />
                                </div>
                                <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__image-block">
                                    <span className="different-casino-big__image ibg">
                                        <img src="img/different-casino/vavada.png" alt="Vavada" />
                                    </span>
                                </a>
                                <div className="different-casino-big__content">
                                    <a href="" aria-label="Put your description here." target="_blank" className="different-casino-big__name">
                                        Vavada
                                    </a>
                                    <div className="different-casino-big__info">
                                        <span className="different-casino-big__info-link">Sportsbook</span>
                                        <span className="different-casino-big__info-link">VPN Friendly</span>
                                    </div>
                                    <div className="different-casino-big__rating">
                                        <span className="different-casino-big__rating-icon">
                                            <img src={star} alt="star" />
                                        </span>
                                        <span className="different-casino-big__rating-number">5.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
