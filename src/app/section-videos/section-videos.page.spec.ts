import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideosPage } from './section-videos.page';

describe('SectionVideosPage', () => {
  let component: SectionVideosPage;
  let fixture: ComponentFixture<SectionVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
