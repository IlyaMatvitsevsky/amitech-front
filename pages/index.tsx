import type { GetStaticPropsContext } from 'next'
import cms from '@lib/cms';
import { getPageData } from '@lib/page-data';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@components/pages/Home'));

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
