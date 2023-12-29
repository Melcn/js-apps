const generateRandom = () => {
    const nbDecimal = (Math.random() * 100) + 1;
    const number = Math.trunc(nbDecimal);

    return number;
}

const numberToFind = generateRandom();
let nbTest = 1;
let nbSmall = 1;
let nbHigh = 100;

const addContainer = text => {
    const divText = document.createElement('div')
    divText.textContent = text

    const container = document.getElementById('container')
    container.insertBefore(divText, container.firstChild)
}

const proposeNumber = () => {
    const input = document.getElementById('input-n')
    const valeur = input.value

    if(valeur === ''){
        return;
    }
    
    const number = parseInt(valeur, 10)

    addContainer('Tentative ' + nbTest)

    if(number==numberToFind){
        console.log('Bravo');

        addContainer('Bravo')
        const center = document.getElementById('center')
        center.textContent = number + " bravo !"
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');

            addContainer('Plus Grand!')

            if(number > nbSmall){
                const smallest = document.getElementById('small')
                smallest.textContent = number
            }
        } else {
            console.log('Le nombre est plus petit');

            addContainer('Plus Petit')

            if(number < nbHigh){
                const highest = document.getElementById('high')
                highest.textContent = number
            }
        }

        nbTest+=1
    }
}


const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());