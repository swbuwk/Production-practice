//NAVBAR Scroll
let header=document.querySelector("header")
let navbar=document.querySelector(".navbar")
let client_height=document.documentElement.clientHeight
let exp_list=document.querySelector(".expanded_list")

console.log(header)

document.body.onwheel=function(event){

    if(window.scrollY>100){
        navbar.style.backgroundColor="rgba(54, 53, 49,1)"
        // exp_list.style.backgroundColor="rgba(54, 53, 49,1)"
    }
    else{
        navbar.style.backgroundColor="rgba(54,53,49,0.5)"
        // exp_list.style.backgroundColor="rgba(54,53,49,0.5)"
    }
    if(event.deltaY>0 && window.scrollY>100){
        navbar.style.top="-63px"
    }
    else {
        navbar.style.top="0"
    }
    console.log(event)
}