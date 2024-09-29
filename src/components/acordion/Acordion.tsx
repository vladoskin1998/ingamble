import React, { useEffect, useRef, useState } from "react"
import { useAccordion } from "../../hooks/useAccordion"

type AccordionItemProps = {
    heading: any
    content: any
    defaultOpen?: boolean
    isNested?: boolean
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    heading,
    content,
    defaultOpen = false,
    isNested = false,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen || isNested)
    const { toggle } = useAccordion()
    const headerRef = useRef<HTMLDivElement>(null)
    const bodyRefAcc = useRef<HTMLDivElement | null>(null)
    const [maxHeight, setMaxHeight] = useState<string>("0")
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    // Управление скрытием и отображением
    const [isHidden, setIsHidden] = useState<"hidden" | "visible">(
        isOpen ? "visible" : "hidden"
    )

  
    const calculateTotalHeight = (element: HTMLElement): number => {
        let totalHeight = element.scrollHeight

        console.log(element.scrollHeight);
        const nestedAccordions = element.querySelectorAll(".accordion-item")

  
        nestedAccordions.forEach((nestedAccordion) => {
          
            
            if (nestedAccordion instanceof HTMLElement) {
                totalHeight += calculateTotalHeight(nestedAccordion)
            }
        })

        return totalHeight
    }


    useEffect(() => {
        if (bodyRefAcc.current) {
    
            const contentHeight = calculateTotalHeight(bodyRefAcc.current)
            setMaxHeight(`${contentHeight}px`)
        }
    }, [])




    
    const handleClick = () => {
        if (isAnimating) return

        setIsAnimating(true)

        setIsOpen((prevState) => {
            if (!prevState === true) {
                setTimeout(() => {
                    setIsHidden("visible")
                }, 300)
            } else {
                setIsHidden("hidden")
            }
            return !prevState
        })

        toggle()

        setTimeout(() => {
            setIsAnimating(false)
        }, 300)
    }

    return (
        <div >
            <div
                ref={headerRef}
                //@ts-ignore
                style={styles.accordionItemHeader}
                onClick={handleClick}
            >
                {heading}
            </div>
            <div className="accordion-item" 
                ref={bodyRefAcc}
                style={{
                    ...styles.accordionItemPanel,
                    overflow: isHidden,
                    maxHeight: isOpen ? maxHeight : "0",
                   
                }}
            >
                {content}
            </div>
        </div>
    )
}

const styles = {
    accordionItemHeader: {
        cursor: "pointer",
        position: "relative",
        zIndex: "2",
    },
    accordionItemPanel: {
        transition: "max-height 0.3s ease-in-out",
    },
}
