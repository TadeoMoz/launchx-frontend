const obtenerPokemon = () => {
    const pokeName = document.getElementById('pokeName'); // Obtengo el elemento
    let pokeInput = pokeName.value.toLowerCase(); // Almaceno el valor del elemento y le aplico la funcion tolowercase() para cumplir los requerimientos de la API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; // asigno variable a url

    // Asyncrona
    fetch(url).then((res) => {
        // Si la respuesta es diferente a 200 (ej. no existe)
        if(res.status != "200") {
            // console.log(res); // Si quiero ver que trae res
            pokeImage("img/unknown-pokemon.gif")
            Nombre.innerText = "El pokemon ingresado no existe";

        } else {
            return res.json(); // Si existe que regrese el json!
        }        
    }).then((data) => {
        console.log(data); // ver que trae data
        let pokeImg = data.sprites.front_default; // Se obtiene de la api
        //console.log(pokeImg); // lo que traemos de  pokeImagen
        pokeImage(pokeImg);

        pokeNombre(data);
        pokeCaracteristicas(data);
        pokeStats(data);
    })
}

/* Otengo los elementos del HTML */
const Nombre = document.getElementById("nombre");
const iden = document.getElementById("iden");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
let Hp = document.getElementById("hp");
let Atk = document.getElementById("atk");
let Def = document.getElementById("def");
let Satk = document.getElementById("satk");
let Sdef = document.getElementById("sdef");
let Spd = document.getElementById("spd");

/* Funciones para obtener los datos y agregarlos a los elementos html */
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg"); // obtengo el elemento
    pokeImg.src = url; // indico que en el src de pokeImg aplique la url obtenida de obtenerPokemon()
}

const pokeNombre = (data) => {
    Nombre.innerText = data.species.name;
}

const pokeCaracteristicas = (data) => {
    iden.innerText = data.id;
    altura.innerText = data.height;
    peso.innerText = data.weight;
}

const pokeStats = (data) => {
    Hp.innerText = data.stats[0].base_stat;
    Hp = document.getElementById("hp").style.height = `${data.stats[0].base_stat}px`;
    Atk.innerText = data.stats[1].base_stat;
    Hp = document.getElementById("atk").style.height = `${data.stats[1].base_stat}px`;
    Def.innerText = data.stats[2].base_stat;
    Hp = document.getElementById("def").style.height = `${data.stats[2].base_stat}px`;
    Satk.innerText = data.stats[3].base_stat;
    Hp = document.getElementById("satk").style.height = `${data.stats[3].base_stat}px`;
    Sdef.innerText = data.stats[4].base_stat;
    Hp = document.getElementById("sdef").style.height = `${data.stats[4].base_stat}px`;
    Spd.innerText = data.stats[5].base_stat;
    Spd = document.getElementById("spd").style.height = `${data.stats[5].base_stat}px`;    
}