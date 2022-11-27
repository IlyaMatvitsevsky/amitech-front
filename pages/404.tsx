import { getPageData } from '@lib/page-data';
import { GetStaticPropsContext } from 'next';
import { Layout } from '@components/common'
import { Button } from '@components/ui'

export async function getStaticProps(context: GetStaticPropsContext) {
  const pageDataPromise = getPageData(context)
  const pageData = await pageDataPromise
  return {
    props: {
      ...pageData,
    },
    revalidate: 200,
  }
}

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <h2 className="text-5xl font-bold">Oops! Page Not Found</h2>
      <p className="py-8">Looks like the page you were hoping to find doesn't exist. Sorry about that.</p>
      <Button href={'/'} variant="primary">
        Take me home
      </Button>
    </div>
  )
}

NotFound.Layout = Layout