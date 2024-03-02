const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here


  // let seededFruit = document.querySelectorAll(".seed")
  let seededFruit = document.getElementsByClassName("seed")

  if (seededFruit[0] !== undefined){
    // console.log(seededFruit[0])
  }
  let seedArr = Array.from(seededFruit)
  // console.log(seedArr[0])
  // seedArr.forEach(el =>{
  //   console.log(el)
  // })


  // 2. Get all seedless fruit elements
  // Your code here

  let seedLessFruit = document.getElementsByClassName("seedless")
  // let seedLess = Array.from(seedLessFruit)
  // console.log(seedLess)



  // 3. Get first seedless fruit element
  // Your code here

  let firstSeedless = document.querySelector(".seedless")
  // console.log(firstSeedless)


  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here

  let youSpan = document.getElementsByTagName("span")
  // console.log("youSpan: ", youSpan)
  let arr = Array.from(youSpan)

  let answerArr = arr.filter(el =>{
    // console.log("el: ", el.innerText)
    return el.innerText === "you"
  })
// console.log(answerArr[0])

//span.innerText === "you"

  // 5. Get all children of element "wrapper"
  // Your code here

  let wrapper = document.querySelectorAll("#wrapper")

//  console.log(typeof wrapper)
//  console.log(Array.from(wrapper)[0].children)

 let allElements = Array.from(wrapper)[0].children

//  console.log(allElements)

//  wrapper.forEach(el => {
//     console.log("el, ". el)
//   })

  // const wrapperId = document.querySelectorAll('#wrapper');
  //   wrapperId.forEach(item => {console.log(item)})


  // 6. Get all odd number list items in the list
  // Your code here

  let sectionOdd = document.querySelectorAll("#two > ol > li:nth-child(odd)")
  console.log(sectionOdd)


  // 7. Get all even number list items in the list
  // Your code here

  let section = document.querySelectorAll("#two > ol > li:nth-child(even)")
  console.log(section)
  // console.log(Array.from(section.children.item(2).children))

  // let numArr = Array.from(section.children.item(2).children)

  // let filteredArr = numArr.filter(el =>{
  //   // console.log("el",   el.innerText)
  //   console.log(el.className)
  //   return el.className !== "odd"
  //   // console.log()
  // })

  // console.log("answer: ", filteredArr)
  // //if statement on class





  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here




  // 9. Get "Amazon" list element
  // Your code here




  // 10. Get all unicorn list elements (not the image element)
  // Your code here

  const unicorns = document.querySelector("#three > ul").children;
    console.log({ unicorns });


};

window.onload = select;
