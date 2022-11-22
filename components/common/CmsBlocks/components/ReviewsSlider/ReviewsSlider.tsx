import 'swiper/css';
import 'swiper/css/navigation';

import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ReviewsSliderData } from '@lib/cms/types/page';
import { CSSTransition } from 'react-transition-group';

import s from './ReviewsSlider.module.css'
import { ReviewItem } from '@components/common/CmsBlocks/components/ReviewsSlider/ReviewItem';
import { useScreenWidth } from '@components/hooks';
import { useInView } from 'react-intersection-observer';

type ReviewsSliderType = {
  data: ReviewsSliderData
}

const ReviewsSlider: FC<ReviewsSliderType> = ({ data }) => {
  const { sm, md, lg } = useScreenWidth()

  const [ slideCount, setSlideCount ] = useState<number>(1)

  useEffect(() => {
    if ( lg ) {
      setSlideCount(3)
    } else if ( md && !lg ) {
      setSlideCount(2)
    } else if ( sm && !md ) {
      setSlideCount(1)
    }
  }, [ sm, lg, md ])

  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  const { items, title } = data
  return (
    <CSSTransition in={isShow} timeout={5000} classNames="homeBlock">
      <div ref={ref} className={s.wrapper}>
        <div className={s.titleInner}>
          <h2 className={s.title}>{title}</h2>
          <div className={s.navigation}>
            <div id="swiper-back" className={s.prev}/>
            <div id="swiper-next" className={s.next}/>
          </div>
        </div>
        <Swiper
          slidesPerView={slideCount}
          slidesPerGroup={slideCount}
          modules={[ Navigation ]}
          loop
          navigation={{
            prevEl: '#swiper-back',
            nextEl: '#swiper-next',
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewItem item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CSSTransition>
  )
}

export default ReviewsSlider