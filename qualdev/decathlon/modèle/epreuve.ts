export class Epreuve {
    private _nom : string
    private _score : number
    
    constructor(nom : string, score : number){
this._nom = nom
this._score = score
    }


    get score() : number {
        return this._score
    }

    get nom(): string {
        return this._nom
    }

    set score (valeur : number){
        this._score = valeur
    }
    
    set nom (valeur : string){
        this._nom = valeur
    }
}
