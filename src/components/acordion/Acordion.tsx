import React, { useEffect, useRef, useState } from "react";
import { useAccordion } from "../../hooks/useAccordion";

type AccordionItemProps = {
    heading: any;
    content: any;
    defaultOpen?: boolean; // Новый пропс для установки начального состояния
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
    heading,
    content,
    defaultOpen = false, 
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const { toggle } = useAccordion();
    const headerRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        if (headerRef.current) {
            const titleElement = headerRef.current.querySelector(
                ".accordion--title--element"
            ) as HTMLDivElement;
            if (titleElement) {
                if (isOpen) {
                    titleElement.classList.add("active");
                } else {
                    titleElement.classList.remove("active");
                }
            } else {
                const subTitleElement = headerRef.current.querySelector(
                    ".accordion--body--element"
                ) as HTMLDivElement;
                if (subTitleElement) {
                    if (isOpen) {
                        subTitleElement.classList.add("active");
                    } else {
                        subTitleElement.classList.remove("active");
                    }
                }
            }
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(defaultOpen)
    }, [defaultOpen])

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
        toggle(); 
    };

    return (
        <div>
            <div
                ref={headerRef}
                style={styles.accordionItemHeader}
                onClick={handleClick} 
            >
                {heading}
            </div>
            <div
                style={{
                    ...styles.accordionItemPanel,
                    overflow: isOpen ? "visiable" : "hidden",
                    maxHeight: isOpen ? "10000px" : "0",
                }}
            >
                {content}
            </div>
        </div>
    );
};

const styles = {
    accordionItemHeader: {
        cursor: "pointer",
    },
    accordionItemPanel: {
        // overflow: "hidden",
        transition: "max-height 0.5s ease",
    },
};
