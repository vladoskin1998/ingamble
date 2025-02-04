

export const workFooterBlock = {
    h_1: import.meta.env.VITE_FOOTER_BLOCK_H1,
    p1_1: import.meta.env.VITE_FOOTER_BLOCK_P1_1,
    p1_2: import.meta.env.VITE_FOOTER_BLOCK_P1_2,

    h_2: import.meta.env.VITE_FOOTER_BLOCK_H2,
    p2_1: import.meta.env.VITE_FOOTER_BLOCK_P2_1,
    p2_2: import.meta.env.VITE_FOOTER_BLOCK_P2_2,
}


export default function BottomInfo() {
   
    return (
        <section className="main-gamble__bottom-info bottom-info-gamble">
            <div className="bottom-info-gamble__container container">
                <div className="bottom-info-gamble__row">
                    <div className="bottom-info-gamble__column">
                        <div className="bottom-info-gamble__item">
                            <h2 className="bottom-info-gamble__title">{workFooterBlock.h_1}</h2>
                            <div className="bottom-info-gamble__text">
                                <p>{workFooterBlock.p1_1}</p>
                                <p>{workFooterBlock.p1_2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-info-gamble__column">
                        <div className="bottom-info-gamble__item">
                            <h2 className="bottom-info-gamble__title">{workFooterBlock.h_2}</h2>
                            <div className="bottom-info-gamble__text">
                                <p>{workFooterBlock.p2_1}</p>
                                <p>{workFooterBlock.p2_2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
