import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorHeroeComponent } from './buscador-heroe.component';

describe('BuscadorHeroeComponent', () => {
  let component: BuscadorHeroeComponent;
  let fixture: ComponentFixture<BuscadorHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
