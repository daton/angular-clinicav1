import { Component, OnInit } from '@angular/core';
import {PoblacionService, Poblacion} from '../poblacion.service'


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers: [PoblacionService]
})
export class EstadisticasComponent implements OnInit {
  populationData: Poblacion[];
  types: string[] = ["area", "stackedarea", "fullstackedarea"];

  constructor(service: PoblacionService) {
      this.populationData = service.getPopulationData();
  }

  ngOnInit() {
  }

}
