import type { GetStaticPropsContext } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
import FeatureWorksPage from '@components/pages/FeaturesWorks';

export async function getStaticProps(options: GetStaticPropsContext<{ pages: string[] }>) {
  const pageDataPromise = getPageData(options)
  const pageContentPromise = cms.getPageContent({
    variables: { path: '/case-studies' },
  })
  const pageData = await pageDataPromise
  const { blocks } = await pageContentPromise

  return {
    props: {
      ...pageData,
      blocks,
    },
  }
}

export default FeatureWorksPage
