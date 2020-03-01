import { Component, OnInit } from '@angular/core';
import {PublicacionService} from '../../Services/publicacion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private publicacionService: PublicacionService) { }

  ngOnInit() {
  }

}
