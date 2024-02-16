let userName = prompt("İsim Soyisim")

function loop(){

    let myName = document.querySelector("#myName")
    myName.innerHTML = userName

    let time = document.querySelector("#myClock")
    const h = new Date();

    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    let day = weekday[h.getUTCDay()];

    let hour = h.getHours();
    let minute = h.getMinutes();
    let second = h.getSeconds();

    time.innerHTML = `${hour} : ${minute} : ${second} ${day}`

}

setInterval(loop, 1000); // kodun sürekli çalışmasını ve bir saat gibi çalışmasını sağladı