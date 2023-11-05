import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  isLoginValid: boolean = false; 
  checkLogin() {
   this.isLoginValid = true;
   console.log('isLoginValid:', this.isLoginValid);
  
  }
}