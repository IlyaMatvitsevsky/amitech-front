import { FC } from 'react';
import { FeaturedWorkBannerItem } from '@lib/cms/types/page';
import { Button, Link } from '@components/ui';
import cn from 'clsx';
import Image from 'next/image';

import s from './FeaturedWorkItem.module.css'
import { useRouter } from 'next/router';

type FeaturedWorkItemType = {
  item: FeaturedWorkBannerItem
}

const FeaturedWorkItem: FC<FeaturedWorkItemType> = ({ item }) => {
  const { title, image, description, button } = item
  const {push} = useRouter()
  return (
    <div className={s.wrapper}>
      <Link href={`/case-studies/${title}`} className={s.linkWrapper}>
        <div className={s.imageWrapper}>
          <figure className={cn(s.figure)}>
            <Image
              alt={image?.altText}
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
        onClick={() => push(`/case-studies/${title}`)}
        variant={button?.buttonType}
        className={s.button}
      >
        {button?.label}
      </Button>
    </div>
  )
}

export default FeaturedWorkItem