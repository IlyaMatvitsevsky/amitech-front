import { FC, useEffect, useState } from 'react';
import { OurOffersBannerData } from '@lib/cms/types/page';
import { Button } from '@components/ui';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';

import s from './OurOfferItem.module.css'
import cn from 'clsx';

type OurOfferItemType = {
  item: OurOffersBannerData
  count: number
}


export const OurOfferItem: FC<OurOfferItemType> = ({ item, count }) => {
  const { inView, ref } = useInView()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])
  const { button, image, text, title, benefits } = item
  return (
    <CSSTransition in={isShow} timeout={5000} classNames="homeBlock">
    <div ref={ref} className={cn(s.wrapper, { 'flex-row-reverse':(count % 2 !== 0)  })}>
      <div className={cn(s.info, { 'pl-0 md:pl-16 lg:pl-28':(count % 2 !== 0)  })}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.imageMobileWrapper}>
          <figure className={cn(s.figure)}>
            <Image
              alt={image?.altText}
              src={image?.url!}
              layout="fill"
              objectFit="fill"
            />
          </figure>
        </div>
        <p className={s.text}>{text}</p>
        {benefits.map((benefit) => (
          <div key={benefit.item} className={s.benefit}>
            <div className={s.round}></div>
            <span className={s.description}>{benefit.item}</span>
          </div>
        ))}
        <div className={s.button}>
          <Button variant={button?.buttonType} href={button?.path} >{button?.label}</Button>
        </div>
      </div>
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
    </div>
    </CSSTransition>
  )
}
