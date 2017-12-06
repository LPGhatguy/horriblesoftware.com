---
title: ! 'PHP: == is always wrong'
---

JavaScript has some niche uses for `==`, like checking for `null` or `undefined` in one check:

```js
undefined == null; // true
```

It handles plenty of other cases with `==` just like you'd expect:

```js
5 == true; // false
0 == null; // false
5 == "5 maids milking"; // false
```

A few other cases are kind of strange due to type juggling, which is why `===` is almost always better:

```js
0 == false; // true
1 == true; // true! What is this, C?
1 == "1"; // true
```

PHP, however, takes the idea of type juggling a step further:

```php
<?php

// Same as JS above
0 == false; // true
1 == true; // true
1 == "1"; // true

// ???
0 == null; // true
5 == true; // true
0 == "hello"; // true
5 == "5 jacks jumping"; // true
"0e04" == "0e08"; // WHAT!?
```

PHP's `==` operator is *never* the correct choice. There's no `undefined` vs `nil` to work with, and the comparisons that pass are nonsensical!
