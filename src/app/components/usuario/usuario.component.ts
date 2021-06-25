import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router:ActivatedRoute) {

    //esta una ruta padre, obtemos el parametro enviado
    this.router.params.subscribe( parametros => {

    });
  }

  ngOnInit(): void {
  }

}
