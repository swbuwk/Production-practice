
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
  history_btn.style.color = '#fff'
}

history_btn.onclick = () => {
  history.style.zIndex = '1'
  achievments.style.zIndex = '0'
  achievments.style.opacity = '0';
  history.style.opacity = '1';
  achievments_btn.style.color = '#fff'
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

