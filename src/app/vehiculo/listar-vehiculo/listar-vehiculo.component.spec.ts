import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { VehiculoListarComponent } from './listar-vehiculo.component';
import { VehiculoService } from '../vehiculo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculoListarComponent', () => {
  let component: VehiculoListarComponent;
  let fixture: ComponentFixture<VehiculoListarComponent>;

  // Datos de prueba
  const mockVehiculos = [
    { id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express', modelo: 2017, kilometraje: 93272, color: 'Blanco', imagen: 'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg' },
    { id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life', modelo: 2018, kilometraje: 55926, color: 'Plata', imagen: 'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg' },
    { id: 3, marca: 'Chevrolet', linea: 'Sail', referencia: 'LT Sedan', modelo: 2016, kilometraje: 94321, color: 'Rojo', imagen: 'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png' },
  ];

  beforeEach(async () => {
    // Mock del servicio
    const vehiculoServiceMock = {
      getVehiculos: () => of(mockVehiculos)
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, VehiculoListarComponent, HttpClientTestingModule], // Standalone component
      providers: [
        { provide: VehiculoService, useValue: vehiculoServiceMock } // Proveedor del mock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta ngOnInit y carga los vehículos
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with 3 vehicle rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableRows.length).toBe(3);
    expect(tableRows[0].textContent).toContain('Renault');
    expect(tableRows[1].textContent).toContain('Chevrolet');
    expect(tableRows[2].textContent).toContain('Chevrolet');
  });
});
