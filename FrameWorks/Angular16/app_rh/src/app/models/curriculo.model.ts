//modelagem de curriculo
export class Curriculo {
    constructor(
        private _id: number,
        private _nome: string,
        private _telefone: number,
        private _email: string,
        private _experiencia: string,
        private _formacao: string,
    ){}

//métodos
public get id(): number {
    return this._id;
}
public set id(value: number): {
    this._id = var;
}
public get nome(): string {
    return this._nome;
}
public set nome(value : string): {
    this._nome = value;
}
public get telefone(): number{
   return this._telefone;
}
public set telefone(value: string){
 this._telefone =var
}
public get email():string{
   return this._email;
}
public set email(value: string):{
    this._email=value;
}
public experiencia():string{
    return this._experiencia;
}
public set experiencia(value: string):{
    this._experiencia=value;
}
public formacao():string{
    return this._formacao;
}
public set formacao(value: string):{
    this._formacao =value;
}

   //conversão OBJ <=> obj
 obj -> bd
  toMap(): { [key: string]: any } {
   return {
     id: this.id,
      nome: this.nome,
       telefone: this.telefone,
      email: this.email,
      experiencia: this.experiencia,
         formacao: this.formacao,
    };
 }

}