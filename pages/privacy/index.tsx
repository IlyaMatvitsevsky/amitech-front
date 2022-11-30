import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
export async function getStaticProps(options: GetStaticPropsContext<{ pages: string[] }>) {
  const pageDataPromise = getPageData(options)
  const privacyContentPromise = cms.getPrivacy({})
  const pageData = await pageDataPromise
  const privacy = await privacyContentPromise

  return {
    props: {
      ...pageData,
      privacy
    },
  }
}

export default function Privacy( { privacy }: InferGetStaticPropsType<typeof getStaticProps>) {
  return(
    <div className='px-8' dangerouslySetInnerHTML={{ __html: privacy?.privacy! }}></div>
  )
}