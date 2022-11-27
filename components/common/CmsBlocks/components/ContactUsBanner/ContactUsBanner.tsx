import { FC } from 'react';
import { ContactInfoBannerData } from '@lib/cms/types/page';

import s from './ContactUsBanner.module.css'
import Image from 'next/image';
import { Button } from '@components/ui';

type DataType = {
  data: ContactInfoBannerData
}

const ContactUsBanner: FC<DataType> = ({ data }) => {
  const {title, items} = data
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>
      {items.map(item => (
        <div key={item.title} className={s.item}>
          <div className={s.image}>
            <Image
              alt={item.icon?.altText}
              src={item.icon?.url || ''}
              layout="fill"
            />
          </div>
          <div className={s.contact}>
            <p className={s.contactTitle}>{item.title}</p>
            {item.link?.map(button => (
              <div key={button.label}>
                <Button href={button.path} variant={button.buttonType}>{button.label}</Button>
              </div>
            ))}
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactUsBanner