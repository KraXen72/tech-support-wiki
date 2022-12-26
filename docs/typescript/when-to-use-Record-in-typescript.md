---
title: "when to use Record in typescript"
---
# when to use `Record` in typescript

to quote WaterNinja101 from svelte discord:
  
> `Object.keys` is defined to return a `string[]`
  
> btw if you're curious why Object.keys(foo) returns string[] instead of keyof foo, it's because of this ([ven](https://github.com/Vendicated))
```ts
const foo = {
  bar: 12,
  baz: 42
} as { bar: 12 } // okay cast

Object.keys(foo) // not actually keyof typeof foo, since it also contains baz
```
  
> typescript doesn't care where that `string[]` came from, so when you iterate over it, it goes "hey, you can't use any string to access a property of this object"
  
> a `Record` type specifically says "you can use any string to access a property on this object"
  
example of a record:
```ts
type roles = 'tester' | 'developer' | 'manager'

const staffCount: Record<roles, number> = {
	tester: 10,
	developer: 20,
	manager: 1
}
```
[source (12ft'd medium article explaining more about the Record keyword)](https://12ft.io/proxy?q=https%3A%2F%2Fbetterprogramming.pub%2Ftypescripts-record-type-explained-691372b1a449)