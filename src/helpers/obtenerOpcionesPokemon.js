const obtenerPokemons = async () => {
    console.log('Metodo para calcular aleatoriamente')
    console.log(getNumeroAleatorio(1, 600))

    const vectorNumerico = obtenerVectorNumerico()
    console.log(vectorNumerico)

    const vectorObjetos = await convertirVectorNombres(vectorNumerico)
    console.log(vectorObjetos)
    console.table(vectorObjetos)
    return vectorObjetos
    //
    //
    //
    //
    //
}

function getNumeroAleatorio(min, max) {
    max++
    return Math.floor((Math.random() * (max - min) + min))
}

const obtenerVectorNumerico = () => {
    const arregloPokemonsNumero = [getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600), getNumeroAleatorio(1, 600)]
    return arregloPokemonsNumero
}

const convertirVectorNombres = async ([p1, p2, p3, p4] = []) => {
    //const pos1 = vector[0]
    //const pos1 = vector[1]
    //const pos1 = vector[2]
    //const pos1 = vector[3]
    //const pos1=vector[0]
    //console.log(pos1)
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    const data1 = await obtenerNombrePokemonAPI(p1)
    const data2 = await obtenerNombrePokemonAPI(p2)
    const data3 = await obtenerNombrePokemonAPI(p3)
    const data4 = await obtenerNombrePokemonAPI(p4)

    console.log('la data del API')
    console.log(data1)

    return [{ nombre: data1.name, id: data1.id },
    { nombre: data2.name, id: data2.id },
    { nombre: data3.name, id: data3.id },
    { nombre: data4.name, id: data4.id }]
}

const obtenerNombrePokemonAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    console.log(data.id)
    console.log(data.name)
    return data
}


//buena practica, crear un metodo fachada del mismo tipo lambda o function
const getPokemonOptions = async () => {
    return await obtenerPokemons()
}

export default getPokemonOptions