import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVacancyComponent } from './post-vacancy.component';

describe('PostVacancyComponent', () => {
  let component: PostVacancyComponent;
  let fixture: ComponentFixture<PostVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostVacancyComponent]
    });
    fixture = TestBed.createComponent(PostVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
