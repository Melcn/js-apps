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

        const divEgal = document.createElement('div')
        divEgal.textContent = "Bravo!"

            container.appendChild(divEgal)
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');

            const divHighter = document.createElement('div')
            divHigher.textContent = "Plus Grand!"

            container.appendChild(divHighter)
        } else {
            console.log('Le nombre est plus petit');

            const divSmaller = document.createElement('div')
            divSmaller.textContent = "Plus Petit!"

            container.appendChild(divSmaller)
        }

        nbTest+=1
    }
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());