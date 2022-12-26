---
title: "js method chaining"
---
# js method chaining (it’s beautiful)
One of the best things you can do in js, is chain methods. more info [here](https://schier.co/blog/method-chaining-in-javascript) but here are some examples:

### example 1: string
```jsx
let prependName = fullpath
      .replace(filename, "??filename")
      .replace(basedDir, "??basedDir")
      .split(slash)
      .filter(part => !["??basedDir", "??filename"].includes(part))
      .join(pslash)
```
first replaces some stuff, then splits (now we have an array), filter the array and join back into a string. This one was pretty easy, but this feature is really powerful. Let's see another example:
  
### example 2: array (more complex)
you don't need to completely understand the following example, just see that you can chain a lot of powerful transformations together like this.
```js
certs = initialArray.map(result => {
  const country = result["iso_3166_1"]
  const certifications = result["release_dates"]
  return { country, certs: [...new Set([ ...certifications.map(c => c.certification) ])].filter(c => c !== "") }
})
	.filter((cert) => cert.certs.length > 0 )
	.map(({country, certs}) => ({country, cert: certs[0].trim().replaceAll(" ", "") }))
```
[source](https://github.com/KraXen72/imdb-fetch)  
1. `initialArray` is mapped =, transforming an array of objects into something simpler (`{country: string, certs: string[]}`)
	1.  the stuff it returns first spreads an array into a set and then the set back into an array. This is an effective method of removing duplicates
	2. `.filter(c => c !== "")` just removes empty elements
2. all countries which don't have any certifications are filtered out
3. cast `certs[0]` to `cert`
  
## one last caveat
- avoid doing unnecessary array iterations with `map`, `filter`, `reduce` etc.
- instead of, for example, `array.map(i => i).map(i => i).map(i => i).map(i => i)`, try to combine it into one `.map(...)` where possible.
- different types of mutations after each other, or repeated mutation that depend on previous ones are fine 👍