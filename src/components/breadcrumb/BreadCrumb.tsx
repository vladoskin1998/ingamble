export const BreadCrumb = ({ path }: { path: {name:string,link:string}[] }) => {
    return (
        <div className="simple-bonus__breadcrumbs breadcrumbs">
            <div className="breadcrumbs__container container">
                <div className="breadcrumbs__list">
                    {path.slice(0, path?.length -1).map((item) => (
                        
                        <div className="breadcrumbs__item">
                            <a rel="nofollow noopener"
                                href={item.link}
                                target="_blank"
                                aria-label="Put your description here."
                                className="breadcrumbs__link"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                    <a href={path?.[path?.length -1].link} target="_black">
                    <div className="breadcrumbs__item">
                        <span className="breadcrumbs__link">{path?.[path?.length -1].name}</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
