
![GitHub followers](https://img.shields.io/github/followers/Code-Oz?style=social)

![GitHub Repo stars](https://img.shields.io/github/stars/Code-Oz/lift-promise?style=social)

## **liftP function**

## What is and why ?

Use lifP when you want to modify a sync function into an async function without manage parameters !

Use it if you have the folowing example

## Examples of usage

Let's compare the following case:

1) Bad Solution:

```ts
// Solution Async / Await

const add = (x: string, y: number) => x + y
const compute = async () => {
    const value1 = await Promise.resolve(3)
    const value2 = await Promise.resolve(4)
    return add(value1, value2)
}

// We are unboxing values and reboxing them again since async function
```

And why don't directly manipulate promise?

Yes but you have to rewrite `add` function

Why not use the lifP function? This will transform the function for manipulating promise as parameters !

2) Good Solution:

```ts
// Solution liftP

const add = (x: string, y: number) => x + y
// Lift add function for change params <T> to promise <T>
const addP = liftP(add)
​
const compute = () => {
    const promise1 = Promise.resolve(3)
    const promise2 = Promise.resolve(4)

    return addP(promise1, promise2)
}
// Here we are not unbox value ! We are currently working with promise as synchronous code !
```

Summarize:

Promise Lifting changes the focus from converting our values to work with our functions, to converting the functions to work with our values.

​
Promise Lifted code appears structurally similar to synchronous code.

​
Boxed values are no longer unboxed and then reboxed.

​
From https://blog.bitsrc.io/out-with-async-await-and-in-with-promise-lifting-c42882a474fd

Github => https://github.com/Code-Oz/lift-promise
