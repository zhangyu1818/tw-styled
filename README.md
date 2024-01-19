# tw-styled

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
npm install tw-styled
```


## Getting Started

### 1. Importing the Library

Start by importing the `tw` function from `tw-styled`:

```javascript
import { tw } from 'tw-styled';
```

### 2. Creating Components

Use the `tw` function to create a component styled with Tailwind CSS classes:

```javascript
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
```

### 3. Using Components in Your Project

You can now use the styled component just like any other React component:

```jsx
function App() {
  return (
    <div className="App">
      <Button>Click me</Button>
    </div>
  );
}
```

## API

### `tw`

A Proxy object for creating styled components with Tailwind CSS utility classes. It supports all HTML tags and React function components.

#### Usage

```javascript
const StyledComponent = tw.Tag`tailwind-class-names`;
```

- **Tag**: An HTML tag (like `div`, `span`, `button`) or a React function component.
- **tailwind-class-names**: A Template String of Tailwind CSS classes.

Internally, `tw` uses the `withTw` function to create a React component with the applied Tailwind CSS styles.

### `withTw`

`withTw` is a higher-order function used by the `tw` proxy to create a React component that merges Tailwind CSS classes with the component's existing classes.

#### Signature

```typescript
function withTw<T extends Tags>(
  Tag: T,
): (
  styles: TemplateStringsArray,
) => WithTwReturn<React.JSX.IntrinsicElements[T]>

function withTw<T>(
  Component: React.ComponentType<T>,
): (styles: TemplateStringsArray) => WithTwReturn<T>
```

- **Tag / Component**: An HTML tag (like `div`, `span`, `button`) or a React component.
- **styles**: A Template String of Tailwind CSS classes.

#### Returns

`WithTwReturn`: A React forward reference component that accepts all the props of the original component plus an additional `className` prop. It applies the Tailwind CSS styles using `twMerge` to intelligently merge class names.

## Contributing

Contributions are always welcome! If you have any suggestions, issues, or want to make improvements, please feel free to open an issue or submit a pull request.

## License

MIT

