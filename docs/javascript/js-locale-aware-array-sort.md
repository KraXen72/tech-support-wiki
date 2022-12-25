---
title: "js locale-aware array sort"
layout: "doc"
---
# js locale-aware array sort

[https://elijahmanor.com/byte/js-locale-sort](https://elijahmanor.com/byte/js-locale-sort)

```jsx
let strings = [ "nop", "NOP", "ñop", "abc", "abc", "äbc" ];
strings.sort((a, b) => a.localeCompare(b));
console.log(strings);
// ['abc', 'abc', 'äbc', 'nop', 'NOP', 'ñop']
```