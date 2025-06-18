//& arquivo responsável pela modelagem de dados para curriculos

export class Curriculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _formacao: string,
    private _experiencia: string,
    private _habilidades: string,
    private _linkedin: string
  ) {}



  //& Métodos de conversão de objetos
  //* Obj => Json
  public toMap(): { [key: string]: any } {
    return {
      id: this._id,
      nome: this._nome,
      formacao: this._formacao,
      experiencia: this._experiencia,
      habilidades: this._habilidades,
      linkedin: this._linkedin,
    };
  }
  //Json => Obj
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.linkedin
    );
  }
}
