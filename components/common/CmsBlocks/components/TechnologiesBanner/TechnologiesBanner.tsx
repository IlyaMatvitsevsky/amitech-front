import { FC, useEffect, useState } from 'react'
import { TechnologiesBannerData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import s from './TechnologiesBanner.module.css'
import cn from 'clsx';
import { useRouter } from 'next/router';

type OrganizationBannerType = {
  data: TechnologiesBannerData[],
  isBg: boolean
}

const TechnologiesBanner: FC<OrganizationBannerType> = ({ data, isBg }) => {

  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)
  const { pathname } = useRouter()

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  if ( !data.length ) {
    return null
  }
  return (
    <CSSTransition in={isShow} timeout={1000} classNames="homeBlock">
      <div
        ref={ref}
        className={cn(s.wrapper,
          {
            [s.wrapperBg]: isBg,
            [s.shadow]: pathname === '/'
          }
        )}
      >
        <div className={s.wrapperInner}>
          {data.map(({ name, work, image }, index) => {
            const imageRatio = image?.width! / image?.height!
            return (
              <div key={index} className={s.itemWrapper}>
                <figure
                  className={s.image}
                  style={!!imageRatio ? { aspectRatio: `${imageRatio}` } : undefined}
                >
                  <picture>
                    <Image
                      src={image?.url!}
                      layout="fill"
                      objectFit="contain"
                    />
                  </picture>
                </figure>
                <div className={s.name}>{name}</div>
                <div className={s.work}>{work}</div>
              </div>
            )
          })}
        </div>
      </div>
    </CSSTransition>
  )
}

export default TechnologiesBanner
