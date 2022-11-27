import { FC } from 'react'
import { DescriptionBannerData } from '@lib/cms/types/page'
import Image from 'next/image';
import { Button } from '@components/ui';
import cn from 'clsx';

import s from './DescriptionBanner.module.css'

type DescriptionBannerType = {
  data: DescriptionBannerData
}

const DescriptionBanner: FC<DescriptionBannerType> = ({ data }) => {

  const { description, button, image, title } = data
  return (
      <div className={s.wrapper}>
        <div className={s.wrapperInfo}>
          <p className={s.title}>{title}</p>
          <p className={s.text}>{description}</p>
          <Button
            variant={button?.buttonType}
          >
            {button?.label}
          </Button>
        </div>
        <div className={s.wrapperImage}>
          <figure className={cn(s.figure, s.icons)}>
            <picture className={cn(s.picture, s.icons)}>
              <Image
                priority
                alt={image?.altText}
                src={image?.url!}
                layout="fill"
                objectFit="fill"
              />
            </picture>
          </figure>
        </div>
      </div>
  )
}

export default DescriptionBanner
