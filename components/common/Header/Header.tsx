import { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image'
import cn from 'clsx'
import { Button, Link } from '@components/ui';
import { HeaderStructure } from '@lib/cms/types/header'

import s from './Header.module.css'
import SideBar from '@components/common/SideBar';

export type Props = {
  header: HeaderStructure
}

const Header: FC<Props> = ({ header }) => {
  const [ isShowing, setIsShowing ] = useState<boolean>(false)
  const [ scrollPosition, setScrollPosition ] = useState<number>(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  if ( !header ) {
    return null
  }
  const { buttons, logoUrl, logo, links } = header
  return (
    <>
      <header className={cn(s.headerInner, scrollPosition !== 0 ? s.scroll : '')}>
        <div className={s.wrapper}>
          <Button className="border-none !w-[48px]" onClick={() => setIsShowing(!isShowing)}>
            <div className={s.mobileButton}/>
          </Button>
          <div className={s.logo}>
            <Link href={logoUrl}>
              <Image
                width={190}
                height={50}
                layout="fixed"
                src={logo?.url || ''}
                alt={logo?.altText || 'logo'}
              />
            </Link>
          </div>
          <div className={s.links}>
            {links.map(({ label, path, buttonType }) => (
              <div key={label} className="mr-7">
                <Link href={path}>{label}</Link>
              </div>
            ))}
          </div>
          <div className={s.buttons}>
            {buttons.map(({ label, path, buttonType }) => (
              <Button key={label} variant={buttonType} className="mr-2">
                {label}
              </Button>
            ))}
          </div>
        </div>
      </header>
      <div className={s.mobile}>
        <ul className={s.buttonsMobile}>
          {buttons.map(({ label, path, buttonType }) => (
            <Button key={label} variant={buttonType} className="mr-2">
              {label}
            </Button>
          ))}
        </ul>
      </div>
      <CSSTransition
        appear={true}
        in={isShowing}
        timeout={300}
        classNames="wrap"
        unmountOnExit
        onExited={() => setIsShowing(false)}
      >
        <SideBar links={links} logoUrl={logoUrl} logo={logo} isOpen={isShowing} close={setIsShowing}/>
      </CSSTransition>
    </>
  )
}

export default Header
