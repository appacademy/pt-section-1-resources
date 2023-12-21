# M2-W9-D3

- Arrays and Time/Space Complexity

## Arrays

> An array is a sequence of elements of the same type stored in a contiguous block of memory.

> The way JavaScript achieves mixed array types is because each value is stored as a generic data object whose type and value is interpreted at runtime. The array itself actually contains a sequence of pointers (i.e. memory addresses) which all have the same data size. This allows more flexibility at the expense of some extra memory, which is used to store the pointers and object metadata.

### Array Representation in Memory

This will be a high level overview, we don't need to get too into the weeds on this topic. If you want to get into manual memory management in lower level languages like C, you will want to dig deeper into topics like this.

Contiguous block of memory means that an array can be very optimized in how they access and prepare memory to hold data. 

Lets say we allocated 16 bytes of memory to hold 4 32bit integers.

8 bits can store an integer from `0` - `2_147_483_647`

the amount of space allocated is identical for any number within that range.

```
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000
```

lets say these are the numbers we want to store `[0, 1, 4000, 1_000_000_564]`

we need to translate these numbers into binary to be stored in memory

```
104      105      106      107
00000000 00000000 00000000 00000000 --- 0

108      109      110      111
00000000 00000000 00000000 00000001 --- 1

112      113      114      115
00000000 00000000 00001111 10100000 --- 4000

116      117      118      119
00111011 10011010 11001100 00110100 --- 1_000_000_564
```

to find an index we use this formula `valueAddress = startAddress + index * sizeof(dataType)`

this is super efficient. Regardless of the array size the amount of operations is constant meaning accessing data by index is an O(1) operation.

examples:

| | valueAddress | startAddress | index | dataSize |
|-- |-- |-- |-- |-- |
|arr[0]| 104| 104 | 0 |   4 |
|arr[1]| 108| 104 | 1 |   4 |
|arr[3]| 116| 104 | 3 |   4 |
|arr[4]| 120| 104 | 4 |   4 |

## Array Resizing 

This is one of the more expensive operations arrays have. 

In the previous example we had an array that was allocated 16bytes, if we need to store one more 32bit integer, we would need to reallocate space. This would assign the array to a new contiguous block of memory and copy over the previous values.
If we were to run `arr.push(0)` it could look like this. 

```
200      201      202      203
00000000 00000000 00000000 00000000 --- 0

204      205      206      207
00000000 00000000 00000000 00000001 --- 1

208      209      212      211
00000000 00000000 00001111 10100000 --- 4000

212      213      214      215
00111011 10011010 11001100 00110100 --- 1_000_000_564

216      217      218      219
00000000 00000000 00000001 00000000 --- 0
```

Due to how expensive it is to reallocate memory for an array, it is common practice for dynamic languages to overallocate space on the creation on the array.

## Dynamic Arrays Practice

## Array Methods Big O Practice

## Arrays Big O Project
