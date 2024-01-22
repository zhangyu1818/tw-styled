import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type Tags = keyof React.JSX.IntrinsicElements

type Styled = {
  [Tag in Tags]: (
    styles: TemplateStringsArray,
  ) => React.FC<React.JSX.IntrinsicElements[Tag]>
}

type WithTwReturn<T> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<T> & React.RefAttributes<unknown>
>

type ExternalProps<T> = T & { className?: string }

export const tw: Styled = new Proxy({} as Styled, {
  get(_, Tag: Tags) {
    return withTw(Tag)
  },
})

export function withTw<T extends Tags>(
  Tag: T,
): (
  styles: TemplateStringsArray,
) => WithTwReturn<React.JSX.IntrinsicElements[T]>
export function withTw<T>(
  Component: React.ComponentType<T>,
): (styles: TemplateStringsArray) => WithTwReturn<T>
export function withTw(Component: any): any {
  return (className: string) => {
    const ComponentWithTw = React.forwardRef(
      (props: ExternalProps<{}>, ref) => (
        <Component
          ref={ref}
          {...props}
          className={twMerge(className, props.className)}
        />
      ),
    )

    ComponentWithTw.displayName = `tw-${typeof Component === 'function' ? Component.displayName || Component.name : Component}`
    return ComponentWithTw
  }
}
