import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesBorrarComponent } from './publicaciones-borrar.component';

describe('PublicacionesBorrarComponent', () => {
  let component: PublicacionesBorrarComponent;
  let fixture: ComponentFixture<PublicacionesBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
