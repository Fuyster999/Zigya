const button = document.getElementById('btn')
const color = document.querySelector('.color')

const colors = ['#FF5733', "#F9FF33", "#3371FF"]

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', () => {
    let ttt = generateHex();
    document.body.style.backgroundColor = ttt;
    color.textContent = ttt;
    
    
})

function generateHex() {
    let hexColor = '#';
    for (let i=0; i < 6; i++) {
        hexColor += hex[getRandomNumber(hex)]
    }
    return hexColor
}

function getRandomNumber(v) {
    return Math.floor(Math.random() * v.length)
}

