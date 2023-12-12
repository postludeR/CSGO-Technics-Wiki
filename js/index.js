function topFunction() {
    
    let myTimer = -1;

    let scrollTo = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (myTimer === -1) {
        myTimer = setInterval(() => {
            
            scrollTo -= 50;
            
            if (scrollTo <= 0) {
                scrollTo = 0;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo) 
        }, 7);

    }

}