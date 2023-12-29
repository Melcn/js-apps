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

    console.log(number);
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());