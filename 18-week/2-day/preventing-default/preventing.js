document.addEventListener("DOMContentLoaded", () => {
  function phase1() {
    // what are we applying the event listner
    //query selector

    let aTag = document.querySelector("a");
    aTag.style.color = "red"
    // console.log("aTag", aTag);

    // event listners
    aTag.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  function phase2() {
    // querySelectorAll

    // let atags = document.querySelectorAll("div");
    let atags = document.getElementsByTagName("div");
    console.log("A tags", atags)

    // let myArr = Array.from(atags)
    // console.log("A tags", myArr)
    // atags.push()
    // console.log("my arr", myArr.push())
    Array.from(atags).forEach(el =>{
        el.addEventListener("contextmenu", (e) =>{
            e.preventDefault()
    })
})







  }

  phase1();
  phase2();
});

document.addEventListener("contextmenu", (event) => {
  console.log("Right click occured!");
});
