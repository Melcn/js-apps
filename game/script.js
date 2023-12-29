const generateRandom = () => {
    const nbDecimal = (Math.random() * 100) + 1;
    const number = Math.trunc(nbDecimal);

    return number;
}

const numberToFind = generateRandom();
let nbTest = 1;

const addContainer = text => {
    const divText = document.createElement('div')
    divText.textContent = text

    const container = document.getElementById('container')
    container.insertBefore(divText, container.firstChild)
}

const proposeNumber = () => {
    const input = document.getElementById('input-n')
    const valeur = input.value
    const number = parseInt(valeur, 10)

    addContainer('Tentative ' + nbTest)

    if(number==numberToFind){
        console.log('Bravo');

        addContainer('Bravo')
        
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');

            addContainer('Plus Grand!')
        } else {
            console.log('Le nombre est plus petit');

            addContainer('Plus Petit')
        }

        nbTest+=1
    }
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());