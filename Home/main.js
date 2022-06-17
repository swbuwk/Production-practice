//NAVBAR Scroll
let header=document.querySelector("header")
let navbar=document.querySelector(".navbar")
let client_height=document.documentElement.clientHeight
let exp_list=document.querySelector(".expanded_list")

console.log(header)

document.body.onwheel=function(event){
    console.log(window.scrollY)
    console.log(document.documentElement.clientHeight)

    if(window.scrollY>0){
        navbar.style.backgroundColor="rgba(54, 53, 49,1)"
        exp_list.style.backgroundColor="rgba(54, 53, 49,1)"
    }
    else{
        navbar.style.backgroundColor="rgba(54,53,49,0.5)"
        exp_list.style.backgroundColor="rgba(54,53,49,0.5)"
    }
    if(event.deltaY>0 && window.scrollY>100){
        navbar.style.top="-63px"
    }
    else{
        navbar.style.top="0"
    }
    console.log(event)
}


// BTN About us
let history = document.querySelector('#history')
let achievments = document.querySelector('#achievments')

let achievments_btn = document.querySelector('#achievments-btn')
let history_btn = document.querySelector('#history-btn')


history_btn.style.color = '#40a4dd'
achievments.style.zIndex = '0'
history.style.zIndex = '1'

achievments_btn.onclick = () => {
  history.style.zIndex = '0'
  achievments.style.zIndex = '1'
  history.style.opacity = '0';
  achievments.style.opacity = '1';
  achievments_btn.style.color = '#40a4dd'
  history_btn.style.color = '#000'
}

history_btn.onclick = () => {
  history.style.zIndex = '1'
  achievments.style.zIndex = '0'
  achievments.style.opacity = '0';
  history.style.opacity = '1';
  achievments_btn.style.color = '#000'
  history_btn.style.color = '#40a4dd'
}

// WEBINARS scroll
const webinars = document.querySelector(".webinar-list")
const webinarsCount = webinars.childElementCount
let webinarsLeft = 0


const scroll_left = document.querySelector("#scroll-left")
const scroll_right = document.querySelector("#scroll-right")

scroll_right.onclick = () => {
  if (webinarsLeft>-webinarsCount+1) {
    webinarsLeft--
  } else {
    webinarsLeft=0
  }

  webinars.style.left = `${webinarsLeft*100}%`


}

scroll_left.onclick = () => {
  if (webinarsLeft<0) {
    webinarsLeft++
  } else {
    webinarsLeft=-webinarsCount+1
  }

  webinars.style.left = `${webinarsLeft*100}%`
}

