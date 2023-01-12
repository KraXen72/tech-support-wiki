---
title: "palindrome checker in regex"
---

# palindromes with regex
many say it is impossible to make a regex to match a palindrome - while it's certainly impossible to make a unversal one that works for every word length, as long as you know the desired length, it is pretty easy.  
**example for 7 word palindrome:**
```
(.)(.)(.)(.)\3\2\1
```
it uses capture groups => `()` and references to them => `\1` to make sure the word is a palindrome
  
## feasible implementation (optimized)
if you have a text with whitepace and words, and you are not using pure regex (you're using regex in combination with a language like js or python/whatever else), you can do this:  
1. find the longest word out of the text (slice the text into words, sort by length)
2. generate regexes from 2 - longest word
3. either join them into one big regex like [this article](https://medium.com/analytics-vidhya/coding-the-impossible-palindrome-detector-with-a-regular-expressions-cd76bc23b89b) does, or just loop through all words & match each word with it's appropriate regex.
  
## js + regex palindrome checker example
```js
function palindrome(str) {
 const cleaned = str.replace(/[^A-Za-z0-9]|[\s]/g, "").trim().toLowerCase()
 const evilCleaned = cleaned.split("").reverse().join("")
 return cleaned === evilCleaned;

}

console.log(palindrome("A man, a plan, a canal. Panama")) // => true
```
author: me
