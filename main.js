function Pokemon(modelo) {
    this.modelo = modelo;
    this.dizOi = function() {
        console.log(this.modelo + " foi capturado");
    }
}

    function PokemonEncontrado(modelo, tipagem) {
        Pokemon.call(this, modelo);

        this.tipagem = tipagem;
        this.dizTipagem = function() {
            console.log(this.tipagem + " é sua tipagem")
    }}

    function PokemonCapturado(modelo, ballsUsadas){
        Pokemon.call(this, modelo);
        this.ballsUsadas = ballsUsadas;
        
        this.dizBalls = function() {
            console.log(this.ballsUsadas + " foram utilizadas");
        }
    }

    const PokemonItalo = new Pokemon("Tyranitar")
    const PokemonEncontradoDoItalo = new PokemonEncontrado("Tyranitar", "pedra")
    const PokemonCapturadoDoItalo = new PokemonCapturado("Tyranitar", 180)
    PokemonItalo.dizOi();
    PokemonEncontradoDoItalo.dizTipagem();
    PokemonCapturadoDoItalo.dizBalls();