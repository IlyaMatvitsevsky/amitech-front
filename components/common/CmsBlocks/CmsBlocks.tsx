import { FC } from 'react'
import { BlockType, PageBlock } from '@lib/cms/types/page'
import dynamic from 'next/dynamic';

const DescriptionBanner = dynamic( () => import('@components/common/CmsBlocks/components/DescriptionBanner'));
const OrganizationDescription = dynamic( () => import('@components/common/CmsBlocks/components/OrganizationDescription'));
const TechnologiesBanner = dynamic( () => import('@components/common/CmsBlocks/components/TechnologiesBanner'));
const OrganizationBanner = dynamic( () => import('@components/common/CmsBlocks/components/OrganizationBanner'));
const ServicesBanner = dynamic( () => import('@components/common/CmsBlocks/components/ServicesBanner'));
const AcceleratorBanner = dynamic( () => import('@components/common/CmsBlocks/components/AcceleratorBanner'));
const OurOffersBanner = dynamic( () => import('@components/common/CmsBlocks/components/OurOffersBanner'));
const ReviewsSlider = dynamic( () => import('@components/common/CmsBlocks/components/ReviewsSlider'));
const FeaturedWorkBanner = dynamic( () => import('@components/common/CmsBlocks/components/FeaturedWorkBanner'));
const EngagementModel = dynamic( () => import('@components/common/CmsBlocks/components/EngagementModel'));
const CodeOfConductBanner = dynamic( () => import('@components/common/CmsBlocks/components/CodeOfConductBanner'));
const ContactUsBanner = dynamic( () => import('@components/common/CmsBlocks/components/ContactUsBanner'));

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
          case BlockType.EngagementModel: {
            return <EngagementModel key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.CodeOfConductBanner: {
            return <CodeOfConductBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          case BlockType.ContactInfoBanner: {
            return <ContactUsBanner key={block.type+index+Date.now()} data={block.data}/>
          }
          default: {
            return null
          }
        }
      })}
    </div>
  )
}

export default CmsBlocks
