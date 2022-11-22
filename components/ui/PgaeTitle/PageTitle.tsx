import { FC } from 'react';

import s from './PageTitle.module.css'

const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className={s.title} >{title}</h1>
  )
}

export default PageTitle