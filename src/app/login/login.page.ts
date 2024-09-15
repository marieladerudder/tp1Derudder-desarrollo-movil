import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonInputPasswordToggle, IonBackButton, IonIcon, IonToast, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonIcon, IonInput, IonInputPasswordToggle, ReactiveFormsModule, IonToast],
})
export class LoginPage {
  
  loginForm: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private toastController: ToastController) {}

  async presentToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'middle',
      color: color,
    });

    await toast.present();
  }
  
  onSubmit() {
    const usuario = this.loginForm.value.usuario;
    const clave = this.loginForm.value.clave;

    // Verificar si los valores ingresados coinciden con los predefinidos
    if (usuario === 'mariela' && clave === 'aaaa') {
      console.log('Inicio de sesión correcto');
      this.presentToast('Inicio de sesión correcto.', 'gris')
      this.router.navigateByUrl('/tabs/home')
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      this.presentToast('Error en usuario y/o contraseña.', 'danger')
      console.log('Error en usuario y/o contraseña.');
      // Mostrar un mensaje de error al usuario
    }
  }

  irARegistro(){
    this.router.navigateByUrl('/registro')
  }

  
}
