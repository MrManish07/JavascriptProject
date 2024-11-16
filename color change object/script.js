let colorAll = document.querySelector( ".colorPicker" );
let btn = document.querySelector( "button" );
colorAll.addEventListener( "click", ( e ) => {
    if ( e.target.classList.contains( "red" ) ) {
        document.querySelector( ".box" ).style.backgroundColor = "red"
        document.querySelector( ".box" ).style.color = "white"
        
    }
    if(e.target.classList.contains("green")){
        document.querySelector(".box").style.backgroundColor="green"
    }
    if(e.target.classList.contains("orange")){
        document.querySelector(".box").style.backgroundColor="orange"
    }
    if(e.target.classList.contains("blue")){
        document.querySelector(".box").style.backgroundColor="rgb(34, 152, 255)"
    }
} )
btn.addEventListener( "click", ( e ) => {
    history.go()
})

