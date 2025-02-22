import { Wraper } from '../Wraper'
import { Categories } from '../../components/categories/Categories'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb'
import { LoyaltieCasinoInfo } from './LoyaltieCasinoInfo'
import { LoyaltyRewnew } from './LoyaltyRewnew'
import { LoyaltyText } from './LoyaltyText'
import { HowToStartVipJorney } from './HowToStartVipJorney'
import { HarryStyles } from '../SimpleBonus/HarryStyles'
import { LoyaltyAcordeon } from './LoyaltyAcordeon'
import $api from '../../http'

import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { GeoLocationAllowdType, LoyaltieProgramDataResponse } from '../../types'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { lazy, useEffect, useState } from 'react'
import { useFilterContext } from '../../context/FilterContext'
import { SiblingBonus } from '../SimpleBonus/SiblingBonus'
import { OtherBestReloadBonus } from '../SimpleBonus/OtherBestBonus'
import { EssentialVIPLoyaltyPrograms } from '../SimpleBonus/EssentialVIPLoyaltyPrograms'
import JEFFMURPHY from '../../assets/img/casino-person/4.webp'
import initializeAdaptiveBehavior from '../../helper/adaprive-bahavior'

const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))

const getCurrentLoyaltiesFetchData = async (slug: string) => {
    const response = await $api.get(`get-data-loyalty-program/${slug}/`)

    const headers = response.headers

    return { dataCurrentLoyaltie: response.data, headers }
}

export default function SimpleLoyalties() {
    // document.title = " Loyaltie"
    const [slug, setSlug] = useState<string>('')
    const [geoLocation, setGeoLocation] = useState<GeoLocationAllowdType>({
        countryCode: '',
        countryName: '',
        isAllowed: true,
        isLoadedGeo: false,
        countryImg: undefined,
        idCountry: null
    })

   

   const { loyaltie_slug } = useParams()

    const { data: Country } = useFilterContext()
    const { data, isLoading } = useQuery<{
        dataCurrentLoyaltie: LoyaltieProgramDataResponse
        headers: any
    }>(['get-data-casino', slug], () => getCurrentLoyaltiesFetchData(slug), {
        keepPreviousData: true,
        enabled: !!slug,
    })

    useEffect(() => {
        if (loyaltie_slug) {
            setSlug(loyaltie_slug)
            window.scrollTo(0, 0)
        }
    }, [loyaltie_slug])

    useEffect(() => {
        if (data?.headers) {
            const countryCode = data?.headers?.['cf-ipcountry-code']
            const countryName = data?.headers?.['cf-ipcountry']

            const countryImg = (Country?.general?.countries )?.find((it) => {
                return it.code === countryCode || it.name.toLocaleLowerCase() === countryName.toLocaleLowerCase()
            })?.flag_image

            const idCountry = data?.dataCurrentLoyaltie?.blocked_countries?.find((item) => item?.code?.toLocaleLowerCase() === countryCode?.toLocaleLowerCase())?.id            

            setGeoLocation({
                countryCode,
                countryName,
                isAllowed: !idCountry,
                isLoadedGeo: true,
                countryImg,
                idCountry,
            })
        }
    }, [data, Country])

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
                                link: '/    ',
                            },
                            {
                                name: 'Casino',
                                link: '/all-casinos',
                            },
                            {
                                name: data?.dataCurrentLoyaltie?.casino_name || 'Casino Name',
                                link: `/casino/${data?.dataCurrentLoyaltie?.casino_slug}`,
                            },
                            {
                                name: 'Loyalties',
                                link: `/all-loyalties`,
                            },
                            {
                                name: `${data?.dataCurrentLoyaltie?.casino_name} Vip Loyalty Program`,
                                link: `/all-loyalties`,
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
                        slug={data?.dataCurrentLoyaltie?.casino_slug}
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
                        casino_slug={data?.dataCurrentLoyaltie?.casino_slug}
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
