import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' }, // quando o endereço digitado for vazio, redirecione para o componente entrar

  { path: 'entrar', component: EntrarComponent},
  { path: 'cadastrar', component: CadastrarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
