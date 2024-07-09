# tw-styled

![npm-version](https://img.shields.io/npm/v/tw-styled.svg)
[![codecov](https://codecov.io/gh/zhangyu1818/tw-styled/graph/badge.svg?token=Ds8VpqzAwG)](https://codecov.io/gh/zhangyu1818/tw-styled)
![npm bundle size](https://deno.bundlejs.com/badge?q=tw-styled@3.0.0)

---

`tw-styled` is a React library for quickly creating reusable components utilizing Tailwind CSS. It provides a straightforward and intuitive API, allowing you to integrate Tailwind CSS into your components seamlessly. This library supports all HTML elements and function components, ensuring that you can style your components effortlessly with the full power of Tailwind CSS at your disposal.

## Features

- 🚀 **Efficient Styling**: Rapidly create styled components with Tailwind CSS.
- 💅 **Complete Flexibility**: Supports all HTML elements and React function components.
- 🛠️ **Simple Integration**: A straightforward API for integrating Tailwind CSS into your project.

## Prerequisites

Before using `tw-styled`, ensure that Tailwind CSS is properly integrated into your project. If you haven't already set up Tailwind CSS, please refer to the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

## Installation

Install `tw-styled` via npm:

```bash
npm install tw-styled tailwind-merge
```

If you need to use `tw-styled` with a customized merge function without installing the `tailwind-merge` package:

```bash
npm install tw-styled
```

## Getting Started

### Using `tw-styled` with built-in merge functionality

Start by importing the `tw` function from `tw-styled`:

```javascript
import { tw } from 'tw-styled'
```

### Creating Components with Tailwind CSS

Use the `tw` function to create a component styled with Tailwind CSS classes:

```javascript
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
```

or using function component to create a styled component:

```javascript
const Component = ({ className }) => (
  <div className={className}>Function Component</div>
)

const StyledComponent = tw(
  Component,
)`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
```

### Using Components in Your Project

You can now use the styled component just like any other React component:

```jsx
function App() {
  return (
    <div className='App'>
      <Button>Click me</Button>
    </div>
  )
}
```

### Using `tw-styled` with custom classnames merge functionality

```javascript
import { create } from 'tw-styled/create'

const merge = (classNames, propsClassNames) =>
  `${classNames} ${propsClassNames}`

const tw = create(merge)
```

## API

### `tw`

A Proxy object for creating styled components with Tailwind CSS utility classes. It supports all HTML tags and React function components.

#### Usage

```jsx
const StyledComponent = tw.Tag`tailwind-class-names`
const StyledComponent = tw.Tag('tailwind-class-names')

const FunctionComponent = ({ className }) => (
  <div className={className}>Function Component</div>
)

const StyledComponent = tw(FunctionComponent)`tailwind-class-names`
const StyledComponent = tw(FunctionComponent)('tailwind-class-names')
```

- **Tag**: An HTML tag (like `div`, `span`, `button`) or a React function component.
- **tailwind-class-names**: A Template String of Tailwind CSS classes.

## Contributing

Contributions are always welcome! If you have any suggestions, issues, or want to make improvements, please feel free to open an issue or submit a pull request.

## License

MIT
