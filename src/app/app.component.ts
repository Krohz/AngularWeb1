import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workspace';

  fizzBuzz(num:number) {
    if(num > 0 && num <= 100){
      if (num%3 == 0 && num%5==0) {
        return 'FizzBuzz'
      }
      if (num%3 == 0 ) {
        return 'Fizz'
      }
      if (num%5 == 0) {
        return 'Buzz'
      }
      return num;
    }   
    return 'Numero equivocado';
    }
}
