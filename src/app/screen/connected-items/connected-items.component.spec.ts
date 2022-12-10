import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedItemsComponent } from './connected-items.component';

describe('ConnectedItemsComponent', () => {
  let component: ConnectedItemsComponent;
  let fixture: ComponentFixture<ConnectedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
