// src/app/components/listar-celulares/listar-celulares.component.ts

import { Component, OnInit } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular.model';

@Component({
  selector: 'app-listar-celulares',
  templateUrl: './listar-celulares.component.html',
  styleUrls: ['./listar-celulares.component.css']
})
export class ListarCelularesComponent implements OnInit {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.celularService.getAllCelulares().subscribe((data) => {
      this.celulares = data;
    });
  }
}
