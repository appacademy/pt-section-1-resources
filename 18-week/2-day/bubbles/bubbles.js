
window.onload = () =>{

    document.getElementById('grandparent').addEventListener('click', function() {
        console.log('Grandparent clicked'); //1
    }, false);

    document.getElementById('parent').addEventListener('click', function(e) {
        e.stopPropagation()
        console.log('Parent clicked');  //2
    }, false);

    document.getElementById('child').addEventListener('click', (e) => {

        let ele =  document.getElementById('child')
        ele.dataset.myName = "Will"
        ele.dataset.myDog = "Lucky"
        ele.dataset.secretStuff = "hack me lolz"

        console.log("ele", ele.dataset)
        console.log("child clicked") //3

    })


}
