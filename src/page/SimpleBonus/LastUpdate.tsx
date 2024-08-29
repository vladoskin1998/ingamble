import React, { useEffect, useState } from 'react';
import { BonusInformation } from './BonusInformation';
import { GetDataBonusResponse } from '../../types';

// Функция для генерации случайной даты в диапазоне
const getRandomDate = (startDate: Date, endDate: Date): Date => {
    const randomTime = Math.floor(Math.random() * (endDate.getTime() - startDate.getTime() + 1)) + startDate.getTime();
    return new Date(randomTime);
};

// Функция для получения даты последнего обновления из localStorage
const getLastUpdateDate = (): Date | null => {
    const storedDate = localStorage.getItem('lastUpdate');
    const date = storedDate ? new Date(storedDate) : null;

    if (date && isNaN(date.getTime())) {
        console.error('Invalid date stored in localStorage:', storedDate);
        return null;
    }

    return date;
};

// Функция для установки даты последнего обновления в localStorage
const setLastUpdateDate = (date: Date): void => {
    if (isNaN(date.getTime())) {
        console.error('Invalid date passed to setLastUpdateDate:', date);
        return;
    }
    localStorage.setItem('lastUpdate', date.toISOString());
};

// Функция для получения текущей даты
const getCurrentDate = (): Date => new Date();

// Функция для получения даты, которая была 3 дня назад
const getThreeDaysAgo = (): Date => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
};

// Функция для форматирования даты в 'дд.мм.гггг'
const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

// Тип для пропсов компонента
interface LastUpdateProps {
    data?: GetDataBonusResponse;
}

export const LastUpdate: React.FC<LastUpdateProps> = ({ data }) => {
    const [lastUpdate, setLastUpdate] = useState<string>('');

    useEffect(() => {
     
        const lastUpdateDate = getLastUpdateDate();
        const today = getCurrentDate();
        const threeDaysAgo = getThreeDaysAgo();

        if (!lastUpdateDate) {
            // Нет даты в localStorage, установить случайную дату
            const randomDate = getRandomDate(threeDaysAgo, today);
            setLastUpdate(formatDate(randomDate));
            setLastUpdateDate(randomDate);
        } else {
            const lastUpdateDateStr = formatDate(lastUpdateDate);
            if (lastUpdateDate < threeDaysAgo) {
                // Дата старше 3 дней, установить новую случайную дату
                const randomDate = getRandomDate(threeDaysAgo, today);
                setLastUpdate(formatDate(randomDate));
                setLastUpdateDate(randomDate);
            } else {
                // Использовать сохранённую дату
                setLastUpdate(lastUpdateDateStr);
            }
        }
    }, []);

    return (
        <section className="simple-bonus__bonus-information bonus-information">
            <div className="bonus-information__container container">
                <div className="bonus-information__top top-bonus-information">
                    <div className="top-bonus-information__row">
                        <h2 className="top-bonus-information__title">
                            Bonus Information
                        </h2>
                        <div className="top-bonus-information__update update-top-bonus-information">
                            <div className="update-top-bonus-information__label">
                                Last update:
                            </div>
                            <div className="update-top-bonus-information__value">
                                {lastUpdate}
                            </div>
                        </div>
                    </div>
                </div>
                <BonusInformation data={data} />
            </div>
        </section>
    );
};
