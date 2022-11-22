import { Dispatch, FC, SetStateAction } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Image as ImageType } from '@lib/cms/types/image';
import { Link as LinkType } from '@lib/cms/types/page';
import { Button, Link } from '@components/ui';
import Image from 'next/image'

import s from './SideBar.module.css'

type SideBarType = {
  logoUrl: string
  logo: ImageType|null
  links: LinkType[]
  close: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const SideBar: FC<SideBarType> = ({ logoUrl, logo, links, close, isOpen }) => {
  return (
    <div className={s.wrapper}>
      <CSSTransition appear={true} in={isOpen} timeout={300} classNames="side">
        <div className={s.inner}>
          <div className={s.logo}>
            <Link href={logoUrl} className={s.logoLink} onClick={() => close(false)}>
              <Image width={150} height={40} layout="fixed" src={logo?.url || ''} alt={logo?.altText || 'logo'}/>
            </Link>
            <Button className="border-none !w-[30px]" onClick={() => close(false)}>
              <div className={s.button}/>
            </Button>
          </div>
          <ul className={s.links}>
            {links.map(({ label, path, buttonType }) => (
              <li key={label} onClick={() => close(false)} className="mr-7">
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  )
}

export default SideBar