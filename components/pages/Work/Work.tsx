import { FC } from 'react';
import { WorkStructure } from '@lib/cms/types/work';
import PageTitle from '@components/ui/PgaeTitle';
import ReactMarkdown from "react-markdown";

import s from './Work.module.css'

type DataType = {
  work: WorkStructure
}
const Work: FC<DataType> = ({work}) => {
  return (
    <div>
      <PageTitle title={work.name}/>
      <div className={s.about}>
        <h2 className={s.aboutTitle}>{work.aboutWork?.title}</h2>
        <ReactMarkdown>{work.aboutWork?.description || ''}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Work