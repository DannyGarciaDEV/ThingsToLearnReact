
## Before using React
<p> If we want to use react, we need to installed it from the terminal, you need to have npx and node.js installed already </p>


```
npx create-react-app my-react-app
```

> create-react-app: This is a command-line tool used to set up new React applications. It automates the process of setting up build configurations, development server, and other necessary files for a React project.

> my-react-app: This is the name you're giving to your new React application. You can replace "my-react-app" with whatever name you want for your project.
```
cd my-react-app
```
>npm start: This script starts the development server. It allows you to preview your application in a web browser and automatically reloads the page when you make changes to your code.

>npm test: This script runs any test suites you have defined in your project. By default, Create React App uses Jest as the testing framework.

>npm run build: This script creates a production-ready build of your application. It bundles and minifies your code for better performance and prepares it for deployment
## Components
<h2>What are React Components?</h2>
<p> React components is reausable building blocks that encapsulates the User Interface elements and logic. They allow you to create modular cell container parts of your interface. </p>

## Hooks 
<h2> What are Hooks in React? </h2>
<p> Hooks in React are functions that allow functional components to manage state, lifecycle events, and side effects, eliminating the need for class components. Hooks like useState and useEffect are fundamental, enabling developers to efficiently handle component-specific data and interactions. </p>

<h2>useReducer Hook</h2>
<p> allows you to manage state in a component by specifying how state changes should occur based on dispatched actions, providing a more controlled and predictable way to handle complex state logic compared to useState. It is often used when you need to manage state involving multiple variables or when state transitions depend on previous state values. </p>

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

> To Update the state, you call the update function React will re-render the component with the next state.

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


<h2> Fetching Data </h2>
<p> In React, fetching data means getting information from somewhere else, like a website or a database. You use special tools to do this, and once you have the data, you can show it on your website so people can see it. By This is commonly done using techniques such as the fetch API or libraries like Axios within React components.</p>


```js
import React, { useState, useEffect } from 'react';

function usingFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default usingFetch;
```
> Using Fetch API 

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function usingAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsingAxios;
```
> Using Axios 

<h2> What's the difference between Fetch and Axios </h2>
<p>Fetch is like using a basic tool to send a letter by mail. You have to write the letter (set up the request), put it in an envelope (configure headers and options), address it properly (specify the URL), and then drop it in the mailbox (send the request). You also have to wait for the reply, and if something goes wrong with the delivery, you need to handle it manually. </p>

<p>Axios, on the other hand, is like having a reliable courier service. You simply give them the letter (make a request) and tell them where it should go (provide the URL). The courier takes care of all the details, from packing the letter correctly (setting headers and options) to ensuring it reaches its destination and handling any delivery issues. You just wait for the courier to bring you the reply. In the world of web development, Axios acts like that dependable courier service, making data exchange between your app and external sources smoother and more efficient. </p>

<h2> Design Patterns in React </h2>
<p> Design patterns are reusable solutions to basic problems in software development, like in React, bein a very popular Javascript library for creating user interfaces and improving code organizations this are the most commont design patterns in React </p>

<ol> Component-Based Architecture: </ol>

React is inherently component-based, which means you create reusable UI components. This pattern encourages breaking your UI into smaller, self-contained pieces, making it easier to manage and maintain your application.

<ol>Container and Presentational Components:</ol>

This pattern separates components into two categories: containers (smart components) and presentational (dumb) components. Containers handle data and logic while presentational components focus on rendering UI elements. This separation improves code clarity and reusability.

<ol>Higher-Order Components (HOCs):</ol>

HOCs are functions that accept a component as an argument and return a new, enhanced component. They're used for cross-cutting concerns like authentication, data fetching, and state management.

<ol>Render Props:</ol>

The Render Props pattern involves passing a function as a prop to a component, allowing it to share code or data with its children. It's used for creating flexible and reusable components.

<ol>State Management Patterns:</ol>

React's built-in useState and useReducer hooks provide patterns for managing component state. Libraries like Redux and MobX offer additional state management patterns for larger applications.

<ol>Context API:</ol>

React's Context API allows you to share data between components without prop drilling. It's helpful for managing global state or providing themes and settings across the app.

<ol>Component Lifecycle Methods:</ol>

Understanding the component lifecycle methods (e.g., componentDidMount, componentDidUpdate, and componentWillUnmount) helps you manage side effects and interactions with external services.

<ol>Error Boundaries:</ol>

Error boundaries are components that catch errors in their child components and display fallback UI to prevent the entire app from crashing. This pattern enhances app robustness.

<ol>Router Patterns:</ol>

React Router is a library that offers patterns for handling client-side routing in single-page applications (SPAs). It allows you to create routes and navigate between views efficiently.

<ol>Lazy Loading: </ol>

Lazy loading involves loading components only when they are needed, which improves initial page load times. React provides React.lazy()

