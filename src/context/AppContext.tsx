import React, { createContext, useContext, useEffect, ReactNode, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { AllCategoriesHomeDataResponse } from '../types';
import $api from '../http';
import { sanitizeLink } from '../helper';

const AdaptiveContext = createContext<AdaptiveContextType | undefined>(undefined);

const shuffleArray = (array: any): { link: string; name: string }[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const getDataHomePageCategories = async () => {
    const response = await $api.get("get-data-home-page-categories/")
    return response.data
}

interface ParentOriginal {
    parent: HTMLElement;
    index: number;
}
interface AdaptiveContextType {
    isSidebarActive: boolean;
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
    initializeAdaptiveBehavior: () => void;
    lastUpdate: string
    category: { link: string; name: string; }[]
}

const getRandomDate = (startDate: Date, endDate: Date): Date => {
    const randomTime = Math.floor(Math.random() * (endDate.getTime() - startDate.getTime() + 1)) + startDate.getTime();
    return new Date(randomTime);
};


const getLastUpdateDate = (): Date | null => {
    const storedDate = localStorage.getItem('lastUpdate');
    const date = storedDate ? new Date(storedDate) : null;

    if (date && isNaN(date.getTime())) {
        console.error('Invalid date stored in localStorage:', storedDate);
        return null;
    }

    return date;
};


const setLastUpdateDate = (date: Date): void => {
    if (isNaN(date.getTime())) {
        console.error('Invalid date passed to setLastUpdateDate:', date);
        return;
    }
    localStorage.setItem('lastUpdate', date.toISOString());
};


const getCurrentDate = (): Date => new Date();


const getThreeDaysAgo = (): Date => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
};


const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};


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

    const [lastUpdate, setLastUpdate] = useState<string>('');

    useEffect(() => {
     
        const lastUpdateDate = getLastUpdateDate();
        const today = getCurrentDate();
        const threeDaysAgo = getThreeDaysAgo();

        if (!lastUpdateDate) {
       
            const randomDate = getRandomDate(threeDaysAgo, today);
            setLastUpdate(formatDate(randomDate));
            setLastUpdateDate(randomDate);
        } else {
            const lastUpdateDateStr = formatDate(lastUpdateDate);
            if (lastUpdateDate < threeDaysAgo) {

                const randomDate = getRandomDate(threeDaysAgo, today);
                setLastUpdate(formatDate(randomDate));
                setLastUpdateDate(randomDate);
            } else {

                setLastUpdate(lastUpdateDateStr);
            }
        }
    }, []);



    const { data: dataCategories } =
        useQuery<AllCategoriesHomeDataResponse>(
            "get-data-home-page-categories/",
            getDataHomePageCategories,
            {
                keepPreviousData: true,
                staleTime: Infinity,
            }
        )

    const category = shuffleArray([
        ...(dataCategories?.bonus_categories?.map((item) => ({
            name: item.name,
            link: `${window.location.origin}/all-bonus/${sanitizeLink(
                item?.name
            )}`,
        })) || []),
        ...(dataCategories?.casino_categories?.map((item) => ({
            name: item.name,
            link: `${window.location.origin}/all-casinos/${sanitizeLink(
                item?.name
            )}`,
        })) || []),
    ])


    return (
        <AdaptiveContext.Provider value={{ category,isSidebarActive, setSidebarActive, initializeAdaptiveBehavior,lastUpdate }}>
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
