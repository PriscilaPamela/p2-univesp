import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  
    { path: 'inicio', component: InicioComponent },
    { path: 'cadastro/:formulario', component: CadastroComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Rota padrão
  ];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
