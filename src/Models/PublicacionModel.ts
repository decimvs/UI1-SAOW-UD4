import {AutorModel} from './AutorModel';

export class PublicacionModel {
  _id;
  Autores: AutorModel[];
  Titulo: string;
  Anyo: string;
}
