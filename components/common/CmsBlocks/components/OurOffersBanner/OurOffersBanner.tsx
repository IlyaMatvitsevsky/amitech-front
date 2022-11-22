import { FC } from 'react';
import { OurOffersBannerData } from '@lib/cms/types/page';
import { OurOfferItem } from '@components/common/CmsBlocks/components/OurOffersBanner/OurOfferItem';

type OurOffersBannerType = {
  items: OurOffersBannerData[]
}

const OurOffersBanner:FC<OurOffersBannerType> = ({ items }) => {

  return (
    <div>
      {items.map((item, index) => (
        <OurOfferItem key={index} item={item} count={index} />
      ))}
    </div>
  )
}

export default OurOffersBanner