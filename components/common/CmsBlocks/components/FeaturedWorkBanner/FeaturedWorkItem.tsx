import { FC } from 'react';
import { FeaturedWorkBannerItem } from '@lib/cms/types/page';

import s from './FeaturedWorkItem.module.css'
import { Button, Link } from '@components/ui';
import cn from 'clsx';
import Image from 'next/image';

type FeaturedWorkItemType = {
  item: FeaturedWorkBannerItem
}

const FeaturedWorkItem: FC<FeaturedWorkItemType> = ({ item }) => {
  const { title, image, description, button } = item
  return (
    <div className={s.wrapper}>
      <Link href={button?.path || ''} className={s.linkWrapper}>
        <div className={s.imageWrapper}>
          <figure className={cn(s.figure)}>
            <Image
              src={image?.url!}
              layout="fill"
              objectFit="fill"
            />
          </figure>
        </div>
        <h3 className={s.title}>{title}</h3>
      </Link>
      <p className={s.text}>{description}</p>
      <Button
        variant={button?.buttonType}
        href={button?.path}
        className={s.button}
      >
        {button?.label}
      </Button>
    </div>
  )
}

export default FeaturedWorkItem