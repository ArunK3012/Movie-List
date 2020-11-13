import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelAPIComponent } from './marvel-api.component';

describe('MarvelAPIComponent', () => {
  let component: MarvelAPIComponent;
  let fixture: ComponentFixture<MarvelAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
