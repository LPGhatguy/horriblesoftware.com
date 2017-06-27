---
title: PHP&#58; Execution Operator
---

PHP has a shorthand form to execute shell commands and get their result.

```php
<?php
$contents = `ls -a`;
echo $contents;
```

The [manual](http://php.net/manual/en/language.operators.execution.php) says:

> Use of the backtick operator is identical to shell_exec().

Why is it an operator?

You can even use backticks with interpolation to get bugs for free:

```php
<?php
$files = "";
echo `rm -rf {$files}/*`;
```

