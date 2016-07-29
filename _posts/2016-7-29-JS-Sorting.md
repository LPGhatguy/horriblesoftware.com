---
title: ! 'JS: Array.prototype.sort'
---

Sorting arrays of numbers in JavaScript is lexicographic:

```js
const numbers = [20, 1, 100];
numbers.sort();

numbers; // [1, 100, 20]
```

Nice.

Giving JS a spaceship operator would yield a concise and only mildly hideous solution:

```js
numbers.sort((a, b) => a <=> b);

numbers; // [1, 20, 100]
```