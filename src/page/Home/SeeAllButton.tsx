import { Link } from 'react-router-dom'
import { DataHomeItemsBlockTypeCategory } from '../../types'

export const SeeAllRoutes = {
    [DataHomeItemsBlockTypeCategory.bonus_category]: 'bonuses',
    [DataHomeItemsBlockTypeCategory.casino_category]: 'casinos',
}

export const SeeAllButton = ({ type_category, slug }: { type_category: DataHomeItemsBlockTypeCategory; slug: string | undefined }) => {
    return (
        <Link to={`/all-${SeeAllRoutes[type_category]}${slug ? `/${slug}` : ''}`} aria-label="Put your description here." className="top__btn">
            <span>See All</span>
            <span className="top__btn-arrow">
                <svg>
                    <use xlinkHref="#arrow"></use>
                </svg>
            </span>
        </Link>
    )
}
