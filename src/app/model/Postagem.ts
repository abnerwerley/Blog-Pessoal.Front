import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public id_postagem: number;
  public titulo: string;
  public texto: string;
  public dataPostagem: Date;
  public criador: Usuario;
  public temaRelacionado: Tema;
}
