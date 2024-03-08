import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
/*
  it(`should have as title 'workspace'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('workspace');
  });
*/
  it(`Probar multiplo por 3`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(3)).toEqual('Fizz');
  });

  it(`Probar multiplo por 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(20)).toEqual('Buzz');
  });

  it(`Probar multiplo por 3 y 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it(`No es multiplo de 3 y 5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(19)).toEqual(19);
  });

  it(`Probar numero 101`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(101)).toEqual('Numero equivocado');
  });

  it(`Probar numero 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(0)).toEqual('Numero equivocado');
  });

  
  it(`Probar numero negativo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fizzBuzz(-2)).toEqual('Numero equivocado');
  });
});
