import * as React from 'react'

type Tags = keyof React.JSX.IntrinsicElements
type Styles = TemplateStringsArray | string
type ExternalProps<T> = { className?: string } & T
type MergeFunction = (...args: any[]) => string

type Styled = {
  [Tag in Tags]: (styles: Styles) => React.FC<React.JSX.IntrinsicElements[Tag]>
}

type WithTwReturn<T> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<T> & React.RefAttributes<unknown>
>

type TwFunction = {
  <T extends Tags>(
    Tag: T,
  ): (styles: Styles) => Styled & WithTwReturn<React.JSX.IntrinsicElements[T]>
  <T>(
    Component: React.ComponentType<T>,
  ): (styles: Styles) => Styled & WithTwReturn<T>
} & Styled

export const create = (mergeFunction: MergeFunction) => {
  const tw = new Proxy(withTw, {
    get(_, Tag: Tags) {
      return withTw(Tag)
    },
  }) as TwFunction

  function withTw(Component: any): any {
    return (className: string) => {
      const ComponentWithTw = React.forwardRef(
        (props: ExternalProps<unknown>, ref) => (
          <Component
            ref={ref}
            {...props}
            className={mergeFunction(className, props.className)}
          />
        ),
      )

      ComponentWithTw.displayName = `tw-${typeof Component === 'function' ? Component.displayName || Component.name : Component}`
      return ComponentWithTw
    }
  }

  return tw
}
