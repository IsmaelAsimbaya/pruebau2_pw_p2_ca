<template>
  <table class="gameTable">
    <tr>
      <td>
        <label>Puntaje: 0</label>
      </td>
      <td><p></p></td>
      <td>
        <label>Intento: 0</label>
      </td>
    </tr>
  </table>
  <table class="gameTable">
    <tr>
      <td>
        <img
          v-if="condImg"
          src="@/assets/fondo_negro.png"
          alt="no se encontro la img"
        />
      </td>
      <td>
        <img
          v-if="condImg"
          src="@/assets/fondo_negro.png"
          alt="no se encontro la img"
        />
      </td>
      <td>
        <img
          v-if="condImg"
          src="@/assets/fondo_negro.png"
          alt="no se encontro la img"
        />
      </td>
    </tr>
    <tr>
      <td>
        <img v-if="condPokm" :src="img1" alt="no se encontro la img" />
      </td>
      <td>
        <img v-if="condPokm" :src="img2" alt="no se encontro la img" />
      </td>
      <td>
        <img v-if="condPokm" :src="img3" alt="no se encontro la img" />
      </td>
    </tr>
    <tr>
      <td>
        <label>{{ name1 }}</label>
      </td>
      <td>
        <label>{{ name2 }}</label>
      </td>
      <td>
        <label>{{ name3 }}</label>
      </td>
    </tr>
  </table>
  <table class="gameTable">
    <tr>
      <td>
        <button v-on:click="iniciarJuego">JUGAR</button>
      </td>
    </tr>
    <tr>
      <td>
        <button>Nuevo Juego</button>
      </td>
    </tr>
  </table>
</template>

<script>
import getPokemonOptions from "@/helpers/obtenerOpcionesPokemon";
import getOpcionesArreglo from "@/helpers/obtenerOpcionesArreglo";

export default {
  data() {
    return {
      condImg: true,
      condPokm: false,
      pokemonArr: [],
      opcionesArrImg: [],
      opcionesArrName: [],
      name1: "xxxxxxxxx",
      name2: "xxxxxxxxx",
      name3: "xxxxxxxxx",
      img1: null,
      img2: null,
      img3: null,
    };
  },
  methods: {
    async obtenerPokemonsArreglo() {
      this.pokemonArr = await getPokemonOptions();
      console.log("Impresion desde el PAGE");
      console.log(this.pokemonArr);
    },

    async iniciarJuego() {
      this.obtenerPokemonsArreglo();
      this.cargarArrayImagenes();
      this.cargarArrayNombre();
      this.condImg = false
      this.condPokm = true

    },

    async cargarArrayImagenes() {
      this.opcionesArrImg = getOpcionesArreglo();
      console.log("Impresion desde el cargarImagenes");
      console.log(this.opcionesArrImg);
    },
    async cargarArrayNombre() {
      this.opcionesArrName = getOpcionesArreglo();
      console.log("Impresion desde el cargarNombre");
      console.log(this.opcionesArrName);
    },
    
    cargarImgen(){
        console.log(this.pokemonArr)
    }
  },
};
</script>

<style>
.gameTable {
  margin: auto;
}
td {
  padding: 5px;
}
label {
  font-weight: bolder;
}
button {
  font-size: 15px;
  font-weight: bolder;
  text-align: center;
  width: 150px;
  height: 50px;
  background-color: white;
  border-style: solid;
}
</style>