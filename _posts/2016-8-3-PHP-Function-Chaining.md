---
title: ! 'PHP: Function Chaining'
---

PHP has no notion of function chaining like most other languages, which nukes the idea of having clean function currying.

An idiomatic, but contrived Lua example:

```lua
local function add(x)
	return function(y)
		return x + y
	end
end

print(add(2)(2)) // 4
```

In PHP (5.6), this is a syntax error:

```php
<?php

function add($x) {
	return function($y) use ($x) {
		return $x + $y;
	};
}

echo add(2)(2); // Error: parse error
```

There's [an RFC open from 2009](https://wiki.php.net/rfc/fcallfcall) that has no activity. Cool.