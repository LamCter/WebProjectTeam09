// Siler show ------------------------

const rightBtn = document.querySelector('.fa-chevron-right')
const leftBtn = document.querySelector('.fa-chevron-left')
const imgNum = document.querySelectorAll('.slider-content-left-top img')
var index = 1
console.log(imgNum.length)
rightBtn.addEventListener("click", function(){
    index = index +1
    if(index > imgNum.length -1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right =  index*100+"%"
})
leftBtn.addEventListener("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgNum.length -1
    }
    document.querySelector(".slider-content-left-top").style.right =  index*100+"%"
})
