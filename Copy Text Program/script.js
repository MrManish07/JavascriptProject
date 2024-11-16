let nav = document.querySelector( ".navHeader" );
nav.addEventListener( "click", ( e ) => {
    let copiedTxt = e.target.innerText;
    navigator.clipboard.writeText( copiedTxt ).then( () => {
        setTimeout( () => {
            nav.textContent = "Copied 🧾";
            setTimeout( () => {
                history.go();
            }, 1000 );
        }, 100 );
    } );
} );







