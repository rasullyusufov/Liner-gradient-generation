
const btn = document.getElementById('generator')
const colorCode = document.querySelector('h3')

btn.addEventListener('click', generator)
function generator(){
const colors = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]

function colorPcker() {

     let randomColor = '#'
    for (let i = 0; i < 6 ; i ++){
       
        const random = Math.floor(Math.random() * colors.length)
        randomColor += colors[random]
  
    }
 return randomColor

}
const randomColor1 = colorPcker()
const randomColor2 = colorPcker()
const randomColor3 = colorPcker()

const randomDeg = Math.floor(Math.random() * 361)

document.body.style.background  = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2}, ${randomColor3})`;

colorCode.textContent = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2},${randomColor3})`


}
generator()

