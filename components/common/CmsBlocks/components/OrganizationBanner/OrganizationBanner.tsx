import { FC } from 'react'
import { OrganizationBannerData } from '@lib/cms/types/page'
import Image from 'next/image';
import cn from 'clsx';
import { useRouter } from 'next/router';

import s from './OrganizationBanner.module.css'

type OrganizationBannerType = {
  data: OrganizationBannerData
}

const OrganizationBanner: FC<OrganizationBannerType> = ({ data }) => {
  const { text, title, image, lists, direction, isBg } = data
  const { pathname } = useRouter()
  const wrapperClassName = cn(
    s.wrapper,
    {
      [s.row]: direction === 'row',
      [s.reverse]: direction === 'revers',
      [s.wrapperBg]: isBg,
    }
  )

  return (
    <div className={wrapperClassName}>
      <div className={s.imageWrapper}>
        <figure className={cn(s.figure)}>
          <Image
            alt={image?.altText}
            src={image?.url!}
            layout="fill"
            objectFit="fill"
          />
        </figure>
      </div>
      <div className={s.infoWrapper}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{text}</p>
        <div className={cn(s.subtext,
          { [s.listGrid]: lists && lists?.length > 1 && pathname !== '/' }
        )}>
          {lists && lists.map(({ item }, index) => (
            <p key={index} className={s.list}>{item}</p>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default OrganizationBanner
