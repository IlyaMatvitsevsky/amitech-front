import { FC, useEffect, useState } from 'react'
import { OrganizationBannerData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';

import s from './OrganizationBanner.module.css'
import cn from 'clsx';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

type OrganizationBannerType = {
  data: OrganizationBannerData
}

const OrganizationBanner: FC<OrganizationBannerType> = ({ data }) => {
  const { text, title, image, lists } = data

  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  return (
    <CSSTransition in={isShow} timeout={1000} classNames="homeBlock">
      <div ref={ref} className={s.wrapper}>
        <div className={s.imageWrapper}>
          <figure className={cn(s.figure)}>
            <Image
              src={image?.url!}
              layout="fill"
              objectFit="fill"
            />
          </figure>
        </div>
        <div className={s.infoWrapper}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.text}>{text}</p>
          <div className={s.subtext}>
            {lists && lists.map(({ item }, index) => (
              <p key={index} className={s.list}>{item}</p>
            ))
            }
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default OrganizationBanner
