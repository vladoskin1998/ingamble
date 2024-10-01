import notFound from "../../assets/img/not-found/not-found.png"
import "./style.css"

export default function NotFound() {

      document.title = "Not Found"

    return (
        <div className="not--found">
            <div className="not--found-img">
                <img src={notFound} alt="not found 404" />
            </div>
            <h3 className="not--found-title">Oops! Something went wrong!</h3>
            <h5 className="not--found-subtitle">{"The link you followed may be broken, or this page have been removed:("}</h5>
            <button className="not--found-button">Back To Home</button>
        </div>
    )
}
