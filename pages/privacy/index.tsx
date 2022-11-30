import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
import dynamic from 'next/dynamic';
const Privacy = dynamic(() => import('@components/pages/Privacy'))

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

export default Privacy