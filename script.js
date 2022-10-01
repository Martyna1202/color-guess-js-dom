
const span = document.querySelector('#color-display');
const resetBtn = document.querySelector('#reset');
const message = document.querySelector('#message')
const easyBtn = document.querySelector('.mode');
const hardBtn = document.querySelector('.selected');
const conSquares = document.querySelector('#container')
const squares = conSquares.querySelectorAll('.square');
//  console.log(squares.length);


/**
 *      Was ist zu tun?
 * 
 *  Setup
 *  ******
 *  * Farbe generieren 
 *      (3 Kanäle, Math.random())
 *      Drei Werte: red, green, blue
 *          red     Wert zuweisen, zufällig: 0 - 255       
 *          green   Wert zuweisen, zufällig: 0 - 255
 *          blue    Wert zuweisen, zufällig: 0 - 255
 *      
 *    Kanäle ausgeben als Template-String:
 *      rgb(${red}, ...)
 *  
 * 
 *  * Elemente selektieren
 *  
 *  * Zufällig eine Gewinn-Farbe selektieren
 *  * 
 *  * ggf. Leben für Versuche implementieren
 * 
 * 
 *  Spielablauf
 *  ************
 *  * Überprüfung angebliche Farbe (Funktion, Event)
 *    RGB (...)
 *       OOO
 *       OOO
 * 
 *  * ggf. Ähnlichkeit der Farben prüfen
 */

//  Farbe generieren



const options = 6;      //  Funkt. unten wird dadurch flexibler, falls mehr Farben kommen
let winColor;

function generateRandomColor() {
    //  Drei Werte: red, green, blue
    //  red     Wert zuweisen, zufällig: 0 - 255 
    //  green   Wert zuweisen, zufällig: 0 - 255
    //  blue    Wert zuweisen, zufällig: 0 - 255
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    //  Kanäle ausgeben als Template-String:    rgb(${red}, ...)
    return {red, green, blue};
}

//  6 colors
//  console.log(generateRandomColor()); //  6 x untereinander ergibt 6 versch. Farben


function setup() {
    message.innerHTML = ""; //  Zum Zurücksetzen des Win/ Loose-Textes
    let colors = [];
    
    for (let i = 0; i < options; i++) {     //  führe generateRandomColor 6 mal aus (for-Schleife)
        colors.push(generateRandomColor())
    }
    //  console.log(colors);

    //  Gewinn-Farbe bestimmen
    winColor = Math.floor(Math.random() * options);

    //  console.log('Gewinn-index: ', winColor);
    //  console.log('Gewinn-Farbe: ', colors[winColor]);

    squares.forEach((square, i)=>{
        square.style.backgroundColor = `rgb(${colors[i].red}, ${colors[i].green}, ${colors[i].blue})`;
    })

    span.innerHTML = `rgb(${colors[winColor].red}, ${colors[winColor].green}, ${colors[winColor].blue})`
}

function winOrLose(e) {
    
    for (let i = 0; i < options; i++) {
        if(e.target.style.backgroundColor === span.innerHTML ){
            return message.textContent = 'Gewonnen'
        } else if(e.target.style.backgroundColor !== span.innerHTML){
            return message.textContent = 'Try Again'
        }
    }    
}


//  Event-Listeners
resetBtn.addEventListener('click', setup);
squares.forEach(square=>{
    square.addEventListener('click', winOrLose)
});





// ******************************************************
//      Notizen ... der Weg zum Ziel
  
// function winOrLose(e) {
    
// for (let i = 0; i < squares.length; i++) {
//     if(e.target.style.backgroundColor === span.innerHTML ){
//         return message.textContent = 'Gewonnen'
//     } else if(e.target.style.backgroundColor !== span.innerHTML){
//         return message.textContent = 'Try Again'
//     }
// }
//  ++++++++++++++++++++++++++++++++++
//  Oder mit forEach:
// squares.forEach((square, i)=>{
//     console.log(square.style.backgroundColor);
//     console.log(square, i);
//     console.log(winColor);
//     console.log(e);
//     console.log(e.target);
//     console.log(span.innerHTML);

//     if(e.target.style.backgroundColor === span.innerHTML ){
//         return message.textContent = 'Gewonnen'
//     } else if(e.target.style.backgroundColor !== span.innerHTML){
//         return message.textContent = 'Try Again'
//     }

