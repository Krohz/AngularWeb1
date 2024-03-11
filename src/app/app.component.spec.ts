import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /*
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
  */
/*
  it(`should have as title 'workspace'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('workspace');
  });
*/
  it(`Probar palabra chiquita`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('fresa','frase')).toEqual(true);
  });
  it(`Probar palabra igual`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('asco','asco')).toEqual(false);
  });
  it(`Probar palabra con espacio`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('c o c l e','cleco ')).toEqual(true);
  });
  it(`Probar palabra NO ANAGRAMA`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('robot','reloj')).toEqual(false);
  });
  it(`Probar una palabra con mayuscula`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('Asco','coSa')).toEqual(true);
  });
});
