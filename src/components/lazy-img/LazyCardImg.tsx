import { useState } from "react"
import { LineLoader } from "../loader/LineLoader"

export const LazyCardImg = ({
    img,
    size,
    width = "auto",
    height,
    imgLoading= "lazy",
}: {
    height?: string
    img: string
    size?: "large" | "medium" | "small"
    width?: string
    imgLoading?: "lazy" | "eager" | undefined
}) => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            
            {(loading || !img) && <LineLoader size={size}/>}
            <img
                src={img}
                alt={img}
                loading={imgLoading}
                onLoad={() => {
                    // setTimeout(() => {  setLoading(false)}, 10000)
                    setLoading(false)
                }
                  
                }
                style={{
                    height,
                    width: loading ? "0px" : width,
                }}
            />
        </>
    )
}
