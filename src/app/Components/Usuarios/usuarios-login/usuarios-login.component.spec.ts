import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosLoginComponent } from './usuarios-login.component';

describe('UsuariosLoginComponent', () => {
  let component: UsuariosLoginComponent;
  let fixture: ComponentFixture<UsuariosLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
