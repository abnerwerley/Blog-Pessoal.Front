import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  // variáveis são sempre incluídas antes dos construtores

  usuario: Usuario = new Usuario();
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    //injeção de dependências
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmadorDeSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoDeUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario;

    if (this.usuario.senha != this.confirmarSenha) {
      //  se a senha inserida for diferente do confirmar senha
      alert('As senhas estão incorretas');
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']); // routerLink é do html
        alert('Usuário cadastrado com sucesso.');
      });
    }
  }
}
