import { FC, useEffect, useState } from 'react';
import s from './AcceleratorBanner.module.css';
import { AcceleratorBannerData } from '@lib/cms/types/page';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import { Button } from '@components/ui';
import cn from 'clsx';
import { useInView } from 'react-intersection-observer';

type AcceleratorDataType = {
  data: AcceleratorBannerData
}

const AcceleratorBanner: FC<AcceleratorDataType> = ({ data }) => {
  const { title, button, text, bgImage } = data
  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  return (
    <CSSTransition in={isShow} timeout={5000} classNames="homeBlock">
      <div ref={ref} className={s.wrapper}>
        <div className={s.info}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{text}</p>
          <Button variant={button?.buttonType} href={button?.path}>{button?.label}</Button>
        </div>
        <div className={s.imageWrapper}>
          <div className={cn(s.image)}>
            <Image
              alt={bgImage?.altText}
              src={bgImage?.url || ''}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default AcceleratorBanner