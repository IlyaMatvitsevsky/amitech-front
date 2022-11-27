import { ButtonHTMLAttributes, FC } from 'react'
import { LinkProps } from 'next/link'
import cn from 'clsx'
import Link from '@components/ui/Link'
import { LoadingDots } from '@components/ui'

import s from './Button.module.css'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: LinkProps['href']
  className?: string
  variant?: 'primary' | 'secondary' | 'link' | 'contact'
  loading?: boolean
}

const Button: FC<Props> = (props) => {
  const {
    variant = 'primary',
    className,
    children,
    loading = false,
    disabled,
    href,
    ...restProps
  } = props

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant == 'primary',
      [s.secondary]: variant == 'secondary',
      [s.link]: variant == 'link',
      [s.contact]: variant == 'contact'
    },
    className
  )

  const Component = href ? Link : 'button'

  return (
    <Component className={rootClassName} disabled={disabled} href={href || ''} {...restProps}>
      {children}
      {loading && (
        <span className="ml-2">
          <LoadingDots />
        </span>
      )}
    </Component>
  )
}

export default Button
