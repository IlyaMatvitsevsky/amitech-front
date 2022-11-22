import type { GetStaticPropsContext } from 'next'
import cms from '@lib/cms';
import Home from '@components/pages/Home';
import { getPageData } from '@lib/page-data';

export async function getStaticProps(options: GetStaticPropsContext) {
  const pageDataPromise = getPageData(options)
  const pageContentPromise = cms.getPageContent({
    variables: { path: '/' },
  })
  const pageData = await pageDataPromise
  const { blocks } = await pageContentPromise

  return {
    props: {
      ...pageData,
      blocks,
    },
    revalidate: 60 * 60, // every hour
  }
}

export default Home
