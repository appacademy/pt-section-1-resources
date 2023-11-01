# M1-W3-D3

- REPL Practice Session
- POJO Basics

## REPL Practice Session (45m, SOLO)

- Frequency Counter
- Nested Array of Objects
- Nested Objects
- Palindrome Permutation

## REPL Practices Walkthrough

## Primitive vs Reference Types

`Primitive`

```js
let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers);
```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 10  |
| #002 | NOF | 10  |

</td><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 11  |
| #002 | NOF | 10  |

</td></tr> </table>

`Reference`

```js
let biff = {
  type: "dog",
  age: 10,
};
let buster = biff;
buster.age = 0;
console.log(biff, buster);
```

<table>
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
<tr><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 10    |
| #004 | buster | #003  |

</td><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 0     |
| #004 | buster | #003  |

</td></tr> </table>


## POJO Basics (UNTIL EOD, PAIRED)