---
title: "js/ts add function to object"
---
# js/ts add function to object

instead of doing:

```jsx
const timestwo = (num) => {
  return num * 2
}

const object = {
	timestwo: (num) => {
		return timestwo(num)
	}
}

//object.timestwo(5) => 10
```

we can just do

```jsx
const timestwo = (num) => {
  return num * 2
}

const object = { timestwo }

//object.timestwo(5) => 10
```