import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeVOneComponent } from './node-vone.component';

describe('NodeVOneComponent', () => {
  let component: NodeVOneComponent;
  let fixture: ComponentFixture<NodeVOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeVOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeVOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
