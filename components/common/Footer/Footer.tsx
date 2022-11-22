import { FC } from 'react';
import { FooterStructure } from '@lib/cms/types/footer';

import s from './Footer.module.css'
import Link from '@components/ui/Link';
import Image from 'next/image';

type DataType = {
  item: FooterStructure
}

const Footer: FC<DataType> = ({ item }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <span className={s.text}>{item?.text}</span>
        {item?.links.map((link, index) => (
          <Link key={index} href={link.href}>{link.text}</Link>
        ))}
      </div>
      {item?.icons.map((icon, index) => (
        <Link className={s.icon} key={index} href={icon.href}>
          <Image layout={'fill'} src={icon.url} alt={icon.text} />
        </Link>
      ))}

    </div>
  )
}

export default Footer