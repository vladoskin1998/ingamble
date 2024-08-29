import  { useEffect, useState } from "react"

import $api from "../../http"
import { useQuery } from "react-query"
import { GetDataBonusResponse } from "../../types"

const getBonusDataFetch = async () => {
    const { data } = await $api.get("get-data-bonus/8/")
    return data
}

export const IframeCasinoAffiliateLink = () => {

    document.title = "Casino Affiliate Link"

    
    const [casinoAffiliateLink, setCasinoAffiliateLink] = useState("")

    const [isLoad, setIsLoad] = useState(true)

    const handleLoad = () => {
        setTimeout(() => {
            setIsLoad(false)
        }, 500)
    }

    const { data, isLoading } = useQuery<GetDataBonusResponse>(
        "get-data-bonus",
        getBonusDataFetch,
        {
            keepPreviousData: true,
        }
    )

    useEffect(() => {
        const gambleElement:any = document.querySelector('.gamble');
        if (gambleElement) {
          gambleElement.style.overflow = 'hidden';
        }
      }, []);

    useEffect(() => {
        if(data){
            console.log(data?.casino_affiliate_link);
            
            setCasinoAffiliateLink(data?.casino_affiliate_link)
        }
    }, [data])

    return (
        <div>
            {(isLoading || isLoad) && (
                <div
                    className="loader"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        zIndex: "9999",
                        backgroundColor: "#fff",
                    }}
                ></div>
            )}

            {( casinoAffiliateLink) ? (
                <iframe
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        zIndex: "9999",
                        display: isLoading ? "none" : "block", // Скрываем iframe до загрузки
                    }}
                    src={casinoAffiliateLink}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    onLoad={handleLoad} // Обработчик события загрузки
                />
            ) : (
                <p>Ссылка не найдена.</p>
            )}
        </div>
    )
}
