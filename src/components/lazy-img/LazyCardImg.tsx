//@ts-ignore
import { memo, useEffect, useState } from "react"
import { LineLoader } from "../loader/LineLoader"
import { LazyImgHomeType } from "../../page/Home"

export const LazyCardImg = memo(({
    img,
    size,
    width = "auto",
    height,
    imgLoading = "lazy",
}: {
    height?: string
    img: string
    size?: "large" | "medium" | "small"
    width?: string
    imgLoading?: LazyImgHomeType
}) => {
    //@ts-ignore
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (img) {
            setLoading(false)
        }
    }, [img])

    return (
        <>
            { !img ? <LineLoader size={size} /> : <></>}
            <img
                src={img}
                alt={img}
                loading={imgLoading}
                // onLoad={() => {
                //     setLoading(false)
                // }}
                style={{
                    height,
                    width: loading ? "0px" : width,
                }}
            />
        </>
    )
})
