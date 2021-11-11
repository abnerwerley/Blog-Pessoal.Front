import { Postagem } from './Postagem';

export class Usuario {
  public id_usuario: number;
  public nome: string;
  public email: string;
  public senha: string;
  public foto: string;
  public tipo: string;
  public minhasPostagens: Postagem[];
}
