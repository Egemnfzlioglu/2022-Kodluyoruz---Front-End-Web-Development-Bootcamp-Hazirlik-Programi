

// isim bölümü  #####
let adınız = prompt("ADINIZ ve SOYADINIZI giriniz")
let info = document.querySelector("#myName")
while (adınız.length < 3 || adınız.trim() == "") {
    adınız = prompt("ADINIZ ve SOYADINIZI giriniz")
    if (adınız.length < 3) {
        prompt("Minimum 3 karakter ile ADINIZ ve SOYADINIZI giriniz")
    }
    else {
        info.innerHTML = adınız;
    }
}

document.getElementById("myName").style.color = "red";



// Saat Kısmı  #####
function showTime() {
    let time = new Date;

    document.getElementById('saat').innerHTML = say(time.getHours()) + " : " + say(time.getMinutes()) + " : "
        + say(time.getSeconds()) + "   ----->   " + say(time.getDay()) + " / " + say(time.getMonth()) +
        " / " + say(time.getFullYear());

    setInterval(showTime, 1000)
}






function say(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}



showTime();