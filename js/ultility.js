function HE() {

    let myTimer = -1;

    let scrollTo = 0;

    if (myTimer === -1) {
        myTimer = setInterval(() => {

            scrollTo += 50;

            if (scrollTo >= 950) {
                scrollTo = 950;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo)
        }, 7);

    }

}


function smoke() {

    let myTimer = -1;

    let scrollTo = 0;

    if (myTimer === -1) {
        myTimer = setInterval(() => {

            scrollTo += 50;

            if (scrollTo >= 3802) {
                scrollTo = 3802;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo)
        }, 7);

    }

}

function flash() {

    let myTimer = -1;

    let scrollTo = 0;

    if (myTimer === -1) {
        myTimer = setInterval(() => {

            scrollTo += 50;

            if (scrollTo >= 2262) {
                scrollTo = 2262;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo)
        }, 7);

    }
}

function flame() {

    let myTimer = -1;

    let scrollTo = 0;

    if (myTimer === -1) {
        myTimer = setInterval(() => {

            scrollTo += 50;

            if (scrollTo >= 5640) {
                scrollTo = 5640;
                window.clearInterval(myTimer);
                myTimer = -1;
            }

            window.scrollTo(0, scrollTo)
        }, 7);

    }
}

