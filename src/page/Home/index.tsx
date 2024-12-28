// import { lazy, useEffect, useState, Suspense } from 'react'
// import { Wraper } from '../Wraper'
// import { useAdaptiveBehavior } from '../../context/AppContext'
// import { Categories } from '../../components/categories/Categories'
// import BlockType1 from './BlockType1'
// import BlockType2Mobile from './BlockType2Mobile'
// import BlockType3Mobile from './BlockType3Mobile'
// import BlockType4Mobile from './BlockType4Mobile'
// import BlockType5Mobile from './BlockType5Mobile'
// import BlockType6 from './BlockType6'
// import BlockType7Mobile from './BlockType7Mobile'
// import BlockType9 from './BlockType9'
// import BlockType8 from './BlockType8'
// import $api from '../../http'
// import { useQuery } from 'react-query'
// import { LogoLoader } from '../../components/loader/LogoLoader'
// import { BlockTypeNumber, HomeDataBlock, HomeDataBlockMobile } from '../../types'
// import BlockType2 from './BlockType2'
// import BlockType3 from './BlockType3'
// import BlockType4 from './BlockType4'
// import BlockType7 from './BlockType7'
// import BlockType5 from './BlockType5'
// import BlockMType2M from './BlockMType2M'
// import BlockMType3M from './BlockMType3M'
// const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))
// const SubscribeForm = lazy(() => import('../SimpleBonus/SubscribeForm'))
// const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
// const MoreBonusesForYourChoise = lazy(() => import('./MoreBonusesForYourChoise'))

import { lazy, useEffect, useState, Suspense } from 'react'
import { Wraper } from '../Wraper'
import { useAdaptiveBehavior } from '../../context/AppContext'


import BlockType1 from './BlockType1'
const BlockType2Mobile = lazy(() => import('./BlockType2Mobile'))
const BlockType3Mobile = lazy(() => import('./BlockType3Mobile'))
const BlockType4Mobile = lazy(() => import('./BlockType4Mobile'))
const BlockType5Mobile = lazy(() => import('./BlockType5Mobile'))
const BlockType6 = lazy(() => import('./BlockType6'))
const BlockType7Mobile = lazy(() => import('./BlockType7Mobile'))
const BlockType9 = lazy(() => import('./BlockType9'))
const BlockType8 = lazy(() => import('./BlockType8'))
const BlockType2 = lazy(() => import('./BlockType2'))
const BlockType3 = lazy(() => import('./BlockType3'))
const BlockType4 = lazy(() => import('./BlockType4'))
const BlockType7 = lazy(() => import('./BlockType7'))
const BlockType5 = lazy(() => import('./BlockType5'))
const BlockMType2M = lazy(() => import('./BlockMType2M'))
const BlockMType3M = lazy(() => import('./BlockMType3M'))
const BottomInfo = lazy(() => import('../../components/footer/BottomInfo'))
const SubscribeForm = lazy(() => import('../../components/subscribe/SubscribeForm'))
const CheckMoreWhatSuitsYouBest = lazy(() => import('../../components/categories/CheckMoreWhatSuitsYouBest'))
const MoreBonusesForYourChoise = lazy(() => import('./MoreBonusesForYourChoise'))

import $api from '../../http'
import { useQuery } from 'react-query'
import { LogoLoader } from '../../components/loader/LogoLoader'
import { BlockTypeNumber, HomeDataBlock, HomeDataBlockMobile } from '../../types'
import { Categories } from '../../components/categories/Categories'


export type LazyImgHomeType = 'lazy' | 'eager' | undefined

const getHomeDataFetch = async () => {
    const response = await $api.get('get-data-home-page/')
    const headers = response.headers

    return {
        dataHome: response?.data?.data_blocks?.sort((a: any, b: any) => a?.blocks_sequence_number - b?.blocks_sequence_number),
        dataHomeMobile: response?.data?.data_blocks_m?.sort((a: any, b: any) => a?.blocks_sequence_number - b?.blocks_sequence_number),
        headers,
    }
}

const renderBlock = (block: any, index: number, isMobile: boolean) => {
    const lazyLoadImg: LazyImgHomeType = index < 3 ? 'eager' : 'lazy'

    switch (block.items_block.type_block) {
        case BlockTypeNumber.BlockType1:
            return <BlockType1 data={block} />
        case BlockTypeNumber.BlockType9:
            return <BlockType9 data={block} />
        case BlockTypeNumber.BlockType2M:
            return <BlockMType2M data={block} lazyLoadImg={lazyLoadImg} />
        case BlockTypeNumber.BlockType3M:
            return <BlockMType3M data={block} />
        case BlockTypeNumber.BlockType6:
            return <BlockType6 data={block} />
        case BlockTypeNumber.BlockType8:
            return <BlockType8 data={block} />
        case BlockTypeNumber.BlockType2:
            return <>{isMobile ? <BlockType2Mobile data={block} /> : <BlockType2 data={block} />}</>

        case BlockTypeNumber.BlockType3:
            return <>{isMobile ? <BlockType3Mobile data={block} /> : <BlockType3 data={block} />}</>
        case BlockTypeNumber.BlockType4:
            return <>{isMobile ? <BlockType4Mobile data={block} /> : <BlockType4 data={block} />}</>
        case BlockTypeNumber.BlockType7:
            return <>{isMobile ? <BlockType7Mobile data={block} /> : <BlockType7 data={block} />}</>
        case BlockTypeNumber.BlockType5:
            return <>{isMobile ? <BlockType5Mobile data={block} /> : <BlockType5 data={block} />}</>

        default:
            return null
    }
}

export default function Home() {
    // // document.title = "Home"
    //@ts-ignore
    const { isSidebarActive, setSidebarActive, initializeAdaptiveBehavior } = useAdaptiveBehavior()
    const { data, isLoading } = useQuery<{
        dataHome: { data_blocks: HomeDataBlock[] }[]
        dataHomeMobile: { data_blocks_m: HomeDataBlockMobile[] }[]
        headers: any
    }>('get-data-home-page/ ', getHomeDataFetch, {
        staleTime: Infinity,
        cacheTime: 1000 * 60 * 10,
    })

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

    useEffect(() => {
       
        const handleResize = () => setIsMobile(window.innerWidth <= 480)
        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        initializeAdaptiveBehavior()
    }, [isLoading])

    const blocksToRender = isMobile ? data?.dataHomeMobile : data?.dataHome

     const firstThreeBlocks = blocksToRender?.slice(0, 2) || []
     const remainingBlocks = blocksToRender?.slice(2) || []


    if (!blocksToRender?.length) return (
            <LogoLoader />
    )
    

    return (
        <>
            {/* {!blocksToRender?.length && <LogoLoader />} */}
            <Wraper>
                <main className="gamble__main main-gamble">
                    <div className="main-gamble__body">
                        <Categories />
                        {/* <div className="home--main--pc">
                    {data?.dataHome?.map((block) => renderBlock(block))}
                    </div>
                    <div className="home--main--mob">
                    {data?.dataHomeMobile?.map((block) => renderBlock(block))}

                    </div> */}
                        {firstThreeBlocks?.map((block, index) => renderBlock(block, index, isMobile))}

                        <Suspense>{remainingBlocks?.map((block, index) => renderBlock(block, index + 3, isMobile))}</Suspense>
                        {/* Лениво загружаем оставшиеся блоки */}

                        {/* <FastestPayoutCasinos /> */}
                        {/* <div className="main-gamble__different-casino-bg main-gamble__baner-block">
                        <WhatWeArePlayingNow />
                    </div> */}
                        {/* <FastestWithdrawalCasinos />
                    <WeeksFavoiritesBonuses /> */}
                        {/* <TheBestCasinosYear /> */}
                        {/* <PopularFree /> */}
                        {/* <HighrollerCasinoBonuses />
                    <NewlyOpenedCasinos />
                    <div className="main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble">
                        <WhatWeArePlayingNow />
                    </div> */}
                        {/* <ExploreTheBestCryptoCasinos />
                    <GetStartedWithPowerfulWelcomeBonusPacks /> */}
                        {/* <VPNFriendlyCasinos /> */}
                        {/* <NonStickyBonus />
                    <TopReloadBonuses /> */}
                        {/* <BlockType7Mobile
                        data={data?.dataHome?.data_blocks?.find(
                            (item) =>
                                item.items_block.type_block ===
                                BlockTypeNumber.BlockType7
                        )}
                    /> */}
                        {/* <GreatLiveCasinoBonuses /> */}
                        <MoreBonusesForYourChoise />
                        <CheckMoreWhatSuitsYouBest />
                        <SubscribeForm />
                        <BottomInfo />
                    </div>
                </main>
            </Wraper>
        </>
    )
}
