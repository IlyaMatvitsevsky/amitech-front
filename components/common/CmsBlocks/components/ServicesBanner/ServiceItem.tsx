import { FC, useEffect, useState } from 'react'
import { Image as ImageType } from '@lib/cms/types/image'

import s from './ServiceItem.module.css'
import Image from 'next/image';
import cn from 'clsx';

type ServicesItemType = {
  image: ImageType | null
  title: string
  description: string
  activeName: string
}

const ServicesItem: FC<ServicesItemType> = ({ image, title, description, activeName }) => {
  const [isBlock, setIsBlock] = useState(false)

  useEffect(() => {
    setIsBlock(() => activeName === title)
  }, [activeName])

  return (
    <div className={cn(s.wrapper, isBlock ? s.active : s.hide)}>
      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.image}>
        <Image
          src={image?.url || ''}
          layout="fill"
        />
      </div>
    </div>
  )
}

export default ServicesItem
