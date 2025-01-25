//@ts-ignore
import { memo, useEffect, useState } from "react"
import { LineLoader } from "../loader/LineLoader"
import { LazyImgHomeType } from "../../page/Home"
import { useInView } from 'react-intersection-observer' 

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
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        initialInView: true,
    })
    useEffect(() => {
        if (img) {
            setLoading(false)
        }
    }, [img])

    return (
        <>
            {!img ? <LineLoader size={size} /> : <></>}
            <div ref={ref} />
            
            {inView && <img
                
                src={img}
                alt={img}
                loading={imgLoading}
              
                style={{
                    height,
                    width: loading ? '0px' : width,
                }}
            />}
            
        </>
    )
})
