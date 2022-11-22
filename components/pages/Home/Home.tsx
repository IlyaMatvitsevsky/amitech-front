// import { CmsBlocks } from '@components/common'
import { PageBlock } from '@lib/cms/types/page'
import { FooterStructure } from '@lib/cms/types/footer';
import { HeaderStructure } from '@lib/cms/types/header';
import { CmsBlocks } from '@components/common';


type HomeProps = {
  blocks: PageBlock[]
  footer: FooterStructure
  header: HeaderStructure
}

const Home = (props: HomeProps) => {
  const { blocks, footer, header } = props
  return <CmsBlocks items={blocks} />
}

export default Home
