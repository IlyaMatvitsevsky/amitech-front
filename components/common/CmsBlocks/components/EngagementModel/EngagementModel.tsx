import { FC } from 'react';
import { EngagementModelData } from '@lib/cms/types/page';
import cn from 'clsx';
import Image from 'next/image';

import s from './EngagementModel.module.css'

type DataType = {
  data: EngagementModelData
}


const EngagementModel: FC<DataType> = ({ data }) => {
  const { title, items, description } = data
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.items}>
        {items.map((item) => (
          <div key={item.name} className={s.item}>
            <div className={s.round}>
              <figure className={cn(s.figure)}>
                <Image
                  alt={item.icon?.altText}
                  src={item.icon?.url!}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </div>
            <p className={s.text}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EngagementModel