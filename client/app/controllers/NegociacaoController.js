class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacoes = new Negociacoes();
  }

  adiciona(event) {
    event.preventDefault();

    const negociacao = this._criarNegociacao();
    this._negociacoes.adiciona(negociacao);
    console.log(this._negociacoes.paraArray());

    this._limpaFormulario();
  }

  _criarNegociacao() {
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
