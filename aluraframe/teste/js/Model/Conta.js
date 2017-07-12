class Conta {

    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    atualiza(){
        throw new Error('O método atualiza precisa ser definido');
    }

}