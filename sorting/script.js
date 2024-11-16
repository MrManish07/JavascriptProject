let asnBtn=document.querySelector(".lowSort")
let desBtn = document.querySelector( ".highSort" );
let amount = document.querySelectorAll( ".amount" )
let section=document.querySelectorAll("section")
let arr = [ 1200, 256, 321, 7856, 1201, 4500 ];
let val=[]

amount.forEach( ( price, index ) => {
    price.textContent = arr[ index ];
    index++
} );
asnBtn.addEventListener( "click", (e) => {
    arr.sort( ( a, b ) => {
        return a - b;
    } )
    amount.forEach( ( price, index ) => {
    price.textContent = arr[ index ];
    index++
} );
})
desBtn.addEventListener( "click", (e) => {
    arr.sort( ( a, b ) => {
        return b - a;
    } )
    amount.forEach( ( price, index ) => {
    price.textContent = arr[ index ];
    index++
} );
})