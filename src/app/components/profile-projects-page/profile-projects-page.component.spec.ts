import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProjectsPageComponent } from './profile-projects-page.component';

describe('ProfileProjectsPageComponent', () => {
  let component: ProfileProjectsPageComponent;
  let fixture: ComponentFixture<ProfileProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
