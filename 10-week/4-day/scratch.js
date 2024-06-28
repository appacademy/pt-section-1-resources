// const arr = [1, 2, 3, 4, 5, 1, 1, 1, 1, "a", "a", "A", "b"]

// const newSet = new Set(arr);

// console.log(newSet);

// newSet.add(6)

// console.log(newSet);

// newSet.delete("A")

// console.log(newSet);
// console.log(newSet.size);
// console.log(newSet.has(1));
// console.log(newSet.has(10));
// newSet.add(1);
// console.log(newSet);

// const arr1 = [1, 2, 3];
// arr1[0] = 1;


// =======================PST================================
// const arr = [1, 2, 3, 4 , 5, 1, 1, 1, 1, 1, "a", "A", "aa", "b", "bbb" ]


// const newSet = new Set(arr);
// console.log(newSet);
// // console.log(new Set("Gregory"));
// newSet.add("G");
// newSet.add(5);
// newSet.delete(1);
// console.log(newSet);
// newSet.delete("Greg");
// console.log(newSet);
// console.log(newSet.size);
// console.log(newSet.has(2));
// console.log(newSet.has(20));
// newSet.clear();
// console.log(newSet);

const isUnique = (arr) => {
    let set = new Set(arr);
    return set.size === arr.length;
  };

  console.log(isUnique([1, 2, 3]));
  console.log(isUnique([1, 2, 3, 1]));

