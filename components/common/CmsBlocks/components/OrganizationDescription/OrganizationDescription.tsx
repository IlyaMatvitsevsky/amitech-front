import { FC, useEffect, useState } from 'react'
import { OrganizationDescriptionData } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';

import s from './OrganizationDescription.module.css'
import { useInView } from 'react-intersection-observer';

type OrganizationDescriptionType = {
  data: OrganizationDescriptionData
}

const OrganizationDescription: FC<OrganizationDescriptionType> = ({ data }) => {
  const { text } = data
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
        <p className={s.text}>{text}</p>
      </div>
    </CSSTransition>
  )
}

export default OrganizationDescription
