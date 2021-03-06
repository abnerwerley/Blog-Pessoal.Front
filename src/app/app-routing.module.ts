import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' }, // quando o endereço digitado for vazio, redirecione para o componente entrar

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'tema', component: TemaComponent },

  {path: 'temaDelete/:id', component: TemaDeleteComponent},
  {path: 'temaEdit/:id', component: EditTemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
