import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotefoundConponentComponent } from './page-notefound-conponent.component';

describe('PageNotefoundConponentComponent', () => {
  let component: PageNotefoundConponentComponent;
  let fixture: ComponentFixture<PageNotefoundConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotefoundConponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotefoundConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
