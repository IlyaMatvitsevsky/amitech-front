import { FC, useEffect, useState } from 'react'
import { TechnologiesBannerData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';

import s from './TechnologiesBanner.module.css'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type OrganizationBannerType = {
  data: TechnologiesBannerData[]
}

const TechnologiesBanner: FC<OrganizationBannerType> = ({ data }) => {

  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

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
      <div ref={ref} className={s.wrapper}>
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
