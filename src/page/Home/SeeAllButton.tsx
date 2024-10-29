import { DataHomeItemsBlockTypeCategory } from "../../types"


const SeeAllRoutes = {
   [ DataHomeItemsBlockTypeCategory.bonus_category]: "bonus",
   [ DataHomeItemsBlockTypeCategory.casino_category]: "casinos",
}

export const SeeAllButton = ({
    type_category,
    id,
}:{
    type_category:DataHomeItemsBlockTypeCategory,
    id: number,
}) => {
    console.log("SeeAllButton",type_category, id);
    
    return (
        <a
            href={`/see-all-${SeeAllRoutes[type_category]}?id=${id}`}
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
