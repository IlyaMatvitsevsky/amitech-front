import { FC, useEffect, useState } from 'react'
import { DescriptionBannerData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';

import s from './DescriptionBanner.module.css'
import Image from 'next/image';
import { Button } from '@components/ui';
import cn from 'clsx';
import { useInView } from 'react-intersection-observer';

type DescriptionBannerType = {
  data: DescriptionBannerData
}

const DescriptionBanner: FC<DescriptionBannerType> = ({ data }) => {

  const { inView, ref } = useInView()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  const { description, button, image, title } = data
  return (
    <CSSTransition in={isShow} timeout={1000} classNames="homeBlock">
      <div className={s.wrapper} ref={ref}>
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
                src={image?.url!}
                layout="fill"
                objectFit="fill"
              />
            </picture>
          </figure>
        </div>
      </div>
    </CSSTransition>
  )
}

export default DescriptionBanner
