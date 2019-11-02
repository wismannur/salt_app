import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionActivityPage } from './section-activity.page';

describe('SectionActivityPage', () => {
  let component: SectionActivityPage;
  let fixture: ComponentFixture<SectionActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
