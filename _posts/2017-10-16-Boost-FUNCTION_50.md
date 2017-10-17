---
title: ! 'Boost: BOOST_FUNCTION_50'
---

[Check out this Boost source:](http://www.boost.org/doc/libs/1_65_1/boost/function/detail/maybe_include.hpp)

```cpp
#if BOOST_FUNCTION_NUM_ARGS == 0
#  ifndef BOOST_FUNCTION_0
#    define BOOST_FUNCTION_0
#    include <boost/function/function_template.hpp>
#  endif
#elif BOOST_FUNCTION_NUM_ARGS == 1
#  ifndef BOOST_FUNCTION_1
#    define BOOST_FUNCTION_1
#    include <boost/function/function_template.hpp>
#  endif
#elif BOOST_FUNCTION_NUM_ARGS == 2
#  ifndef BOOST_FUNCTION_2
#    define BOOST_FUNCTION_2
#    include <boost/function/function_template.hpp>
#  endif

// ...
// this continues for some time
// ...

#elif BOOST_FUNCTION_NUM_ARGS == 49
#  ifndef BOOST_FUNCTION_49
#    define BOOST_FUNCTION_49
#    include <boost/function/function_template.hpp>
#  endif
#elif BOOST_FUNCTION_NUM_ARGS == 50
#  ifndef BOOST_FUNCTION_50
#    define BOOST_FUNCTION_50
#    include <boost/function/function_template.hpp>
#  endif
#else
#  error Cannot handle Boost.Function objects that accept more than 50 arguments!
#endif
```