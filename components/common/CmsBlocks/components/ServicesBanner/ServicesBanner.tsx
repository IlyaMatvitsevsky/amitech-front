import { FC, useCallback, useEffect, useState } from 'react'
import { ServicesBannerData, ServicesBannerItem } from '@lib/cms/types/page'
import { CSSTransition } from 'react-transition-group';

import s from './ServicesBanner.module.css'
import Image from 'next/image';
import cn from 'clsx';
import ServiceItem from '@components/common/CmsBlocks/components/ServicesBanner/ServiceItem';
import { useScreenWidth } from '@components/hooks';
import { useInView } from 'react-intersection-observer';

type ServicesBannerType = {
  services: ServicesBannerData[]
  items: ServicesBannerItem[]
}

const ServicesBanner: FC<ServicesBannerType> = ({ services, items }) => {
  const { sm } = useScreenWidth();
  const [ activeName, setActiveName ] = useState(items[0].title)
  const { inView, ref } = useInView()
  const [ isShow, setIsShow ] = useState(false)

  useEffect(() => {
    if ( isShow ) {
      return
    }
    setIsShow(inView)
  }, [ inView ])

  const handleClick = useCallback((name: string) => {
    setActiveName(name)
  }, [])

  const getNeedItem = useCallback(() => {
    return items.find(({ title }) => activeName === title)
  }, [ activeName ])

  return (
    <CSSTransition in={isShow} timeout={5000} classNames="homeBlock">
      <div ref={ref} className={s.wrapper}>
        <div className={s.services}>
          {services && services.map((service, index) => {
            const needItem = getNeedItem()
            return (
              <div key={index} className={s.serviceWrapper}>
                <div onClick={() => handleClick(service.name)}
                     className={cn(s.service, activeName === service.name ? s.active : '')}
                >
                  <div className={s.image}>
                    <Image
                      alt={service.icon?.altText}
                      src={service.icon?.url || ''}
                      layout="fill"
                      className={s.image}
                    />
                  </div>
                  <p className={cn(s.serviceName, activeName === service.name ? s.active : '')}>{service.name}</p>
                </div>
                {!sm && needItem && service.name === activeName &&
                  <div>
                    <ServiceItem image={needItem.image}
                                 title={needItem.title}
                                 description={needItem.description}
                                 activeName={activeName}
                    />
                  </div>
                }
              </div>
            )
          })}
        </div>
        {sm && <div className={s.serviceInfo}>
          {items && items.map(({ title, description, image }, index) => (
            <ServiceItem
              key={index}
              image={image}
              title={title}
              description={description}
              activeName={activeName}
            />
          ))}
        </div>}
      </div>
    </CSSTransition>
  )
}

export default ServicesBanner
