import { FC } from 'react';
import { ReviewsSliderItem } from '@lib/cms/types/page';

import s from './ReviewItem.module.css'
import cn from 'clsx';
import Image from 'next/image';

type ReviewItemType = {
  item: ReviewsSliderItem
}

export const ReviewItem: FC<ReviewItemType> = ({ item }) => {
  const { text, user, avatar, company  } = item
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <figure className={cn(s.figure)}>
          <Image
            src={avatar?.url!}
            layout="fill"
            objectFit="fill"
          />
        </figure>
      </div>
      <div className={s.info}>
        <p className={s.text}>"{text}"</p>
        <p className={s.author}>{user}</p>
        <p className={s.company}>{company}</p>
      </div>
    </div>
  )
}