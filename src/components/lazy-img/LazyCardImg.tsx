import  { useState } from "react"
import { LineLoader } from "../loader/LineLoader"

export const LazyCardImg = ({ img, size,width="auto", height}: { height?:string,img: string, size?: "large" | "medium"; width?: string }) => {
    const [loading, setLoading] = useState(true)

  
    
    return (
        <>
            {(loading && !img) && <LineLoader size={size}/>}
            <img
                src={img}
                alt={img}
                loading="lazy"
                onLoad={() => setLoading(false)}
                style={{
                    height,
                    width: loading ? "0px" : width
                }}
            />
        </>
    )
}
