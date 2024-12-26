import { Wraper } from '../Wraper'
import { Categories } from '../../components/categories/Categories'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { LoyaltieCasinoInfo } from './LoyaltieCasinoInfo'
import { LoyaltyRewnew } from './LoyaltyRewnew'
import { LoyaltyText } from './LoyaltyText'
import { HowToStartVipJorney } from './HowToStartVipJorney'
import { HarryStyles } from '../SimpleBonus/HarryStyles'
import { CheckMoreWhatSuitsYouBest } from '../../components/categories/CheckMoreWhatSuitsYouBest'
import SubscribeForm from '../SimpleBonus/SubscribeForm'
import { LoyaltyAcordeon } from './LoyaltyAcordeon'
import $api from '../../http'
import { useAdaptiveBehavior } from '../../context/AppContext'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { GeoLocationAllowdType, LoyaltieProgramDataResponse } from '../../types'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { lazy, useEffect, useState } from 'react'

import { useFilterContext } from '../../context/FilterContext'
import { SiblingBonus } from '../SimpleBonus/SiblingBonus'
import { COUNTRIES } from '../../helper/Country'
import { OtherBestReloadBonus } from '../SimpleBonus/OtherBestBonus'
import { EssentialVIPLoyaltyPrograms } from '../SimpleBonus/EssentialVIPLoyaltyPrograms'
import JEFFMURPHY from '../../assets/img/casino-person/4.webp'
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))

const getCurrentLoyaltiesFetchData = async (queryId: string) => {
    const response = await $api.get(`get-data-loyalty-program/${queryId}/`)

    const headers = response.headers

    return { dataCurrentLoyaltie: response.data, headers }
}

export default function SimpleLoyalties() {
    // document.title = " Loyaltie"
    const [queryId, setQueryId] = useState<string>('')
    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: '',
        countryName: '',
        isAllowed: true,
        isLoadedGeo: false,
        countryImg: undefined,
    })

    const { initializeAdaptiveBehavior } = useAdaptiveBehavior()

    const [searchParams] = useSearchParams()
    const qid = searchParams.get('queryId')

    const { data: Country } = useFilterContext()
    const { data, isLoading } = useQuery<{
        dataCurrentLoyaltie: LoyaltieProgramDataResponse
        headers: any
    }>(['get-data-casino', queryId], () => getCurrentLoyaltiesFetchData(queryId!), {
        keepPreviousData: true,
        enabled: !!queryId,
    })

    useEffect(() => {
        if (qid) {
            setQueryId(qid)
            window.scrollTo(0, 0)
        }
    }, [qid])

    useEffect(() => {
        if (data?.headers) {
            const countryCode = data?.headers?.['cf-ipcountry-code']
            const countryName = data?.headers?.['cf-ipcountry']

            const countryImg = (Country?.general?.countries || COUNTRIES)?.find((it) => {
                return it.code === countryCode || it.name.toLocaleLowerCase() === countryName.toLocaleLowerCase()
            })?.flag_image

            const isAllowed = !data.dataCurrentLoyaltie?.blocked_countries?.find((item) => item?.code?.toLocaleLowerCase() === countryCode?.toLocaleLowerCase())

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed,
                isLoadedGeo: true,
                countryImg,
            })
        }
    }, [data, Country, COUNTRIES])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    if (isLoading || !geoLocation.isLoadedGeo) return <LogoLoader />
    // if (isLoading) return <LogoLoader />
    return (
        <Wraper>
            <main className="gamble__loyaltie main-gamble loyaltie">
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
                                name: 'Casino Name',
                                link: 'https://cryptogamblers.pro/casino/iwild-casino',
                            },
                            {
                                name: 'Bonuses',
                                link: 'https://cryptogamblers.pro/casino/iwild-casino/bonuses',
                            },
                            {
                                name: 'Bonus Type',
                                link: '#',
                            },
                        ]}
                    />
                    <LoyaltieCasinoInfo data={data?.dataCurrentLoyaltie} geoLocation={geoLocation} />
                    {data?.dataCurrentLoyaltie?.loyalty_keypoint.length && <LoyaltyRewnew loyalty_subtype={data?.dataCurrentLoyaltie.loyalty_keypoint} />}

                    <LoyaltyAcordeon data={data?.dataCurrentLoyaltie} />

                    <LoyaltyText data={data?.dataCurrentLoyaltie} />
                    <HowToStartVipJorney
                        casino_affiliate_link={data?.dataCurrentLoyaltie?.casino_affiliate_link || data?.dataCurrentLoyaltie.url_casino}
                        casino_name={data?.dataCurrentLoyaltie?.casino_name}
                        likes={data?.dataCurrentLoyaltie?.likes}
                        queryId={data?.dataCurrentLoyaltie?.casino_id}
                        link_tc={data?.dataCurrentLoyaltie?.link_tc || ''}
                        id={data?.dataCurrentLoyaltie.id}
                    />
                    <div className="main-gamble-loyaltie-mob">
                        <EssentialVIPLoyaltyPrograms />
                    </div>
                    <SiblingBonus
                        casinoName={data?.dataCurrentLoyaltie?.casino_name}
                        sibling_bonuses={data?.dataCurrentLoyaltie.sibling_bonuses}
                        casino_rank={data?.dataCurrentLoyaltie?.casino_rank}
                        casino_affiliate_link={data?.dataCurrentLoyaltie?.casino_affiliate_link || data?.dataCurrentLoyaltie.url_casino}
                        casino_id={data?.dataCurrentLoyaltie?.casino_id}
                    />

                    <OtherBestReloadBonus />
                    <div className="main-gamble-loyaltie-pc">
                        <EssentialVIPLoyaltyPrograms />
                    </div>

                    <HarryStyles img={JEFFMURPHY} title={'JEFF MURPHY'} subtitle={'Content Maker, Crypto & Gambling Enthusiast'} />
                    <CheckMoreWhatSuitsYouBest />
                    <SubscribeForm />
                    <BottomInfo />
                </div>
            </main>
        </Wraper>
    )
}
