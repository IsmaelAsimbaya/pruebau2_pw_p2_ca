

const obtenerOpcionesArreglo = () => {
    let numbers = ['0', '1', '2', '3', '4'];
    let nuevoArray = [];

    for (let i = 0; i < 3; i++) {
        let n = ~~(Math.random() * numbers.length);
        nuevoArray.push(numbers[n]);
        numbers.splice(numbers[n], 1);
    }

    return nuevoArray
}

const getOpcionesArreglo = () => {
    return obtenerOpcionesArreglo()
}

export default getOpcionesArreglo