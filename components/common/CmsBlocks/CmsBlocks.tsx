import { FC } from 'react'
import { BlockType, PageBlock } from '@lib/cms/types/page'

import DescriptionBanner from '@components/common/CmsBlocks/components/DescriptionBanner';
import OrganizationDescription from '@components/common/CmsBlocks/components/OrganizationDescription';
import TechnologiesBanner from '@components/common/CmsBlocks/components/TechnologiesBanner';
import OrganizationBanner from '@components/common/CmsBlocks/components/OrganizationBanner';
import ServicesBanner from '@components/common/CmsBlocks/components/ServicesBanner';
import AcceleratorBanner from '@components/common/CmsBlocks/components/AcceleratorBanner';
import OurOffersBanner from '@components/common/CmsBlocks/components/OurOffersBanner';
import ReviewsSlider from '@components/common/CmsBlocks/components/ReviewsSlider';
import FeaturedWorkBanner from '@components/common/CmsBlocks/components/FeaturedWorkBanner';

interface Props {
  items: PageBlock[]
}

const CmsBlocks: FC<Props> = ({ items }) => {
  return (
    <div className="px-4">
      {items.map((block, index) => {
        switch ( block.type ) {
          case BlockType.DescriptionBanner: {
            return <DescriptionBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.OrganizationDescription: {
            return <OrganizationDescription key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.TechnologiesBanner: {
            return <TechnologiesBanner key={block.type+index+Date.now()} isBg={block.isBg} data={block.items}/>
          }
          case BlockType.OrganizationBanner: {
            return <OrganizationBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.ServicesBanner: {
            return <ServicesBanner key={block.type+index+Date.now()} services={block.services} items={block.items}/>
          }
          case BlockType.AcceleratorBanner: {
            return <AcceleratorBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.OurOffersBanner: {
            return <OurOffersBanner key={block.type+index+Date.now()} items={block.items}/>
          }
          case BlockType.ReviewsSlider: {
            return <ReviewsSlider key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.FeaturedWorkBanner: {
            return <FeaturedWorkBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          // case BlockType.CategoryList: {
          //   return <FeaturedCategories key={index} data={block.data} items={block.items} />
          // }
          default: {
            return null
          }
        }
      })}
    </div>
  )
}

export default CmsBlocks
