import { FC, useCallback } from 'react';
import { PageBlock } from '@lib/cms/types/page';
import { useRouter } from 'next/router';
import PageTitle from '@components/ui/PgaeTitle';
import { CmsBlocks } from '@components/common';
import { Image as ImageType } from '@lib/cms/types/image';
import placeholderImg from '@public/product-img-placeholder.svg'

import Image from 'next/image';

type DataType = {
  blocks: PageBlock[],
  image: ImageType | null
}

const AboutUs: FC<DataType> = ({ blocks, image }) => {
  const router = useRouter()

  const getImageRatio = useCallback(() => {
    return image?.width! / image?.height!
  }, [])

  if ( router.isFallback ) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <PageTitle title="About Us" />
      <div className="relative my-4" style={{aspectRatio: `${getImageRatio()}`}}>
        <Image
          placeholder="blur"
          blurDataURL={placeholderImg}
          src={image?.url || ''}
          alt={image?.altText}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <CmsBlocks items={blocks}/>
    </div>
  )
}

export default AboutUs