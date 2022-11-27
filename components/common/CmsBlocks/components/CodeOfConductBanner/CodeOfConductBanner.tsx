import { FC } from 'react';
import { CodeOfConductBannerData } from '@lib/cms/types/page';

import s from './CodeOfConductBanner.module.css'

type DataType = {
  data: CodeOfConductBannerData
}


const CodeOfConductBanner: FC<DataType> = ({ data }) => {
  const { title, list } = data
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      {list.map(item => (
        <p key={item.item} className={s.text}>{item.item}</p>
      ))}
    </div>
  )
}

export default CodeOfConductBanner