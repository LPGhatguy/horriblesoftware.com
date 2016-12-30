---
title: ! 'PHP and ==: it gets worse'
---

I found a [Security StackExchange comment](http://security.stackexchange.com/questions/146713/could-this-kind-of-authentification-be-attacked#comment276338_146717) today that shows how PHP's `==` operator can be legitimately dangerous.

It says:

> `md5('aabg7XSs') == md5('aabC9RqS')` (-> true) is a good example why using `==` is a bad idea.

Another comment then goes on to explain in more detail:

> For others' benefit, this failure case occurs because the first byte of the resultant hash for each is `0e`, which is considered to be a "float number format string" by PHP, and type coercion causes them to be compared as numbers.

Are there any cases where `"0e04" == "0e08"` makes sense to be true?