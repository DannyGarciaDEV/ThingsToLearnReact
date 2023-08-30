# ThingsToLearnReact
## Components
<h2>What are React Components?</h2>
<p> React components is reausable building blocks that encapsulates the User Interface elements and logic. They allow you to create modular cell container parts of your interface. </p>

## Hooks 
<h2> What are Hooks in React? </h2>
<p> Hooks in React are functions that allow functional components to manage state, lifecycle events, and side effects, eliminating the need for class components. Hooks like useState and useEffect are fundamental, enabling developers to efficiently handle component-specific data and interactions. </p>

<h2> UseState Hook </h2>
<p> The useState hook is fundamental feature in React Funtional components that allows you yo add and manage the state in you application. It provides a way yo store and update data that can change overtime, causing components to re-render and reflect those changes in the user interface </p>

## How to import a Hook

```js
import React, {useState} from 'react'
```
> Using 'useState' create a state variable and function to update it. The useState hook tasks an initial value as an argument and returns an array with the current state values as an argument and return. 

```js
function counter() {
    const = [count, setCount] = useState(0)
}
```

> To Uodate the state, you call the update function React will re-render the component with the next state.

```js
 function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default counter;

```
>By using the "useState" hook, you can easily add and manage state within functional components without needing to switch to class components. This helps make your code more modular and easier to understand.