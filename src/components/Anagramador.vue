<template>
    <div class="conteudo">
      <div class="palavras">
        {{todasAsPalavras}}
      </div>
      <div class="botes">
        <button v-for="letra in letras">{{letra}}</button>
      </div>
      <div class="palavras">
        <ul>
          <li v-for="palavra in palavras">{{palavra}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import AnagramadorService from '../services/AnagramadorService';

    export default {
        name: "Anagramador",
      data(){
          return{
            letras:[],
            palavras:[],
            todasAsPalavras:[]
          };
      },
      created() {
          this.service = new AnagramadorService(this.$resource);

          this.service.dicionario().then(palavras => this.todasAsPalavras = palavras);

          this.service.gerarAnagramas(3,7);
      }
    }
</script>

<style scoped>

</style>
