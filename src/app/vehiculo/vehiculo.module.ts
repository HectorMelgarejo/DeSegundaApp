import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListarComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  imports: [
    CommonModule,
    VehiculoListarComponent
  ],
  exports: [VehiculoListarComponent]
})
export class VehiculoModule { }
