

// CHANGE CALL AND MESSAGE 

let btn_call = document.querySelector('#btn-call')
let btn_message = document.querySelector('#btn-message')
let call = document.querySelector('#call')
let message = document.querySelector('#message')

btn_call.style.background = '#40a4dd'
btn_call.style.color = '#fff'
message.style.display = 'none'


btn_call.onclick = () => {
  call.style.display = 'flex'
  message.style.display = 'none'
  btn_call.style.background = '#40a4dd'
  btn_call.style.color = '#fff'
  btn_message.style.background = '#fff'
  btn_message.style.color = '#1d465d'
  setTimeout(() => {
    message.style.opacity = '0';
    call.style.opacity = '1';
  },200)
}

btn_message.onclick = () => {
  call.style.display = 'none'
  message.style.display = 'flex'
  btn_call.style.background = '#fff'
  btn_call.style.color = '#1d465d'
  btn_message.style.background = '#40a4dd'
  btn_message.style.color = '#fff'
  setTimeout(() => {
    message.style.opacity = '1';
    call.style.opacity = '0';
  },200)
}




// PHONE MASK

let input_phones = document.querySelectorAll('#input-phone')
let maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
}
input_phones.forEach(phone => {
  IMask(phone, maskOptions)
})


// YANDEX MAP

ymaps.ready(initMap)

function initMap () {
  var myMap = new ymaps.Map("map", {
    center: [59.96791165733911, 30.31445309868539],
    zoom: 16,
    controls: []
  })

  var markCompany = new ymaps.Placemark([59.96971160733611, 30.31825309868539], {
    iconCaption: 'Мы здесь'
  }, {
    preset: 'islands#redDotIconWithCaption',
    iconOffset: [-30, 5]
  })

  var markSubway = new ymaps.Placemark([59.966379, 30.311153], {
    iconCaption: 'Метро'
  }, {
    preset: 'islands#darkBlueDotIconWithCaption',
    iconOffset: [10, 0]
  })
  myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects.add(markCompany)
  myMap.geoObjects.add(markSubway)
}
