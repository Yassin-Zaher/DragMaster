import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNodeComponent } from './main-node.component';

describe('MainNodeComponent', () => {
  let component: MainNodeComponent;
  let fixture: ComponentFixture<MainNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
