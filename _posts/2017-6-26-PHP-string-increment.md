---
title: PHP&#58; String Increment
---

In PHP, what do you expect the following to output?

```php
<?php
$x = "12a";
$x++;
echo $x;
```

If you guessed "error" or `12a`, then you're still sane, but sadly wrong.

The answer is `12b`, due to PHP's hybrid base-26/base-10 numeric system in strings.

Let's try another one:

```php
<?php
$x = "12z";
$x++;
echo $x;
```

Any guesses?

The answer is `13a`. `z` wraps over to `a` (base 26), and then carries over to change `2` to `3`. Of course!

Last one:

```php
<?php
$x = "0d9";
$x++;
$x++;

echo $x;
echo gettype($x);
```

The answer is `1`, and the type is `double`.

The first increment operator wraps `0d9` into `0e0` by the rules above. This happens to be the scientific notation for `0`, unfortunately.

When we increment a string that looks like a number in scientific notation, PHP instead juggles it to be a number, then performs the operation on that!

This isn't likely to come up in any *real* code, but that doesn't stop this from being one of those bizarre features in PHP.
