import { Link } from 'react-router-dom'
import { DataHomeItemsBlockTypeCategory, FooCategorySanitazeLinkType } from '../../types'

export const SeeAllRoutes = {
    [DataHomeItemsBlockTypeCategory.bonus_category]: 'bonuses',
    [DataHomeItemsBlockTypeCategory.casino_category]: 'casinos',
}

export const SeeAllButton = ({ seeAllLink, seeAllFoo }: FooCategorySanitazeLinkType) => {
    return (
        <Link to={seeAllLink} onClick={seeAllFoo} aria-label="Put your description here." className="top__btn">
            <span>See All</span>
            <span className="top__btn-arrow">
                <svg>
                    <use xlinkHref="#arrow"></use>
                </svg>
            </span>
        </Link>
    )
}

