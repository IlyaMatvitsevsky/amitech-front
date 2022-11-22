import type { GetStaticPropsContext } from 'next'
import cms from '@lib/cms'

export const getPageData = async (options: GetStaticPropsContext) => {
  const [ footer, header] = await Promise.all([
    cms.getFooter({}),
    cms.getHeader({})
  ])

  return {
    footer,
    header
  }
}
