---
title: ! 'Python: Division'
---

## Python 2

```python
5 / 2  # 2
5 // 2 # 2
5 / 2. # 2.5
```

Python 2 has integer division by default. That's fine, if not a little bit odd for a dynamic language. Ruby does this too.

## Python 3

```python
5 / 2  # 2.5
5 // 2 # 2
5 / 2. # 2.5
```

Python 3 breaks compatibility with Python 2 by having floating-point division by default. This is also fine. Lua does this too.

## Python 2 (again)

```python
from __future__ import division

5 / 2  # 2.5
5 // 2 # 2
5 / 2. # 2.5
```

Python 2 can change the semantics of the division operator with an import.

Yes, this is for writing code that runs on both Python 2 and 3.

Yes, this is still kind of a scary prospect.