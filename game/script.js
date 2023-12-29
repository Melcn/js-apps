const generateRandom = () => {
    const nbDecimal = (Math.random() * 100) + 1;
    const number = Math.trunc(nbDecimal);

    return number;
}

const numberToFind = generateRandom();
let nbTest = 1;

const proposeNumber = () => {
    const input = document.getElementById('input-n')
    const valeur = input.value
    const number = parseInt(valeur, 10)

    const divProposition = document.createElement('div')
    divProposition.textContent = ' Tentative ' + nbTest

    const container = document.getElementById('container')
    container.appendChild(divProposition)
    
    if(number==numberToFind){
        console.log('Bravo');
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');
        } else {
            console.log('Le nombre est plus petit');
        }

        nbTest+=1
    }
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());