import logo from "../../assets/img/logo.svg"
import latviaFlag from "../../assets/img/icons/latvia-flag.svg"
import english from "../../assets/img/flags/english.svg"
import ukraine from "../../assets/img/flags/ukraine.svg"
import russian from "../../assets/img/flags/russian.svg"
import bulgarian from "../../assets/img/flags/bulgarian.svg"
import spanish from "../../assets/img/flags/spanish.svg"
import german from "../../assets/img/flags/german.svg"
import french from "../../assets/img/flags/french.svg"
import italian from "../../assets/img/flags/italian.svg"
import slovak from "../../assets/img/flags/slovak.svg"
import { useEffect, useRef, useState } from "react"
import logoIcon from "../../assets/img/logo-icon.svg"
import { useFilterContext } from "../../context/FilterContext"
import { Link, useNavigate } from "react-router-dom"
type Language = {
    code: string
    name: string
    flag: string
}

export const LANGUAGES_WEBSITE: Language[] = [
    { code: "en", name: "English", flag: english },
    { code: "lv", name: "Latvian", flag: latviaFlag },
    { code: "uk", name: "Ukrainian", flag: ukraine },
    { code: "bg", name: "Bulgarian", flag: bulgarian },
    { code: "es", name: "Spanish", flag: spanish },
    { code: "de", name: "German", flag: german },
    { code: "fr", name: "French", flag: french },
    { code: "it", name: "Italian", flag: italian },
    { code: "sk", name: "Slovak", flag: slovak },
    { code: "ru", name: "Russian", flag: russian },
]

export const Header = ({
    isSidebarActive,
    //@ts-ignore
    setSidebarActive,
}: {
    isSidebarActive: boolean
    setSidebarActive: (s: boolean) => void
}) => {
    const inputRefMob = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    const { casinoFilters, setCasinoFilters } = useFilterContext()

    const [moonBlink, setBoonBlink] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBodyLocked, setIsBodyLocked] = useState(false)

    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false)

    const [searchFocus, setSearchFocus] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        LANGUAGES_WEBSITE[0]
    )
    const modalLanguageRef = useRef<HTMLDivElement | null>(null)

    const [searchShow, setSearchShow] = useState(false)

    const handleLanguageSelect = (language: Language) => {
        console.log("handleLanguageSelect")

        setSelectedLanguage(language)
        setIsLanguageOpen(false)
    }

    const handleFocus = () => {
        console.log("handleFocus")
        //@ts-ignore
        if (inputRefMob?.current) {
            //@ts-ignore
            inputRefMob?.current.focus()
        }
    }

    //@ts-ignore
    const [logoHide, setLogoHide] = useState(false)

    const handleClickOutside = (event: MouseEvent): void => {
        const isScreenWide = window.innerWidth > 650
        if (
            modalLanguageRef.current &&
            !modalLanguageRef.current.contains(event.target as Node) &&
            isScreenWide
        ) {
            setIsLanguageOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleBurgerClick = (event: any) => {
        event.preventDefault()
        setIsMenuOpen(!isMenuOpen)
        setIsBodyLocked(!isBodyLocked)
        // if (!isBodyLocked) {
        //     document.body.classList.add("lock")
        // } else {
        //     document.body.classList.remove("lock")
        // }
    }

    useEffect(() => {
        if (isBodyLocked) {
            document.body.classList.add("lock")
        } else {
            document.body.classList.remove("lock")
        }
    }, [isBodyLocked])

    useEffect(() => {
        const gambleBody = document.querySelector(".gamble__body")

        if (gambleBody && window.innerWidth <= 650.98) {
            gambleBody.classList.toggle("hide", isSidebarActive)
        } else {
        }
        if (isSidebarActive) {
            setTimeout(() => {
                setLogoHide(true)
            }, 50)
        } else {
            setLogoHide(false)
        }
    }, [isSidebarActive])

    const navTo = () => {
        if (window.location.href.includes("filter-casinos")) {
            return
        } else {
            navigate("/filter-casinos")
        }
    }

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            if (
                (e.code === "Enter" || e.key === "Enter") &&
                casinoFilters?.casino_name
            ) {
                navTo()
            }
        }

        document.addEventListener("keydown", onKeydown)

        return () => {
            document.removeEventListener("keydown", onKeydown)
        }
    }, [casinoFilters, navTo])

    const [activeLink, setActiveLink] = useState<string>(
        window.location.pathname
    )

    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__row header--row-pc">
                    {
                        <div
                            className={`header__column header__column-logo ${
                                isSidebarActive && "header__column-active"
                            }`}
                        >
                            <a
                                rel="nofollow noopener"
                                href=""
                                aria-label="Put your description here."
                                className={`header__burger ${
                                    isMenuOpen ? "active" : ""
                                }`}
                                onClick={handleBurgerClick}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>

                            <Link
                                rel="nofollow noopener"
                                to="/"
                                className="header__logo logo"
                            >
                                <div className="logo__img">
                                    <img alt={"logo"} src={logo} />
                                </div>
                            </Link>
                        </div>
                    }
                    <div className="header__column header__column-nav">
                        <nav className="header__menu menu-header">
                            <ul className="menu-header__list">
                                <li className="menu-header__item">
                                    <Link
                                        rel="nofollow noopener"
                                        to="/"
                                        aria-label="Put your description here."
                                        onClick={() => setActiveLink("/")}
                                        className={`menu-header__link ${
                                            activeLink === "/all-bonuses" ||
                                            activeLink === "/all-casinos" ||
                                            activeLink === "/all-loyalties"
                                                ? ""
                                                : "current"
                                        }`}
                                    >
                                        <span>Gambling Hub</span>
                                    </Link>
                                </li>
                                <li className="menu-header__item">
                                    <Link
                                        rel="nofollow noopener"
                                        to="/all-bonuses"
                                        aria-label="Put your description here."
                                        onClick={() =>
                                            setActiveLink("/all-bonuses")
                                        }
                                        className={`menu-header__link ${
                                            activeLink === "/all-bonuses" &&
                                            "current"
                                        }`}
                                    >
                                        <span>All Bonuses</span>
                                    </Link>
                                </li>
                                <li className="menu-header__item">
                                    <Link
                                        rel="nofollow noopener"
                                        to="/all-casinos"
                                        aria-label="Put your description here."
                                        onClick={() =>
                                            setActiveLink("/all-casinos")
                                        }
                                        className={`menu-header__link ${
                                            activeLink === "/all-casinos" &&
                                            "current"
                                        }`}
                                    >
                                        <span>Casinos</span>
                                    </Link>
                                </li>
                                <li className="menu-header__item">
                                    <Link
                                        rel="nofollow noopener"
                                        to="/all-loyalties"
                                        aria-label="Put your description here."
                                        onClick={() =>
                                            setActiveLink("/all-loyalties")
                                        }
                                        className={`menu-header__link ${
                                            activeLink === "/all-loyalties" &&
                                            "current"
                                        }`}
                                    >
                                        <span>Loyalties</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__column header__column_last">
                        <div
                            className={`header__form form-header ${
                                searchShow ? "show" : ""
                            }`}
                        >
                            <div
                                className={`form-header__item form-item ${
                                    casinoFilters.casino_name && "filled"
                                } ${searchFocus && "focus"}`}
                            >
                                <span className="form-item__icon form-item__icon_search">
                                    <svg>
                                        <g>
                                            <path d="M0.25 7.72106C0.25 11.8335 3.60084 15.1462 7.67516 15.1462C9.49785 15.1462 11.1681 14.4832 12.461 13.3822L17.5753 18.459L18.375 17.6593L13.299 12.5458C14.4072 11.2497 15.0832 9.56584 15.1003 7.72106C15.1003 3.60866 11.7876 0.295898 7.67516 0.295898C3.56276 0.295898 0.25 3.64674 0.25 7.72106ZM1.31618 7.75913C1.31618 4.25598 4.17201 1.40015 7.67516 1.40015C11.1402 1.40015 13.9961 4.25598 14.0341 7.75913C14.0341 11.2623 11.1783 14.1181 7.67516 14.1181C4.17201 14.1181 1.31618 11.2623 1.31618 7.75913Z" />
                                        </g>
                                    </svg>
                                </span>
                                <input
                                    placeholder="Search"
                                    autoComplete="off"
                                    type="text"
                                    name="form[]"
                                    className="form-item__input form-item__input_search"
                                    value={casinoFilters.casino_name || ""}
                                    onChange={(e) =>
                                        setCasinoFilters((s) => ({
                                            ...s,
                                            casino_name:
                                                e.target.value || undefined,
                                        }))
                                    }
                                    onBlur={() => setSearchFocus(false)}
                                    onFocus={() => setSearchFocus(true)}
                                />
                                <button
                                    className="form-item__icon form-item__icon_delete"
                                    onClick={() =>
                                        setCasinoFilters((s) => ({
                                            ...s,
                                            casino_name: undefined,
                                        }))
                                    }
                                >
                                    <svg>
                                        <g>
                                            <path d="M0.346973 0.132108C0.0653443 0.280883 -0.0718153 0.633765 0.0376309 0.927996C0.0601456 0.988482 0.978282 1.93763 2.07982 3.03916L4.08116 5.04039L2.10136 7.02211C1.01244 8.11203 0.0934485 9.06005 0.0591293 9.12878C-0.0700563 9.38755 0.0270772 9.7484 0.273058 9.92338C0.406035 10.018 0.671715 10.0636 0.844562 10.0215C0.919689 10.0032 1.5938 9.35694 2.9772 7.97692L5 5.95905L7.0228 7.97665C9.20875 10.157 9.12143 10.0841 9.47811 10.0262C9.87333 9.96215 10.119 9.48564 9.94087 9.12878C9.90655 9.06005 8.98756 8.11203 7.89864 7.02211L5.91884 5.04039L7.92018 3.03916C9.02172 1.93763 9.93985 0.988482 9.96237 0.927996C10.0718 0.633765 9.93466 0.280883 9.65303 0.132108C9.45391 0.0269117 9.31355 0.0191801 9.11275 0.102393C9.01277 0.143823 8.34831 0.780431 6.98371 2.14217L5 4.1217L3.01629 2.14217C1.65169 0.780431 0.987233 0.143823 0.887246 0.102393C0.686451 0.0191801 0.546087 0.0269117 0.346973 0.132108Z" />
                                        </g>
                                    </svg>
                                </button>
                                <button
                                    className="form-item__btn"
                                    onClick={() => navTo()}
                                >
                                    <svg>
                                        <g>
                                            <path
                                                d="M9 5.0459L5 1.0459L1 5.0459"
                                                fill="transparent"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="header__theme theme-header">
                            <button
                                className={`theme-header__link theme-header__link_moon ${
                                    !moonBlink || "active"
                                }`}
                                onClick={() => setBoonBlink((s) => !s)}
                            >
                                <svg>
                                    <use xlinkHref="#moon"></use>
                                </svg>
                            </button>
                        </div>
                        <div className="header__language language-header">
                            <div className="dropdown language-header__dropdown dropdown-language-header">
                                <div
                                
                                    className="dropdown__btn dropdown-language-header__btn dropdown-language-header__btn-icon"
                                    // onClick={() => setIsLanguageOpen(true)}
                                >
                                    <img
                                        alt={selectedLanguage.name}
                                        src={selectedLanguage.flag}
                                        width={20}
                                        height={20}
                                    />
                                </div>

                                <div
                                    className={`dropdown__body dropdown-language-header__body `}
                                    style={{
                                        display: isLanguageOpen
                                            ? "block"
                                            : "none",
                                    }}
                                    ref={modalLanguageRef}
                                >
                                    <ul className="dropdown__list dropdown-language-header__list">
                                        {LANGUAGES_WEBSITE.map((language) => (
                                            <li
                                                key={language.code}
                                                className={`dropdown__list-item dropdown-language-header__list-item list-item-dropdown-language-header ${
                                                    language.code ===
                                                    selectedLanguage.code
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleLanguageSelect(
                                                        language
                                                    )
                                                }
                                            >
                                                <span className="list-item-dropdown-language-header__icon">
                                                    <img
                                                        alt={language.name}
                                                        src={language.flag}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                                <span className="list-item-dropdown-language-header__text">
                                                    {language.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__row-mobile header--row-mobile">
                    <div className="header__row">
                        <div className="header__column header__column_first">
                            <div className="sidebar-gamble__top top-sidebar-gamble">
                                <Link
                                    to="/"
                                    className="top-sidebar-gamble__logo"
                                >
                                    <img src={logoIcon} alt="logo-icon" />
                                </Link>
                            </div>
                            <Link to="/" className="header__logo logo">
                                <div className="logo__img">
                                    <img alt={"logo"} src={logo} />
                                </div>
                            </Link>
                        </div>

                        <div className="header__column header__column_last">
                            <div
                                className={`header__form form-header ${
                                    searchShow ? "show" : ""
                                }`}
                                onClick={(e) => {
                                    setSearchShow(true)
                                    e.preventDefault()
                                    handleFocus()
                                }}
                            >
                                <div
                                    className={`form-header__item form-item ${
                                        casinoFilters.casino_name && "filled"
                                    } ${searchFocus && "focus"}`}
                                >
                                    <span
                                        className={`form-item__icon form-item__icon_search `}
                                    >
                                        <svg>
                                            <use xlinkHref="#search"></use>
                                        </svg>
                                    </span>
                                    <input
                                        ref={inputRefMob}
                                        placeholder="Search"
                                        autoComplete="off"
                                        type="text"
                                        name="form[]"
                                        className="form-item__input form-item__input_search"
                                        value={casinoFilters.casino_name || ""}
                                        onChange={(e) =>
                                            setCasinoFilters((s) => ({
                                                ...s,
                                                casino_name:
                                                    e.target.value || undefined,
                                            }))
                                        }
                                        onBlur={() => setSearchFocus(false)}
                                        onFocus={() => setSearchFocus(true)}
                                    />
                                    <button
                                        className="form-item__icon form-item__icon_delete"
                                        onClick={() => {
                                            console.log(
                                                "setSearchShow",
                                                searchShow
                                            )
                                            setSearchShow(true)
                                            setCasinoFilters((s) => ({
                                                ...s,
                                                casino_name: undefined,
                                            }))
                                            setSearchFocus(false)
                                        }}
                                    >
                                        <svg>
                                            <use xlinkHref="#delete"></use>
                                        </svg>
                                    </button>
                                    <button
                                        className="form-item__btn"
                                        onClick={() => navTo()}
                                    >
                                        <svg>
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </button>
                                </div>
                                <a
                                    href=""
                                    aria-label="Put your description here."
                                    className={`form-header__icon ${
                                        searchShow ? "hide" : ""
                                    }`}
                                >
                                    <svg>
                                        <use xlinkHref="#search"></use>
                                    </svg>
                                </a>
                            </div>

                            <a
                                href=""
                                aria-label="Put your description here."
                                className={`header__burger ${
                                    isMenuOpen ? "active" : ""
                                }`}
                                onClick={handleBurgerClick}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`header__mobile mobile-header ${
                    isMenuOpen ? "active" : ""
                }`}
            >
                <div className="mobile-header__content">
                    <div className="mobile-header__body">
                        <div
                            className="header__column"
                            // data-da="mobile-header__body, 0, 1355.98"
                        >
                            <nav className="header__menu menu-header">
                                <ul className="menu-header__list">
                                    <li className="menu-header__item">
                                        <Link
                                            to="/"
                                            aria-label="Put your description here."
                                            onClick={() => setActiveLink("/")}
                                            className={`menu-header__link ${
                                                activeLink === "/all-bonuses" ||
                                                activeLink === "/all-casinos" ||
                                                activeLink === "/all-loyalties"
                                                    ? ""
                                                    : "current"
                                            }`}
                                        >
                                            <span>Gambling Hub</span>
                                        </Link>
                                    </li>
                                    <li className="menu-header__item">
                                        <Link
                                            to="/all-bonuses"
                                            aria-label="Put your description here."
                                            onClick={() => {
                                                setActiveLink("/all-bonuses")
                                            }}
                                            className={`menu-header__link ${
                                                activeLink === "/all-bonuses" &&
                                                "current"
                                            }`}
                                        >
                                            <span>All Bonuses</span>
                                        </Link>
                                    </li>
                                    <li className="menu-header__item">
                                        <Link
                                            to="/all-casinos"
                                            aria-label="Put your description here."
                                            onClick={() =>
                                                setActiveLink("/all-casinos")
                                            }
                                            className={`menu-header__link ${
                                                activeLink === "/all-casinos" &&
                                                "current"
                                            }`}
                                        >
                                            <span>Casinos</span>
                                        </Link>
                                    </li>
                                    <li className="menu-header__item">
                                        <Link
                                            to="/all-loyalties"
                                            aria-label="Put your description here."
                                            onClick={() =>
                                                setActiveLink("/all-loyalties")
                                            }
                                            className={`menu-header__link ${
                                                activeLink ===
                                                    "/all-loyalties" &&
                                                "current"
                                            }`}
                                        >
                                            <span>Loyalties</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mobile-header__top">
                        <div className="header__theme theme-header">
                            <button
                                className={`theme-header__link theme-header__link_moon ${
                                    !moonBlink || "active"
                                }`}
                                onClick={() => setBoonBlink((s) => !s)}
                            >
                                <svg>
                                    <use xlinkHref="#moon"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile-header__bottom">
                    <div className="header__language language-header">
                        <div className="dropdown language-header__dropdown dropdown-language-header">
                            <button
                                className="dropdown__btn dropdown-language-header__btn"
                                // onClick={() => setIsLanguageOpen(true)}
                            >
                                <span className="dropdown-language-header__btn-icon">
                                    <img
                                        alt={selectedLanguage.name}
                                        src={selectedLanguage.flag}
                                        width={20}
                                        height={20}
                                    />
                                </span>
                                <span className="dropdown-language-header__btn-text">
                                    {selectedLanguage.name}
                                </span>
                                <span className="dropdown-language-header__btn-arrow">
                                    {/* <svg>
                                        <use xlinkHref="#arrow"></use>
                                    </svg> */}
                                </span>
                            </button>
                            {isLanguageOpen && (
                                <div
                                    className="dropdown__body dropdown-language-header__body"
                                    style={{ display: "block" }}
                                >
                                    <button
                                        aria-label="Put your description here."
                                        className="dropdown-language-header__btn-back"
                                        onClick={() => {
                                            setIsLanguageOpen(false)
                                        }}
                                    >
                                        <span>
                                            <svg>
                                                <use xlinkHref="#arrow"></use>
                                            </svg>
                                        </span>
                                        Back
                                    </button>

                                    <ul className="dropdown__list dropdown-language-header__list">
                                        {LANGUAGES_WEBSITE.map((item) => (
                                            <li
                                                onClick={() =>
                                                    handleLanguageSelect(item)
                                                }
                                                className={`dropdown__list-item dropdown-language-header__list-item list-item-dropdown-language-header ${
                                                    item.code ===
                                                        selectedLanguage.code &&
                                                    "active"
                                                }`}
                                            >
                                                <span className="list-item-dropdown-language-header__icon">
                                                    <img
                                                        src={item.flag}
                                                        loading="lazy"
                                                        width="20"
                                                        height="20"
                                                        alt={item.name}
                                                    />
                                                </span>
                                                <span className="list-item-dropdown-language-header__text">
                                                    {item.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
