import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supermecado2Page } from './supermecado2.page';

describe('Supermecado2Page', () => {
  let component: Supermecado2Page;
  let fixture: ComponentFixture<Supermecado2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supermecado2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supermecado2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
