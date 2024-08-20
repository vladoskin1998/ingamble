import React, { useEffect, useRef } from "react"
import { useAccordion } from "../../hooks/useAccordion"

type AccordionItemProps = {
    heading: any
    content: any
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    heading,
    content,
}) => {
    const { isOpen, toggle } = useAccordion()
    const headerRef = useRef<HTMLDivElement>(null)
    console.log(isOpen);
    
    useEffect(() => {
        if (headerRef.current) {
            const titleElement = headerRef.current.querySelector(
                ".item-form-filters__title.title-item-form-filters"
            ) as HTMLDivElement
            if (titleElement) {
                if (isOpen) {
                    titleElement.classList.add("active")
                } else {
                    titleElement.classList.remove("active")
                }
            }
            else{
                const subTitleElement = headerRef.current.querySelector(
                    ".form-filter__title.title-form-filter"
                ) as HTMLDivElement
                if (subTitleElement) {
                    if (isOpen) {
                        subTitleElement.classList.add("active")
                    } else {
                        subTitleElement.classList.remove("active")
                    }
                }
            }
        }

    }, [isOpen])

    return (
        <div>
            <div
                ref={headerRef}
                style={styles.accordionItemHeader}
                onClick={toggle}
            >
                {heading}
            </div>
            <div
                style={{
                    ...styles.accordionItemPanel,
                    maxHeight: isOpen ? "10000px" : "0",
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
    },
    accordionItemPanel: {
        overflow: "hidden",
        transition: "max-height 0.6s ease",
    },
}
