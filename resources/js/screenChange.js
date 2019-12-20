/* Gère le changement d'écran et les transitions */

const screens = [
    "#S1", 
    "#S2", 
    "#S3", 
    "#S4",
    "#S5", 
    "#S6", 
    "#S7"
];
let actualScreen = 1;

const nextScreen = () => {
    setTimeout(() => {
        $(screens[actualScreen - 1]).fadeOut((actualScreen === 4) ? 'fast' : 'slow',() => {
            $(screens[actualScreen++]).show();
            if (actualScreen === 7) {
                // stats();
                $( '#S7' ).toggleClass('d-none').toggleClass('d-flex');
            } else {
                pathRangeSlider();
            }
        });

    }, 300);
}

pathRangeSlider();