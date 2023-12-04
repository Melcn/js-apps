let button = document.getElementById("button");
const changePokemon = () => {
    let randomNumber = Math.ceil(Math.random() * 150 + 1) ;
    //On obtient entre 1 et 151
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`; 
    let data = fetch(requestString);

    console.log(data);

};

button.addEventListener("click", changePokemon);