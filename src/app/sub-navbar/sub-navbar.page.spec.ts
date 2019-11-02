import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavbarPage } from './sub-navbar.page';

describe('SubNavbarPage', () => {
  let component: SubNavbarPage;
  let fixture: ComponentFixture<SubNavbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
