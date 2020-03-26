import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStandalonePageComponent } from './profile-standalone-page.component';

describe('ProfileStandalonePageComponent', () => {
  let component: ProfileStandalonePageComponent;
  let fixture: ComponentFixture<ProfileStandalonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileStandalonePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStandalonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
