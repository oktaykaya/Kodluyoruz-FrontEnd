let counter = 0;
let counterDOM = document.querySelector("#info")
counterDOM.innerHTML = counter

let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id)
    this.id == "increase" ? counter++ : counter--
    counterDOM.innerHTML = counter

}