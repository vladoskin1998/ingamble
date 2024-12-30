import { lazy } from 'react'

import { BlockTypeNumber } from '../../types'

const BlockType1 = lazy(() => import('./BlockType1'))
const BlockType2Mobile = lazy(() => import('./BlockType2Mobile'))
const BlockType3Mobile = lazy(() => import('./BlockType3Mobile'))
const BlockType4Mobile = lazy(() => import('./BlockType4Mobile'))
const BlockType5Mobile = lazy(() => import('./BlockType5Mobile'))
const BlockType6 = lazy(() => import('./BlockType6'))
const BlockType7Mobile = lazy(() => import('./BlockType7Mobile'))
const BlockType9 = lazy(() => import('./BlockType9'))
const BlockType8 = lazy(() => import('./BlockType8'))

const BlockMType2M = lazy(() => import('./BlockMType2M'))
const BlockMType3M = lazy(() => import('./BlockMType3M'))



const renderBlock = (block: any,) => {
    

    switch (block.items_block.type_block) {
        case BlockTypeNumber.BlockType1:
            return <BlockType1 data={block} />
        case BlockTypeNumber.BlockType9:
            return <BlockType9 data={block} />
        case BlockTypeNumber.BlockType2M:
            return <BlockMType2M data={block}  />
        case BlockTypeNumber.BlockType3M:
            return <BlockMType3M data={block} />
        case BlockTypeNumber.BlockType6:
            return <BlockType6 data={block} />
        case BlockTypeNumber.BlockType8:
            return <BlockType8 data={block} />
        case BlockTypeNumber.BlockType2:
            return <BlockType2Mobile data={block} /> 

        case BlockTypeNumber.BlockType3:
            return <BlockType3Mobile data={block} /> 
        case BlockTypeNumber.BlockType4:
            return <BlockType4Mobile data={block} /> 
        case BlockTypeNumber.BlockType7:
            return <BlockType7Mobile data={block} /> 
        case BlockTypeNumber.BlockType5:
            return  <BlockType5Mobile data={block} /> 

        default:
            return null
    }
}


export default function HomeMob(
    blocksToRender: any | undefined,
) {
    
    return <>{(blocksToRender?.blocksToRender || [])?.map((block: any) => renderBlock(block))}</>
}