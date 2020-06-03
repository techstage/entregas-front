import { Component, OnInit } from '@angular/core';
import { EntregaService } from '../entrega.service';

@Component({
  selector: 'app-entregas-listagem',
  templateUrl: './entregas-listagem.component.html',
  styleUrls: ['./entregas-listagem.component.css']
})
export class EntregasListagemComponent implements OnInit {

  entregas: Array<any>;

  constructor(private entregaService: EntregaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.entregaService.listar().subscribe(dados => this.entregas = dados);
  }

}
