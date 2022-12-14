const buttons = document.querySelectorAll('button');


// console.log(buttons[0].firstElementChild.childNodes[0].data)

buttons.forEach((button) => {

    //This is to work with clicked with mouse
    button.addEventListener('click', () => {
        new Audio(`./sounds/${button.id}.wav`).play();
    })
    
    //This is to work with keyboard
    window.addEventListener('keydown', (e) => {
        // console.log(e.key.toUpperCase())
        if(e.key.toUpperCase() === button.firstElementChild.childNodes[0].data){
            button.click() ;
            
            button.classList.add('playing') //This is to add transition and some styles to the onclicked element and it wont go until removed
        }
    })

    function removeTransition(e){
        this.classList.remove('playing') //this means button in the 27th line ....  it all depends on how much time is set on the box element in css 
    }

    button.addEventListener('transitionend', removeTransition)



})



