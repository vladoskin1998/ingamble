export const BreadCrumb = ({ path }: { path: string[] }) => {
    return (
        <div className="simple-bonus__breadcrumbs breadcrumbs">
            <div className="breadcrumbs__container container">
                <div className="breadcrumbs__list">
                    {path.slice(0, path?.length -1).map((item) => (
                        <div className="breadcrumbs__item">
                            <a rel="nofollow noopener"
                                href=""
                                target="_blank"
                                aria-label="Put your description here."
                                className="breadcrumbs__link"
                            >
                                {item}
                            </a>
                        </div>
                    ))}

                    <div className="breadcrumbs__item">
                        <span className="breadcrumbs__link">{path?.[path?.length -1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
