import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css'],
  standalone: true
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  conteoPorMarcaArray: { key: string; value: number }[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.contarPorMarca();
    });
  }

  contarPorMarca(): void {
    const conteo: { [marca: string]: number } = {};
    this.vehiculos.forEach(v => {
      conteo[v.marca] = (conteo[v.marca] || 0) + 1;
    });
    this.conteoPorMarcaArray = Object.entries(conteo).map(([key, value]) => ({ key, value }));
  }
}
