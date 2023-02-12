import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {RouterTestingModule} from '@angular/router/testing'

import { TaskByIdComponent } from './task-by-id.component';

describe('TaskByIdComponent', () => {
  let component: TaskByIdComponent;
  let fixture: ComponentFixture<TaskByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskByIdComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should get item by id', () => {
  //   const trys=fixture.nativeElement;
  //   expect(trys.querySelector('.itemid').textContent).toContain('hi');
  //});
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
