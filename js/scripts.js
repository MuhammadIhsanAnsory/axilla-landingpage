AOS.init({
    delay: 200, 
    duration: 1000, 
    once: false
});

(function () {
	'use strict'
	feather.replace()
})()


function sendMessage(){
    let name = document.getElementById('formMessage').name.value
    if(name.length == 0){
        name = "Bunga"
    }
    let phone = document.getElementById('formMessage').phone.value
    if(phone.length == 0){
        phone = "Via%20web"
    }
    let message = document.getElementById('formMessage').message.value
    if(message.length == 0){
        message = "Halo%20admin,%20saya%20mau%20order%20Axilla"
    }
    let whatsapp = `https://wa.me/628119869991?text=Halo%20admin.%20Saya,%0aNama%20:%20${name}%0aNo%20Hp%20:%20${phone}%0aPesan%20:%20${message}`;

    window.open(whatsapp, '_blank')
  }

var n = new Date()
document.getElementById("year").innerHTML = n.getFullYear()



