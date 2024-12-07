import { LazyCardImg } from "../../components/lazy-img/LazyCardImg"
import { SeeAllEssentialLoyaltyKeypoint } from "../../types"

const color_gifts = [
    "item-deposits_grass",
    "item-deposits_ocean",
    "item-deposits_purple",
    "item-deposits_green",
]
const blockWidth = (l: number | undefined) => {
    if (!l) {
        return "deposits__column_medium"
    }
    switch (l) {
        case 2:
            return "deposits__column_big"
        case 4:
            return "deposits__column_small"
        default:
            return "deposits__column_medium"
    }
}

export const LoyaltyRewnew = ({
    loyalty_subtype,
}: {
    loyalty_subtype: SeeAllEssentialLoyaltyKeypoint[] | undefined
}) => {
    return (
        <section className="simple-bonus__deposits deposits loyaltie__loyalty loyalty-review">
            <div className="deposits__container container loyalty-review__container ">
                <div className="loyalty-review__top top">
                    <div className="top__row">
                        <div className="top__column">
                            <div className="top__title-block">
                                <h2 className="top__title">
                                    Loyalty Highlights
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deposits__body">
                    <div className="deposits__block">
                        <div className="deposits__row">
                            {loyalty_subtype?.map((item, index) => {
                                return (
                                    <div
                                        className={`deposits__column ${blockWidth(
                                            loyalty_subtype?.length
                                        )}`}
                                    >
                                        <div
                                            className={`deposits__item item-deposits ${
                                                color_gifts[index % 4]
                                            }`}
                                        >
                                            <div className="item-loyalty-review__image">
                                                <LazyCardImg
                                                    img={item?.image || ""}
                                                    height="100%"
                                                    width="100%"
                                                />
                                            </div>
                                            <div className="item-loyalty-review__content">
                                                <div className="item-loyalty-review__label">
                                                    {item?.text_1}
                                                </div>
                                                <div className="item-loyalty-review__value">
                                                    {item?.text_2}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// <section class="">
// <div class="loyalty-review__container container" data-da="casino-info__body, 1, 992.98">

//     <div class="loyalty-review__body">
//
//         <div class="loyalty-review__column">
//             <div class="loyalty-review__item item-loyalty-review">
//
//             </div>
//         </div>
//         <div class="loyalty-review__column">
//             <div class="loyalty-review__item item-loyalty-review">
//                 <div class="item-loyalty-review__image">
//                     <img src=" img/review-loyalty/22.jpg" alt="review-loyalty-img">>
//                 </div>
//                 <div class="item-loyalty-review__content">
//                     <div class="item-loyalty-review__label">Rakeback up to 30%</div>
//                     <div class="item-loyalty-review__value">
//                         Claim Every 2 minutes
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="loyalty-review__column">
//             <div class="loyalty-review__item item-loyalty-review">
//                 <div class="item-loyalty-review__image">
//                     <img src=" img/review-loyalty/19.jpg" alt="review-loyalty-img">>
//                 </div>
//                 <div class="item-loyalty-review__content">
//                     <div class="item-loyalty-review__label">Keys to open Chest</div>
//                     <div class="item-loyalty-review__value">
//                         Open treasure chests every level up
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="loyalty-review__column">
//             <div class="loyalty-review__item item-loyalty-review">
//                 <div class="item-loyalty-review__image">
//                     <img src=" img/review-loyalty/20.jpg" alt="review-loyalty-img">>
//                 </div>
//                 <div class="item-loyalty-review__content">
//                     <div class="item-loyalty-review__label">Personal VIP manager
//                     </div>
//                     <div class="item-loyalty-review__value">
//                         Personal manager for loyal players
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="loyalty-review__column">
//             <div class="loyalty-review__item item-loyalty-review">
//                 <div class="item-loyalty-review__image">
//                     <img src=" img/review-loyalty/21.jpg" alt="review-loyalty-img">>
//                 </div>
//                 <div class="item-loyalty-review__content">
//                     <div class="item-loyalty-review__label">Treasure chests
//                     </div>
//                     <div class="item-loyalty-review__value">
//                         Every level get chests with suprises
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>
