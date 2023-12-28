const generateRandom = () => {
    const nbDecimal = (Math.random() * 100) + 1;
    const number = Math.trunc(nbDecimal);

    return number;
}

const proposeNumber = () => {
    const input = document.getElementById('input-n')
    const valeur = input.value

    console.log(valeur);
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());