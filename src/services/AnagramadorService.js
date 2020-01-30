export default class AnagramadorService {
  constructor(resource) {
    this._resource = resource('static/json/dicionario.json');
    this._palavras = [];
  }
  dicionario(){
    return this._resource
      .query()
      .then(res => res.json(), err => {
        throw new Error('Dicionário não encontrado');
      })
  }

  gerarAnagramdor(min, max){
    this.dicionario().then(palavras =>{
      this.palavras = palavras;
      let palavraBase = this._getPalavraPorTamanho(max);
      let letras = palavraBase.split('');
    })
  }
}
