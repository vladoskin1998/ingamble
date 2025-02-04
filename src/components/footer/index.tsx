import logoInGamble from '../../assets/img/logo-ingamble.svg'
import logoDegenCatapult from '../../assets/img/logo-degencatapult.svg'

import logos01 from '../../assets/img/logos/01.svg'
import logos02 from '../../assets/img/logos/02.svg'
import logos03 from '../../assets/img/logos/03.svg'
import logos04 from '../../assets/img/logos/04.svg'
import logos05 from '../../assets/img/logos/05.svg'
import logos06 from '../../assets/img/logos/06.svg'
import logos07 from '../../assets/img/logos/07.svg'
import logos08 from '../../assets/img/logos/08.svg'
import logos09 from '../../assets/img/logos/09.svg'
import logos10 from '../../assets/img/logos/10.svg'
import socialsIcon from '../../assets/img/icons/socials-icon.svg'
import '../../assets/css/footer.css'
import { useEffect } from 'react'
import initializeAdaptiveBehavior from '../../helper/adaprive-bahavior'
import { useInView } from 'react-intersection-observer'
const ViteTitle = import.meta.env.VITE_TITLE

export default function Footer() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        delay: 1000
    })
    
    useEffect(() => {
        if (inView) {
            initializeAdaptiveBehavior()
        }
    }, [inView])

    return (
        <footer className="footer" ref={ref}>
            <div className="footer__top top-footer">
                <div className="top-footer__container container">
                    <nav className="top-footer__menu menu-footer">
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">CASINO BONUSES</span>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    No wagering casino bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Low wagering casino bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Non-sticky bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Birthday bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    High roller bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Cashback bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    No deposit sign up bonuses
                                </a>
                            </li>
                        </ul>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">CRYPTO CASINOS</span>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Bitcoin lightning casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Decentraland casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Stellar casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Tron casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Terra casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Wax casinos
                                </a>
                            </li>
                        </ul>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">CASINOS BY PAYMENT METHOD</span>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Mastercard casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Zimpler casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Revolut casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Astropay casinos
                                </a>
                            </li>
                        </ul>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">ONLINE CASINOS</span>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Pay n Play casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Certified casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    No KYC casinos
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    High roller casinos
                                </a>
                            </li>
                        </ul>
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">LEGAL</span>
                            </li>
                            {/* <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Terms & Conditions
                                </a>
                            </li> */}
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href="https://docs.google.com/document/d/1fXioVQKwHQWs2-6G6vXwiCEChkR1USmhXJpWr5ZPguo/edit?usp=sharing"
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Privacy policy
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href="https://docs.google.com/document/d/1U7xQoHOJVxaPWyO9uHiTIFhuL-Ac8-v_k7eDr9A5iLY/edit?usp=sharing"
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Disclaimer
                                </a>
                            </li>
                            {/* <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Editorial policy
                                </a>
                            </li> */}
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href="https://docs.google.com/document/d/1QUSMNAeiNt-miKW9JGjwoeOHBKjGRPhhfNaqHXFP6Pc/edit?usp=sharing"
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Cookie policy
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href="https://docs.google.com/document/d/1W2y14CpaT6K2OEhKEmMWm50wCc_6BFTUzxK4lhbLkJY/edit?usp=sharing"
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Responsible gambling
                                </a>
                            </li>
                        </ul>
                        {/* <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">
                                    COMPANY
                                </span>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    About us
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Partners
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Media kit
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Sitemap
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Contact us
                                </a>
                            </li>

                            <li className="menu-footer__item">
                                <a
                                    rel="nofollow noopener"
                                    href=""
                                    aria-label="Put your description here."
                                    target="_blank"
                                    className="menu-footer__link"
                                >
                                    Docs
                                </a>
                            </li>
                        </ul> */}
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item menu-footer__item_title">
                                <span className="menu-footer__title">VIP LOYALTY PROGRAM</span>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Most engaging loyalties
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Highest cashback
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Big level up bonuses
                                </a>
                            </li>
                            <li className="menu-footer__item">
                                <a rel="nofollow noopener" href="" aria-label="Put your description here." target="_blank" className="menu-footer__link">
                                    Personal manager included
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="top-footer__socials-block">
                        <a href="" target="_blank" className="footer__logo logo">
                            <div className="logo__img">
                                <img src={ViteTitle.includes('DegenCatapult') ? logoDegenCatapult : logoInGamble} alt="logo" />
                            </div>
                            <div className="logo__text">{import.meta.env.VITE_SUBTITLE_WE_TRUST}</div>
                        </a>
                        <div className="top-footer__socials socials-top-footer">
                            <div className="socials-top-footer__label" data-da="top-footer__socials-block, 1, 1355.98">
                                <div className="socials-top-footer__label-icon">
                                    <img src={socialsIcon} alt="socials-icon" />
                                </div>
                                <div className="socials-top-footer__label-text">
                                    You need help?
                                    <a rel="nofollow noopener" href="https://t.me/CryptoGamblersSupport" aria-label="Put your description here." target="_blank">
                                        <span>Get in touch with us</span>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="socials-top-footer__items">
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Telegram"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#telegram" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="X"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#x" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Discord"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#discord" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="YouTube"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#youtube" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="TikTok"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#tiktok" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Linktree"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#linktree" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Facebook"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Instagram"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#linkedin" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="socials-top-footer__item">
                                    <a
                                        href=""
                                        aria-label="Reddit"
                                        target="_blank"
                                        className="socials-top-footer__link"
                                    >
                                        <svg>
                                            <use xlinkHref="#reddit" />
                                        </svg>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom bottom-footer">
                <div className="bottom-footer__container container">
                    <div className="bottom-footer__body">
                        <div className="bottom-footer__title">PLAY RESPONSIBLY AND IN MODERATION</div>
                        <div className="bottom-footer__logos logos-bottom-footer">
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img src={logos01} alt="logo" loading="lazy" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos02} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos03} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos04} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos05} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos06} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos07} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos08} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos09} alt="logo" />
                                </div>
                            </div>
                            <div className="logos-bottom-footer__column">
                                <div className="logos-bottom-footer__item">
                                    <img loading="lazy" src={logos10} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-footer__text">
                            <p>
                                {import.meta.env.VITE_DOMEN} is an independent online casino review platform not controlled by any gambling operator. All the reviews and guides on our site are written honestly, based on the best knowledge
                                and judgment of our independent expert team. Our reviews and information are intended for informative purposes only and should not be interpreted as, nor relied upon as, legal advice. Before engaging in
                                online gambling, it is essential to be aware of and comply with your local jurisdiction's regulations. {import.meta.env.VITE_DOMEN} holds no responsibility for actions taken by visitors based on the
                                information provided on the site. Accessing and using our site is at your sole discretion and risk.
                            </p>
                        </div>
                        <div className="bottom-footer__copyright">
                            <p>
                                {import.meta.env.VITE_TITLE_FOOTER} © {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
