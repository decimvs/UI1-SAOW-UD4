import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesEditarComponent } from './publicaciones-editar.component';

describe('PublicacionesEditarComponent', () => {
  let component: PublicacionesEditarComponent;
  let fixture: ComponentFixture<PublicacionesEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
