import { FC, ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const regEx = /^http/

const Link: FC<NextLinkProps&{ className?: string, children: ReactNode }> = (
  {
    href,
    children,
    passHref,
    ...props
  }) => {
  if ( typeof href === 'string' && regEx.test(href) ) {
    return (
      <a {...props} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} passHref={passHref}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
