import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import logoIcon from '../../assets/img/logo-icon.svg'
import checkIcon from '../../assets/img/icons/check-icon.svg'
import errorIcon from '../../assets/img/icons/error-icon.svg'
import bgImage08 from '../../assets/img/bg/08.webp'
import bgImage11 from '../../assets/img/bg/11.jpg'
import $api from '../../http'
import { Link } from 'react-router-dom'
import './style.css'

const saveUserMail = async (email: string) => {
    $api.post('save-user-email/', { email })
}

export default function SubscribeForm() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isErrorCheck, setIsErrorCheck] = useState(false)
    const [focus, setFocus] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!isChecked) {
            setIsErrorCheck(true)
            return
        }
        if (validateEmail(email) && isChecked) {
            setIsSubscribed(true)
            setIsSuccess(true)
            saveUserMail(email)
            setTimeout(() => {
                setIsSuccess(false)
                setEmail('')
            }, 5000)
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
                            <Link to="/" aria-label="Put your description here." rel="noopener noreferrer" className="subscribe__logo">
                                <LazyLoadImage src={logoIcon} alt="logo" />
                            </Link>
                            <div className="subscribe__content">
                                <div className="subscribe__title">
                                    <span>Subscribe</span> to our newsletter
                                </div>
                                <div className="subscribe__text">
                                    <p>Get the highest potential bonuses right into your inbox</p>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe__column">
                            <form onSubmit={handleSubmit} className="subscribe__form form-subscribe">
                                <div className="form-subscribe__row">
                                    <div className={`form-item form-subscribe__item item-form-subscribe ${focus && 'focus'} ${email && 'filled'} ${email && !validateEmail(email) && !focus && 'error'}`}>
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
                                            className={`item-form-subscribe__input form-item__input ${hasError ? 'input-error' : ''}`}
                                            value={!isSuccess ? email : 'You have successfully subscribed!🎉'}
                                            onChange={handleEmailChange}
                                            required
                                            onFocus={() => setFocus(true)}
                                            onBlur={() => setFocus(false)}
                                        />

                                        <button className="form-item__icon form-item__icon_delete item-form-subscribe__icon_delete" onClick={() => setEmail('')}>
                                            <svg>
                                                <use xlinkHref="#delete"></use>
                                            </svg>
                                        </button>

                                        {isSubscribed && (
                                            <span className="form-item__icon form-item__icon_confired">
                                                <LazyLoadImage src={checkIcon} alt="check" />
                                            </span>
                                        )}

                                        <span className="form-item__icon form-item__icon_error">
                                            <LazyLoadImage src={errorIcon} alt="error" />
                                        </span>
                                    </div>
                                    <button type="submit" className="form-subscribe__btn">
                                        Subscribe
                                    </button>
                                </div>
                                <div className="form-subscribe__bottom">
                                    <div className="form-subscribe__checkbox">
                                        <input id="formAgreement" type="checkbox" name="agreement" className={`form-subscribe__checkbox-input `} checked={isChecked} onChange={handleCheckboxChange} />
                                        <label htmlFor="formAgreement" className={`form-subscribe__checkbox-label ${isErrorCheck && 'active'}`}>
                                            <span>
                                                Feel free to unsubscribe anytime. Check our{' '}
                                                <Link to="/privacy-policy" aria-label="Terms of use" rel="noopener noreferrer">
                                                    Terms of use
                                                </Link>{' '}
                                                and{' '}
                                                <Link to="/privacy-policy" aria-label="Privacy Policy" rel="noopener noreferrer">
                                                    Privacy Policy
                                                </Link>{' '}
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
