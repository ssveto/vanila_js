const pokeApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input")
const weightDisplay = document.getElementById("weight");
const heightDisplay = document.getElementById("height");
const typeDisplay = document.getElementById("types");
const nameDisplay = document.getElementById("pokemon-name");
const idDisplay = document.getElementById("pokemon-id");
const sprite = document.getElementById("poke-img")







const fetchData2 = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        updateStats(data)
    } catch (err) {
        console.log(err)
    }

} 

const updateStats = (data) => {
    const { height, id, name, weight, types, sprites, stats } = data;
    const { front_default } = sprites
    stats.forEach(item => {
        document.getElementById(`${item.stat.name}`).innerText = item["base_stat"];
        
    })
    
    
    types.forEach((item) => {
        typeDisplay.innerHTML += `<div>${item.type.name}</div>`
    })
    sprite.innerHTML = `<img src="${front_default}" class="img" id="sprite"></img>`;
    weightDisplay.textContent = "weight: " + weight
    heightDisplay.textContent = "height: " + height
    nameDisplay.textContent = name.toUpperCase()
    idDisplay.textContent = `#${id}`



}

const clear = () => {
    typeDisplay.innerHTML = "";
}



const fetchData = async () => {
    try {
        const res = await fetch(pokeApi)
        const data = await res.json()
        
        showPoke(data)
    } catch (err) {
        console.log(err)
    }

} 


const showPoke = (data) => {
    const pokeData = data.results;
    let pokemon;


    pokeData.forEach((item) => {
        if (item.name === searchInput.value.toLowerCase() || item.id === Number(searchInput.value)) {
            pokemon = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + item.id;
            fetchData2(pokemon)
            return;
        }});
    
    if (!pokemon) {
        alert("Pokémon not found")
        return;
    }
}





searchBtn.addEventListener("click", () => {
    clear();
    fetchData();
})