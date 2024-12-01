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
    console.log("SeeAllButton",type_category, parameter);
    
    return (
        <a
            href={`/all-${SeeAllRoutes[type_category]}${parameter ? "/" + parameter.toLocaleLowerCase().replace(/\s+/g, "-") : ''}`}
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
