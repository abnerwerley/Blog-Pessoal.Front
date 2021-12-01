import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema();
  listaDeTemas: Tema[];

  constructor(private router: Router, private temaService: TemaService) {}

  ngOnInit() {
    window.scroll(0,0);

    if (environment.token == '') {
      // alert('Sua sessão expirou, faça login novamente.');
      this.router.navigate(['/entrar']);
    }

    this.temaService.refreshToken();
    this.findAllTemas();
  }

 findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaDeTemas = resp
    })
  }

  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.tema = new Tema()
      this.findAllTemas()
    })
  }
}


