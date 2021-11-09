import { Postagem } from './Postagem';

export class Tema {
  public id_tema: number;
  public tema: string;
  public descricao: string;
  public postagens: Postagem[];
}
