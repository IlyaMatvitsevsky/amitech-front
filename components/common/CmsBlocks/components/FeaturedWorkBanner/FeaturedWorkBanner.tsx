import { FC, useEffect, useState } from 'react';
import { FeaturedWorkBannerData } from '@lib/cms/types/page';
import { Link } from '@components/ui';
import FeaturedWorkItem from './FeaturedWorkItem';
import { CSSTransition } from 'react-transition-group';

import s from './FeaturedWorkBanner.module.css'
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

type FeaturedWorkBannerType = {
  data: FeaturedWorkBannerData
}

const FeaturedWorkBanner: FC<FeaturedWorkBannerType> = ({ data }) => {
  const { title, items } = data
  const { pathname } = useRouter()
  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if (isShow) {
      return
    }
    if (pathname !== '/') {
      return
    }
    setIsShow(inView)
  }, [ inView ])
  return (
    <CSSTransition in={isShow} timeout={5000} classNames="homeBlock">
      <div ref={ref}>
        {pathname === '/' && <div className={s.info}>
          <h2 className={s.title}>{title}</h2>
          <Link href="/case-studies" className={s.link}>View All</Link>
        </div>}
        <div className={s.works}>
          {items.map(item => (
            <FeaturedWorkItem key={item.title} item={item}/>
          ))}
        </div>
      </div>
    </CSSTransition>
  )
}

export default FeaturedWorkBanner