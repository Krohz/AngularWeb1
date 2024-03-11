import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';

  anagrama(cadena1:String, cadena2:String):boolean {
    // Se quitan los espacios en blancos de las palabras
    cadena1 = cadena1.toLowerCase().replace(/s/g, "");
    cadena2 = cadena2.toLowerCase().replace(/s/g, "");

    // Misma palabras - No es Anagrama
    if (cadena1 === cadena2) {
      return false;
    }

    // Bucle para comprobar que un caracter que existe en cadena1 exista en cadena2
    if (cadena1.length == cadena2.length) {
      let CaracterNumero;
      for(CaracterNumero=0; CaracterNumero < cadena1.length; CaracterNumero++){
        let pos = cadena2.indexOf(cadena1[CaracterNumero]);
        // No encontro ningun caracter similar no es Anagrama
        if (pos == -1) {
          return false;
        }else{
          cadena2.slice(pos);
        }
        CaracterNumero++;
      }
    }
      return true;
    }
}
