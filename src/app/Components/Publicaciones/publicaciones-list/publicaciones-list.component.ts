import { Component, OnInit } from '@angular/core';
import {PublicacionModel} from '../../../../Models/PublicacionModel';
import {PublicacionService} from '../../../Services/publicacion.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.css']
})
export class PublicacionesListComponent implements OnInit {

  publicaciones: PublicacionModel[];

  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
    this.publicacionService.getAllPublicaciones().subscribe(data => {
      this.publicaciones = data.Items;
    });
  }

}
