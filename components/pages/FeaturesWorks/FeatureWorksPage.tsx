import { useRouter } from 'next/router';
import { CmsBlocks } from '@components/common';
import { PageBlock } from '@lib/cms/types/page';
import { FC } from 'react';

import s from './FeatureWorksPage.module.css'
import PageTitle from '@components/ui/PgaeTitle';

type DataType = {
  blocks: PageBlock[]
}

const FeatureWorksPage: FC<DataType> = ({ blocks }) => {
  const router = useRouter()

  if ( router.isFallback ) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={s.wrapper}>
      <PageTitle title="Case Studies" />
      <CmsBlocks items={blocks}/>
    </div>

  )
}

export default FeatureWorksPage