# M2-W9-D4

- Memory
- Truth Tables
- Binary & Hexadecimal
- ASCII
- Conversions

## Memory

### RAM (Random Access Memory)
- What does it hold?
  - bits, 1s and 0s, in the form of electrical charge
- Is it slow or fast?
  - fast, to read and write
- Persistent or volatile?
  - volatile - HDDs and SSDs are for long-term storage
  - needs a constant electric power source to retain information
- Cheap or expensive compared to hard disk storage?
  - expensive
- How do we access or refer to it?
  - memory addresses, pointers, references

## Binary Logic and Truth Tables

Logic
| A | B | A && B |
| ----- | ----- | ------ |
| True | False | False |
| True | True | True |
| False | True | False |
| False | False | False |

We can think of True as 1 and False as 0. 1 references a point in your computer is turned on, and the combination of 1s and 0s allow us to create predefined actions. The 0s and 1s live in the Central Processing Unit (CPU), and the actions are saved in the RAM. These 0s and 1s represent the transitors, or tiny electric nodes that are either on or off.

Here is the same table as above with 0s and 1s

| A   | B   | A && B |
| --- | --- | ------ |
| 1   | 0   | 0      |
| 1   | 1   | 1      |
| 0   | 1   | 0      |
| 0   | 0   | 0      |

OR - If either one, or the other

- Denoted with the pipe symbols " || "

| A   | B   | A \|\| B |
| --- | --- | -------- |
| 1   | 0   | 1        |
| 1   | 1   | 1        |
| 0   | 1   | 1        |
| 0   | 0   | 0        |

XOR - If one or the other, but not both

- Denoted with the carrot symbol " ^ "

| A   | B   | A ^ B |
| --- | --- | ----- |
| 1   | 0   | 1     |
| 1   | 1   | 0     |
| 0   | 1   | 1     |
| 0   | 0   | 0     |

NOT - The opposite of expected value

- Denoted with the bang symbol " ! "

| A   | !A  |
| --- | --- |
| 1   | 0   |
| 0   | 1   |

NAND - Combination of NOT + AND

| A   | B   | A && B | !(A && B) |
| --- | --- | ------ | --------- |
| 1   | 0   | 0      | 1         |
| 1   | 1   | 1      | 0         |
| 0   | 1   | 0      | 1         |
| 0   | 0   | 0      | 1         |

## Binary, Hexadecimal, and Conversions

Understanding proof of value

`radix**position`

### Base-10 - Decimal

You are familiar with and learned to count in the base-10 number system.
This system of representing numbers has each digit represent 0-9.

```js
0;
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
```

Proof of value -- 12

- 10^0 \* 2 = 1 \* 2 = 2
- 10^1 \* 1 = 10 \* 1 = 10
- total = 2 + 10 = 12

### Base-2 - Binary

We use binary in machine code to represent everything. 1 and 0, true and false, off and on.
A binary digit is called a bit. 8 binary digits are called a byte

```js
0b0000 -> 0;
0b0001 -> 1;
0b0010 -> 2;
0b0011 -> 3;
0b0100 -> 4;
0b0101 -> 5;
0b0110 -> 6;
0b0111 -> 7;
0b1000 -> 8;
0b1001 -> 9;
0b1001 -> 10;
0b1011 -> 11;
0b1100 -> 12;
0b1101 -> 13;
0b1110 -> 14;
0b1111 -> 15;
```

Proof of value -- 13(1101)

- 2^0 \* 1 = 1 \* 1 = 1
- 2^1 \* 0 = 2 \* 0 = 0
- 2^2 \* 1 = 4 \* 1 = 4
- 2^3 \* 1 = 8 \* 1 = 8
- total = 1 + 4 + 8 = 13

### Base-16 - Hexadecimal

```js
0x0 -> 0;
0x1 -> 1;
0x2 -> 2;
0x3 -> 3;
0x4 -> 4;
0x5 -> 5;
0x6 -> 6;
0x7 -> 7;
0x8 -> 8;
0x9 -> 9;
0xa -> 10;
0xb -> 11;
0xc -> 12;
0xd -> 13;
0xe -> 14;
0xf -> 15;
0x10 -> 16;
0x11 -> 17;
0x12 -> 18;
0x13 -> 19;
```

Proof of Value -- 62,012(F23C)

- 16^0 \* C = 1 \* 12 = 12
- 16^1 \* 3 = 16 \* 3 = 48
- 16^2 \* 2 = 256 \* 2 = 512
- 16^3 \* F = 4096 \* 15 = 61440
- total = 12 + 48 + 512 + 61,440 = 62,012

| Base-10 | Base-2 | Base-16 |
| ------- | ------ | ------- |
| 2       | 10     | 2       |
| 11      | 1011   | B       |

## ASCII

This is one way that we represent characters as binary values.

If this is interesting to you, here is a great [youtube video](https://youtu.be/4mRxIgu9R70?si=meIAggeWA5kjQMO9) on the topic! 

### JS Conversions

- `parseInt('numStr', radix)` -> convert number string to number with a given base
- `stringInstance.charCodeAt()` -> get the encoded integer value for the character
- `numberInstance.toString(radix)` -> get a string representing the number value
- `String.fromCharCode(asciiVal)` -> get the unencoded character from its integer representation
