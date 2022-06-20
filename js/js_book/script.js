var btnUp = document.getElementById("up")

btnUp.style.display = "none"

window.addEventListener("scroll" , function(){
    console.log(window.pageYOffset)
    if(    window.pageYOffset >= 711){
        btnUp.style.display = "block"
    } else{
        btnUp.style.display = "none"
    }
})




btnUp.addEventListener("click" ,function(){
    window.scrollTo(0,0)
})

