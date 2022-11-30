import type { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import { getPageData } from '@lib/page-data'
import cms from '@lib/cms';
import dynamic from 'next/dynamic';
const WorkPage = dynamic(() => import('@components/pages/Work'))

export async function getStaticProps(options: GetStaticPropsContext<{ name: string }>) {
  const {params} = options
  const pageDataPromise = getPageData(options)
  const pageContentPromise = cms.getWork({
    variables: { name: params?.name || '' },
  })
  const pageData = await pageDataPromise
  const work = await pageContentPromise

  return {
    props: {
      ...pageData,
      work,
    },
  }
}

export async function getStaticPaths(context: GetStaticPathsContext) {

  return {
    paths: [{ params: { name: 'B2B Commerce in Manufacturing and Distribution' } }],
    fallback: false,
  }
}

export default WorkPage