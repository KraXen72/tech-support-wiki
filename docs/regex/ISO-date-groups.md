---
title: "regex for ISO dates"
---
# regex for ISO dates
```
^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|[+-]\d{2}:\d{2})?)?$
```

![iso_regex](/iso_regex.png)

matches parts of the iso date into groups, so that you can for example [sort by iso dates](https://regex101.com/r/RfMAcx/1)  

https://regex101.com/r/RfMAcx/1, [credit](https://github.com/alexandru-dinu)