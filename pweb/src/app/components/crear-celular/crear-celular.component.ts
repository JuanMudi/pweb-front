// src/app/components/crear-celular/crear-celular.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CelularService } from '../../services/celular.service';

@Component({
  selector: 'app-crear-celular',
  templateUrl: './crear-celular.component.html',
  styleUrls: ['./crear-celular.component.css']
})
export class CrearCelularComponent {
  celularForm: FormGroup;

  constructor(private fb: FormBuilder, private celularService: CelularService) {
    this.celularForm = this.fb.group({
      marca: ['', Validators.required],
      serial: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      añoLanzamiento: ['', Validators.required],
      precio: ['', Validators.required],
      sistemaOperativo: ['', Validators.required],
      gama: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.celularForm.valid) {
      this.celularService.createCelular(this.celularForm.value).subscribe(() => {
        alert('Celular creado exitosamente');
        this.celularForm.reset();
      });
    }
  }
}
