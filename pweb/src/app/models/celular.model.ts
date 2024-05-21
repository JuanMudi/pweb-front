// src/app/models/celular.model.ts

export interface Celular {
    id?: string;
    marca: string;
    serial: string;
    fechaCompra: Date;
    añoLanzamiento: string;
    precio: number;
    sistemaOperativo: string;
    gama: string;
  }
  