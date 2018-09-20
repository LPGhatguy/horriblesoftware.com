---
title: ! 'Lua: debug.traceback'
---

Lua has a function to capture stack traces. You can pass in which thread to capture the stack trace from, a message to prepend, and how many levels of the stack to skip. It returns a string.

The signature from the Lua 5.1 reference manual is:

```
debug.traceback ([thread,] [message [, level]])
```

We've got optional argument soup here, which is a recipe for disaster. Let's open my trusty Lua 5.1 REPL and see what happens!

```
Lua 5.1.4  Copyright (C) 1994-2008 Lua.org, PUC-Rio
> =debug.traceback()
stack traceback:
        stdin:1: in main chunk
        [C]: ?
```

So far so good.

```
> =debug.traceback(1)
1
stack traceback:
        stdin:1: in main chunk
        [C]: ?
```

Okay, that's kind of annoying -- a numeric argument gets coerced into a string as `message` field. No big deal, we'll just pass `nil` in for `message`.

```
> =debug.traceback(nil, 1)
nil
```

That's interesting. Maybe `nil` is being interpreted as the `thread` argument. Let's pass in the empty string instead.

```
> =debug.traceback("", 1)

stack traceback:
        stdin:1: in main chunk
        [C]: ?
```

It inserted a leading newline. Alright, that's fine. Let's put in `nil` for both `thread` and `message`.

```
> =debug.traceback(nil, nil, 1)
1
```

Wait, hold on, what?

```
> =type(debug.traceback(nil, nil, 1))
number
> =type(debug.traceback(nil, nil, {}))
table
```

Oof.