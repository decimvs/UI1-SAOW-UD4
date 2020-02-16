import { Injectable } from '@angular/core';
import {AutorModel} from '../../Models/AutorModel';
import {AutorData} from '../../Data/AutorData';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor() { }

  GetAutores(): AutorModel[] {
    return AutorData;
  }
}
