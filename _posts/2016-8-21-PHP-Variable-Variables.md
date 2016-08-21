---
title: ! 'PHP: Variable Variables'
---

PHP has a unique and (hopefully) seldom-used feature: [variable variables](http://php.net/manual/en/language.variables.variable.php).

```php
<?php

$x = "Hello, world!";
$y = "x";

echo $$y; // Hello, world!
```

I hope never to find a design pattern where this makes sense as such a concise language-level feature. Some other languages have similar features, but all of them are either much more clunky or more explicit as to what's happening.

Lua's version only works on global variables, and is more explicit:

```lua
x = "Hello, world!"
y = "x"

print(_G[y]) -- Hello, world!
```

Python has a similar capability with dynamically-generated globals, [but it's still not a good idea](http://stupidpythonideas.blogspot.com/2013/05/why-you-dont-want-to-dynamically-create.html):

```python
globals()["x"] = "Hello, world!"
y = "x"

print(x) # Hello, world!
print(globals()[y]) # Hello, world!
```

Stay safe, stay statically-named.