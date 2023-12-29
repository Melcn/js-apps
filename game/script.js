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

        const divEgal = document.createElement('div')
        divEgal.textContent = "Bravo!"

            container.insertBefore(divEgal, container.firstChild)
    } else {

        if(numberToFind > number) {
            console.log('Le nombre est plus grand');

            const divHighter = document.createElement('div')
            divHigher.textContent = "Plus Grand!"

            container.insertBefore(divHighter, container.firstChild)
        } else {
            console.log('Le nombre est plus petit');

            const divSmaller = document.createElement('div')
            divSmaller.textContent = "Plus Petit!"

            container.insertBefore(divSmaller, container.firstChild)
        }

        nbTest+=1
    }
}
const button = document.getElementById('button-p');
button.addEventListener('click', proposeNumber());