import  { useState } from "react"
import { LineLoader } from "../loader/LineLoader"

export const LazyCardImg = ({ img, size }: { img: string, size?: "large" | "medium"; }) => {
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
                    width: loading ? "0px" : 'auto'
                }}
            />
        </>
    )
}
