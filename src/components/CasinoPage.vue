<template>
  <GamePokemon />
  <GameOver />
</template>

<script>
import GamePokemon from "./GamePokemon.vue";
import GameOver from "./GameOver.vue";

export default {
  components: {
    GamePokemon,
    GameOver,
  },
};
</script>

<style>
</style>