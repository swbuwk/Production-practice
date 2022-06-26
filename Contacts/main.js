//NAVBAR Scroll
let header=document.querySelector("header")
let navbar=document.querySelector(".navbar")
let client_height=document.documentElement.clientHeight
let exp_list=document.querySelector(".expanded_list")
let phone_options_list=document.querySelectorAll(".phone_options_expanding")
let burger=document.querySelector(".burger")
let phone_navbar=document.querySelector(".phone_navbar")
let cross=document.querySelector(".cross")

document.body.onwheel=function(event){

    if(window.scrollY>100){
        navbar.style.backgroundColor="rgba(54, 53, 49,1)"
        
    }
    else{
        navbar.style.backgroundColor="rgba(54,53,49,0.5)"
        
    }
    if(event.deltaY>0 && window.scrollY>100){
        navbar.style.top="-63px"
    }
    else {
        navbar.style.top="0"
    }
}

phone_options_list.forEach(element => {
    element.onclick=function(event){
        element.children[1].children[0].classList.toggle("invisible")
    }
})

burger.onclick=function(event){
    phone_navbar.classList.toggle("invisible")
}
cross.onclick=function(event){
    phone_navbar.classList.toggle("invisible")
}

// CHANGE CALL AND MESSAGE 

let btn_call = document.querySelector('#btn-call')
let btn_message = document.querySelector('#btn-message')
let call = document.querySelector('#call')
let message = document.querySelector('#message')

btn_call.onclick = () => {
  btn_call.classList.add('btn-call__active')
  btn_message.classList.remove('btn-message__active')
  call.style.display = 'flex'
  message.style.display = 'none'
  setTimeout(() => {
    message.style.opacity = '0'
    call.style.opacity = '1'
  }, 200)
}

btn_message.onclick = () => {
  btn_call.classList.remove('btn-call__active')
  btn_message.classList.add('btn-message__active')
  call.style.display = 'none'
  message.style.display = 'flex'
  setTimeout(() => {
    message.style.opacity = '1'
    call.style.opacity = '0'
  }, 200)
}


// PHONE MASK

let input_phones = document.querySelectorAll('#input-phone')
let maskOptions = {
  mask: '+7 (000) 000-00-00',
  lazy: false
}
input_phones.forEach(phone => {
  IMask(phone, maskOptions)
})


// YANDEX MAP

ymaps.ready(initMap)

function initMap () {
  let zoomMap = 16;
  var myMap = new ymaps.Map("map", {
    center: [59.96791165733911, 30.31445309868539],
    zoom: scaleMap(zoomMap),
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

function scaleMap (scale) {
  let width = document.body.clientWidth;
  if (width >= 320 && width <= 576) {
    scale = 14.7;
  }
  if (width >= 576 && width <= 768) {
    scale = 15.5
  }
  return scale;
}