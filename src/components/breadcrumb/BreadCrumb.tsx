
import './style.css'

//@ts-ignore
export const BreadCrumb = (path: any) => {

    return <></>

    //@ts-ignore
    const parsePath = (url: string): { name: string; link: string }[] => {
        const urlSegments = url.split("?")[0] // Убираем query-параметры
            .split("/") // Разделяем части пути
            .filter(segment => segment); // Убираем пустые части

        return urlSegments.map((segment, index) => {
            // Преобразуем slug в читаемую строку
            const readableName = segment
                .replace(/-/g, " ") // Заменяем тире на пробелы
                .replace(/\b\w/g, char => char.toUpperCase()); // Первую букву делаем заглавной

            // Восстанавливаем ссылку для каждой части
            const link = "/" + urlSegments.slice(0, index + 1).join("/");

            return { name: readableName, link };
        });
    };
//@ts-ignore
    const crumbs = parsePath(window.location.pathname);
//@ts-ignore
    return (
        <div className="simple-bonus__breadcrumbs breadcrumbs">
            <div className="breadcrumbs__container container">
                <div className="breadcrumbs__list">
                    {crumbs.map((item, index) => (
                        <div className="breadcrumbs__item" key={index}>
                            {index < crumbs.length - 1 ? (
                                <div
                                    rel="nofollow noopener"
                                   
                                    aria-label={item.name}
                                    className="breadcrumbs__link"
                                    
                                >
                                    {item.name}
                                </div>
                            ) : (
                                <span className="breadcrumbs__link">{item.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
