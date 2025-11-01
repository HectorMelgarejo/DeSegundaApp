import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app.component';
import { VehiculoListarComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('App', () => {
  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([]),
      VehiculoListarComponent, 
      HttpClientTestingModule    
    ],
    declarations: [
      App
    ],
  }).compileComponents();
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

