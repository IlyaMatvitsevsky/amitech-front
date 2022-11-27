import type { GetStaticPropsContext } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('@components/pages/ContactUs'))

export async function getStaticProps(options: GetStaticPropsContext<{ pages: string[] }>) {
  const pageDataPromise = getPageData(options)
  const pageContentPromise = cms.getPageContent({
    variables: { path: '/contact-us' },
  })
  const pageData = await pageDataPromise
  const { blocks } = await pageContentPromise

  return {
    props: {
      ...pageData,
      blocks
    },
  }
}

export default ContactUs