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

// PHONE MASK

let input_phone = document.querySelector('#phone')
let maskOptions = {
  mask: '+7 (000) 000-00-00',
  lazy: false
}
IMask(input_phone, maskOptions)

