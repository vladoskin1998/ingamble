import harryStyles from "../../assets/img/casino-person/01.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const HarryStyles = () => {
  return (
    <section className="simple-bonus__casino-person simple-bonus__casino-person_desktop casino-person">
    <div className="casino-person__container container">
        <div className="casino-person__body">
            <div className="casino-person__row">
                <div className="casino-person__info info-casino-person">
                    <div className="info-casino-person__img">
                        <LazyLoadImage
                            src={harryStyles}
                            alt="HARRY STYLES"
                        />
                    </div>
                    <div className="info-casino-person__content">
                        <h3 className="info-casino-person__name h3">
                            HARRY STYLES
                        </h3>
                        <div className="info-casino-person__position">
                            Content Maker, Chief
                            Marketing at Lerio
                        </div>
                    </div>
                </div>
                <div className="casino-person__socials">
                    <div className="socials-top-footer__items">
                        <div className="socials-top-footer__item">
                            <a
                                href=""
                                aria-label="Put your description here."
                                target="_blank"
                                className="socials-top-footer__link"
                                rel="noreferrer"
                            >
                                <svg>
                                    <use xlinkHref="#x"></use>
                                </svg>
                            </a>
                        </div>
                        <div className="socials-top-footer__item">
                            <a
                                href=""
                                aria-label="Put your description here."
                                target="_blank"
                                className="socials-top-footer__link"
                                rel="noreferrer"
                            >
                                <svg>
                                    <use xlinkHref="#facebook"></use>
                                </svg>
                            </a>
                        </div>
                        <div className="socials-top-footer__item">
                            <a
                                href=""
                                aria-label="Put your description here."
                                target="_blank"
                                className="socials-top-footer__link"
                                rel="noreferrer"
                            >
                                <svg>
                                    <use xlinkHref="#linkedin"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casino-person__waves">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</section>
  )
}
