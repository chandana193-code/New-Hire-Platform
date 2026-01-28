import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessdataComponent } from './messdata.component';

describe('MessdataComponent', () => {
  let component: MessdataComponent;
  let fixture: ComponentFixture<MessdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessdataComponent]
    });
    fixture = TestBed.createComponent(MessdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
