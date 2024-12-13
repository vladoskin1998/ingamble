import { Link } from "react-router-dom";
import { sanitizeLink } from "../../helper";
import { DataHomeItemsBlockTypeCategory } from "../../types"


export const SeeAllRoutes = {
   [ DataHomeItemsBlockTypeCategory.bonus_category]: "bonus",
   [ DataHomeItemsBlockTypeCategory.casino_category]: "casinos",
}

export const SeeAllButton = ({
    type_category,
    parameter,
    id,
}:{
    type_category:DataHomeItemsBlockTypeCategory,
    parameter: string,
    id:number,
}) => {
 
    
    return (
        <Link
            to={`/all-${SeeAllRoutes[type_category]}${parameter ? `/${sanitizeLink(parameter)}?queryId=${id}`  : ''}`}
            aria-label="Put your description here."
            
            className="top__btn"
        >
            <span>See All</span>
            <span className="top__btn-arrow">
                <svg>
                    <use xlinkHref="#arrow"></use>
                </svg>
            </span>
        </Link>
    )
}
