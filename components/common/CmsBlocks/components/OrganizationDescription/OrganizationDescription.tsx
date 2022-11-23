import { FC, useEffect, useState } from 'react'
import { OrganizationDescriptionData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

import s from './OrganizationDescription.module.css'
import cn from 'clsx';

type OrganizationDescriptionType = {
  data: OrganizationDescriptionData
}

const OrganizationDescription: FC<OrganizationDescriptionType> = ({ data }) => {
  const { text } = data
  const { pathname } = useRouter()
  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    if (pathname !== '/') {
      return
    }
    setIsShow(inView)
  }, [ inView ])
  return (
    <CSSTransition in={isShow} timeout={1000} classNames="homeBlock">
      <div ref={ref} className={s.wrapper}>
        <p className={cn(s.text, pathname !== '/' ? '' : s.textBefore)}>{text}</p>
      </div>
    </CSSTransition>
  )
}

export default OrganizationDescription
