import { sanitizeLink } from "../../helper";
import { DataHomeItemsBlockTypeCategory } from "../../types"


const SeeAllRoutes = {
   [ DataHomeItemsBlockTypeCategory.bonus_category]: "bonus",
   [ DataHomeItemsBlockTypeCategory.casino_category]: "casinos",
}

export const SeeAllButton = ({
    type_category,
    parameter,
}:{
    type_category:DataHomeItemsBlockTypeCategory,
    parameter: string,
}) => {
 
    
    return (
        <a
            href={`/all-${SeeAllRoutes[type_category]}${parameter ? "/" + sanitizeLink(parameter)  : ''}`}
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
    )
}
