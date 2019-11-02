import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPeoplePage } from './section-people.page';

describe('SectionPeoplePage', () => {
  let component: SectionPeoplePage;
  let fixture: ComponentFixture<SectionPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPeoplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
