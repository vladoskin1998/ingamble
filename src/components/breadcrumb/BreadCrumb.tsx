
import { Link } from 'react-router-dom'
import './style.css'

//@ts-ignore
export const BreadCrumb = ({
    path,
}: {
    path: {
        name: string
        link: string
    }[]
}) => {
    
    return (
        <div className="simple-bonus__breadcrumbs breadcrumbs">
            <div className="breadcrumbs__container container">
                <div className="breadcrumbs__list">
                    {path.map((item, index) => (
                        <div className="breadcrumbs__item" key={index}>
                            {index < path.length - 1 ? (
                            
                                    <Link className="breadcrumbs__link"  to={item.link} rel="nofollow noopener" aria-label={item.name}>
                                        {item.name}
                                    </Link>
                          
                            ) : (
                                <span className="breadcrumbs__link">{item.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
