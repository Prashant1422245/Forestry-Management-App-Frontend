import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLandsComponent } from './list-of-lands.component';

describe('ListOfLandsComponent', () => {
  let component: ListOfLandsComponent;
  let fixture: ComponentFixture<ListOfLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfLandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
