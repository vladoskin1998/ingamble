import React, { createContext, useContext, useEffect, ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ParentOriginal {
    parent: HTMLElement;
    index: number;
}
interface AdaptiveContextType {
    isSidebarActive: boolean;
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
    initializeAdaptiveBehavior: () => void;
}

const AdaptiveContext = createContext<AdaptiveContextType | undefined>(undefined);

const dinamicAdapt = (
    da_elements: NodeListOf<HTMLElement>,
    attr_elements: string[],
    match_media: MediaQueryList[],
    parents_original: ParentOriginal[]
) => {
    match_media.forEach((mediaQuery, i) => {
        const [className, index] = attr_elements[i].split(', ');
        const element = document.querySelector(`.${className}`);
        const targetIndex = parseInt(index, 10);

        if (mediaQuery.matches && element) {
            const childElement = element.children[targetIndex];
            if (childElement) {
                element.insertBefore(da_elements[i], childElement);
            }
        } else {
            const { parent, index } = parents_original[i];
            parent.insertBefore(da_elements[i], parent.children[index]);
        }
    });
};


const initializeAdaptiveBehavior = () => {
    const da_elements = document.querySelectorAll('[data-da]') as NodeListOf<HTMLElement>;
    const parents_original: ParentOriginal[] = [];
    const attr_elements: string[] = [];
    const match_media: MediaQueryList[] = [];

    da_elements.forEach((item) => {
        const parentChildren = item.parentElement?.children;
        if (parentChildren) {
            for (let i = 0; i < parentChildren.length; i++) {
                if (parentChildren[i] === item) {
                    parents_original.push({
                        parent: item.parentElement as HTMLElement,
                        index: i,
                    });
                }
            }
        }
    });


    attr_elements.push(...Array.from(da_elements).map((item) => item.dataset.da || ''));
    attr_elements.forEach((attr_element) => {
        //@ts-ignore
        const [className, index, maxWidth]: any = attr_element.split(', ');
        if (maxWidth) {
            const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
            match_media.push(mediaQuery);
            mediaQuery.addEventListener('change', () => dinamicAdapt(da_elements, attr_elements, match_media, parents_original));
        }
    });

 
    const ibg = document.querySelectorAll('.ibg') as NodeListOf<HTMLElement>;
    ibg.forEach((item) => {
        const ibgImg = item.querySelector('img');
        const ibgImgSrc = ibgImg?.getAttribute('src');
        if (ibgImgSrc) {
            item.style.backgroundImage = `url(${ibgImgSrc})`;
        }
    });

     
    dinamicAdapt(da_elements, attr_elements, match_media, parents_original);
};


export const AdaptiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const [isSidebarActive, setSidebarActive] = useState(false)
    
    useEffect(() => {
        const handleResize = () => {
            initializeAdaptiveBehavior();
        };
     
        initializeAdaptiveBehavior();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location]);

    return (
        <AdaptiveContext.Provider value={{ isSidebarActive, setSidebarActive, initializeAdaptiveBehavior }}>
            {children}
        </AdaptiveContext.Provider>
    );
};

export const useAdaptiveBehavior = () => {
    const context = useContext(AdaptiveContext);
    if (!context) {
        throw new Error('useAdaptiveBehavior must be used within an AdaptiveProvider');
    }
    return context;
};
