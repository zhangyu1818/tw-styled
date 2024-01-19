import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { tw, withTw } from './styled'

describe('tw-styled', () => {
  it('creates components with different HTML tags', () => {
    const DivComponent = tw.div`block`
    const SpanComponent = tw.span`inline`

    const { getByTestId } = render(
      <div>
        <DivComponent data-testid='test-div' />
        <SpanComponent data-testid='test-span' />
      </div>,
    )

    const divElement = getByTestId('test-div')
    const spanElement = getByTestId('test-span')

    expect(divElement.tagName).toBe('DIV')
    expect(spanElement.tagName).toBe('SPAN')
  })

  it('merges tailwind classes from props with predefined classes', () => {
    const TestComponent = tw.div`bg-red-500`
    const { getByTestId } = render(
      <TestComponent className='bg-black text-white' data-testid='test-div'>
        Hello
      </TestComponent>,
    )

    const element = getByTestId('test-div')
    expect(element).toHaveClass('bg-black text-white')
  })

  it('forwards ref to the DOM element', () => {
    const TestComponent = tw.div`block`
    const ref = React.createRef<HTMLDivElement>()
    const { getByTestId } = render(
      <TestComponent ref={ref} data-testid='test-div' />,
    )

    const element = getByTestId('test-div')
    expect(ref.current).toBe(element)
  })

  it('passes other props to the component', () => {
    const TestComponent = tw.div`block`
    const { getByTestId } = render(
      <TestComponent data-testid='test-div' aria-label='Test Div' />,
    )

    const element = getByTestId('test-div')
    expect(element.getAttribute('aria-label')).toBe('Test Div')
  })

  it('sets displayName correctly for function components', () => {
    const FunctionComponent = () => <div />
    FunctionComponent.displayName = 'FunctionComponent'
    const TwFunctionComponent = withTw(FunctionComponent)`bg-red-500`

    expect(TwFunctionComponent.displayName).toBe('tw-FunctionComponent')
  })

  it('sets displayName correctly for non-function components', () => {
    const TwDivComponent = withTw('div')`bg-red-500`

    expect(TwDivComponent.displayName).toBe('tw-div')
  })

  it('correctly passes className to a function component and merges it', () => {
    const FunctionComponent = (props: any) => <div {...props} />

    const TwFunctionComponent = withTw(FunctionComponent)`bg-red-500`

    const { getByTestId } = render(
      <TwFunctionComponent
        className='bg-black text-white'
        data-testid='test-div'
      />,
    )

    const element = getByTestId('test-div')
    expect(element).toHaveClass('bg-black text-white')
  })
})
