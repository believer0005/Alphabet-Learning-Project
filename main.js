var len = document.querySelectorAll(".myBTN").length

for(var i = 0; i < len; i++){
    document.querySelectorAll(".myBTN")[i].addEventListener("click", function(){
        var text = this.innerHTML
        text = text.toLowerCase()
        document.getElementById('showClickedBTN').innerHTML = text
        audioPlay(text)
        playAnimation(text)
    });
}


function audioPlay(text){
    switch (text) {
        case "a":
            var audio = new Audio("sounds/A.mp3")
            audio.play()
            var myImg = document.querySelector('#myIMG')
            myImg.src = "icon/apple.png"
            setTimeout(function(){
                var myImg = document.querySelector('#myIMG')
                myImg.src = ""
            }, 1000);
            break;

        case "b":
            var audio = new Audio("sounds/B.mp3")
            audio.play()
            var myImg = document.querySelector('#myIMG')
            myImg.src = "icon/boll.png"
            setTimeout(function(){
                var myImg = document.querySelector('#myIMG')
                myImg.src = ""
            }, 1000);
            break;

        case "c":
            var audio = new Audio("sounds/C.mp3")
            audio.play()
            var myImg = document.querySelector('#myIMG')
            myImg.src = "icon/cat.png"
            setTimeout(function(){
                var myImg = document.querySelector('#myIMG')
                myImg.src = ""
            }, 1000);
            break;
            
        case "d":
            var audio = new Audio("sounds/D.mp3")
            audio.play()
            var myImg = document.querySelector('#myIMG')
            myImg.src = "icon/dog.png"
            setTimeout(function(){
                var myImg = document.querySelector('#myIMG')
                myImg.src = ""
            }, 1000);
            break;
    
        default:
            break;
    }
}

function playAnimation(text){
    var selectionBTn = document.querySelector("." + text)
    selectionBTn.classList.add("amin");
    setTimeout(function(){
        selectionBTn.classList.remove("amin")
    }, 1000)
}


document.addEventListener("keypress", function(event){
    var text = event.key
    audioPlay(text)
    playAnimation(text)
})

