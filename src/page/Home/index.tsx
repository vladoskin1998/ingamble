import { useEffect, useMemo, useState } from 'react'
import { Wraper } from '../Wraper'
// import { useAdaptiveBehavior } from '../../context/AppContext'
import { Categories } from '../../components/categories/Categories'
import { useQuery } from 'react-query'
//@ts-ignore
import { LogoLoader } from '../../components/loader/LogoLoader'
import $api from '../../http'
import { BlockTypeNumber, DataHomeItemsBlockCategoryType, DataHomeItemsBlockEnumCategory, HomeDataBlock, HomeDataBlockMobile } from '../../types'
import BlockType1 from './BlockType1'
import BlockType9 from './BlockType9'
import BlockMType2M from './BlockMType2M'
import BlockMType3M from './BlockMType3M'
import BlockType6 from './BlockType6'
//
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
import BlockType10Mobile from './BlockType10Mobile'
import { BlockFooter } from './BlockFooter'

const ViteTitle = import.meta.env.VITE_TITLE
const isDeger = ViteTitle.includes('DegenCatapult')

export type LazyImgHomeType = 'lazy' | 'eager' | undefined

const categoriesTypeBySrc = (src: string): { type_category: DataHomeItemsBlockCategoryType; blocks_sequence_number: number } => {
    switch (src) {
        case 'get-data-hub-page-casino/':
            return { type_category: DataHomeItemsBlockEnumCategory.casino_category as DataHomeItemsBlockCategoryType, blocks_sequence_number: 3.5 }
        case 'get-data-hub-page-bonus/':
            return { type_category: DataHomeItemsBlockEnumCategory.bonus_category as DataHomeItemsBlockCategoryType, blocks_sequence_number: 2.5 }
        default:
            return { type_category: DataHomeItemsBlockEnumCategory.all_category as DataHomeItemsBlockCategoryType, blocks_sequence_number: 7.5 }
    }
}

const getHomeDataFetch = async (src: string) => {
    const response = await $api.get(src)
    const headers = response.headers

    return {
        dataHome: response?.data?.data_blocks,
        dataHomeMobile: response?.data?.data_blocks_m,
        headers,
    }
}

const getBlockByCountry = async (): Promise<HomeDataBlock> => {
    let response = await $api.get('get-block-by-country/')

    return response.data
}

const renderBlock = (block: any, isMobile: boolean, index: number) => {
    console.log("block",block)
    
    const isAutoPlay = !index
    const initialInView = index < 2 ? true : false
    switch (block?.items_block?.type_block) {
        case BlockTypeNumber.BlockType1:
            return <BlockType1 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType9:
            return <BlockType9 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType2M:
            return <BlockMType2M data={block} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType3M:
            return <BlockMType3M data={block} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType6:
            return <BlockType6 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType6c:
            return <BlockType6 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType8:
            return <BlockType1 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />
        case BlockTypeNumber.BlockType2:
            return <>{isMobile ? <BlockType2Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType2 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType3:
            return <>{isMobile ? <BlockType3Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType3 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType4:
            return <>{isMobile ? <BlockType4Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType4 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType7:
            return <>{isMobile ? <BlockType7Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType7 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType5:
            return <>{isMobile ? <BlockType5Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType5 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType10:
            return <>{isMobile ? <BlockType10Mobile data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} /> : <BlockType10 data={block} initialInView={initialInView} isAutoPlay={isAutoPlay} />}</>
        case BlockTypeNumber.BlockType11:
            return <BlockType11 data={block} initialInView={initialInView} />
        default:
            return <BlockFooter initialInView={initialInView} />
    }
}



export default function Home({ src = 'get-data-home-page/' }: { src?: string }) {
    //@ts-ignore
    const { data, isLoading } = useQuery<{
        dataHome: HomeDataBlock[]
        dataHomeMobile: HomeDataBlockMobile[]
        headers: any
    }>(['get-data-home-page/', src], () => getHomeDataFetch(src), {
        staleTime: Infinity,
        cacheTime: 1000 * 60 * 10,
    })
    //@ts-ignore
    let { data: blockByCountry, isLoading: isLoadingBlock } = useQuery<HomeDataBlock>(['get-block-by-country/'], getBlockByCountry, {
        staleTime: Infinity,
        cacheTime: 1000 * 60 * 10,
        enabled: !!!isDeger,
    })

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480)
        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { blocks_sequence_number } = categoriesTypeBySrc(src)
    if (blockByCountry) {
        blockByCountry = {
            ...blockByCountry,
            blocks_sequence_number: blocks_sequence_number,
        }
    }

    const blocksToRender = useMemo(() => {
        if (!data?.dataHome.length || (isMobile && !data?.dataHome.length)) return []
        const blocks = isMobile
            ? [...(data?.dataHomeMobile || []), blockByCountry, { blocks_sequence_number: (data?.dataHomeMobile?.length || 0) + 10 }]
            : [...(data?.dataHome || []), blockByCountry, { blocks_sequence_number: (data?.dataHomeMobile?.length || 0) + 10 }]
        return blocks.filter(Boolean).sort((a, b) => (a?.blocks_sequence_number || 0) - (b?.blocks_sequence_number || 0))
    }, [isMobile, data, blockByCountry])

   
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [src])

    if ((isLoading || isLoadingBlock) && src !== 'get-data-home-page/') return <LogoLoader />

    return (
        <>
        
            <Wraper footerInView={!isLoading && !isLoadingBlock}>
                <main className="gamble__main main-gamble">
                    <div className="main-gamble__body">
                        <Categories type_category={categoriesTypeBySrc(src).type_category} />
                        {blocksToRender.map((block, index) => renderBlock(block, isMobile, index))}
                    </div>
                </main>
            </Wraper>
        </>
    )
}
