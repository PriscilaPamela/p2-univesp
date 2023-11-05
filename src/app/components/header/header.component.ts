import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  isMenuOpen: boolean = false;
  username: string = 'P2turma02';
  password: string = '123456';
  FormsModule: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLoginClick() {
    console.log('Clique no botão de login.');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  
    // Lógica de validação dos campos
    if (this.username === 'P2turma02' && this.password === '123456') {
      // Login válido, faça algo, como redirecionar o usuário
      console.log('Login válido');
      this.username = ''; // Limpa o campo de usuário
      this.password = ''; // Limpa o campo de senha
      
    } else {
       // Login inválido, você pode mostrar uma mensagem de erro ou realizar outras ações
      console.log('Login inválido');
    }
  }
}