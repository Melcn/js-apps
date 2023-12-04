let button = document.getElementById("button");
const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150 + 1) ;
    //On obtient entre 1 et 151
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`; 
    let data = await fetch(requestString);

    console.log(data);

    let response = await data.json();
    console.log(response);
};

button.addEventListener("click", changePokemon);