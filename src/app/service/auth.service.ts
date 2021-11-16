import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>(
      'https://blogpessoalabner.herokuapp.com/api/v1/usuario/logar',
      credenciais
    );
  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://blogpessoalabner.herokuapp.com/api/v1/usuario/cadastrar',
      usuario
    );
  }

  logado() {
    let permitido = false; //booleana

    if (environment.token != '') {
      permitido = true;
    }
    return permitido;
  }
}
