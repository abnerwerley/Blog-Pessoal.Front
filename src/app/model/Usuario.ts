import { Postagem } from './Postagem';

export class Usuario {
  public id_usuario: number;
  public nome: string;
  public email: string;
  public senha: string;
  public minhasPostagens: Postagem[];
}
