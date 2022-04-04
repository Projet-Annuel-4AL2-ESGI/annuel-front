import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeComponent } from './ide.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('IdeComponent', () => {
  let component: IdeComponent;
  let fixture: ComponentFixture<IdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterModule, RouterTestingModule ],
      declarations: [ IdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
