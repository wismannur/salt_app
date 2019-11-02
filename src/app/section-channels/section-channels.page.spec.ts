import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChannelsPage } from './section-channels.page';

describe('SectionChannelsPage', () => {
  let component: SectionChannelsPage;
  let fixture: ComponentFixture<SectionChannelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionChannelsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionChannelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
