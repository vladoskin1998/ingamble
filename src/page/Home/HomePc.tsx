
import { lazy } from 'react'
import { BlockTypeNumber} from '../../types'

const BlockType1 = lazy(() => import('./BlockType1'))
const BlockType6 = lazy(() => import('./BlockType6'))
const BlockType9 = lazy(() => import('./BlockType9'))
const BlockType8 = lazy(() => import('./BlockType8'))
const BlockType2 = lazy(() => import('./BlockType2'))
const BlockType3 = lazy(() => import('./BlockType3'))
const BlockType4 = lazy(() => import('./BlockType4'))
const BlockType7 = lazy(() => import('./BlockType7'))
const BlockType5 = lazy(() => import('./BlockType5'))
const BlockMType2M = lazy(() => import('./BlockMType2M'))
const BlockMType3M = lazy(() => import('./BlockMType3M'))

export type LazyImgHomeType = 'lazy' | 'eager' | undefined


const renderBlock = (block: any) => {
   

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
            return  <BlockType2 data={block} />

        case BlockTypeNumber.BlockType3:
            return  <BlockType3 data={block} />
        case BlockTypeNumber.BlockType4:
            return <BlockType4 data={block} />
        case BlockTypeNumber.BlockType7:
            return  <BlockType7 data={block} />
        case BlockTypeNumber.BlockType5:
            return <BlockType5 data={block} />

        default:
            return null
    }
}

export default function HomePc(blocksToRender: any) {

    console.log(blocksToRender)
    
    return <>{blocksToRender?.blocksToRender.map((block: any) => renderBlock(block))}</>
}