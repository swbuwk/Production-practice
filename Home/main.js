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

// SECTION ABOUT US
let history_btn = document.querySelector('#history-btn')
let achievements_btn = document.querySelector('#achievements-btn')
let history = document.querySelector('#history')
let achievements = document.querySelector('#achievements')

achievements.style.display = 'none'
history_btn.style.color = '#40a4dd'

history_btn.onclick = () => {
  achievements.style.opacity = '0';
  history.style.opacity = '1'
  history_btn.style.color = '#40a4dd'
  achievements_btn.style.color = '#000'
  setTimeout (() => {
    achievements.style.display = 'none';
    history.style.display = 'flex';
  },200)
}

achievements_btn.onclick = () => {
  achievements.style.opacity = '1';
  history.style.opacity = '0';
  history_btn.style.color = '#000'
  achievements_btn.style.color = '#40a4dd'
  setTimeout (() => {
    history.style.display = 'none';
  achievements.style.display = 'flex';
  },200)
}

// WEBINARS scroll
const webinars = document.querySelector(".webinar-list")
const webinarsCount = webinars.childElementCount
let webinarsLeft = 0
let startX

const scroll_left = document.querySelector("#scroll-left")
const scroll_right = document.querySelector("#scroll-right")

function scrollWebinar(choice) {
  if (choice==="right") {
    if (webinarsLeft>-webinarsCount+1) {
          webinarsLeft--
        } else {
          webinarsLeft=0
    }
  } else {
    if (webinarsLeft<0) {
      webinarsLeft++
    } else {
      webinarsLeft=-webinarsCount+1
    }    
  }

  webinars.style.left = `${webinarsLeft*100}%`

}

scroll_right.onclick = () => {
  scrollWebinar("right")
}

scroll_left.onclick = () => {
  scrollWebinar("left")
}

webinars.onmousedown = (e) => {
  startX = e.screenX
}

webinars.onmouseup = (e) => {
  if (startX < e.screenX - 100)scrollWebinar("left")
  if (startX > e.screenX + 100)scrollWebinar("right")
  startX = e.screenX
}

webinars.ontouchstart = (e) => {
  startX = e.screenX
}

webinars.ontouchend = (e) => {
  if (startX < e.screenX - 50)scrollWebinar("left")
  if (startX > e.screenX + 50)scrollWebinar("right")
  startX = e.screenX
}