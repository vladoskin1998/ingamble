import { useState, useMemo, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FixedSizeList as List } from "react-window";
import { CasinoFilterBodyType } from '../../../types';

export const ByLicenses = memo(({
    licenses,
    setLocalCasinoFilters,
}: {

    licenses: {
        id: number,
        name: string,
        image: string | null
    }[] | undefined | null,
    setLocalCasinoFilters: React.Dispatch<React.SetStateAction<CasinoFilterBodyType>>;
}) => {
    const [searchText, setSearchText] = useState("");

    const [localSelectedCountries, setLocalSelectedCountries] = useState<number[]>([])

    const checkboxItem = (id: number) => {
        setLocalCasinoFilters(prevFilters => {
            if(!prevFilters?.licenses){
                return prevFilters
            }
            const isSelected = prevFilters?.licenses?.includes(id);
            return {
                ...prevFilters,
                licenses: isSelected
                    ? prevFilters?.licenses?.filter(item => item !== id)
                    : [...prevFilters?.licenses, id],
            };
        });
        setLocalSelectedCountries(prevFilters => {
            const isSelected = prevFilters.includes(id);
            if(isSelected){
                return prevFilters.filter(item => item !== id)
            }
            return [ ...prevFilters, id ]
            
        })
    };



    const filteredCountries = useMemo(() => {
        return licenses?.filter(country =>
            country.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [licenses, searchText]);

    return (
        <div className="form-filter__body">
            <div className="form-filter__checkbox checkbox-form-filter">
                <div className="form-filter__search-block">
                    <span className="form-filter__search-icon">
                        <svg>
                            <use xlinkHref="#search"></use>
                        </svg>
                    </span>
                    <input
                              placeholder="Search (License)"
                        type="text"
                        className="form-filter__search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="form-filter__radio radio-form-filter">
                    <List
                        className="radio-form-filter__items radio-form-filter__items_flags"
                        itemCount={filteredCountries?.length || 0}
                        height={260}
                        width={"auto"}
                        itemSize={40}
                    >
                        {({ index, style }) => {
                            const country = filteredCountries?.[index];
                            const isChecked = localSelectedCountries?.includes(country?.id || 0);
                            return (
                                <div className="radio-form-filter__item" style={style}>
                                    <input
                                        id={`licensesformFilterPlayersFrom${country?.name}`}
                                        type="checkbox"
                                        checked={isChecked}
                                        className="radio-form-filter__input form-filter__input"
                                        onChange={() => checkboxItem(country?.id || 0)}
                                    />
                                    <label
                                        htmlFor={`licensesformFilterPlayersFrom${country?.name}`}
                                        className="radio-form-filter__label"
                                    >
                                        <span className="flag">
                                            <LazyLoadImage
                                                alt={country?.name}
                                                src={country?.image || ''}
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>{country?.name}</span>
                                    </label>
                                    <span className="number">{country?.id}</span>
                                </div>
                            );
                        }}
                    </List>
                </div>
            </div>
        </div>
    );
});
