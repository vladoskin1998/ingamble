import React, { createContext, useContext, useEffect, ReactNode, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { AllCategoriesHomeDataResponse, DataHomeItemsBlockCategoryType, DataHomeItemsBlockEnumCategory, FormatedCategoryType } from '../types'
import $api from '../http';
import {   LOYALTIECATEGORYIES, shuffleArray } from '../helper';

const AdaptiveContext = createContext<AdaptiveContextType | undefined>(undefined);

const getTogglePlay = async () => {
       const response = await $api.get('get-toggle-play/')
       return response.data
}

const getDataHomePageCategories = async () => {
    const response = await $api.get("get-data-home-page-categories/")
    return response.data
}


interface AdaptiveContextType {
    isShowPlayButton: boolean
    isSidebarActive: boolean
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>
    lastUpdate: string
    category: FormatedCategoryType[]
}

const getRandomDate = (startDate: Date, endDate: Date): Date => {
    const randomTime = Math.floor(Math.random() * (endDate.getTime() - startDate.getTime() + 1)) + startDate.getTime();
    return new Date(randomTime);
};


const getLastUpdateDate = (): Date | null => {
    const storedDate = localStorage?.getItem('lastUpdate');
    const date = storedDate ? new Date(storedDate) : null;

    if (date && isNaN(date?.getTime())) {
        console.error('Invalid date stored in localStorage:', storedDate);
        return null;
    }

    return date;
};


const setLastUpdateDate = (date: Date): void => {
    if (isNaN(date?.getTime())) {
        console?.error('Invalid date passed to setLastUpdateDate:', date);
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







export const AdaptiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

     //@ts-ignore
    const location = useLocation();
    const [isSidebarActive, setSidebarActive] = useState(false)
    
    // useEffect(() => {
    //     const handleResize = () => {
    //         initializeAdaptiveBehavior();
    //     };
     
    //     initializeAdaptiveBehavior();
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [location]);

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



    const { data: dataCategories } = useQuery<AllCategoriesHomeDataResponse>('get-data-home-page-categories/', getDataHomePageCategories, {
    
        staleTime: Infinity,
        cacheTime: 1000 * 60 * 100,
    })

      const { data: isTogglePlay } = useQuery<{id: number, is_play: boolean}>('get-toggle-play/', getTogglePlay, {
        
          staleTime: Infinity,
          cacheTime: 1000 * 60 * 100,
      })

    
        
        const category = useMemo(() => {
            return shuffleArray([
                ...([...(dataCategories?.bonus_categories || [])]?.map((item) => ({
                    name: item.name,
                    slug: item.slug,
                    categoryType: DataHomeItemsBlockEnumCategory.bonus_category as DataHomeItemsBlockCategoryType,
                })) || []),
                ...([...(dataCategories?.casino_categories || [])]?.map((item) => ({
                    name: item.name,
                    slug: item.slug,

                    categoryType: DataHomeItemsBlockEnumCategory.casino_category as DataHomeItemsBlockCategoryType,
                })) || []),
                ...LOYALTIECATEGORYIES.map((item) => ({
                    name: item.name,
                    slug: item.slug,

                    categoryType: DataHomeItemsBlockEnumCategory.loyaltie_category as DataHomeItemsBlockCategoryType,
                })),
            ])
        }, [dataCategories])

        const value = useMemo(
            () => ({
                isShowPlayButton: isTogglePlay?.is_play ?? false,
                category,
                isSidebarActive,
                setSidebarActive,
                lastUpdate,
            }),
            [isTogglePlay, category, isSidebarActive, lastUpdate],
        )


    return <AdaptiveContext.Provider value={value}>{children}</AdaptiveContext.Provider>
};

export const useAdaptiveBehavior = () => {
    const context = useContext(AdaptiveContext);
    if (!context) {
        throw new Error('useAdaptiveBehavior must be used within an AdaptiveProvider');
    }
    return context;
};
