import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmobileComponent } from './searchmobile.component';

describe('SearchmobileComponent', () => {
  let component: SearchmobileComponent;
  let fixture: ComponentFixture<SearchmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
