import { FC } from 'react';
import { PrivacyStructure } from '@lib/cms/types/privacy';

import s from './Privacy.module.css'

type DataType = {
  privacy: PrivacyStructure
}

const Privacy: FC<DataType> = ({ privacy }) => {
  return (
    <div className={s.wrapper} dangerouslySetInnerHTML={{ __html: privacy?.privacy! }}></div>
  )
}

export default Privacy