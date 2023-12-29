const generateRandom = () => {
    const nbDecimal = (Math.random() * 100) + 1;
    const number = Math.trunc(nbDecimal);

    return number;
}

const numberToFind = generateRandom();

const proposeNumber = () => {
    const input = document.getElementById('input-n')
    const valeur = input.value
    const number = parseInt(valeur, 10)

    const container = document.getElementById('container')
    
    if(number==numberToFind){
        console.log('Bravo');
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');
        } else {
            console.log('Le nombre est plus petit');
        }
    }
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());