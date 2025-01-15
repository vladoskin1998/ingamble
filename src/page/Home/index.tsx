import { useEffect, useState } from 'react'
import { Wraper } from '../Wraper'
// import { useAdaptiveBehavior } from '../../context/AppContext'
import { Categories } from '../../components/categories/Categories'
import { useQuery } from 'react-query'
import { LogoLoader } from '../../components/loader/LogoLoader'
import $api from '../../http'
import { BlockTypeNumber, HomeDataBlock, HomeDataBlockMobile } from '../../types'
import BlockType1 from './BlockType1'
import BlockType9 from './BlockType9'
import BlockMType2M from './BlockMType2M'
import BlockMType3M from './BlockMType3M'
import BlockType6 from './BlockType6'
import BlockType8 from './BlockType8'
import BlockType2Mobile from './BlockType2Mobile'
import BlockType2 from './BlockType2'
import BlockType3Mobile from './BlockType3Mobile'
import BlockType3 from './BlockType3'
import BlockType4Mobile from './BlockType4Mobile'
import BlockType4 from './BlockType4'
import BlockType7Mobile from './BlockType7Mobile'
import BlockType7 from './BlockType7'
import BlockType5 from './BlockType5'
import BlockType5Mobile from './BlockType5Mobile'
import BlockType10 from './BlockType10'
import BlockType11 from './BlockType11'
import MoreBonusesForYourChoise from './MoreBonusesForYourChoise'
import CheckMoreWhatSuitsYouBest from '../../components/categories/CheckMoreWhatSuitsYouBest'
import SubscribeForm from '../../components/subscribe/SubscribeForm'
import BottomInfo from '../../components/footer/BottomInfo'
import BlockType10Mobile from './BlockType10Mobile'




export type LazyImgHomeType = 'lazy' | 'eager' | undefined

const getHomeDataFetch = async (src:string) => {
    const response = await $api.get(src)
    const headers = response.headers

    return {
        dataHome: response?.data?.data_blocks?.sort((a: any, b: any) => a?.blocks_sequence_number - b?.blocks_sequence_number),
        dataHomeMobile: response?.data?.data_blocks_m?.sort((a: any, b: any) => a?.blocks_sequence_number - b?.blocks_sequence_number),
        headers,
    }
}

const renderBlock = (block: any,  isMobile: boolean) => {


    switch (block.items_block.type_block) {
        case BlockTypeNumber.BlockType1:
            return <BlockType1 data={block} />
        case BlockTypeNumber.BlockType9:
            return <BlockType9 data={block} />
        case BlockTypeNumber.BlockType2M:
            return <BlockMType2M data={block} />
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
  
        case BlockTypeNumber.BlockType10:
            return <> <BlockType10Mobile data={block} />  <BlockType10 data={block} /></>
        case BlockTypeNumber.BlockType11:
            return <BlockType11 data={block} />
        default:
            return null
    }
}

export default function Home({ src = 'get-data-home-page/' }: { src?: string }) {
  
    const { data, isLoading } = useQuery<{
        dataHome: HomeDataBlock[]
        dataHomeMobile: HomeDataBlockMobile[]
        headers: any
    }>(['get-data-home-page/', src], () => getHomeDataFetch(src), {
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



    const blocksToRender = isMobile ? data?.dataHomeMobile : data?.dataHome
//   const blocksToRender =  data?.dataHome
    if (isLoading) return <LogoLoader />

    return (
        <>
            <Wraper>
                <main className="gamble__main main-gamble">
                    <div className="main-gamble__body">
                        <Categories />
                      
                        {blocksToRender?.map((block) => renderBlock(block,  isMobile))}

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
