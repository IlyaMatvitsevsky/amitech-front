import type { GetStaticPropsContext } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
import AboutUs from '@components/pages/AboutUs';

export async function getStaticProps(options: GetStaticPropsContext<{ pages: string[] }>) {
  const pageDataPromise = getPageData(options)
  const pageContentPromise = cms.getPageContent({
    variables: { path: '/about-us' },
  })
  const pageData = await pageDataPromise
  const { blocks, image } = await pageContentPromise

  return {
    props: {
      ...pageData,
      blocks,
      image
    },
  }
}

export default AboutUs