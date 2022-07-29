//variables (start and end)
let start = document.querySelectorAll('.cont')[0]
let end = document.querySelectorAll('.cont')[1]
//variables (plus and minus )
let plus = document.querySelectorAll('button')[2]
let minus = document.querySelectorAll('button')[3]
//variables (circles)
let one = document.querySelectorAll('div')[0]
let two = document.querySelectorAll('div')[1]
let three = document.querySelectorAll('div')[2]
let four = document.querySelectorAll('div')[3]
let five = document.querySelectorAll('div')[4]
let six = document.querySelectorAll('div')[5]
let seven = document.querySelectorAll('div')[6]
let eight = document.querySelectorAll('div')[7]
//variables (amount and set interval )
let my;
let amount = 100;
//click start button to turn on the lights
start.onclick = () => {
    //set interval to change circles color every depending on amount
    my = setInterval(() => {
        one.classList.toggle('one')
        one.classList.toggle('b')

        two.classList.toggle('two')
        two.classList.toggle('g')

        three.classList.toggle('three')
        three.classList.toggle('y')

        four.classList.toggle('four')
        four.classList.toggle('r')

        five.classList.toggle('five')
        five.classList.toggle('y')

        six.classList.toggle('six')
        six.classList.toggle('g')

        seven.classList.toggle('seven')
        seven.classList.toggle('b')

        eight.classList.toggle('eight')
        eight.classList.toggle('r')

    }, amount);
    //click to +100 to amount
    plus.onclick = () => {
        amount = amount + 100
    }
    //click to -100 form amount
    minus.onclick = () => {
        amount = amount - 100
    }
}
//click to stop everything
end.onclick = () => {
    clearInterval(my)
}