import 'swiper/css'
import { useQuery } from 'react-query'
import { lazy, useEffect, useState } from 'react'
import $api from '../../http'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { GeoLocationAllowdType, GetDataBonusResponse } from '../../types'
import { BonusSubType } from './BonusSubType'
import { Categories } from '../../components/categories/Categories'
import { LastUpdate } from './LastUpdate'
import { Wraper } from '../Wraper'
import { useAdaptiveBehavior } from '../../context/AppContext'
import SubscribeForm from './SubscribeForm'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { HeaderSimpleBonus } from './HeaderSimpleBonus'
import { HowToGetBonus } from './HowToGetBonus'
import { CheckMoreWhatSuitsYouBest } from '../../components/categories/CheckMoreWhatSuitsYouBest'
import { HarryStyles } from './HarryStyles'
import { useSearchParams } from 'react-router-dom'
import { EssentialVIPLoyaltyPrograms } from './EssentialVIPLoyaltyPrograms'
import { useFilterContext } from '../../context/FilterContext'
import { SiblingBonus } from './SiblingBonus'
import { COUNTRIES } from '../../helper/Country'
import { OtherBestReloadBonus } from './OtherBestBonus'
import ASHLINGOBRIEN from '../../assets/img/casino-person/5.webp'
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))

const getBonusDataFetch = async ({ queryId }: { queryId: string | null }) => {
    const response = await $api.get(`get-data-bonus/${queryId}/`)
    const headers = response.headers

    return { dataBonus: response.data, headers }
}

export default function SimpleBonus() {
    // document.title = "Simple Bonus"
    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const { data: Country } = useFilterContext()

    const [searchParams] = useSearchParams()
    const qid = searchParams.get('queryId')

    const [queryId, setQueryId] = useState<string>(qid || '')

    useEffect(() => {
        if (qid) {
            setQueryId(qid)
            window.scrollTo(0, 0)
        }
    }, [qid])

    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: '',
        countryName: '',
        isAllowed: true,
        isLoadedGeo: false,
        countryImg: undefined,
        idCountry: null,
    })

    const { data, isLoading } = useQuery<{
        dataBonus: GetDataBonusResponse
        headers: any
    }>(['get-data-bonus', queryId], () => getBonusDataFetch({ queryId }), {
        keepPreviousData: true,
        staleTime: Infinity,
        enabled: !!queryId,
    })

    useEffect(() => {
        if (data?.headers) {
            const headers = data?.headers
            const countryCode = headers?.['cf-ipcountry-code']
            const countryName = headers?.['cf-ipcountry']

            const countryImg = (Country?.general?.countries || COUNTRIES)?.find((it) => {
                return it.code === countryCode || it.name.toLocaleLowerCase() === countryName.toLocaleLowerCase()
            })?.flag_image

            const idCountry = data.dataBonus?.blocked_countries?.find((item) => item?.code?.toLocaleLowerCase() === countryCode?.toLocaleLowerCase())?.id

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed: !idCountry,
                isLoadedGeo: true,
                countryImg,
                idCountry,
            })
        }
        initializeAdaptiveBehavior()

        // const newUrl = `/casino/${data?.dataBonus?.casino_name
        //     .replace(/\s/g, "-")
        //     .toLocaleLowerCase()}/bonuses/${data?.dataBonus?.bonus_type
        //     .replace(/\s/g, "-")
        //     .toLocaleLowerCase()}`f

        // window.history.pushState({}, "", newUrl)
    }, [data, Country, COUNTRIES])



    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [geoLocation])

    if (isLoading || !geoLocation.isLoadedGeo) return <LogoLoader />
    // if (isLoading ) return <LogoLoader />
    return (
        <Wraper>
            <main className="gamble__simple-bonus main-gamble simple-bonus">
                <div className="main-gamble__body">
                    <Categories />

                    <BreadCrumb
                        path={[
                            {
                                name: 'Home',
                                link: 'https://cryptogamblers.pro',
                            },
                            {
                                name: 'Casino Bonuses',
                                link: 'https://cryptogamblers.pro/bonuses',
                            },
                            {
                                name: data?.dataBonus?.casino_name || 'Casino Name',
                                link: 'https://cryptogamblers.pro/casino/iwild-casino',
                            },
                            {
                                name: 'Bonuses',
                                link: 'https://cryptogamblers.pro/casino/iwild-casino/bonuses',
                            },
                            {
                                name: data?.dataBonus?.bonus_type || 'Bonus Type',
                                link: '#',
                            },
                        ]}
                    />
                    <HeaderSimpleBonus data={data?.dataBonus} geoLocation={geoLocation} />
                    {geoLocation.isAllowed && (
                        <>
                            <BonusSubType bonus_subtype={data?.dataBonus?.bonus_subtype || []} />
                            <LastUpdate data={data?.dataBonus} />
                            <HowToGetBonus data={data?.dataBonus} />
                            <SiblingBonus
                                casinoName={data?.dataBonus.casino_name}
                                sibling_bonuses={data?.dataBonus.sibling_bonuses}
                                casino_rank={data?.dataBonus?.casino_rank}
                                casino_affiliate_link={data?.dataBonus.casino_affiliate_link || data?.dataBonus?.url_casino}
                                casino_id={data?.dataBonus?.casino_id}
                            />
                        </>
                    )}
                    <OtherBestReloadBonus />
                    <EssentialVIPLoyaltyPrograms />
                    {geoLocation.isAllowed && (
                        <>
                            <HarryStyles img={ASHLINGOBRIEN} title="ASHLING O'BRIEN" subtitle="Content Maker, Casino Promotions Analyst" />
                            <CheckMoreWhatSuitsYouBest />
                        </>
                    )}
                    <SubscribeForm />
                    <BottomInfo />
                </div>
            </main>
        </Wraper>
    )
}
