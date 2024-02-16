/*console.log(document.location)
let title = document.getElementById("title")
console.log(title)
console.log(title.innerHTML)
console.log(title.innerHTML = "Deneme")//değiştirebildik*/

//let link = document.querySelector("ul#list>li>a")
//console.log(link)
//console.log(link.innerHTML)
//link.innerHTML = "Link bilgisi değişti"

//let link = document.querySelector("#kodluyoruzLink")
//console.log(link.innerHTML)
/*
let fullName = prompt("Lütfen Adınızı Giriniz") // kullanıcıdan bilgi almak

let title = document.querySelector("#title")
//önce id ile title nesnesine ulaştık oradan sonra o yazıyı tekrar değiştirerek kullanıcıdan aldığımız bilgiyi verdik
title.innerHTML = `${title.innerHTML} <small style="color:red">${fullName}</small>` */

let firstChild = document.querySelector("ul#list>li:first-child")
console.log(firstChild)
console.log(firstChild.innerHTML)


let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild)
console.log(lastChild.innerHTML)

//element oluşturma
let ulDom = document.querySelector("ul#list")
let liDom = document.createElement("li")
liDom.innerHTML = "kendi oluşturduğumuz öge"
ulDom.append(liDom)//sona ekler
ulDom.prepend(liDom)//başa ekler