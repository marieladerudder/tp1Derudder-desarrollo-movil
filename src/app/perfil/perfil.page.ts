import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonBackButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonButton, IonInput, IonImg, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonImg, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonIcon, ReactiveFormsModule, IonInput, NgIf]
})
export class PerfilPage {

  formDatos: FormGroup = new FormGroup({
    email: new FormControl({ value: 'deruddermj@gmail.com', disabled: true }, Validators.required),
    usuario: new FormControl({ value: 'mariela', disabled: true }, Validators.required),
    clave: new FormControl({ value: '', disabled: true }),
    nombre: new FormControl({ value: 'Mariela', disabled: true }, Validators.required),
    apellido: new FormControl({ value: 'Derudder', disabled: true }, Validators.required),
    dni: new FormControl({ value: '34805273', disabled: true }, Validators.required),
  });

  modificar: boolean = false;

  constructor(private router: Router) { }

  habilitarModificar(){
    this.modificar = true;
    this.formDatos.get('email')?.enable();
    this.formDatos.get('usuario')?.enable();
    this.formDatos.get('clave')?.enable();
    this.formDatos.get('nombre')?.enable();
    this.formDatos.get('apellido')?.enable();
    this.formDatos.get('dni')?.enable();
  }

  guardarCambios(){
    this.modificar = false;

    const datosModificados = this.formDatos.value

    this.formDatos.patchValue(datosModificados)
    
    this.formDatos.get('email')?.disable();
    this.formDatos.get('usuario')?.disable();
    this.formDatos.get('clave')?.disable();
    this.formDatos.get('nombre')?.disable();
    this.formDatos.get('apellido')?.disable();
    this.formDatos.get('dni')?.disable();
  }

  cerrarSesion() {
    this.router.navigateByUrl('/login')
  }

}
