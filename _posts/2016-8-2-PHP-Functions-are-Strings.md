---
title: ! 'PHP: Functions are Strings'
---

PHP function references are just strings.

```php
<?php

function abc() {
	echo "Hello, world!";
}

$myFun = "abc";
$myFun(); // "Hello, world!"
```

Yes, this is definitely a good idea.