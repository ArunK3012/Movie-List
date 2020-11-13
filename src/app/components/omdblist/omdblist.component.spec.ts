import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdblistComponent } from './omdblist.component';

describe('OmdblistComponent', () => {
  let component: OmdblistComponent;
  let fixture: ComponentFixture<OmdblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmdblistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
