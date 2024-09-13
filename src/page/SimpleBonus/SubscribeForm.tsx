import  { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import logoIcon from "../../assets/img/logo-icon.svg"
import checkIcon from "../../assets/img/icons/check-icon.svg"
import errorIcon from "../../assets/img/icons/error-icon.svg"
import bgImage08 from "../../assets/img/bg/08.jpg"
import bgImage11 from "../../assets/img/bg/11.jpg"

export const SubscribeForm = () => {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [focus, setFocus] = useState(false)
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (validateEmail(email) && isChecked) {
            setIsSubscribed(true)
            setHasError(false)
        } else {
            setHasError(true)
        }
    }

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(String(email).toLowerCase())
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className="main-gamble__subscribe subscribe">
            <div className="subscribe__container container">
                <div className="subscribe__body">
                    <div className="subscribe__bg">
                        <LazyLoadImage src={bgImage08} alt="bg" />
                        <LazyLoadImage src={bgImage11} alt="bg" />
                    </div>
                    <div className="subscribe__row">
                        <div className="subscribe__column">
                            <a
                                href="#"
                                aria-label="Put your description here."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="subscribe__logo"
                            >
                                <LazyLoadImage src={logoIcon} alt="logo" />
                            </a>
                            <div className="subscribe__content">
                                <div className="subscribe__title">
                                    <span>Subscribe</span> to our newsletter
                                </div>
                                <div className="subscribe__text">
                                    <p>
                                        Get the highest potential bonuses right
                                        into your inbox
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe__column">
                            <form
                                onSubmit={handleSubmit}
                                className="subscribe__form form-subscribe"
                            >
                                <div className="form-subscribe__row">
                                    <div
                                        className={`form-item form-subscribe__item item-form-subscribe ${
                                            focus && "focus"
                                        } ${email && "filled"} ${
                                            email &&
                                            !validateEmail(email) &&
                                            !focus &&
                                            "error"
                                        }`}
                                    >
                                        <span className="form-item__icon item-form-subscribe__icon">
                                            <svg>
                                                <use xlinkHref="#email"></use>
                                            </svg>
                                        </span>
                                        <input
                                            placeholder="Your e-mail..."
                                            autoComplete="off"
                                            type="email"
                                            name="email"
                                            className={`item-form-subscribe__input form-item__input ${
                                                hasError ? "input-error" : ""
                                            }`}
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                            onFocus={() => setFocus(true)}
                                            onBlur={() => setFocus(false)}
                                        />

                                        <a
                                            href="#"
                                            aria-label="Clear email input"
                                            className="form-item__icon form-item__icon_delete item-form-subscribe__icon_delete"
                                            onClick={() => setEmail("")}
                                        >
                                            <svg>
                                                <use xlinkHref="#delete"></use>
                                            </svg>
                                        </a>

                                        {isSubscribed && (
                                            <span className="form-item__icon form-item__icon_confired">
                                                <LazyLoadImage
                                                    src={checkIcon}
                                                    alt="check"
                                                />
                                            </span>
                                        )}

                                        <span className="form-item__icon form-item__icon_error">
                                            <LazyLoadImage
                                                src={errorIcon}
                                                alt="error"
                                            />
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="form-subscribe__btn"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <div className="form-subscribe__bottom">
                                    <div className="form-subscribe__checkbox">
                                        <input
                                            id="formAgreement"
                                            type="checkbox"
                                            name="agreement"
                                            className="form-subscribe__checkbox-input"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label
                                            htmlFor="formAgreement"
                                            className="form-subscribe__checkbox-label"
                                        >
                                            <span>
                                                Feel free to unsubscribe
                                                anytime. Check our{" "}
                                                <a
                                                    href="#"
                                                    aria-label="Terms of use"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Terms of use
                                                </a>{" "}
                                                and{" "}
                                                <a
                                                    href="#"
                                                    aria-label="Privacy Policy"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Privacy Policy
                                                </a>{" "}
                                                here.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
