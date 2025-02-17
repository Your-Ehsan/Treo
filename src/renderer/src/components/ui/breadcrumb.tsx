import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@renderer/utils'

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    readonly separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav aria-label="breadcrumb" ref={ref} {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li className={cn('inline-flex items-center gap-1.5', className)} ref={ref} {...props} />
  )
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    readonly asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      className={cn('transition-colors hover:text-foreground', className)}
      ref={ref}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  )
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>): React.JSX.Element {
  return (
    <li
      aria-hidden="true"
      className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
      role="presentation"
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>): React.JSX.Element {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
}
