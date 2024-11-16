let img1 = document.querySelector( ".img1" )
let img2 = document.querySelector( ".img2" )
let img3 = document.querySelector( ".img3" )
let img4 = document.querySelector( ".img4" )
let img5 = document.querySelector( ".img5" )
let img6 = document.querySelector( ".img6" )
let img7 = document.querySelector( ".img7" )
let img8 = document.querySelector( ".img8" )
let allImg = document.querySelectorAll( "img" )
let header = document.querySelector( "header" )

let fun1 = () =>
{

    return setTimeout( () =>
    {
        img1.style.display = "none"
        img2.style.display = "block"
        setTimeout( () =>
        {
            img2.style.display = "none"
            img3.style.display = "block"
            setTimeout( () =>
            {
                img3.style.display = "none"
                img4.style.display = "block"
                setTimeout( () =>
                {
                    img4.style.display = "none"
                    img5.style.display = "block"
                    setTimeout( () =>
                    {
                        img5.style.display = "none"
                        img6.style.display = "block"
                        setTimeout( () =>
                        {
                            img6.style.display = "none"
                            img7.style.display = "block"
                            setTimeout( () =>
                            {
                                img7.style.display = "none"
                                img8.style.display = "block"
                                setTimeout( () =>
                                {
                                    img8.style.display = "none"
                                    img1.style.display = "block"
                                    fun1()
                                }, 1500 )
                            }, 1500 )
                        }, 1500 )
                    }, 1500 )
                }, 1500 )
            }, 1500 )
        }, 1500 )
    }, 1500 )
}
fun1()

